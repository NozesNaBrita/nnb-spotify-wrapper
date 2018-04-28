global.fetch = require('node-fetch')

import { searchAlbums } from '../src/main'

const albums = searchAlbums("Aventura")

albums.then(data => data.albums.items.map(item => console.log(item.name)))

