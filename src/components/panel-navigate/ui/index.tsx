import { FC } from "react";
import { Link } from "react-router-dom";
import { CONFIG_ROUTER_PATHS } from "src/config";

import "./style.css";

export const PanelNavigate: FC = () => (
  <nav>
    <ul className="nav__list">
      <li>
        <Link className="nav__link" to={CONFIG_ROUTER_PATHS.WEATHER}>
          Погода
        </Link>
      </li>
      <li>
        <Link className="nav__link" to={CONFIG_ROUTER_PATHS.WEBSOCKET}>
          Websocket
        </Link>
      </li>
      <li>
        <Link className="nav__link" to={CONFIG_ROUTER_PATHS.ENDLESS_FEED}>
          Лента
        </Link>
      </li>
    </ul>
  </nav>
);
