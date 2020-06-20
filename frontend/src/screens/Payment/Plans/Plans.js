import React, {useState} from 'react';
import {Alert, View} from 'react-native';
import {useSelector} from 'react-redux';
import Carousel from 'react-native-snap-carousel';
import Background from '../../../components/Background/Background';
import SlideItem from '../../../components/Plans/SlideItem/SlideItem';
import appMetrics from '../../../utils/appMetrics';
import {Title} from './styles';
export default function Plans({navigation}) {
  const profile = useSelector(state => state.user.profile);
  const slideItems = [
    {
      id: 0,
      servicePrice: '30',
      services: [
        {
          id: 0,
          text: 'Chat ilimitado',
        },
        {
          id: 1,
          text: '30 Likes por dia',
        },
        {
          id: 2,
          text: 'Geolocalização ativada',
        },
        {
          id: 3,
          text: 'Suporte 24 horas',
        },
      ],
    },
    {
      id: 1,
      servicePrice: '60',
      services: [
        {
          id: 0,
          text: 'Chat ilimitado',
        },
        {
          id: 1,
          text: '60 Likes por dia',
        },
        {
          id: 2,
          text: 'Geolocalização ativada',
        },
        {
          id: 3,
          text: 'Suporte 24 horas',
        },
      ],
    },
    {
      id: 2,
      servicePrice: '90',
      services: [
        {
          id: 0,
          text: 'Chat ilimitado',
        },
        {
          id: 1,
          text: '90 Likes por dia',
        },
        {
          id: 2,
          text: 'Geolocalização ativada',
        },
        {
          id: 3,
          text: 'Suporte 24 horas',
        },
      ],
    },
  ];

  const _renderItem = ({item, index}) => {
    return (
      <SlideItem
        key={item.id}
        services={item.services}
        servicePrice={item.servicePrice}
      />
    );
  };
  const itemWidth = appMetrics.DEVICE_WIDTH - 85;

  return (
    <Background>
      <Title>Conheça nossos planos</Title>
      <Carousel
        sliderWidth={appMetrics.DEVICE_WIDTH}
        itemWidth={itemWidth}
        data={slideItems}
        renderItem={_renderItem}
        currentIndex={2}
      />
    </Background>
  );
}
