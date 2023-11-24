import React from "react";
import ContentItem from "./NoteContent";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchieveButton";
function NoteItem({id,title,body,createdAt,archived,onDelete,onArchive,onNote,onDeleteArchived}) {
  const [isArchived, setIsArchived] = React.useState(archived);
  return (
    <div className="note-item">
      <ContentItem title={title} body={body} createdAt={createdAt} />
      <div className="note-item__action">
        <DeleteButton id={id} onDeleteArchived={onDeleteArchived} onDelete={onDelete}/>
        <ArchiveButton
          id={id}
          archive={isArchived}
          onArchive={onArchive}
          onNote = {onNote}
          onDelete = {onDelete}
        />
       
      </div>
    </div>
  );
}

export default NoteItem