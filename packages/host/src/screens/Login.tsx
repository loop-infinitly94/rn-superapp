// create a simple login page with username and password fields and also a button to login
// create also a register buttin to navigate to the register page

import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation<any>();
    const auth = useAuth();
    if (!auth) {
        throw new Error('AuthContext is not available');
    }
    const { login } = auth;

    const handleLogin = async () => {
        // Handle login logic here
        console.log('Logging in:', { username, password });
        // navigation.navigate('Home'); // Navigate to Home screen after login
        try {
            await login({ username, password });
            // Navigate to the home screen after successful login
            navigation.navigate('Profile');
        } catch (error) {
            console.error('Login error:', error);
            // Handle login error (e.g., show an alert)
        }
    };

    const handleRegister = () => {
        navigation.navigate('Register'); // Navigate to Register screen
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                autoCapitalize="none"
                autoCorrect={false}
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Login" onPress={handleLogin} />
            <Button title="Register" onPress={handleRegister} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 16,
    },
});
