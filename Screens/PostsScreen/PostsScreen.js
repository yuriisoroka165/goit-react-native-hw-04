import { View, Text } from "react-native";

import { styles } from "./PostsScreenStyles";
import LogoutButton from "../../components/LogoutButton";
import AppControls from "../../components/AppControls";
import AuthenticatedUserInfo from "../../components/AuthenticatedUserInfo";

const PostsScreen = () => {
    const handleLogoutPress = () => {
        console.log("Logout");
    };

    return (
        <View style={styles.postsScreenContainer}>
            <View style={styles.postsScreenHeaderContainer}>
                <Text style={styles.postsScreenHeader}>Публікації</Text>
                <LogoutButton onPress={handleLogoutPress}></LogoutButton>
            </View>
            <AuthenticatedUserInfo />
            <AppControls />
        </View>
    );
};

export default PostsScreen;
