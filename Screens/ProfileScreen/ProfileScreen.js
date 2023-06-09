import React, { useState } from "react";
import { View, Image, Text, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";

import { styles } from "./ProfileScreenStyles";
import RegistrationImageAddButton from "../../components/RegistrationImageAddButton";
import RegistrationImageRemoveButton from "../../components/RegistrationImageRemoveButton";
import LogoutButton from "../../components/LogoutButton";
import PostComponent from "../../components/PostComponent/PostComponent";

const ProfileScreen = () => {
    const [login, setLogin] = useState("Natali Romanova");
    const [userAvatar, setUserAavatar] = useState(userAvatar);

    const handleRemoveImage = () => {
        setUserAavatar(null);
    };

    const uploadAvatar = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });

        if (!result.canceled) setUserAavatar(result.assets[0].uri);
    };

    const posts = [
        {
            img: "https://izki.ua/image/cache/catalog/statti/maxresdefault-335x200w.jpg",
            description: "123",
            coments: 0,
            likes: 50,
            location: "Ukraine",
        },
        {
            img: "https://img.tsn.ua/cached/292/tsn-8c5f6b23d1211bb14030cc3abd4583f7/thumbs/x/bf/74/1d750cdae19c5075e0123ec455ee74bf.jpeg",
            description: "456",
            coments: 84,
            likes: 58,
            location: "Ukraine",
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/%D0%93%D1%80%D0%B0%D0%BC%D0%BF%D0%B8%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B5_%D0%B3%D0%BE%D1%80%D1%8B.jpg/280px-%D0%93%D1%80%D0%B0%D0%BC%D0%BF%D0%B8%D0%B0%D0%BD%D1%81%D0%BA%D0%B8%D0%B5_%D0%B3%D0%BE%D1%80%D1%8B.jpg",
            description: "789",
            coments: 0,
            likes: 56,
            location: "Ukraine",
        },
        {
            img: "https://planetofhotels.com/guide/sites/default/files/styles/big_gallery_image/public/text_gallery/gori.jpg",
            description: "012",
            coments: 3,
            likes: 76,
            location: "Ukraine",
        },
    ];
    const post = posts[1];

    return (
        <View style={styles.profileContainer}>
            <View style={styles.profileLogoutButton}>
                <LogoutButton />
            </View>

            <View style={styles.userImageContainer}>
                {userAvatar && (
                    <Image
                        source={{ uri: userAvatar }}
                        style={{
                            width: 120,
                            height: 120,
                            borderRadius: 16,
                        }}
                    />
                )}
                {!userAvatar ? (
                    <RegistrationImageAddButton
                        onPress={uploadAvatar}
                    ></RegistrationImageAddButton>
                ) : (
                    <RegistrationImageRemoveButton
                        onPress={handleRemoveImage}
                    ></RegistrationImageRemoveButton>
                )}
            </View>

            <Text style={styles.profileHeader}>{login}</Text>
            <ScrollView
                style={{ margin: 0, padding: 0 }}
                showsVerticalScrollIndicator={false}
            >
                {/* <PostComponent
                    image={post.img}
                    description={post.description}
                    comments={post.coments}
                    likes={post.likes}
                    location={post.location}
                /> */}
                {posts.map(({ img, description, likes, coments, location }) => {
                    return (
                        <PostComponent
                            key={description}
                            image={img}
                            description={description}
                            likes={likes}
                            comments={coments}
                            location={location}
                        />
                    );
                })}
            </ScrollView>
        </View>
    );
};

export default ProfileScreen;
