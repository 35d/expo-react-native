// @flow
import reducer, { INITIAL_STATE } from '../src/Reducers/index';

test('init', () => {
  // $FlowFixMe
  expect(reducer(undefined, { type: '@@INIT' })).toMatchSnapshot();
});

test('INCREMENT_COUNT', () => {
  expect(reducer(INITIAL_STATE, { type: 'INCREMENT_COUNT' })).toMatchSnapshot();
});
