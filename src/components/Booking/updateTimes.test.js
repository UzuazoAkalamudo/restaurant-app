import { updateTimes } from '../Main/Main';

test('Initializes times correctly', () => {
  const selectedDate = new Date("2024-10-31")
  const expectedTimes = ["17:00", "17:30", "18:30", "20:00", "20:30", "21:00", "23:00"];
  expect(updateTimes(selectedDate)).toEqual(expectedTimes);
});
