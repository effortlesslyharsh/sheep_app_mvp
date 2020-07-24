import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RoleSelectionComponent from './components/SheepRoleSelectionComponent'

export default function App() {
  return (
    <View style={styles.container}>
      <RoleSelectionComponent></RoleSelectionComponent>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
