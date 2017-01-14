import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Gallery from './webGallery.js';
import { observable } from 'mobx';
import {caregiverName, patientName} from './webMobxStore';
import Masonry from 'react-masonry-component';

export default class FaceCurrent extends React.Component {
  constructor(props) {
    super(props);
  }

  edit() {
    this.props.edit(this.props.current);
  }

  render() {
    var galleryView = this.props.current.photos.length > 0 ? <Gallery photos={this.props.current.photos}/> : null;
    var currentView;
    var audioView = this.props.current.audio ? <ReactAudioPlayer src={this.props.current.audio} /> : <h4>No audio set for this face</h4>;
    if (!!this.props.current.subjectName) {
      currentView = (
        <div className="face-current">
          <h1>{this.props.current.subjectName}</h1>
          {galleryView}
          <div><h3>Description: </h3>{this.props.current.description}</div>
          <label><h3>Audio Message:</h3>
            {audioView}
          </label>
          <br />
          <button onClick={this.edit.bind(this)}>Edit</button>
        </div>
      );
    } else {
      currentView = (
        <div className="face-current">
          <h1>Add a person to {patientName.get()}'s face gallery</h1>
        </div>
      );
    }
    return currentView;
  }
};

