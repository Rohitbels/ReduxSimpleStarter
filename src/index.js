import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import Searchbar from './components/video_search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_info';
import _ from 'lodash';
const API_KEY='AIzaSyBLyz5qFz8jbnMD5HsaZQi_zAIbloEpczU';

class App extends Component{

  constructor(props)
  {
    super(props);
        this.state={ videos : [],
          selectedVideo: null
        };
      this.newSearch("google search 2015");


  }

  newSearch=(term)=>{
    console.log(term);
    YTSearch({key:API_KEY,term:term},(videos)=>{
      this.setState({videos:videos,
        selectedVideo :videos[0]


      });
  });
}

  render()
  {

    const newSearch=_.debounce((term)=>{this.newSearch(term)},300);

    return <div className="container">
        <br/>
          <div className="col-md-8">
         <Searchbar className="search_bar" onSearch={newSearch}/>
         </div>
         <br/> <br/>
         <VideoDetail video={this.state.selectedVideo} />
         <VideoList
         onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
         videos={this.state.videos}/>
     </div>;
  }

}




ReactDOM.render(<App/>,document.querySelector('.containers'));
