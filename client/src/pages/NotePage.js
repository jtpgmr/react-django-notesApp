import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { ReactComponent as Delete } from "../assets/delete.svg";

const NotePage = () => {
  let params = useParams();
  let navigate = useNavigate();
  let noteId = params.id;

  let [note, setNote] = useState(null);

  useEffect(() => {
    let getNote = async () => {
      if (noteId === "new") return;

      let response = await fetch(`/api/notes/${noteId}`);
      let data = await response.json();
      console.log("DATA:", data);
      setNote(data);
    };
    getNote();
  }, [noteId]);

  let createNote = async () => {
    await fetch("/api/notes/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  let updateNote = async () => {
    await fetch(`/api/notes/${noteId}/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    navigate("/");
  };

  let deleteNote = async () => {
    await fetch(`/api/notes/${noteId}/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/");
  };

  let handleSubmit = () => {
    if (noteId !== "new" && !note.body) {
      deleteNote();
    } else if (noteId !== "new") {
      updateNote();
    } else if (noteId === "new" && note !== null) {
      createNote();
    }
    navigate("/");
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <ArrowLeft onClick={handleSubmit} />
        </h3>
        <h3>
          {noteId !== "new" ? (
            <Delete onClick={deleteNote} />
          ) : (
            <button onClick={handleSubmit}>Done</button>
          )}
        </h3>
      </div>
      <textarea
        defaultValue={note?.body}
        onChange={(e) => {
          setNote({ ...note, body: e.target.value });
        }}
      />
    </div>
  );
};

export default NotePage;
