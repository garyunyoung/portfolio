import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { create } from 'react-test-renderer'
import Navigation from '../components/Navigation'

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/"
  })
}));

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Navigation />, div);
  unmountComponentAtNode(div);
});

it('matches snapshot', () => {
  const tree = create(<Navigation />).toJSON()
  expect(tree).toMatchSnapshot()
})