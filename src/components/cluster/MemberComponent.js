'use strict';

import React from 'react';

require('styles/cluster/Member.less');

class MemberComponent extends React.Component {
  render() {
    return (
      <div className="member-component">
        <table className="member-component-summary">
        <tbody>
        <tr> 
          <td>{this.props.member.id} </td>
          <td>{this.props.member.uniqueAddress.address.host} </td>
          <td>{this.props.member.uniqueAddress.address.port} </td>
          <td>{this.props.member.memberStatus} </td>
        </tr>
        </tbody>
        </table>
      </div>
    );
  }
}

MemberComponent.displayName = 'ClusterMemberComponent';

// Uncomment properties you need
 MemberComponent.propTypes = {
   member: React.PropTypes.object,
 };
 //MemberComponent.defaultProps = {};

export default MemberComponent;
