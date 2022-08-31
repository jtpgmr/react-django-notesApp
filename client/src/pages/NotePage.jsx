import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { ReactComponent as Delete } from "../assets/delete.svg";

const NotePage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const noteId = params.id;

  useEffect(() => {
    const getNote = async () => {
      if (noteId === "new") return;

      const response = await fetch(`/api/notes/${noteId}/`);
      const data = await response.json();
      setNote(data);
    };
    getNote();
  }, [noteId]);

  const createNote = async () => {
    await fetch("/api/notes/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  const updateNote = async () => {
    await fetch(`/api/notes/${noteId}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });

    navigate("/");
  };

  const deleteNote = async () => {
    await fetch(`/api/notes/${noteId}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/");
  };

  const handleSubmit = () => {
    if (noteId !== "new" && !note.body) {
      deleteNote();
    } else if (noteId === "new" && note !== null) {
      createNote();
    } else if (noteId !== "new") {
      updateNote();
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
