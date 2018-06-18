import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import sinonStubPromise from 'sinon-stub-promise'
chai.use(sinonChai)
sinonStubPromise(sinon)

global.fetch = require('node-fetch')

import SpotifyWrapper from '../src/index'

describe('Album', () => {
  let stubbedFetch
  let promise
  let spotify

  beforeEach(() => {
    spotify = new SpotifyWrapper({
      token: 'my_token'
    })

    stubbedFetch = sinon.stub(global, 'fetch')
    promise = stubbedFetch.returnsPromise()
  })

  afterEach(() => {
    stubbedFetch.restore()
  })

  describe('Smoke tests', ()=>{
    it('should exist getAlbum method', () => {
      expect(spotify.album.getAlbum).to.exist;
    })

    it('should exist getAlbums method', () => {
      expect(spotify.album.getAlbums).to.exist;
    })

    it('should exist getTracks method', () => {
      expect(spotify.album.getTracks).to.exist;
    })
  })

  describe('getAlbum', () => {
    it('should call fetch function', () => {
      const album = spotify.album.getAlbum();

      expect(stubbedFetch).have.been.calledOnce
    })

    it('should receive the correct url to fetch', () => {
      const quebraMola = spotify.album.getAlbum('4J1s6pjfLMQegpHyOz2vHH');
      expect(stubbedFetch).to.be.calledWith('https://api.spotify.com/v1/albums/4J1s6pjfLMQegpHyOz2vHH')

      const caraivana = spotify.album.getAlbum('5HXD9yNTIYkGQm4xL3hPTe')
      expect(stubbedFetch).to.be.calledWith('https://api.spotify.com/v1/albums/5HXD9yNTIYkGQm4xL3hPTe')
    })

    it('should return some json data from promise', () => {
      promise.resolves({ album: 'Quebra mola' })
      const quebraMola = spotify.album.getAlbum('4J1s6pjfLMQegpHyOz2vHH')

      expect(quebraMola.resolveValue).to.eql({ album: 'Quebra mola' })
    })
  })

  describe('getAlbums', () => {
    it('should call fetch function', () => {
      const album = spotify.album.getAlbums();

      expect(stubbedFetch).have.been.calledOnce
    })

    it('should receive the correct url to fetch', () => {
      const albums = spotify.album.getAlbums(['4J1s6pjfLMQegpHyOz2vHH', '5HXD9yNTIYkGQm4xL3hPTe']);
      expect(stubbedFetch).to.be.calledWith('https://api.spotify.com/v1/albums?ids=4J1s6pjfLMQegpHyOz2vHH,5HXD9yNTIYkGQm4xL3hPTe')
    })

    it('should return some json data from promise', () => {
      promise.resolves({ albums: [ { album: 'Quebra mola' }, { album: 'caravaiana' } ] })
      const albums = spotify.album.getAlbums(['4J1s6pjfLMQegpHyOz2vHH', '5HXD9yNTIYkGQm4xL3hPTe']);

      expect(albums.resolveValue).to.eql({ albums: [ { album: 'Quebra mola' }, { album: 'caravaiana' } ] })
    })
  })

  describe('getAlbumTracks', () => {
    it('should call fetch function', () => {
      const albumTracks = spotify.album.getTracks();

      expect(stubbedFetch).have.been.calledOnce
    })

    it('should receive the correct url to fetch', () => {
      const quebraMolaTracks = spotify.album.getTracks('4J1s6pjfLMQegpHyOz2vHH');
      expect(stubbedFetch).to.be.calledWith('https://api.spotify.com/v1/albums/4J1s6pjfLMQegpHyOz2vHH/tracks')
    })

    it('should return some json data from promise', () => {
      promise.resolves({ items: [ { name: 'Braga boy' }, { name: 'Luande' } ] })
      const quebraMolaTracks = spotify.album.getTracks('4J1s6pjfLMQegpHyOz2vHH');

      expect(quebraMolaTracks.resolveValue).to.eql({ items: [ { name: 'Braga boy' }, { name: 'Luande' } ] })
    })
  })
})
