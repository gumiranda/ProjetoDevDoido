import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const InfoAdd = () => {
  return (
    <View style={styles.container}>
      <View style={styles.statContainer}>
        <Text style={styles.statNumber}>12k</Text>
        <Text style={styles.stat}>Seguidores</Text>
      </View>

      <View style={styles.statContainerDivider}>
        <Text style={styles.statNumber}>1.7k</Text>
        <Text style={styles.stat}>Seguindo</Text>
      </View>

      <View style={styles.statContainerDivider}>
        <Text style={styles.statNumber}>48</Text>
        <Text style={styles.stat}>Posts</Text>
      </View>
    </View>
  );
};

export default InfoAdd;
