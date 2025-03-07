import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Snackbar, SnackbarProps } from 'react-native-paper';

export enum AlertMessageColor {
  Success = 'green',
  Error = 'red',
  Warning = 'yellow',
  Info = 'blue',
}

export interface FAlertModel {
  textAlert: string;
  type: AlertMessageColor;
  options?: SnackbarProps;
}

const alertMessageColors = {
  [AlertMessageColor.Success]: 'green',
  [AlertMessageColor.Error]: 'red',
  [AlertMessageColor.Warning]: 'yellow',
  [AlertMessageColor.Info]: 'blue',
};

export default function FAlert(props: FAlertModel) {
  return (
    <View>
      <Snackbar
        visible={props.options?.visible!}
        onDismiss={() => props.options?.onDismiss()}
        {...props.options}
        style={{ backgroundColor: alertMessageColors[props.type] }}
      >
        {props.textAlert}
      </Snackbar>
    </View>
  );
}
