'use strict';

import React from 'react';
import Member from './MemberComponent';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {Map,List} from 'immutable';
require('styles/cluster/MemberList.less');


class MemberListComponent extends React.Component {
  render() {
    return (
        <table className="memberlist-component">
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
  members: ImmutablePropTypes.map.isRequired
};
MemberListComponent.defaultProps = {
  members:Map({
    ids:List()
  })
};

export default MemberListComponent;
