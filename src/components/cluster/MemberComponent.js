'use strict';

import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {Map} from 'immutable'

require('styles/cluster/Member.less');

class MemberComponent extends React.Component {
  render() {
    return (
          <tr className="member-component">
          <td>{this.props.member.get('id')} </td>
          <td>{this.props.member.get('uniqueAddress').get('address').get('host')}</td>
          <td>{this.props.member.get('uniqueAddress').get('address').get('port')} </td>
          <td>{this.props.member.get('memberStatus')} </td>
        </tr>
    );
  }
}

MemberComponent.displayName = 'ClusterMemberComponent';

// Uncomment properties you need
 MemberComponent.propTypes = {
   member: ImmutablePropTypes.map.isRequired
 };
 
 MemberComponent.defaultProps = {
  member: Map({
      id:0,
      uniqueAddress:Map({
        address:Map({
        host:'',
        port:0
      })
    }),
    memberStatus:''
  })
  
 };

export default MemberComponent;
