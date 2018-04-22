import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import sinonStubPromise from 'sinon-stub-promise'

import { search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists,
} from '../src/main'

chai.use(sinonChai)
sinonStubPromise(sinon)
global.fetch = require('node-fetch')

describe('Spotify Wrapper', () => {
  describe('Smoke tests',() => {
    it('should exist search method', () => {
      expect(search).to.exist;
    })
    it('should exist searchAlbums method', () => {
      expect(searchAlbums).to.exist;
    })
    it('should exist searchArtists method', () => {
      expect(searchArtists).to.exist;
    })
    it('should exist searchTracks method', () => {
      expect(searchTracks).to.exist;
    })
    it('should exist searchPlaylists method', () => {
      expect(searchPlaylists).to.exist;
    })
  })

  describe('Generic Search', () => {
    let fetchedStub
    beforeEach(()=>{
      fetchedStub = sinon.stub(global, 'fetch');
    })
    afterEach(()=>{
      fetchedStub.restore();
    })
    it('should call fetch function', () => {
      const artists = search()

      expect(fetchedStub).to.have.been.calledOnce;
    })

    it('should receive the correct url to fetch', () => {

      context('passing one type', () => {
        const artists = search('Incubus', 'artist')

        expect(fetchedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist')

        const albums = search('Incubus', 'album')
        expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album')
      })

      context('passing more than one type', () => {
        const artistsAndAlbums = search('Incubus', ['artist', 'album'])

        expect(fetchedStub).to.have.been
        .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist,album')

      })
    })
  })
})
