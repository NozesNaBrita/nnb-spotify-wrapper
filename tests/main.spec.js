import { expect } from 'chai'
import { search,
  searchAlbums,
  searchArtists,
  searchTracks,
  searchPlaylists,
} from '../src/main'

describe('Spotify Wrapper', () => {
  describe('Smoke tests',() => {
    // search
    // searchAlbums
    // searchArtists
    // searchTracks
    // searchPlaylists

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
})
