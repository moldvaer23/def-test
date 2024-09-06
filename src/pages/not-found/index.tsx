import { FC } from "react";
import { Link } from "react-router-dom";

import "./style.css";

export const PageNotFound: FC = () => (
  <div className="page__not-found">
    <h1 className="title">⚠️Страница не найдена⚠️</h1>
    <Link to="/">На главную</Link>
  </div>
);
