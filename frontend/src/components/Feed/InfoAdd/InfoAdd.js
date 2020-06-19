import React from 'react';
import {View, Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import {appColors} from '../../../utils/appColors';
import gs from '../../../utils/appStyles';

const InfoAdd = () => {
  return (
    <View style={gs.sectionContainer}>
      <Text style={gs.sectionTitle}>Informações adicionais</Text>

      <View style={styles.infosContainer}>
        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <Feather name="wifi" size={24} color={appColors.lightHl} />
          </View>
          <Text style={styles.infoName}>WI-FI</Text>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <Ionicons
              name="md-restaurant"
              size={24}
              color={appColors.lightHl}
            />
          </View>
          <Text style={styles.infoName}>Restaurante</Text>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <FontAwesome5 name="swimmer" size={20} color={appColors.lightHl} />
          </View>
          <Text style={styles.infoName}>Piscina</Text>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <Entypo name="drink" size={24} color={appColors.lightHl} />
          </View>
          <Text style={styles.infoName}>Bar</Text>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <Ionicons name="ios-car" size={24} color={appColors.lightHl} />
          </View>
          <Text style={styles.infoName}>Estacionamento</Text>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <Feather name="speaker" size={24} color={appColors.lightHl} />
          </View>
          <Text style={styles.infoName}>Strip Club</Text>
        </View>
      </View>
    </View>
  );
};

export default InfoAdd;
