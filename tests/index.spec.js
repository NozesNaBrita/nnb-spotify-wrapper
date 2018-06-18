import { expect } from 'chai'

import SpotifyWrapper from '../src/index'
import { API_URL } from '../src/config'

describe('Index Library', () => {
  it('should create an instance of SpotifyWrapper', () => {
    let spotify = new SpotifyWrapper({})

    expect(spotify).to.be.an.instanceof(SpotifyWrapper)
  })

  it('should receive apiUrl as an option', () => {
    let spotify = new SpotifyWrapper({
      apiURL: 'https://url.example.com'
    })

    expect(spotify.apiURL).to.equal('https://url.example.com')
  })

  it('should use config.API_URL if apiURL is not provided', () => {
    let spotify = new SpotifyWrapper({})

    expect(spotify.apiURL).to.equal(API_URL)
  })

  it('should receive apiToken as an option', () => {
    let spotify = new SpotifyWrapper({
      apiToken: 'MYTOKEN'
    })

    expect(spotify.apiToken).to.equal('MYTOKEN')
  })
})