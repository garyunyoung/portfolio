import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { create } from 'react-test-renderer'
import Navigation from '../components/Navigation'
import { getQueriesForElement } from '@testing-library/dom'

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/"
  })
}));

it('renders without crashing', () => {
  const root = document.createElement('div');
  render(<Navigation />, root);
  unmountComponentAtNode(root);
});

it('renders correct content', () => {
  const root = document.createElement('div');
  render(<Navigation />, root);

  const { getByText } = getQueriesForElement(root)

  getByText("Projects")
  getByText("About")
  getByText("Code")
});



it('matches snapshot', () => {
  const tree = create(<Navigation />).toJSON()
  expect(tree).toMatchSnapshot()
})