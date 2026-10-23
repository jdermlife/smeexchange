import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'

import Aboutfilscoresme SMEMobilePage, {
  ABOUT_filscoresme SME_MOBILE_CONTENT,
} from '../src/pages/admin/Aboutfilscoresme SMEMobilePage'

afterEach(cleanup)

describe('Aboutfilscoresme SMEMobilePage', () => {
  it('publishes the requested title and exactly 600 words', () => {
    render(<Aboutfilscoresme SMEMobilePage />)

    expect(screen.getByRole('heading', { name: 'About filscoresme SME for Apple and Android' })).toBeTruthy()
    expect(ABOUT_filscoresme SME_MOBILE_CONTENT.match(/\b[\w]+(?:['’-][\w]+)*\b/g)).toHaveLength(600)
  })
})