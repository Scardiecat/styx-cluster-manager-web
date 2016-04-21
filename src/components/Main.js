require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import MemberList from '../components/cluster/MemberListComponent';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    let memberList = JSON.parse('[{"id":-1036451064,"uniqueAddress":{"address":{"protocol":"akka.tcp","system":"ForHonorActorSystem","host":"10.128.26.59","port":2550},"uid":-1036451064},"memberStatus":"Up","roles":["cluster-manager"]},{"id":716437323,"uniqueAddress":{"address":{"protocol":"akka.tcp","system":"ForHonorActorSystem","host":"10.128.26.59","port":2551},"uid":716437323},"memberStatus":"Up","roles":["seed"]}]');
    return (
      <div className="index">  
        <MemberList memberList= {memberList}/>;
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
