import React from 'react';
import './Track.css';

export class Track extends React.Component{

    renderAction() {
        if (this.props.isRemoval) {
            return <a className="Track-action" onClick={this.removeTrack} > - </a>;
        } else {
            return <a className="Track-action" onClick={this.addTrack} > + </a>;
        }
    }

    render(){
        return (<div className="Track">
            <div className="Track-information">
                <h3>{this.props.track.name}</h3>
                <p>{this.props.track.artist} | {this.props.track.album}</p>
            </div>
            <a className="Track-action">{/* <!-- + or - will go here --> */}</a>
        </div>);
    }
}
export default Track;