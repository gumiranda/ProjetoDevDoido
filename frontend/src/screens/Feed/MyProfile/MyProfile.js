import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text, Image, SafeAreaView, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Background from '../../../components/Background/Background';
import styles from './styles';
import {appColors} from '../../../utils/appColors';
export default function ProfileDetails({navigation}) {
  const profile = useSelector(state => state.user.profile);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleBar}>
          <Ionicons name="ios-arrow-back" size={24} color={appColors.cor3} />
          <Ionicons name="md-more" size={24} color={appColors.cor3} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{alignSelf: 'center'}}>
            <View style={styles.profileImage}>
              <Image
                source={require('../../../assets/hotel.jpg')}
                style={styles.imageProfile}
                resizeMode="center"
              />
            </View>
            <View style={styles.dm}>
              <MaterialIcons name="chat" size={18} color={appColors.cor3} />
            </View>
            <View style={styles.active} />
            <View style={styles.add}>
              <Ionicons
                name="ios-add"
                size={48}
                color={appColors.cor3}
                style={{marginTop: 1, marginRight: 3}}
              />
            </View>
          </View>
          <View style={styles.infoContainer}>
            <Text
              style={{
                fontFamily: 'HelveticaNeue',
                color: appColors.secondClaro,
                fontWeight: '200',
                fontSize: 36,
              }}>
              Jullie
            </Text>
            <Text
              style={{
                fontFamily: 'HelveticaNeue',
                color: appColors.second5,
                fontSize: 14,
              }}>
              Photografha
            </Text>
          </View>
          <View style={styles.statsContainer}>
            <View style={styles.statsBox}>
              <Text
                style={{
                  fontFamily: 'HelveticaNeue',
                  color: appColors.secondClaro,
                  fontSize: 24,
                }}>
                483
              </Text>
              <Text style={styles.txtComSub}>Posts</Text>
            </View>
            <View style={styles.statsBoxAlt}>
              <Text style={styles.text24}>45,844</Text>
              <Text style={styles.txtComSub}>Followers</Text>
            </View>
            <View style={styles.statsBox}>
              <Text style={styles.text24}>302</Text>
              <Text style={styles.txtComSub}>Following</Text>
            </View>
          </View>
          <View style={{marginTop: 32}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.mediaImageContainer}>
                <Image
                  source={require('../../../assets/hotel.jpg')}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.mediaImageContainer}>
                <Image
                  source={require('../../../assets/hotel.jpg')}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.mediaImageContainer}>
                <Image
                  source={require('../../../assets/hotel.jpg')}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.mediaImageContainer}>
                <Image
                  source={require('../../../assets/hotel.jpg')}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.mediaImageContainer}>
                <Image
                  source={require('../../../assets/hotel.jpg')}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.mediaImageContainer}>
                <Image
                  source={require('../../../assets/hotel.jpg')}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.mediaImageContainer}>
                <Image
                  source={require('../../../assets/hotel.jpg')}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.mediaImageContainer}>
                <Image
                  source={require('../../../assets/hotel.jpg')}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
            </ScrollView>
            <View style={styles.mediaCount}>
              <Text style={styles.text24Dif}>70</Text>
              <Text style={styles.text12}>Fotos</Text>
            </View>
            <Text style={styles.subTextRecent}>Recent Activity</Text>
            <View style={{alignItems: 'center'}}>
              <View style={styles.recentItem}>
                <View style={styles.recentItemIndicator} />
                <View style={{width: 250}}>
                  <Text style={styles.text300}>
                    Started following
                    <Text style={{fontWeight: '400'}}>
                      Fulano e cicrano <Text style={{fontWeight: '400'}} />
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Background>
  );
}
