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
import React, {useEffect, useState} from 'react';
import {Text, View, ImageBackground, FlatList} from 'react-native';
// import {Local} from './data.json';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const User = () => {
  const Data = require('./data.json');
  console.log('data', Data);
  //   return calculatedata;
  // });
  // const [data, setData]= useState(Local)
  //   useEffect(() => {
  //     console.log('enter', data);
  //     fetch(Local).then(response => {
  //       setData(response)
  //       console.log('data', response
  //       )})
  //       .catch(err=>console.log(err))
  //   });
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
            Local Json
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
        <FlatList
          data={Data}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <View
              style={{
                padding: 10,
                margin: 5,
                borderColor: 'red',
                borderWidth: 0.5,
                borderRadius: 15,
              }}>
              <Text>{item.id + '. ' + item.title}</Text>
              <Text>{item.body}</Text>
            </View>
          )}
        />
        {/* <Ionicons name="md-person-circle-outline" size={80} color="#006600" /> */}
      </View>
    </View>
  );
};

export default User;
