import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { AppStyles as styles } from "./App.style"

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
