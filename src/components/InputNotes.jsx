import React from "react";

class InputNotes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      limit: 50,
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });

    if (name === "title" && value.length === 50) {
      this.setState({
        limit: "Judul Terlalu Panjang",
      });
    } else {
      this.setState({
        limit: 50 - value.length,
      });
    }
  }

  onBodyChange(e) {
    this.setState({
      body: e.target.value,
    });
  }

  onSubmitHandler(e) {
    e.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <div className="note-app__body">
        <h2>Buat Catatan</h2>
        <form action="" className="note-input" onSubmit={this.onSubmitHandler}>
          <p className="note-input__title__char-limit">
            Sisa Karakter: {this.state.limit}
          </p>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.onTitleChange}
            placeholder="Ini adalah judul...."
            className="note-input__title"
          />
          <textarea
            name="body"
            placeholder="Ini adalah catatan..."
            value={this.state.body}
            onChange={this.onBodyChange}
            cols="30"
            rows="10"
            className="note-input__body"></textarea>
          <button>Buat</button>
        </form>
      </div>
    );
  }
}

export default InputNotes;
