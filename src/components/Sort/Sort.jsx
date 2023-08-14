import React from "react";

function Sort() {
  return (
    <div className="sort">
      <b>Поиск по </b>
      <span>популярности</span>
      <div className="sort__popup">
        <ul>
          <li>поулярности &#9660;</li>
          <li>поулярности &#9650;</li>
          <li>цене &#9660;</li>
          <li>цене &#9650;</li>
        </ul>
      </div>
    </div>
  );
}

export default Sort;
