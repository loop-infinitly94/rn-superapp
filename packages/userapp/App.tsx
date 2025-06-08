// create a button

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
      }}
    >
      <Text style={{ color: '#FFFFFF', fontSize: 16 }}>{title}mmmm</Text>
    </TouchableOpacity>
  );
};

export default function App() {

  const handlePress = () => {
    // Navigate to the home screen
    console.log('Navigating to Home');
    // Here you would typically use a navigation library like React Navigation
    // For example: navigation.navigate('Home');
  };

  return (
    <Button title="Go to Home" onPress={handlePress} />
  );
};
