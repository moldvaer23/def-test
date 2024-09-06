import { SerializedError } from "@reduxjs/toolkit";
import { FC } from "react";

import "./style.css";

type TProps = {
  feedData: string[] | null;
  feedRequesting: boolean;
  feedErrors: SerializedError | null;
  onClickLoad: () => void;
};

export const PageEndlessFeedUi: FC<TProps> = ({
  onClickLoad,
  feedData,
  feedErrors,
  feedRequesting,
}) => (
  <div className="endless-feed__wrapper">
    <h2 className="title">Страница с бесконечной прокруткой</h2>

    {feedData && feedData.length > 0 && (
      <ul className="endless-feed__list">
        {feedData.map((item, index) => (
          <li key={index}>
            {item}: {index + 1}
          </li>
        ))}
      </ul>
    )}

    <div className="endless-feed__menu">
      {feedErrors && <span>Ошибка: {feedErrors.message}</span>}
      <button
        className="button"
        onClick={onClickLoad}
        disabled={feedRequesting}>
        Подгрузить ещё
      </button>
      {feedRequesting && <span>Грузим...</span>}
    </div>
  </div>
);
