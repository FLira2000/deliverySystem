import React from 'react';
import {
    Button,
    Text,
    Icon
} from 'native-base'
import { StyleSheet } from 'react-native'

const MyButton = (props) => {
  return (
    <Button
      rounded
      success
      style={styles.confirmationButton}
      onPress={props.onPress}>
      <Icon name={'ios-checkbox'} />
      <Text
        style={{
          color: '#FFFFFF',
          fontSize: 17,
          fontWeight: 'bold',
        }}>
        Adicionar
      </Text>
    </Button>
  );
};

const styles = StyleSheet.create({
	confirmationButton: {
		marginStart: 25,
		marginEnd: 25,
		justifyContent: 'center',
	},
});

export default MyButton;
