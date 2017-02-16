import React from 'react';

const VideoListItem = (props)=>{
  const videoItem=props.video;
  const image_url=videoItem.snippet.thumbnails.default.url;
  const video_title=videoItem.snippet.title;
  console.log(props.onVideoSelect);
  return <li onClick={()=>props.onVideoSelect(videoItem)} className="list-group-item">
      <div className="media-left">
        <img className="media-object" src={image_url}/>
      </div>
      <div className="media-body">
        <div className="media-heading">{video_title}</div>
      </div>

  </li>
};


export default VideoListItem;
