import { FC, useEffect } from "react";
import { PageEndlessFeedUi } from "../ui";
import { useDispatch, useSelector } from "src/services/store";
import {
  getEndlessFeedData,
  getEndlessFeedRequesting,
  getEndlessFeedRequestingError,
  getEndlessFeeds,
} from "src/services/slices/endless-feed";

export const PageEndlessFeed: FC = () => {
  const feedData = useSelector(getEndlessFeedData);
  const feedRequesting = useSelector(getEndlessFeedRequesting);
  const feedRequestingErrors = useSelector(getEndlessFeedRequestingError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEndlessFeeds());
  }, []);

  const onClickLoad = () => {
    dispatch(getEndlessFeeds());
  };

  return (
    <PageEndlessFeedUi
      feedData={feedData}
      feedErrors={feedRequestingErrors}
      feedRequesting={feedRequesting}
      onClickLoad={onClickLoad}
    />
  );
};
