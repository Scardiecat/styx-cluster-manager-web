require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import MemberList from '../components/cluster/MemberListComponent';
import {Map} from 'immutable';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <MemberList members= {this.props.member.get('members')}/>;
      </div>
    );
  }
}

AppComponent.defaultProps = {
  member: Map({
    members: Map({})
  })
};

export default AppComponent;
