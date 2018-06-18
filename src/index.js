/* global fetch */

import album from './album';
import search from './search';

import { API_URL } from './config';
import toJSON from './utils';

export default class SpotifyWrapper {
  constructor(options) {
    this.apiURL = options.apiURL || API_URL;
    this.apiToken = options.apiToken;

    this.album = album.bind(this)();
    this.search = search.bind(this)();
  }

  request(url) {
    const headers = {
      headers: {
        Authorization: `Bearer ${this.apiToken}`,
      },
    };

    return fetch(url, headers).then(toJSON);
  }
}
