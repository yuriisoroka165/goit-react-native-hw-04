import React, { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { nanoid } from "nanoid";

import { styles } from "./CommentsScreenStyles";
import ReturnButton from "../../components/ReturnButton";
import postPhoto from "../../assets/images/fire.png";
import userPhoto from "../../assets/images/User.jpg";
import commentatorPhoto from "../../assets/images/comentator.png";
import CommentComponent from "../../components/CommentComponent";
import CommentInput from "../../components/CommentInput/CommentInput";

const CommentsScreen = () => {
    const [currentPostPhoto, setCurrentPostPhoto] = useState(postPhoto);

    const comments = [
        {
            user: "user1",
            userIcon: commentatorPhoto,
            text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
            date: "09 червня, 2020 | 09:14",
        },
        {
            user: "owner",
            userIcon: userPhoto,
            text: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
            date: "09 червня, 2020 | 09:14",
        },
        {
            user: "user2",
            userIcon: commentatorPhoto,
            text: "Thank you! That was very helpful!",
            date: "09 червня, 2020 | 09:20",
        },
    ];

    const handleReturnPress = () => {
        console.log("Logout");
    };

    return (
        <View style={styles.commentsScreenContainer}>
            <View style={styles.commentsHeaderContainer}>
                <ReturnButton onPress={handleReturnPress}></ReturnButton>
                <Text style={styles.commentsHeader}>Коментарі</Text>
            </View>
            <View
                style={{
                    paddingLeft: 16,
                    paddingRight: 16,
                    marginBottom: 20,
                }}
            >
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
            <ScrollView
                style={{ margin: 0, padding: 0 }}
                showsVerticalScrollIndicator={false}
            >
                {comments.map(({ user, text, date, userIcon }) => {
                    return (
                        <CommentComponent
                            key={user}
                            user={user}
                            text={text}
                            date={date}
                            userIcon={userIcon}
                        />
                    );
                })}
            </ScrollView>
            <CommentInput />
        </View>
    );
};

export default CommentsScreen;
