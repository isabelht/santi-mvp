import React from 'react'
import { render } from '@testing-library/react';
import PlaylistEmbed from "../PlaylistEmbed";

describe('PlaylistEmbed Component', () => {
  it('renders an iframe with the correct YouTube URL', () => {
    const { getByTitle } = render(<PlaylistEmbed/>)

    const expectedUrl = "https://www.youtube.com/embed/videoseries?si=uGAgxjirRokyes55&list=PLVmz_eX_WFJbvIbnukyna0-0T-lDIEu8B"
    const iframeElement = getByTitle("YouTube playlist")

    expect(iframeElement).toHaveAttribute('src', expectedUrl)
  })
})