import {fromJS,Set,Map,List} from 'immutable';

export function changeMemberStatus(state, member) { 
    let temp =  state.updateIn(['members','entries',member.get('id')]
     , Map()
     , val => member);
    return temp.updateIn(['members', 'ids']
     , List.of()
     , val => Set.fromKeys(temp.get('members').get('entries')).toList());
}