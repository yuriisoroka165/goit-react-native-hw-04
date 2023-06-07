import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
} from "react-native";

import { styles } from "./LoginScreenStyles";
import InputComponent from "../../components/InputComponent";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmitButtonPress = () => {
        console.log({ email, password });
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.loginContainer}>
                <Text style={styles.loginFormHeader}>Увійти</Text>
                <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                >
                    <View style={styles.loginForm}>
                        <InputComponent
                            placeholder={"Адреса електронної пошти"}
                            type={"email"}
                            name={"email"}
                            value={email}
                            onChangeText={setEmail}
                        />

                        <View style={{ position: "relative" }}>
                            <InputComponent
                                placeholder={"Пароль"}
                                type={"password"}
                                name={"password"}
                                secureTextEntry={!showPassword}
                                value={password}
                                onChangeText={setPassword}
                            />
                            <TouchableOpacity
                                style={{
                                    position: "absolute",
                                    right: 16,
                                    top: 16,
                                }}
                                onPress={togglePasswordVisibility}
                            >
                                <Text style={{ color: "#1B4371" }}>
                                    {showPassword ? "Приховати" : "Показати"}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>

                <TouchableOpacity
                    onPress={handleSubmitButtonPress}
                    style={styles.loginFormSubmitButton}
                    title="Зареєструватися"
                >
                    <Text
                        style={{
                            fontSize: 16,
                            textAlign: "center",
                            color: "#ffffff",
                        }}
                    >
                        Увійти
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text
                        style={{
                            fontSize: 16,
                            color: "#1B4371",
                            textAlign: "center",
                        }}
                    >
                        Немає фкаунту? Зареєструватися
                    </Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default LoginScreen;
