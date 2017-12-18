let accessToken;
const clientID = '3068bb8c52724a01b51430278e65408d';
const redirectURI = 'http://localhost:3000/';


const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        } else {
            window.location.href.match('https://example.com/callback#/access_token=([^&]*)/&token_type=Bearer&/expires_in=([^&]*)/&state=123');

            let accessToken = window.access_token;
            let expiresIn = window.expires_in;

            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');

            window.location = 'https://accounts.spotify.com/authorize?client_id={clientID}&response_type=token&scope=playlist-modify-public&redirect_uri={redirectURI}';
        }

        return new Promise(
            resolve => resolve(accessToken)
        );
    },

    search(term) {
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            headers: {
                Authorization: `Bearer: ${accessToken}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (!jsonResponse.tracks) {
                return [];
            } else {
                return jsonResponse.tracks.items && jsonResponse.tracks.items.map(track => {
                    return {
                        id: track.id,
                        name: track.name,
                        artist: track.artists[0].name,
                        album: track.album.name,
                        uri: track.uri
                    };
                })
            }
        })
    },

    savePlaylist(name, trackURIs) {
        if (name || trackURIs.length > 0) {
            const accessToken = this.getAccessToken();
            const headers = { 'Authorization': 'Bearer ' + accessToken };
            let userID;

            JSON.get({
                url: 'https://api.spotify.com/v1/me',
                headers: headers
            }, response => {
                userID = response.id;
            });

            let playlistID;

            JSON.post({
                url: 'https://api.spotify.com/v1/users/{userID}/playlists',
                headers: headers,
                method: '',
                body: ''
            }, response => {
                JSON.post({
                    url: 'https://api.spotify.com/v1/users/{userID}/playlists/{response.id}/tracks',
                    headers: headers,
                    method: '',
                    body: ''
                }, response => {
                    this.playlistID = response.id;
                })
            })
        }
    }
};

export default Spotify;