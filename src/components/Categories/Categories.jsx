import React, { useState } from "react";
import "./Categories.scss";

function Categories() {
  const [gameCategory, setGameCategory] = useState(0);

  const category = [
    "Шутер",
    "Хоррор",
    "Стратегии",
    "Спорт",
    "Симуляторы",
    "Драки",
  ];

  const onClickCategory = (i) => {
    setGameCategory(i);
  };

  return (
    <div className="categories">
      <div className="container">
        <div className="category">
          <ul>
            {category.map((value, i) => (
              <li
                key={i}
                onClick={() => onClickCategory()}
                className={gameCategory === i ? "active" : " "}
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Categories;
