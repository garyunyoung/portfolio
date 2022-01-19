import ReactDOM from 'react-dom'
import { create } from 'react-test-renderer'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Navigation, { Logo } from '../components/Navigation'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: '/'
  })
}))

it('renders without crashing', () => {
  const root = document.createElement('div')
  ReactDOM.render(<Navigation />, root)
  ReactDOM.unmountComponentAtNode(root)
})

it('renders correct nav item links', () => {
  const { getByTestId, getByText } = render(<Navigation />)
  const navSocials = getByTestId('nav-socials')

  getByText('Garyun Young')
  getByText('Projects')
  getByText('About')
  getByText('Code')

  expect(navSocials).not.toHaveClass('is-visible')
  getByText('Github')
  getByText('Exercism')
  getByText('Codewars')
})

it('opens code nav item dropdown when clicked', () => {
  const { getByTestId, getByText } = render(<Navigation />)
  const clickElement = getByText('Code')
  const navSocials = getByTestId('nav-socials')

  fireEvent.click(clickElement)
  expect(navSocials).toHaveClass('is-visible')

  fireEvent.click(clickElement)
  expect(navSocials).not.toHaveClass('is-visible')
})

describe('Logo', () => {
  it('show logo link when NOT on homepage', () => {
    const { getByRole } = render(
      <Logo isHomePage={false} />
    )

    getByRole('link')
  })

  it('show logo heading when on homepage', () => {
    const { getByRole } = render(<Logo isHomePage={true} />)

    getByRole('heading')
  })
})

it('matches snapshot', () => {
  const tree = create(<Navigation />).toJSON()
  expect(tree).toMatchSnapshot()
})
