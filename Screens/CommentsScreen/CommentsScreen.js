import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";

import { styles } from "./CommentsScreenStyles";
import ReturnButton from "../../components/ReturnButton";
import postPhoto from "../../assets/images/fire.png";

const CommentsScreen = () => {
    const [currentPostPhoto, setCurrentPostPhoto] = useState(postPhoto);

    const handleReturnPress = () => {
        console.log("Logout");
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                style={{}}
                behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
                <View style={styles.commentsScreenContainer}>
                    <View style={styles.commentsHeaderContainer}>
                        <ReturnButton
                            onPress={handleReturnPress}
                        ></ReturnButton>
                        <Text style={styles.commentsHeader}>Коментарі</Text>
                    </View>
                    <View style={{ paddingLeft: 16, paddingRight: 16 }}>
                        <View style={styles.postPhotoContainer}>
                            <Image
                                source={currentPostPhoto}
                                style={{
                                    width: "100%",
                                    height: 240,
                                    borderRadius: 8,
                                }}
                            />
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

export default CommentsScreen;
