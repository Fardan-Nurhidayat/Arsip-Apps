import React from "react";
import NoteItem from "./NoteItem";
function NoteList({notes, onArchive, onDelete,onNote,onDeleteArchived}) {
  function emptyList() {
    return (
      <div className="notes-list__empty-message">
        Tidak ada catatan
      </div>
    );
  }
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          title={note.title}
          body={note.body}
          createdAt={note.createdAt}
          archive={note.archived}
          onArchive={onArchive}
          onDelete={onDelete}
          {...note} 
        />
      ))}
      {notes.length === 0 && emptyList()}

    </div>
  );
}

export default NoteList