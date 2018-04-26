global.fetch = require('node-fetch')

import { searchAlbums } from '../src/main'

const albums = searchAlbums("Aventura")

albums.then(data => console.log(data))

