import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {appColors} from '../../../utils/appColors';
import gs from '../../../utils/appStyles';

const Header = ({user}) => {
  const name = `${user?.name?.first} ${user?.name?.last}`;
  return (
    <LinearGradient colors={[appColors.orange, appColors.pink]}>
      <View style={{marginHorizontal: 32, paddingVertical: 16}}>
        <View style={gs.rowBetween}>
          <Ionicons name="md-arrow-back" color={appColors.text} size={32} />
          <Entypo name="dots-three-vertical" color={appColors.text} size={32} />
        </View>

        <View style={styles.imageContainer}>
          <View>
            <View style={styles.check}>
              <Ionicons name="md-checkmark" size={20} color={appColors.pink} />
            </View>

            <Image
              source={{uri: user?.picture?.large}}
              style={{width: 100, height: 100, borderRadius: 32}}
            />
          </View>
        </View>

        <View style={[gs.center, {marginVertical: 12}]}>
          <Text style={gs.title}>{name}</Text>
          <Text style={[gs.subTitle, {marginTop: 8}]}>Traveler/Blogger</Text>

          <TouchableOpacity style={styles.follow}>
            <Entypo name="plus" size={20} color="rgba(255,255,255,0.6)" />
            <Text style={styles.followText}>Follow</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Header;
