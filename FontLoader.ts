import * as Font from "expo-font";

export const loadMontserratFont = async () => {
  await Font.loadAsync({
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    // Add other font weights and styles as needed
  });
};
