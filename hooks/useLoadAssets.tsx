import { loadAsync } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

export default function useLoadAssets() {
  const [fontLoaded, setFontLoaded] = useState<Boolean>(false);

  useEffect(() => {
    const loadResource = async () => {
      try {
        SplashScreen.preventAutoHideAsync();

        await loadAsync({
          GBold: require("../assets/fonts/EBGaramond-Bold.ttf"),
          GExtraBold: require("../assets/fonts/EBGaramond-ExtraBold.ttf"),
          GRegular: require("../assets/fonts/EBGaramond-Regular.ttf"),
          GSemiBold: require("../assets/fonts/EBGaramond-SemiBold.ttf"),
          GMedium: require("../assets/fonts/EBGaramond-Medium.ttf"),
        });
      } catch (error) {
        console.warn(error);
      } finally {
        setFontLoaded(true);
        SplashScreen.hideAsync();
      }
    };
    loadResource();
  }, []);

  return fontLoaded;
}
