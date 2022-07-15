import React from "react";
import { Link } from "react-router-dom";
import useWindowSize from "../useWindowSize";

let getDate = (note) => {
  return new Date(note.updated).toLocaleDateString();
};

let getTitle = (note, size) => {
  let title = note.body.split("\n")[0];
  if (title.length > 50 && size <= 327) {
    return title.slice(0, 30) + "...";
  } else if (title.length > 50 && size <= 380) {
    return title.slice(0, 35) + "...";
  } else if (title.length > 50 && size <= 453) {
    return title.slice(0, 40) + "...";
  } else if (title.length > 50 && size > 453) {
    return title.slice(0, 45) + "...";
  }
  return title;
};

let getContent = (note, size) => {
  let title = getTitle(note);
  if (title.length > 50) {
    title = title.slice(0, 50);
  }
  let content = note.body.replaceAll("\n", "");
  content = content.replaceAll(title, "");

  if (content.length > 45 && size <= 380) {
    return content.slice(0, 30) + "...";
  } else if (content.length > 45 && size >= 381 && size < 454) {
    return content.slice(0, 37) + "...";
  } else if (content.length > 50 && size >= 454) {
    return content.slice(0, 45) + "...";
  } else {
    return content;
  }
};

const ListItem = ({ note }) => {
  const windowSize = useWindowSize();
  return (
    <Link to={`/note/${note.id}`}>
      <div className="notes-list-item">
        <h3>{getTitle(note, windowSize)}</h3>
        <p>
          <span>{getDate(note)}</span>
          {getContent(note, windowSize)}
        </p>
      </div>
    </Link>
  );
};

export default ListItem;
