import {expect} from 'chai';
import {List,Map,fromJS} from 'immutable';

import {removeMember} from '../../src/logic/removemember'

describe ('RemoveMember', () => {

  it('removes a member from the state', () => {
    const member = JSON.parse('{"id":-1036451064,"uniqueAddress":{"address":{"protocol":"akka.tcp","system":"ForHonorActorSystem","host":"10.128.26.59","port":2550},"uid":-1036451064},"memberStatus":"Up","roles":["cluster-manager"]}');
    const memberRemove = fromJS(JSON.parse('{"id":-1036451064,"uniqueAddress":{"address":{"protocol":"akka.tcp","system":"ForHonorActorSystem","host":"10.128.26.59","port":2550},"uid":-1036451064},"memberStatus":"Removed","roles":["cluster-manager"]}'));
    
    let state = Map();
    state = state.set(-1036451064,fromJS(member));
    state = Map({
      members: Map({
        ids: List.of(-1036451064),
        entries: state
      })
    });
    
    const nextState = removeMember(state,member);
    expect(nextState).to.equal(Map({
      members: Map({
        ids: List.of(),
        entries: Map()
      })
    }))
  });
});