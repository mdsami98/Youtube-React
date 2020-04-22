import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "../components/VideoList";
import VideoDetails from "../components/VideoDetails";

class App extends React.Component {
  state = { videos: [], selecteVideo: null };

  componentDidMount() {
    this.onTermSubmit("building");
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    console.log(response);
    this.setState({
      videos: response.data.items,
      selecteVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selecteVideo: video });
  };

  render() {
    return (
      <div className="container">
        <div className="row mt-2">
          <div className="col-md-12">
            <SearchBar onTermSubmit={this.onTermSubmit} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mt-3">
            <VideoDetails video={this.state.selecteVideo} />
          </div>
          <div className="col-md-6">
            <VideoList
              onVideoSelect={this.onVideoSelect}
              videos={this.state.videos}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
