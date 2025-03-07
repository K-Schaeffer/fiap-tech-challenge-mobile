import { FontAwesome } from '@expo/vector-icons';
import { TextStyle, View } from 'react-native';
import { Button, ButtonProps, Text, TextProps } from 'react-native-paper';

interface FButtonProps {
  innerText: string;
  options?: ButtonProps;
  textProps?: TextProps<TextStyle>;
}

export default function FButton(props: FButtonProps) {
  return (
    <View>
      <Button {...props.options}>
        <Text {...props.textProps}>{props.innerText}</Text>
      </Button>
    </View>
  );
}
