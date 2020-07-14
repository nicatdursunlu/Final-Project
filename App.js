import React, { useState } from "react";
import { AppLoading } from "expo";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import * as eva from "@eva-design/eva";

import store, { persistor } from "./store/index";
import { RootNav } from "./navigation/RootNav";
import { loadFonts } from "./styles/fonts";
import { FeatherIconsPack } from "./utils";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  if (!loaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setLoaded(true)}
        onError={() => console.log("loading faileddddd")}
      />
    );
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <IconRegistry icons={[EvaIconsPack, FeatherIconsPack]} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <RootNav />
        </ApplicationProvider>
      </PersistGate>
    </Provider>
  );
}

// https://reactnavigation.org/docs/localization
