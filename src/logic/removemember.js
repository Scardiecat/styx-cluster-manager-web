import {fromJS,Set,Map,List} from 'immutable';

export function removeMember(state, member) { 
    let temp =  state.deleteIn(['members','entries',member.get('id')]);
    return temp.updateIn(['members', 'ids']
     , List.of()
     , val => Set.fromKeys(temp.get('members').get('entries')).toList());
}