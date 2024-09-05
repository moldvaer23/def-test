import { FC } from "react";
import { Link } from "react-router-dom";
import { CONFIG_ROUTER_PATHS } from "src/config";

export const PanelNavigate: FC = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to={CONFIG_ROUTER_PATHS.WEBSOCKET}>Страница Websocket</Link>
        </li>
        <li>
          <Link to={CONFIG_ROUTER_PATHS.WEATHER}>Страница с погодой</Link>
        </li>
        <li>
          <Link to={CONFIG_ROUTER_PATHS.ENDLESS_FEED}>
            Страница с бесконечной лентой
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);
