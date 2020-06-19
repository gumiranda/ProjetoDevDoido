import React from 'react';
import {View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {appColors} from '../../../utils/appColors';
import styles from './styles';

const ActionButton = () => {
  return (
    <View style={styles.bookmark}>
      <Feather name="bookmark" size={24} color={appColors.pink} />
    </View>
  );
};
export default ActionButton;
