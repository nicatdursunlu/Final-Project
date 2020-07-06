import React, { useState, Fragment } from "react";
import { AppLoading } from "expo";

import { RootNav } from "./navigation/RootNav";
import { StatusBar } from "expo-status-bar";

import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import {
  FeatherIconsPack,
  MaterialIconsPack,
  FontAwesomeIconsPack,
} from "./utils";

import { loadFonts } from "./styles/fonts";

// import { enableScreens } from "react-native-screens";
// enableScreens();

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
    <Fragment>
      <StatusBar style="dark" />
      <IconRegistry
        icons={[
          EvaIconsPack,
          FeatherIconsPack,
          FontAwesomeIconsPack,
          MaterialIconsPack,
        ]}
      />
      <ApplicationProvider {...eva} theme={eva.light}>
        <RootNav />
      </ApplicationProvider>
    </Fragment>
  );
}
