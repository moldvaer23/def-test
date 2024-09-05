import { FC } from "react";

import "./style.css";
import { Link } from "react-router-dom";

export const PageNotFound: FC = () => (
  <div className="page__not-found">
    <h1 className="title">⚠️Страница не найдена⚠️</h1>
    <Link to="/">На главную</Link>
  </div>
);
