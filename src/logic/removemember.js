import {fromJS,Set,List} from 'immutable';

export function removeMember(state, member) {
    member = fromJS(member);
    let temp =  state.deleteIn(['members','entries',member.get('id')]);
    return temp.updateIn(['members', 'ids']
     , List.of()
     , () => Set.fromKeys(temp.get('members').get('entries')).toList());
}