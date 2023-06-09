import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { styles } from "./HomeStyles";

const appTabs = createBottomTabNavigator();

const Home = () => {
    const navigation = useNavigation();
    const route = useRoute();
    return;
};

export default Home;
