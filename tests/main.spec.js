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
  let fetchedStub
  let promise

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.returnsPromise();
  })

  afterEach(() => {
    fetchedStub.restore();
  })

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

    it('should return some json data from promise', () => {
      promise.resolves({ body: 'json' })

      const artists = search('Incubus', 'artist')

      expect(artists.resolveValue).to.be.eql({ body: 'json' })
    })
  })

  describe('searchArtist', () => {
    it('should call fetch function', () => {
      const artists = searchArtists('Djavan')
      expect(fetchedStub).to.have.been.calledOnce
    })

    it('should receive the correct url to fetch', () => {
      const artists = searchArtists('Gonzaguinha')
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Gonzaguinha&type=artist')

      const artists2 = searchArtists('Céu')
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Céu&type=artist')
    })
  })

  describe('searchAlbums', () => {
    it('should call fetch function', () => {
      const albums = searchAlbums('Djavan')
      expect(fetchedStub).to.have.been.calledOnce
    })

    it('should receive the correct url to fetch', () => {
      const albums = searchAlbums('Gonzaguinha')
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Gonzaguinha&type=album')

      const albums2 = searchAlbums('Céu')
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Céu&type=album')
    })
  })

  describe('searchTracks', () => {
    it('should call fetch function', () => {
      const tracks = searchTracks('Djavan')
      expect(fetchedStub).to.have.been.calledOnce
    })

    it('should receive the correct url to fetch', () => {
      const tracks = searchTracks('Gonzaguinha')
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Gonzaguinha&type=track')

      const tracks2 = searchTracks('Céu')
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Céu&type=track')
    })
  })

  describe('searchPlaylists', () => {
    it('should call fetch function', () => {
      const playlists = searchPlaylists('Djavan')
      expect(fetchedStub).to.have.been.calledOnce
    })

    it('should receive the correct url to fetch', () => {
      const playlists = searchPlaylists('Gonzaguinha')
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Gonzaguinha&type=playlist')

      const playlists2 = searchPlaylists('Céu')
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Céu&type=playlist')
    })
  })
})
