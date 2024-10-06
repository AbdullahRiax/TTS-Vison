import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, PermissionsAndroid, Platform, ActivityIndicator, ScrollView } from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import { getTextFromImage } from './GoogleVision';
import Tts from 'react-native-tts';  // Import TTS

export default function App() {
  const [imageData, setImageData] = useState(null);
  const [converted, setConverted] = useState(null);
  const [loading, setLoading] = useState(false);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Camera Permission",
          message: "App needs camera access to take photos.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };
//
  const openCamera = async () => {
    if (Platform.OS === 'android') {
      const hasPermission = await requestCameraPermission();
      if (!hasPermission) {
        Alert.alert("Permission denied", "Camera permission is required.");
        return;
      }
    }

    const res = await launchCamera({ mediaType: 'photo', saveToPhotos: true, includeBase64: true });
    if (res.didCancel) {
      console.log('User cancelled the camera');
    } else if (res.errorCode) {
      console.log('Camera error: ', res.errorMessage);
    } else if (res.assets && res.assets.length > 0) {
      setImageData(res.assets[0]);
    }
  };

  const getData = async () => {
    if (imageData && imageData.base64) {
      setLoading(true);
      try {
        const res = await getTextFromImage(imageData.base64);
        const detectedText = res.responses[0].textAnnotations[0].description;
        setConverted(detectedText);
        Tts.speak(detectedText);  
      } catch (error) {
        console.error("Error in getTextFromImage: ", error);
        Alert.alert("Error", "Failed to convert the image");
      } finally {
        setLoading(false);
      }
    } else {
      Alert.alert("Error", "No image or base64 data available");
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {imageData != null && (
          <Image 
            source={{ uri: imageData.uri }} 
            style={{ width: "90%", height: 500 }} 
          />
        )}
        
        <TouchableOpacity 
          onPress={openCamera}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Click Photo</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={getData}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Click to Convert</Text>
        </TouchableOpacity>

        {loading ? (
          <ActivityIndicator size="large" color="blue" />
        ) : (
          <Text style={styles.resultText}>{converted}</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 45
  },
  button: {
    marginTop: 30,
    width: "90%",
    alignSelf: "center",
    height: 50,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 20
  },
  resultText: {
    color: "black",
    fontSize: 20,
    marginTop: 20
  }
});
