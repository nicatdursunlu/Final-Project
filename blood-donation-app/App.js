import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { AppLoading } from "expo";

import { loadFonts } from "./styles/fonts";
import { FindScreen } from "./screens";
import { RootNav } from "./navigation/RootNav";

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

  return <RootNav />;
}
