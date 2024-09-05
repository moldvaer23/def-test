import { FC } from "react";

import "./style.css";
import { Link } from "react-router-dom";

export const PageError: FC = () => (
  <div className="page__error">
    <h1>⚠️Страница не найдена⚠️</h1>
    <Link to="/">На главную</Link>
  </div>
);
