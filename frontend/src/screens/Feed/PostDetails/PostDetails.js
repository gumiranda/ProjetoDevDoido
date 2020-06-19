import React from 'react';
import {useSelector} from 'react-redux';
import {View, ScrollView} from 'react-native';
import Background from '../../../components/Background/Background';
import Header from '../../../components/Feed/Header/Header';
import ActionButton from '../../../components/Feed/ActionButton/ActionButton';
import Avaliacao from '../../../components/Feed/Avaliacao/Avaliacao';
import InfoAdd from '../../../components/Feed/InfoAdd/InfoAdd';
import Sobre from '../../../components/Feed/Sobre/Sobre';
import styles from './styles';

export default function PostDetails({navigation}) {
  const profile = useSelector(state => state.user.profile);
  const post = {
    name: profile.nome,
    price: '$800',
    location: 'New York',
    about:
      'Step inside The Kimberly Hotel and feel as if you’ve found your very own pied-a-terre in Midtown New York City. Our intimate, classically styled lobby’s antique furnishings and circular salt-water aquarium provide a calming respite for families, corporate travelers and leisure guests seeking a unique and authentic alternative to a chain hotel.',
  };
  return (
    <Background>
      <ScrollView styles={styles.container}>
        <View styles={styles.container}>
          <Header image={require('../../../assets/hotel.jpg')} />
          <View>
            <ActionButton />
            <Sobre post={post} />
            <Avaliacao />
            <InfoAdd />
          </View>
        </View>
      </ScrollView>
    </Background>
  );
}
