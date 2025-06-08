// create a component which renders details of user profile
// the user details ll be received from the host app via the userapp package
// and displayed in the user profile screen
// This component will be used in the host app's Profile screen
// The user details will be passed as props from the host app to this component
// The user details will be displayed in a simple format

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface UserProfileProps {
  readonly username: string;
  readonly email: string;
}

export default function UserProfile({ username, email }: UserProfileProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>
      <Text style={styles.label}>Username:</Text>
      <Text style={styles.value}>{username}</Text>
      <Text style={styles.label}>Email:</Text>
      <Text style={styles.value}>{email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
  },
});
