import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app";
import { Provider as URQLProvider } from "urql";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "styled-components";

import { setAssetPath } from "@esri/calcite-components/dist/components";
import { store } from "./store";
import { APIClient } from "./services/graphql/api-client";
import GlobalStyles from "./styles/global-styles";
import { theme } from "./styles/theme";

setAssetPath(`${window.location.origin}/calcite/`);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <URQLProvider value={APIClient}>
      <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
          <App />
          <GlobalStyles />
        </ThemeProvider>
      </ReduxProvider>
    </URQLProvider>
  </React.StrictMode>
);
