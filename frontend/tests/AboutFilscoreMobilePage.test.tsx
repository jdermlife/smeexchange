import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import AboutFILSCORE SMEMobilePage, {
  ABOUT_FILSCORE SME_MOBILE_CONTENT,
} from '../src/pages/admin/AboutFILSCORE SMEMobilePage'

afterEach(cleanup)

describe('AboutFILSCORE SMEMobilePage', () => {
  it('publishes the requested title and exactly 600 words', () => {
    render(<AboutFILSCORE SMEMobilePage />)

    expect(screen.getByRole('heading', { name: 'About FILSCORE SME for Apple and Android' })).toBeTruthy()
    expect(ABOUT_FILSCORE SME_MOBILE_CONTENT.match(/\b[\w]+(?:['’-][\w]+)*\b/g)).toHaveLength(600)
  })
})