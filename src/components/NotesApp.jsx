import React from "react";
import Header from "./Header";
import InputNotes from "./InputNotes";
import NoteList from "./NoteList";
import ArchivedNotes from "./ArchivedNotes";
import { getInitialData } from "../utils/index";
import {showFormattedDate} from "../utils/index";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      archivedNotes: [],
      search: "",
      allNotes: "",
    };
    this.onAddNote = this.onAddNote.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onArchive = this.onArchive.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onNote = this.onNote.bind(this);
    this.onDeleteArchived = this.onDeleteArchived.bind(this);
  }

  onAddNote({ title, body }) {
    this.setState(prevState => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: +new Date(),
            archived: false,
          },
        ],
      };
    });
  }

  onSearch(keyword) {
    const { notes, archivedNotes } = this.state;

    const filteredActiveNotes = keyword
      ? notes.filter(note =>
          note.title.toLowerCase().includes(keyword.toLowerCase())
        )
      : notes;

    const filteredArchivedNotes = keyword
      ? archivedNotes.filter(note =>
          note.title.toLowerCase().includes(keyword.toLowerCase())
        )
      : archivedNotes;

    this.setState({
      search: keyword,
      filteredNotes: {
        activeNotes: filteredActiveNotes,
        archivedNotes: filteredArchivedNotes,
      },
    });
  }

  onDelete(id) {
    const { notes, archivedNotes } = this.state;
    this.setState({
      notes: notes.filter(note => note.id !== id),
      archivedNotes: archivedNotes.filter(note => note.id !== id),
    });
  }

  onDeleteArchived(id) {
    const { archivedNotes } = this.state;
    this.setState({
      archivedNotes: archivedNotes.filter(note => note.id !== id),
    });
  }

  onArchive(id) {
    const { notes, archivedNotes } = this.state;
    const archivedNote = notes.find(note => note.id === id);
    const updatedNotes = notes.filter(note => note.id !== id);
    this.setState({
      notes: updatedNotes,
      archivedNotes: [...archivedNotes, { ...archivedNote, archived: true }],
    });
  }

  onNote(id) {
    this.setState(prevState => {
      const { notes, archivedNotes } = prevState;
      const noteToRestore = archivedNotes.find(note => note.id === id);
      if (noteToRestore) {
        const updatedArchivedNotes = archivedNotes.filter(
          note => note.id !== id
        );
        noteToRestore.archived = false;
        const updatedNotes = [...notes, noteToRestore];

        return {
          archivedNotes: updatedArchivedNotes,
          notes: updatedNotes,
        };
      }

      return null;
    });
  }

  render() {
   const { notes, archivedNotes, search } = this.state;

   const filteredActiveNotes = search
     ? notes.filter(note =>
         note.title.toLowerCase().includes(search.toLowerCase())
       )
     : notes;

   const filteredArchivedNotes = search
     ? archivedNotes.filter(note =>
         note.title.toLowerCase().includes(search.toLowerCase())
       )
     : archivedNotes;

    return (
      <div>
        <Header
          onSearch={this.onSearch}
          notes={this.state.notes}
        />
        <InputNotes addNote={this.onAddNote} />
        <div className="note-app__body">
          <h2>Catatan Aktif</h2>
        </div>
        <NoteList
          notes={filteredActiveNotes}
          onDelete={this.onDelete}
          onArchive={this.onArchive}
        />
        <div className="note-app__body">
          <h2>Arsip</h2>
        </div>
        <ArchivedNotes
          notes={filteredArchivedNotes}
          onDelete={this.onDelete}
          onNote={this.onNote}

        />
      </div>
    );
  }
}

console.log(getInitialData())

export default NoteApp