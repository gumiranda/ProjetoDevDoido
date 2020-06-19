import React from 'react';
import {View, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';
import gs from '../../../utils/appStyles';

const starColors = ['#e3ab53', '#e3ab53', '#e3ab53', '#e3ab53', '#8b6f43'];

const Avaliacao = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerStars}>
        <Text style={styles.title}>&nbsp;Avaliação</Text>
        <Text style={styles.title}>8.4</Text>

        <View style={gs.rowCenter}>
          {starColors.map((color, index) => {
            return (
              <Entypo
                name="star"
                size={14}
                color={color}
                key={index.toString()}
                style={{marginHorizontal: 2}}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
};
export default Avaliacao;
