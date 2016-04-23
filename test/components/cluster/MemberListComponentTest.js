/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import MemberListComponent from 'components/cluster/MemberListComponent.js';

describe('MemberListComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(MemberListComponent);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('memberlist-component');
  });
});
