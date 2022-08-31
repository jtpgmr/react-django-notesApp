import React, { useState, useEffect } from "react";
import AddButton from "../components/AddButton";
import ListItem from "../components/ListItem";

const NotesListPage = () => {
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    const response = await fetch("/api/notes/");
    const data = await response.json();
    setNotes(data);
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="notes">
      {/* Header */}
      <div className="notes-header">
        <h2 className="notes-title">&#9782; Notes</h2>
        <p className="notes-count">Count: {notes.length}</p>
      </div>
      {/* Content */}
      <div className="notes-list">
        {notes.map((note, index) => (
          <ListItem key={index} note={note} />
        ))}
      </div>
      <AddButton />
    </div>
  );
};

export default NotesListPage;
