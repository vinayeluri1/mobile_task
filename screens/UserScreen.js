// /* eslint-disable react-native/no-inline-styles */
// import React from 'react';
// import {Text, View} from 'react-native';
// // import { Ionicons } from "@expo/vector-icons";

// const User = () => {
//   return (

//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text style={{color: '#006600', fontSize: 40}}>User Screen!</Text>
//       {/* <Ionicons name="md-person-circle-outline" size={80} color="#006600" /> */}
//     </View>
//   );
// };

// export default User;
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, ImageBackground, Image} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const User = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          padding: 5,
          shadowColor: '#000',
          borderBottomColor: 'gray',
          borderBottomWidth: 1,
          shadowOffset: {
            width: 1,
            height: 1,
          },
          shadowOpacity: 0.18,
          shadowRadius: 1.0,

          elevation: 1,
        }}>
        <View style={{width: '35%'}}>
          <MaterialCommunityIcons name="weight-lifter" size={26} color="gray" />
        </View>
        <View style={{width: '52%'}}>
          <Text style={{fontSize: 23, color: '#000', fontWeight: '600'}}>
            GGTFIT
          </Text>
        </View>
        <View>
          <Ionicons
            style={{left: 10}}
            name="wallet-outline"
            size={20}
            color="gray"
          />
          <Text style={{fontSize: 10, color: '#FF33D7'}}>10,000.00</Text>
        </View>
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: '#006600', fontSize: 40}}>calender Screen!</Text>
        {/* <Ionicons name="md-person-circle-outline" size={80} color="#006600" /> */}
      </View>
    </View>
  );
};

export default User;
