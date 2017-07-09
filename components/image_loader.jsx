import React from 'react';

export default class Loader extends React.Component {
  render() {
    var imageid = "video_"+this.props.name;
      return (
      <img src="./img/loading.svg" className="pull-right image_reloader" height="30" width="30" />
      );
    }
}
