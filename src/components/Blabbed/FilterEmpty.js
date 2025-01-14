import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import empty_filter from '../../../public/assets/img/empty_filter.png';
const {width, height} = Dimensions.get('window');
const FilterEmoty = () => (
  <View
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      height: null,
      width: width,
    }}>
    <Image
      source={empty_filter}
      style={{height: width / 2, width: width / 2, opacity: 0.75}}
      resizeMode="center"
    />
    <Text style={{color: 'white', marginTop: width / 20, fontSize: width / 25}}>
      Oh uh, you've got nothing.
    </Text>
  </View>
);

export default FilterEmoty;
