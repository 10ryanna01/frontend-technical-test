import '@testing-library/jest-dom';

require('jest-fetch-mock').enableMocks();

test('the API fetch', async () => {
  const responsgetData = fetch('api/vehicle_xj.json');
  const datagetData = await responsgetData.json();
  expect(datagetData.description).toBe(
    'Premium luxury saloon, spacious and beautiful yet powerfully agile.'
  );
});
// repeat this for other api end points
