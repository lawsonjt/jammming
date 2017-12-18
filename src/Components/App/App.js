
import React, { Component } from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';
import Spotify from '../../util/Spotify'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchResults: [],

            playlistName: 'Playlist Name',

            playlistTracks: []
        };

        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.updatePlaylistName = this.updatePlaylistName.bind(this);
        this.savePlaylist = this.savePlaylist.bind(this);
        this.search = this.search.bind(this);
    }

    addTrack(track) {
        let tracks = this.state.playlistTracks;
        if (!tracks.includes(track)) {
            tracks.push(track);

            this.setState({playlistTracks: track});
        }
    }

    removeTrack(track) {
        let tracks = this.state.playlistTracks.forEach(track => {
            if (tracks.includes(track)) {
                return this.setState({playlistTracks: tracks});
            }
        });
    }

    updatePlaylistName(name){
        this.setState({
            playlistName: name
        });
    }

    savePlaylist() {
        Spotify.savePlaylist();
    }

    search(term) {
        Spotify.search();
    }

    render() {
        return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    <SearchBar onSearch={this.search}/>
                    <div className="App-playlist">
                        <SearchResults searchResults={this.state.searchResults}
                                       onAdd={this.addTrack}
                        />
                        <Playlist playlistName={this.state.playlistName}
                                  onNameChange={this.updatePlaylistName}
                                  playlistTracks={this.state.playlistTracks}
                                  onRemove={this.removeTrack}
                                  onSave={this.savePlaylist}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
