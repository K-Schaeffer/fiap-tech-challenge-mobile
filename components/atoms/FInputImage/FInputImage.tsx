import { useState } from 'react';
import FIconButton from '../FIconButton/FIconButton';
import * as ImagePicker from 'expo-image-picker';

interface FInputImageProps {
  onGetImage: (image: string) => void;
}

export default function FInputImage(props: FInputImageProps) {
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      props.onGetImage(result.assets[0].uri);
    }
  };

  return (
    <FIconButton
      options={{ icon: 'file-image', mode: 'contained', onPress: pickImage }}
    />
  );
}
