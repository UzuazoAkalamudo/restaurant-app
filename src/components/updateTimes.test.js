import { updateTimes } from './Main';

test('Initializes times correctly', () => {
  const selectedDate = "11-22-2024"
  const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  expect(updateTimes(selectedDate)).toEqual(expectedTimes);
});
