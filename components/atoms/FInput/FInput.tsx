import { View } from 'react-native';
import { TextInput, TextInputProps } from 'react-native-paper';

type FInputProps = {
  options?: TextInputProps;
};

export default function FInput(props: FInputProps) {
  return (
    <View>
      <TextInput
        {...props.options}
        value={props.options?.value ?? ''}
        placeholder={props.options?.placeholder ?? 'Digite...'}
      />
    </View>
  );
}
