import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  OnInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFromSubmit = (event) => {
    //TODO : If we want to not reload when submit
    event.preventDefault();

    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-from">
        <form onSubmit={this.onFromSubmit}>
          <div className="from-control">
            <label>Search videos</label>
            <input
              onChange={this.OnInputChange}
              className="form-control"
              type="text"
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
