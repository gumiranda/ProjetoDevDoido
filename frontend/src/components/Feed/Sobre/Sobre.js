import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import gs from '../../../utils/appStyles';

const Sobre = ({post}) => {
  return (
    <View style={styles.container}>
      <Text style={gs.title}>{post.name}</Text>
      <Text style={styles.info}>
        {post.price} &#8226; {post.location}
      </Text>
      <View style={gs.divider} />
      <Text style={gs.sectionTitle}>Sobre {post.name}</Text>
      <Text style={styles.about}>{post.about}</Text>
    </View>
  );
};

export default Sobre;
