import React from "react";

function ArchiveButton({ archive, onArchive,id , onNote}) {

  return (
    <button
      className={`note-item__archive-button ${
        archive ? "note-item__archive-button--active" : ""
      }`}
      onClick={archive ? () => onNote(id) : () => onArchive(id)}>
      {archive ? "Pindahkan" : "Arsipkan"}
    </button>
  );
}
export default ArchiveButton;