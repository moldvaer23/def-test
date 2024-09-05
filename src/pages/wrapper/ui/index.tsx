import { FC } from "react";
import { Link } from "react-router-dom";
import { Outlet, useLocation } from "react-router-dom";
import { PanelNavigate } from "src/components/panel-navigate";

import "./style.css";

export const PageWrapper: FC = () => {
  const { pathname } = useLocation();

  return (
    <div className="page">
      {pathname !== "/" && (
        <header className="header">
          <Link to="/">На главную</Link>
        </header>
      )}
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <PanelNavigate />
      </footer>
    </div>
  );
};
