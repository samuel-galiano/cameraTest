import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { AppStyles as styles } from "./App.style"
import { Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [ladoCamera, setladoCamera] = useState<CameraType>('back');
  const [permissao, requestpermissao] = useCameraPermissions();

  if (!permissao) {
    return <View />;
  } else if (!permissao.granted) {
    return (
      <View style={styles.container}>
          <Text style={styles.message}>Precisamos de permissão para acessar a camera do dispositivo</Text>
          <TouchableOpacity onPress={requestpermissao}>
              <Text>Liberar Permissão</Text>
          </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <CameraView style={styles.camera} facing={ladoCamera}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => setladoCamera(current => (current === 'back' ? 'front' : 'back'))}>
            <Text style={styles.text}>Virar Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}