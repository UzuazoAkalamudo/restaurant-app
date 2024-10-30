import { initializeTimes } from '../Main/Main';

test('Initializes times correctly', () => {
  expect(initializeTimes().length).toBeGreaterThan(0);
});
