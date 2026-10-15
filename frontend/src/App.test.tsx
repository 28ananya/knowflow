import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the main product headline', () => {
    render(<App />)

    expect(
      screen.getByText('Enterprise knowledge, powered by AI.'),
    ).toBeInTheDocument()
  })
})
