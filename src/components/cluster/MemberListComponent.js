'use strict';

import React from 'react';
import Member from './MemberComponent';
require('styles/cluster/MemberList.less');


class MemberListComponent extends React.Component {
  render() {
    return (
      <div className="memberlist-component">
        <table className="member-component-summary">
          <tbody>
            {this.props.memberList.map(function(member){
              return <Member member = {member}/>
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

MemberListComponent.displayName = 'ClusterMemberListComponent';

// Uncomment properties you need
MemberListComponent.propTypes = {
  memberList: React.PropTypes.arrayOf(React.PropTypes.object)
};
// MemberListComponent.defaultProps = {};

export default MemberListComponent;
