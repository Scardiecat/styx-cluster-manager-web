/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import {Map,List} from 'immutable'
import {changeMemberStatus} from '../../logic/changememberstatus'
import {removeMember} from '../../logic/removemember'
const initialState =Map({
        members: Map({
          ids: List.of(),
          entries: Map()
        })
      });

module.exports = function(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  //let nextState = Object.assign({}, state);
  switch(action.type) {
    case 'CHANGE_MEMBER_STATUS': {
      // Modify next state depending on the action and return it
      return changeMemberStatus(state,action.member);
    }
    case 'REMOVE_MEMBER': {
      // Modify next state depending on the action and return it
      return removeMember(state,action.member);
    }
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}
