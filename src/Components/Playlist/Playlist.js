import React from 'react';
import './Playlist.css';
import TrackList from "../TrackList/TrackList.js";

export class Playlist extends React.Component{
    render(){
        return (<div className="Playlist">
            <input value="New Playlist"/>
            <TrackList tracks={this.props.playlistTracks}
                       isRemoval={true}
                       onRemove={this.props.onRemove}
            />
            <a className="Playlist-save">SAVE TO SPOTIFY</a>
        </div>);
    }
}
export default Playlist;