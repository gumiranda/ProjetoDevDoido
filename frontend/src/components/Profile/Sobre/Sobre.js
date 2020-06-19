import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import gs from '../../../utils/appStyles';

const Sobre = () => {
  return (
    <View style={styles.container}>
      <Text style={gs.sectionTitle}> ABOUT ME </Text>
      <Text style={styles.about}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Text>
    </View>
  );
};

export default Sobre;
