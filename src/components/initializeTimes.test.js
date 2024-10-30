import { initializeTimes } from './Main';

test('Initializes times correctly', () => {
  expect(initializeTimes().length).toBeGreaterThan(0);
});
