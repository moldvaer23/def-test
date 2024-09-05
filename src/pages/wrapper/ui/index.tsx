import { FC } from "react";
import { Outlet } from "react-router-dom";
import { PanelNavigate } from "src/components/panel-navigate";

import "./style.css";

export const PageWrapper: FC = () => (
  <div className="page">
    <main className="main">
      <Outlet />
    </main>
    <footer className="footer">
      <PanelNavigate />
    </footer>
  </div>
);
