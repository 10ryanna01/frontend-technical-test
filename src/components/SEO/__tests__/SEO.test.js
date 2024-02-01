import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import SEO from '../SEO';

it('should render SEO component', async () => {
  render(<SEO />);

  const seoTest1 = screen.getByTestId('seoTest1');
  expect(seoTest1).toBeInTheDocument();
});

it('take a snapshot of SEO component', async () => {
  const tree = renderer.create(<SEO />);
  expect(tree).toMatchSnapshot();
});
