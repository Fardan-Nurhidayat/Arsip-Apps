import React from "react";
import NoteItem from "./NoteItem";
import ArchiveButton from "./ArchieveButton";
import { getInitialData } from "../utils";


const ArchivedNotes = ({ notes, onArchive, onDelete, onNote}) => {
  const emptyMessage = (
    <p className="notes-list__empty-message">Tidak Ada Arsip</p>
  )
  return (
    <div className="notes-list">
      {notes.map(note => (
        <NoteItem
          key={note.id}
          id={note.id}
          title={note.title}
          body={note.body}
          createdAt={note.createdAt}
          archive={note.archived}
          onArchive={onArchive}
          onDelete={onDelete}
          onNote={onNote}
          {...note}
        />
      ))}

      {notes.length === 0 && emptyMessage}
    </div>
  );
};

export default ArchivedNotes;