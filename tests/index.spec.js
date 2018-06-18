import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import sinonStubPromise from 'sinon-stub-promise'

chai.use(sinonChai)
sinonStubPromise(sinon)
global.fetch = require('node-fetch')

import SpotifyWrapper from '../src/index'
import { API_URL, HEADERS } from '../src/config'

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

  describe('request method', () => {
    let fetchedStub
    let promise

    beforeEach(() => {
      fetchedStub = sinon.stub(global, 'fetch');
      promise = fetchedStub.returnsPromise();
    })

    afterEach(() => {
      fetchedStub.restore();
    })

    it('should exist', () => {
      let spotify = new SpotifyWrapper({})

      expect(spotify.request).to.exist
    })

    it('should call fetch when request', () => {
      let spotify = new SpotifyWrapper({
        apiToken: 'abcdef'
      })
      spotify.request('url')

      expect(fetchedStub).to.have.been.calledOnce;
    })

    it('should fetch the proper url', () => {
      let spotify = new SpotifyWrapper({
        apiToken: 'abcdef'
      })
      spotify.request('url')

      expect(fetchedStub).to.have.been.calledWith('url');
    })

    it('should call fetch with headers', () => {
      let spotify = new SpotifyWrapper({
        apiToken: 'abcdef'
      })
      spotify.request('url')

      const headers = {
        headers: {
          Authorization: 'Bearer abcdef',
        },
      }

      expect(fetchedStub).to.have.been.calledWith('url', headers);
    })

  })
})