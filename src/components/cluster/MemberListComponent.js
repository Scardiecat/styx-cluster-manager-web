'use strict';

import React from 'react';
import Member from './MemberComponent';
require('styles/cluster/MemberList.less');


class MemberListComponent extends React.Component {
  render() {
    return (
        <table className="member-component-summary">
          <tbody>
            { 
              this.props.members.get('ids').map((id) => {
              {return <Member member = {this.props.members.get('entries').get(id)}/>  } 
              })
            }
            
          </tbody>
        </table>
    );
  }
}

MemberListComponent.displayName = 'ClusterMemberListComponent';

// Uncomment properties you need
MemberListComponent.propTypes = {
  members: React.PropTypes.arrayOf(React.PropTypes.object)
};
MemberListComponent.defaultProps = {
  members:[]
};

export default MemberListComponent;
