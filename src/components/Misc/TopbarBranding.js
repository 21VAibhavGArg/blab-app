import React, {useState} from 'react';
import {View, Text, Alert, TouchableOpacity, Modal} from 'react-native';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import * as COLORS from '../../constants/colors';

const TopbarBranding = ({navigation}) => {
  const {width, height} = Dimensions.get('window');
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      {showMenu && (
        <Modal animationType="slide" visible={showMenu} transparent={true}>
          <TouchableOpacity
            onPress={() => {
              setShowMenu(!showMenu);
            }}
            style={{
              flex: 1,
              justifyContent: 'center',
              height: height,
              width: width,
              backgroundColor: 'blue',
            }}>
            <Text>qwe</Text>
          </TouchableOpacity>
        </Modal>
      )}
      <View
        style={{
          height: null,
          width,
          padding: 15,
          backgroundColor: COLORS.GRAY_15,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{color: 'white', fontSize: width / 16, fontWeight: 'bold'}}>
          Blab for IG
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <TouchableOpacity
            style={{marginHorizontal: width / 25}}
            onPress={() => {
              navigation.navigate('WelcomeScreen');
            }}>
            <Icon
              name="help"
              style={{color: COLORS.DIS_SECONDARY_COLOR, fontSize: width / 15}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginHorizontal: width / 25, marginRight: 0}}
            onPress={() => {
              setShowMenu(!showMenu);
            }}>
            <Icon
              name="settings-sharp"
              // name="ellipsis-vertical"
              style={{color: COLORS.DIS_SECONDARY_COLOR, fontSize: width / 15}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default TopbarBranding;
