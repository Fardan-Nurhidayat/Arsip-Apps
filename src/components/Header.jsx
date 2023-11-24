import React, { useState } from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
    };
    this.onSearch = this.onSearch.bind(this);
    this.handleKeywordChange = this.handleKeywordChange.bind(this);
  }

  handleKeywordChange(e) {
    this.setState({
      keyword: e.target.value,
    });
  }

  onSearch(e) {
    if (e.key === "Enter") {
      this.props.onSearch(this.state.keyword);
    }
  }

  render() {
    return (
      <header className="note-app__header">
        <h1>Notes</h1>
        <div className="note-search">
          <input
            type="text"
            placeholder="Cari catatan..."
            value={this.state.keyword}
            onChange={this.handleKeywordChange}
            onKeyPress={this.onSearch}
          />
        </div>
      </header>
    );
  }
}


export default Header;
