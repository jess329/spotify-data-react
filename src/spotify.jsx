import SpotifyWebApi from 'spotify-web-api-js';
import { CLIENT_ID, REDIRECT_URI, SCOPES } from './config';

export const spotifyApi = new SpotifyWebApi({
  clientId: CLIENT_ID,
});
// spotifyApi.setAccessToken

// export const authorizeSpotify = () => {
//     const scopes = ['user-read-private', 'user-read-email'];
//     const encodedScopes = encodeURIComponent(scopes.join(' '));
  
//     window.location.href = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${encodedScopes}&response_type=token`;
//   };
  