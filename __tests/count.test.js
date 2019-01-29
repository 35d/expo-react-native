// @flow
import snapshotDiff from 'snapshot-diff';
import reducer, { INITIAL_STATE } from '../src/Reducers/index';

test('初期化', () => {
  expect(snapshotDiff(INITIAL_STATE, reducer(undefined, { type: '@@INIT' }))).toMatchSnapshot();
});

test('カウント+1', () => {
  expect(snapshotDiff(INITIAL_STATE, reducer(INITIAL_STATE, { type: 'INCREMENT_COUNT' }))).toMatchSnapshot();
});
