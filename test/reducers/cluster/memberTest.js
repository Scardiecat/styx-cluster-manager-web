var reducer = require('../../../src/reducers/cluster/member');

import {Map,List, fromJS} from 'immutable'

describe('member', () => {

  it('should not change the passed state', (done) => {

    const state = Map();
    const nextState = reducer(state, {type: 'INVALID'});
    expect(nextState).to.equal(Map())
    done();
  });

  it('handles CHANGE_MEMBER_STATUS', (done) => {
    const state = Map();
    const member = fromJS(JSON.parse('{"id":-1036451064,"uniqueAddress":{"address":{"protocol":"akka.tcp","system":"ForHonorActorSystem","host":"10.128.26.59","port":2550},"uid":-1036451064},"memberStatus":"Up","roles":["cluster-manager"]}'));
    const action = {type: 'CHANGE_MEMBER_STATUS', member};
    const nextState = reducer(state,action);

    let entries = Map();
    entries = entries.set(-1036451064,member);
    expect(nextState).to.equal(Map({
      members: Map({
        ids: List.of(-1036451064),
        entries: entries
      })
    }))
    done();
  });

  it('handles REMOVE_MEMBER', (done) => {
    const member = fromJS(JSON.parse('{"id":-1036451064,"uniqueAddress":{"address":{"protocol":"akka.tcp","system":"ForHonorActorSystem","host":"10.128.26.59","port":2550},"uid":-1036451064},"memberStatus":"Up","roles":["cluster-manager"]}'));
    const memberRemove = fromJS(JSON.parse('{"id":-1036451064,"uniqueAddress":{"address":{"protocol":"akka.tcp","system":"ForHonorActorSystem","host":"10.128.26.59","port":2550},"uid":-1036451064},"memberStatus":"Removed","roles":["cluster-manager"]}'));
    const action = {type: 'REMOVE_MEMBER', member};
    let state = Map();
    state = state.set(-1036451064,member);
    state = Map({
      members: Map({
        ids: List.of(-1036451064),
        entries: state
      })
    });
    
    const nextState = reducer(state,action);
    expect(nextState).to.equal(Map({
      members: Map({
        ids: List.of(),
        entries: Map()
      })
    }))
    done();
  });

  it('has a valid initial state', (done) => {
    const nextState = reducer(undefined, {type: 'INVALID'});
    expect(nextState).to.equal(Map({
      members: Map({
        ids: List.of(),
        entries: Map()
      })
    }))

    done()
  })
});
