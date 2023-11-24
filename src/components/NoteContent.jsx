import React from "react";
import { showFormattedDate } from "../utils/index";
const NoteContent = ({ title, body, createdAt }) => {
  const formattedDate = showFormattedDate(createdAt);

  return (
    <div className="note-item__content">
      <p className="note-item__date">{formattedDate}</p>
      <h2 className="note-item__title">{title}</h2>
      <p className="note-item__body">{body}</p>
    </div>  
  );
};


export default NoteContent;