import ReactDOM from 'react-dom'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'

import { create } from 'react-test-renderer'
import { fireEvent, render } from '@testing-library/react'

import ProjectSection from '../components/ProjectsSection'

it('renders without crashing', () => {
  const root = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <ProjectSection />
    </BrowserRouter>,
    root
  )
  ReactDOM.unmountComponentAtNode(root)
})

it('renders web filter selected by default', () => {
  const { getByRole } = render(
    <BrowserRouter>
      <ProjectSection />
    </BrowserRouter>
  )

  const webFilter = getByRole('button', {
    name: 'Web'
  })
  const prFilter = getByRole('button', {
    name: 'PR'
  })

  const webProject = getByRole('heading', {
    level: 3,
    name: 'Stitched'
  })

  expect(webFilter).toHaveClass('is-selected')
  expect(prFilter).not.toHaveClass('is-selected')
  expect(webProject).toBeInTheDocument()

  fireEvent.click(prFilter)

  const prProject = getByRole('heading', {
    level: 3,
    name: 'Splore'
  })

  expect(webFilter).not.toHaveClass('is-selected')
  expect(prFilter).toHaveClass('is-selected')
  expect(prProject).toBeInTheDocument()
})

it('matches snapshot', () => {
  const tree = create(
    <BrowserRouter>
      <ProjectSection />
    </BrowserRouter>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
