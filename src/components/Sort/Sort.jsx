import React, { useState } from "react";
import "./Sort.scss";

function Sort() {
  const [open, setOpen] = useState(false);
  const [openSort, setOpenSort] = useState(0);
  const list = [
    "поулярности вверх",
    "поулярности вниз",
    "цене вверх",
    "цене вниз",
  ];

  const onClickSort = (i) => {
    setOpenSort(i);
    setOpen(false);
  };

  return (
    <div className="sort">
      <b>Поиск по: </b>
      <span onClick={() => setOpen(!open)}>{list[openSort]}</span>
      {open && (
        <div className="sort__popup">
          <ul>
            {list.map((nameSort, i) => (
              <li
                key={i}
                onClick={() => onClickSort(i)}
                className={openSort === i ? "activ" : ""}
              >
                {nameSort}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
