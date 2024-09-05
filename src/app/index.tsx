import { FC } from "react";
import { RouterProvider } from "react-router-dom";

import { router } from "src/services/router";

export const App: FC = () => <RouterProvider router={router} />;
