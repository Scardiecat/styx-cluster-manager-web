'use strict';

import React from 'react';

require('styles/cluster/Member.less');

class MemberComponent extends React.Component {
  render() {
    return (
      <div className="member-component">
        <p>
        <i> {this.props.actions.message} </i>
        </p>
      </div>
    );
  }
}

MemberComponent.displayName = 'ClusterMemberComponent';

// Uncomment properties you need
 MemberComponent.propTypes = {
   actions: React.PropTypes.object
 };
 //MemberComponent.defaultProps = {};

export default MemberComponent;
