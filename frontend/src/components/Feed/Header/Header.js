import React from 'react';
import {View, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';
import {appColors} from '../../../utils/appColors';
import gs from '../../../utils/appStyles';

const Header = ({image}) => {
  return (
    <View>
      <Image source={image} style={{width: '100%', height: 250}} />
      <View style={styles.topButtons}>
        <AntDesign
          name="close"
          size={24}
          color={appColors.white}
          onPress={() => {}}
        />
        <View style={gs.rowCenter}>
          <AntDesign
            name="save"
            size={24}
            style={styles.topButtonRight}
            onPress={() => {}}
          />
          <AntDesign
            name="sharealt"
            size={24}
            style={styles.topButtonRight}
            onPress={() => {}}
          />
          <Entypo
            name="dots-three-vertical"
            size={18}
            style={styles.topButtonRight}
            onPress={() => {}}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;
