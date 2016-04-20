/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MemberList from '../components/cluster/MemberListComponent';
/* Populated by react-webpack-redux:reducer */
class App extends Component {
  render() {
    //const {actions} = this.props;
    //return <Member actions={actions}/>;
    let memberList = JSON.parse('[{"id":-1036451064,"uniqueAddress":{"address":{"protocol":"akka.tcp","system":"ForHonorActorSystem","host":"10.128.26.59","port":2550},"uid":-1036451064},"memberStatus":"Up","roles":["cluster-manager"]},{"id":716437323,"uniqueAddress":{"address":{"protocol":"akka.tcp","system":"ForHonorActorSystem","host":"10.128.26.59","port":2551},"uid":716437323},"memberStatus":"Up","roles":["seed"]}]');
    return <MemberList memberList= {memberList}/>;
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  actions: PropTypes.object.isRequired
};
function mapStateToProps(state) {
  /* Populated by react-webpack-redux:reducer */
  const props = {};
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
