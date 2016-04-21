import {expect} from 'chai';
import {List,Map,fromJS} from 'immutable';

import {changeMemberStatus} from '../../src/logic/changememberstatus'

describe ('ChangeMemberStatus', () => {

  it('adds a new member to the state', () => {
    const state = Map();
    const member = fromJS(JSON.parse('{"id":-1036451064,"uniqueAddress":{"address":{"protocol":"akka.tcp","system":"ForHonorActorSystem","host":"10.128.26.59","port":2550},"uid":-1036451064},"memberStatus":"Up","roles":["cluster-manager"]}'));
    const nextState = changeMemberStatus(state,member);

    let entries = Map();
    entries = entries.set(-1036451064,member);
    expect(nextState).to.equal(Map({
      members: Map({
        ids: List.of(-1036451064),
        entries: entries
      })
    }))
  });

  it('updates an existing member', () =>{
    const member = fromJS(JSON.parse('{"id":-1036451064,"uniqueAddress":{"address":{"protocol":"akka.tcp","system":"ForHonorActorSystem","host":"10.128.26.59","port":2550},"uid":-1036451064},"memberStatus":"Up","roles":["cluster-manager"]}'));
    const memberUpdate = fromJS(JSON.parse('{"id":-1036451064,"uniqueAddress":{"address":{"protocol":"akka.tcp","system":"ForHonorActorSystem","host":"10.128.26.59","port":2550},"uid":-1036451064},"memberStatus":"Down","roles":["cluster-manager"]}'));
    
    let state = Map();
    state = state.set(-1036451064,member);
    state = Map({
      members: Map({
        ids: List.of(-1036451064),
        entries: state
      })
    });

    const nextState = changeMemberStatus(state,memberUpdate)
    let entries = Map();
    entries = entries.set(-1036451064,memberUpdate);
    expect(nextState).to.equal(Map({
      members: Map({
        ids: List.of(-1036451064),
        entries: entries
      })
    }))
  })

});