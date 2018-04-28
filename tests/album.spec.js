import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import sinonStubPromise from 'sinon-stub-promise'

import { getAlbum, getAlbums, getAlbumTracks } from '../src/albums'

chai.use(sinonChai)
sinonStubPromise(sinon)
global.fetch = require('node-fetch')

describe('Album', () => {
  let stubbedFetch
  let promise

  beforeEach(() => {
    stubbedFetch = sinon.stub(global, 'fetch')
    promise = stubbedFetch.returnsPromise()
  })

  afterEach(() => {
    stubbedFetch.restore()
  })

  describe('Smoke tests', ()=>{
    it('should exist getAlbum method', () => {
      expect(getAlbum).to.exist;
    })

    it('should exist getAlbums method', () => {
      expect(getAlbums).to.exist;
    })

    it('should exist getAlbumTracks method', () => {
      expect(getAlbumTracks).to.exist;
    })
  })

  describe('getAlbum', () => {
    it('should call fetch function', () => {
      const album = getAlbum();

      expect(stubbedFetch).have.been.calledOnce
    })

    it('should receive the correct url to fetch', () => {
      const quebraMola = getAlbum('4J1s6pjfLMQegpHyOz2vHH');
      expect(stubbedFetch).to.be.calledWith('https://api.spotify.com/v1/albums/4J1s6pjfLMQegpHyOz2vHH')

      const caraivana = getAlbum('5HXD9yNTIYkGQm4xL3hPTe')
      expect(stubbedFetch).to.be.calledWith('https://api.spotify.com/v1/albums/5HXD9yNTIYkGQm4xL3hPTe')
    })

    it('should return some json data from promise', () => {
      promise.resolves({ album: 'Quebra mola' })
      const quebraMola = getAlbum('4J1s6pjfLMQegpHyOz2vHH')

      expect(quebraMola.resolveValue).to.eql({ album: 'Quebra mola' })
    })
  })

  describe('getAlbums', () => {
    it('should call fetch function', () => {
      const album = getAlbums();

      expect(stubbedFetch).have.been.calledOnce
    })

    it('should receive the correct url to fetch', () => {
      const albums = getAlbums(['4J1s6pjfLMQegpHyOz2vHH', '5HXD9yNTIYkGQm4xL3hPTe']);
      expect(stubbedFetch).to.be.calledWith('https://api.spotify.com/v1/albums?ids=4J1s6pjfLMQegpHyOz2vHH,5HXD9yNTIYkGQm4xL3hPTe')
    })

    it('should return some json data from promise', () => {
      promise.resolves({ albums: [ { album: 'Quebra mola' }, { album: 'caravaiana' } ] })
      const albums = getAlbums(['4J1s6pjfLMQegpHyOz2vHH', '5HXD9yNTIYkGQm4xL3hPTe']);

      expect(albums.resolveValue).to.eql({ albums: [ { album: 'Quebra mola' }, { album: 'caravaiana' } ] })
    })
  })

  describe('getAlbumTracks', () => {
    it('should call fetch function', () => {
      const albumTracks = getAlbumTracks();

      expect(stubbedFetch).have.been.calledOnce
    })

    it('should receive the correct url to fetch', () => {
      const quebraMolaTracks = getAlbumTracks('4J1s6pjfLMQegpHyOz2vHH');
      expect(stubbedFetch).to.be.calledWith('https://api.spotify.com/v1/albums/4J1s6pjfLMQegpHyOz2vHH/tracks')
    })

    it('should return some json data from promise', () => {
      promise.resolves({ items: [ { name: 'Braga boy' }, { name: 'Luande' } ] })
      const quebraMolaTracks = getAlbumTracks('4J1s6pjfLMQegpHyOz2vHH');

      expect(quebraMolaTracks.resolveValue).to.eql({ items: [ { name: 'Braga boy' }, { name: 'Luande' } ] })
    })
  })
})
