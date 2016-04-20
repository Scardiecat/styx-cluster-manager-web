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
import Member from '../components/cluster/MemberComponent';
/* Populated by react-webpack-redux:reducer */
class App extends Component {
  render() {
    //const {actions} = this.props;
    //return <Member actions={actions}/>;
    let member = JSON.parse('{"id":716437323,"uniqueAddress":{"address":{"protocol":"akka.tcp","system":"ForHonorActorSystem","host":"10.128.26.59","port":2551},"uid":716437323},"memberStatus":"Up","roles":["seed"]}');
    return <Member member= {member}/>;
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
