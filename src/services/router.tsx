import { createHashRouter } from "react-router-dom";
import { CONFIG_ROUTER_PATHS } from "src/config";

import { PageIndex } from "src/pages/index";
import { PageWrapper } from "src/pages/wrapper";
import { PageWeather } from "src/pages/weather";
import { PageNotFound } from "src/pages/not-found";
import { PageWebsocket } from "src/pages/websocket";
import { PageEndlessFeed } from "src/pages/endless-feed";

export const router = createHashRouter(
  [
    {
      element: <PageWrapper />,
      errorElement: <PageNotFound />,
      children: [
        {
          index: true,
          element: <PageIndex />,
        },
        {
          path: CONFIG_ROUTER_PATHS.WEATHER,
          element: <PageWeather />,
        },
        {
          path: CONFIG_ROUTER_PATHS.WEBSOCKET,
          element: <PageWebsocket />,
        },
        {
          path: CONFIG_ROUTER_PATHS.ENDLESS_FEED,
          element: <PageEndlessFeed />,
        },
      ],
    },
  ],
  { basename: "/" }
);
