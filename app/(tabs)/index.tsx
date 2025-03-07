import { Image, StyleSheet, Platform, ToastAndroid, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Button, SnackbarProps } from 'react-native-paper';
import { MyChart } from '@/components/MyChart';
import FButton from '@/components/atoms/FButton/FButton';
import FIconButton from '@/components/atoms/FIconButton/FIconButton';
import FInput from '@/components/atoms/FInput/FInput';
import { useState } from 'react';
import FAlert, {
  AlertMessageColor,
  FAlertModel,
} from '@/components/atoms/FAlert/FAlert';
import FInputImage from '@/components/atoms/FInputImage/FInputImage';

export default function HomeScreen() {
  const [image, setImage] = useState<string>('');
  const [textExample, setTextExample] = useState<string>('');
  const [alert, setAlert] = useState<FAlertModel>();

  const handleInputChange = (input: string) => {
    setTextExample(input);
  };

  const handleShowAlert = () => {
    const alertPopUp: FAlertModel = {
      type: AlertMessageColor.Success,
      textAlert: 'Alerta de teste',
      options: {
        visible: true,
        onDismiss: () => handleHiddenAlert(),
        action: { label: 'X' },
        duration: 2000,
        children: null,
      },
    };
    setAlert(alertPopUp);
  };

  const handleHiddenAlert = () => {
    setAlert(undefined);
  };

  const onGetImage = (img: string) => {
    setImage(img);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{' '}
          to see changes. Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this
          starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <Button icon="camera">Press me</Button>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText>{' '}
          to get a fresh <ThemedText type="defaultSemiBold">app</ThemedText>{' '}
          directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <MyChart />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <FButton
          innerText="Teste"
          options={{
            mode: 'contained',
            children: null,
            onPress: () => handleShowAlert(),
          }}
          textProps={{
            style: { fontWeight: '600', color: 'white' },
            children: null,
          }}
        />
        <FIconButton
          options={{
            icon: 'camera',
            mode: 'contained',
          }}
        />
        <FInput
          options={{
            value: textExample,
            onChangeText: (input: string) => handleInputChange(input),
          }}
        />
        <FInputImage onGetImage={onGetImage} />
        {image && (
          <View>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
        )}
      </ThemedView>

      <FAlert
        textAlert={alert?.textAlert ?? ''}
        type={alert?.type ?? AlertMessageColor.Info}
        options={alert?.options}
      />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  image: {
    width: 200,
    height: 200,
  },
});
