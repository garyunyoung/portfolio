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
  const { getByTestId, getByRole } = render(<Navigation />)
  const navSocials = getByTestId('nav-socials')

  getByRole('heading', { level: 1, name: 'Garyun Young' })
  getByRole('link', { name: 'Projects' })
  getByRole('link', { name: 'About' })
  getByRole('button', { name: 'Code' })

  expect(navSocials).not.toHaveClass('is-visible')
  getByRole('link', { name: 'Github' })
  getByRole('link', { name: 'Exercism' })
  getByRole('link', { name: 'Codewars' })
})

it('opens code nav item dropdown when clicked', () => {
  const { getByTestId, getByRole } = render(<Navigation />)
  const clickElement = getByRole('button', { name: 'Code' })
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

    getByRole('link', { name: 'Garyun Young' })
  })

  it('show logo heading when on homepage', () => {
    const { getByRole } = render(<Logo isHomePage={true} />)

    getByRole('heading', { level: 1, name: 'Garyun Young' })
  })
})

it('matches snapshot', () => {
  const tree = create(<Navigation />).toJSON()
  expect(tree).toMatchSnapshot()
})
