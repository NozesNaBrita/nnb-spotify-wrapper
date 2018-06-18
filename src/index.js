/* global fetch */

import {
  search,
  searchArtists,
  searchAlbums,
  searchPlaylists,
} from './search';

import album from './album';

import { API_URL } from './config';

export default class SpotifyWrapper {
  constructor(options) {
    this.apiURL = options.apiURL || API_URL;
    this.apiToken = options.apiToken;

    this.album = album.bind(this)();
  }

  request(url) {
    const headers = {
      headers: {
        Authorization: `Bearer ${this.apiToken}`,
      },
    };
    return fetch(url, headers);
  }
}
