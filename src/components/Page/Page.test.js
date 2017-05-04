import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import Page from './Page.js';

test('Page component renders children.', t => {
  const sample = shallow(
    <Page>
      <div>I am a child</div>
    </Page>
  );

  t.true(sample.contains(
    <div>I am a child</div>
  ));
});
