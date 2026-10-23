import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'

import LandingPage from '../src/pages/public/LandingPage'

describe('LandingPage', () => {
  it('presents public product value and trial actions', () => {
    render(<MemoryRouter><LandingPage /></MemoryRouter>)

    expect(screen.getByRole('heading', {
      name: 'filscoresme SME ai - Your SME Exchange Dashboard',
    })).toBeTruthy()
    expect(screen.getByRole('heading', { name: 'SME Exchange Dashboard' })).toBeTruthy()
    expect(screen.getByRole('heading', { name: 'AI Financial Assistant' })).toBeTruthy()
    expect(screen.getByRole('heading', { name: 'Explore filscoresme SME with a 2-day free trial.' })).toBeTruthy()
    expect(screen.getByRole('link', { name: /start free trial/i }).getAttribute('href')).toBe('/register')
    expect(screen.getByRole('heading', { name: 'About Quantech International' })).toBeTruthy()
  })
})