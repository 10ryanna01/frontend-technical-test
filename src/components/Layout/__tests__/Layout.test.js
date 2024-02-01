import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Layout from '../Layout';

it('should render an initial Layout component', () => {
  render(<Layout />);

  const layoutTest1 = screen.getByTestId('layoutTest1');
  expect(layoutTest1).toBeInTheDocument();
});
it('takes a snapshot of Layout component', async () => {
  const tree = renderer.create(<Layout />);
  expect(tree).toMatchSnapshot();
});
