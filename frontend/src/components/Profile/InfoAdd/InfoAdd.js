import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const InfoAdd = () => {
  return (
    <View style={styles.container}>
      <View style={styles.statContainer}>
        <Text style={styles.statNumber}>12k</Text>
        <Text style={styles.stat}>Followers</Text>
      </View>

      <View style={[styles.statContainer, styles.divider]}>
        <Text style={styles.statNumber}>1.7k</Text>
        <Text style={styles.stat}>Following</Text>
      </View>

      <View style={[styles.statContainer, styles.divider]}>
        <Text style={styles.statNumber}>48</Text>
        <Text style={styles.stat}>Trips</Text>
      </View>
    </View>
  );
};

export default InfoAdd;
