import { View } from 'react-native';
import { IconButton, IconButtonProps } from 'react-native-paper';

type FIconButtonProps = {
  options?: IconButtonProps;
};

export default function FIconButton(props: FIconButtonProps) {
  return (
    <View>
      <IconButton
        {...props.options}
        icon={props.options?.icon ?? 'default-icon'}
      />
    </View>
  );
}
