import React from 'react';
import {View, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {appColors} from '../../../utils/appColors';
import styles from './styles';
import gs from '../../../utils/appStyles';

const Location = () => {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: appColors.pink, borderRadius: 18}}>
        <Entypo name="location-pin" size={36} color={appColors.text} />
      </View>
      <View style={{marginLeft: 8, flex: 1}}>
        <View>
          <Text style={gs.sectionTitle}>Switzerland</Text>
        </View>
        <View>
          <Text style={styles.distance}>237km away</Text>
        </View>
      </View>
      <Entypo name="chevron-right" size={24} color={appColors.darkHl} />
    </View>
  );
};
export default Location;
