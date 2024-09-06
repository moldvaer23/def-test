import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "src/services/store";
import {
  getEndlessFeedData,
  getEndlessFeedRequesting,
  getEndlessFeedRequestingError,
  getEndlessFeeds,
} from "src/services/slices/endless-feed";

import "./style.css";

export const PageEndlessFeed: FC = () => {
  const feedData = useSelector(getEndlessFeedData);
  const requesting = useSelector(getEndlessFeedRequesting);
  const reqErrors = useSelector(getEndlessFeedRequestingError);

  const dispatch = useDispatch();

  /* При первой загрузки страницы отправляем запрос на получение записей */
  useEffect(() => {
    if (feedData.length === 0) {
      dispatch(getEndlessFeeds());
    }
    // eslint-disable-next-line
  }, []);

  const onClickLoad = () => {
    dispatch(getEndlessFeeds());
  };

  return (
    <div className="endless-feed__wrapper">
      <h2 className="title">Страница с бесконечной прокруткой</h2>

      {feedData.length > 0 && (
        <ul className="endless-feed__list">
          {feedData.map((item, index) => (
            <li key={index}>
              {item}: {index + 1}
            </li>
          ))}
        </ul>
      )}

      <div className="endless-feed__menu">
        <button className="button" onClick={onClickLoad} disabled={requesting}>
          Подгрузить ещё
        </button>

        {/* Если есть ошибки показываем их */}
        {reqErrors && <span>Ошибка: {reqErrors.message}</span>}

        {/* Сообщаем о загрузке */}
        {requesting && <span>Грузим...</span>}
      </div>
    </div>
  );
};
