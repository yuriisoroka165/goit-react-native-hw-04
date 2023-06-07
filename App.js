import { Image, StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";

import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import PostsScreen from "./Screens/PostsScreen/PostsScreen";

const App = () => {
    const [fontsLoaded] = useFonts({
        "Inter-Medium": require("./assets/fonts/Inter/static/Inter-Medium.ttf"),
        "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
        "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
        "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Image
                source={require("./assets/images/app_background.jpg")}
                resizeMode="cover"
                style={styles.image}
            />
            {/* <RegistrationScreen /> */}
            <LoginScreen />
            {/* <PostsScreen /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "relative",
        flex: 1,
        backgroundColor: "#fff",
    },
    image: {
        position: "absolute",
        width: "100%",
        flex: 1,
        justifyContent: "center",
    },
});

export default App;
