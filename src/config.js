require('dotenv').config({ path: `${__dirname}/../.env` });

export const API_URL = `${process.env.API_URL}`;
export const HEADERS = {
  headers: {
    Authorization: `'Bearer ${process.env.API_TOKEN}'`,
  },
};

