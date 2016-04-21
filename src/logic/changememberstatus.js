import {fromJS,Set,Map,List} from 'immutable';

export function changeMemberStatus(state, member) {
    member = fromJS(member)
    let temp =  state.updateIn(['members','entries',member.get('id')]
     , Map()
     , () => member);
    return temp.updateIn(['members', 'ids']
     , List.of()
     , () => Set.fromKeys(temp.get('members').get('entries')).toList());
}