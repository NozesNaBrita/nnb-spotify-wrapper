import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import sinonStubPromise from 'sinon-stub-promise'
chai.use(sinonChai)
sinonStubPromise(sinon)

global.fetch = require('node-fetch')

import SpotifyWrapper from '../src/index'

describe('Search', () => {
  let fetchedStub
  let promise
  let spotify


  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'my_token'
    })

    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.returnsPromise();
  })

  afterEach(() => {
    fetchedStub.restore();
  })

  describe('Smoke tests',() => {
    it('should exist spotify.search.albums method', () => {
      expect(spotify.search.albums).to.exist;
    })
    it('should exist spotify.search.artists method', () => {
      expect(spotify.search.artists).to.exist;
    })
    it('should exist spotify.search.tracks method', () => {
      expect(spotify.search.tracks).to.exist;
    })
    it('should exist spotify.search.playlists method', () => {
      expect(spotify.search.playlists).to.exist;
    })
  })

  describe('spotify.search.artists', () => {
    it('should call fetch function', () => {
      const artists = spotify.search.artists('Djavan')
      expect(fetchedStub).to.have.been.calledOnce
    })

    it('should receive the correct url to fetch', () => {
      const artists = spotify.search.artists('Gonzaguinha')
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Gonzaguinha&type=artist')

      const artists2 = spotify.search.artists('Céu')
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Céu&type=artist')
    })
  })

  describe('spotify.search.albums', () => {
    it('should call fetch function', () => {
      const albums = spotify.search.albums('Djavan')
      expect(fetchedStub).to.have.been.calledOnce
    })

    it('should receive the correct url to fetch', () => {
      const albums = spotify.search.albums('Gonzaguinha')
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Gonzaguinha&type=album')

      const albums2 = spotify.search.albums('Céu')
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Céu&type=album')
    })
  })

  describe('spotify.search.tracks', () => {
    it('should call fetch function', () => {
      const tracks = spotify.search.tracks('Djavan')
      expect(fetchedStub).to.have.been.calledOnce
    })

    it('should receive the correct url to fetch', () => {
      const tracks = spotify.search.tracks('Gonzaguinha')
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Gonzaguinha&type=track')

      const tracks2 = spotify.search.tracks('Céu')
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Céu&type=track')
    })
  })

  describe('spotify.search.playlists', () => {
    it('should call fetch function', () => {
      const playlists = spotify.search.playlists('Djavan')
      expect(fetchedStub).to.have.been.calledOnce
    })

    it('should receive the correct url to fetch', () => {
      const playlists = spotify.search.playlists('Gonzaguinha')
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Gonzaguinha&type=playlist')

      const playlists2 = spotify.search.playlists('Céu')
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Céu&type=playlist')
    })
  })
})
