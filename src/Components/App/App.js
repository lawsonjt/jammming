import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {SearchResults} from '../SearchResults/SearchResults.js';
import { SearchBar } from '../SearchBar/SearchBar';
import { Playlist } from '../Playlist/Playlist';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchResults: [{
                name:  "Track Name",
                artist: "artist Name",
                album: "album Name"
            }],
            playlistName: ['playlist'],
            playlistTracks: [{
                name: 'song name',
                artist: 'artist',
                album: 'album',
            },{
                name: 'name2',
                artist: 'artist2',
                album: 'album2',
            },],
            };
        }

    this.addTrack = this.addTrack.bind(this);


    addTrack(track) {
        let tracks = this.state.playlistTracks;
        if (!tracks.includes(track)) {
            tracks.push(track);

            this.setState({playlistTracks: track});
        }
    }

  render() {
    return (
        <div>
            <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App">
                {/* <!-- Add a SearchBar component --> */}
                <div className="App-playlist">
                    <SearchResults
                        searchResults={this.state.searchResults}
                    />
                    < Playlist playlistName={this.state.playlistName}
                               playlistTracks={this.state.playlistTracks}
                               onRemove={this.onRemove}
                               onNameChange={this.updatePlayListName}
                               onSave={this.savePlayList}
                    />

                </div>
            </div>
        </div>
    );
  }
}

export default App;
