import { createHashRouter } from "react-router-dom";
import { CONFIG_ROUTER_PATHS } from "src/config";

import { PageError } from "src/pages/error";
import { PageIndex } from "src/pages/index/ui";
import { PageWrapper } from "src/pages/wrapper";
import { PageWeather } from "src/pages/weather/ui";
import { PageWebsocket } from "src/pages/websocket";
import { PageEndlessFeed } from "src/pages/endless-feed";

export const router = createHashRouter(
  [
    {
      element: <PageWrapper />,
      errorElement: <PageError />,
      children: [
        {
          index: true,
          element: <PageIndex />,
        },
        {
          path: CONFIG_ROUTER_PATHS.WEBSOCKET,
          element: <PageWebsocket />,
        },
        {
          path: CONFIG_ROUTER_PATHS.WEATHER,
          element: <PageWeather />,
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
