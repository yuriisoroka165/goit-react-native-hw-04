import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import CreatePostsScreen from "../CreatePostsScreen";
import PostsScreen from "../PostsScreen";
import ProfileScreen from "../ProfileScreen";
import LogoutButton from "../../components/LogoutButton";
import ReturnButton from "../../components/ReturnButton";
import { styles } from "./HomeStyles";

const AppTabs = createBottomTabNavigator();

const Home = () => {
    const navigation = useNavigation();
    const route = useRoute();
    return (
        <AppTabs.Navigator>
            <AppTabs.Screen
                name="PostsScreen"
                component={PostsScreen}
                options={{
                    headerTitle: () => <Text>Публікації</Text>,
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Login")}
                        >
                            <LogoutButton />
                        </TouchableOpacity>
                    ),
                    tabBarIcon: () => (
                        <View
                            styles={{
                                borderStyle: "solid",
                                borderColor: "#E8E8E8",
                                borderBottomWidth: 1,
                            }}
                        ></View>
                    ),
                }}
            />
            <AppTabs.Screen
                name="CreatePostsScreen"
                component={CreatePostsScreen}
                initialParams={{ user: route.params.params.user }}
                options={{
                    headerTitle: () => <Text>Створити публікацію</Text>,
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("Home", {
                                    screen: `${route.params.screen}`,
                                    params: {
                                        user: route.params.params.user,
                                    },
                                })
                            }
                        >
                            <ReturnButton />
                        </TouchableOpacity>
                    ),
                }}
            />
            <AppTabs.Screen name="ProfileScreen" component={ProfileScreen} />
        </AppTabs.Navigator>
    );
};

export default Home;
