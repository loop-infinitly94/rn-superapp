
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Button } from '../components/Button';
import { register } from '../api/authApi';

export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation<any>();

    const handleRegister = async () => {
        // Handle registration logic here
        console.log('Registering:', { username, email, firstName, lastName, password });
        const userData = {
            username,
            email,
            firstName,
            lastName,
            password,
        };

        try {
            await register(userData);
            // Navigate to the login screen after successful registration
            navigation.navigate('Login');
        } catch (error: any) {
            console.error('Error message:', error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
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
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="First Name"
                value={firstName}
                onChangeText={setFirstName}
            />
            <TextInput
                style={styles.input}
                placeholder="Last Name"
                value={lastName}
                onChangeText={setLastName}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Button
                title="Register"
                onPress={handleRegister}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#fff',
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
        borderRadius: 4,
        paddingHorizontal: 10,
        marginBottom: 12,
    },
});
