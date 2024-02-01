import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import App from '../../../App';

it('should render App component', async () => {
  render(<App />);

  const layoutTest1 = screen.getByTestId('appTest1');
  expect(layoutTest1).toBeInTheDocument();
});

it('capture a snap shot of App component', async () => {
  const tree = renderer.create(<App />);
  expect(tree).toMatchSnapshot();
});
