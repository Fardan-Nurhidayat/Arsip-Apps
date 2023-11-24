import React from "react";

function DeleteButton({ id, onDelete }) {
  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Apakah Anda yakin ingin menghapus catatan ini?"
    );
    if (confirmDelete) {
      onDelete(id);
    }
  };

  return (
    <button className="note-item__delete-button" onClick={handleDelete}>
      Hapus
    </button>
  );
}

export default DeleteButton;
