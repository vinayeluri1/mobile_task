/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json',
    )
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

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
            Api call
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
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
        }}>
        {isLoading ? (
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 25}}>Loading...</Text>
          </View>
        ) : (
          <View>
            <Text style={{fontSize: 18, color: 'green', textAlign: 'center'}}>
              {data.title}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: 'green',
                textAlign: 'center',
                paddingBottom: 10,
              }}>
              Articles:
            </Text>
            <FlatList
              data={data.articles}
              keyExtractor={({id}, index) => id}
              renderItem={({item}) => (
                <Text>{item.id + '. ' + item.title}</Text>
              )}
            />
          </View>
        )}

        {/* <Button onPress={getOneTimeLocation} title="Button 2" color="#009933" /> */}
      </View>
      {/* <View style={{flex: 1, padding: 24}}>
        {isLoading ? (
          <View style={{justifyContent:'center', alignItems:'center'}}>
            <Text>Loading...</Text>
          </View>
        ) : (
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 18, color: 'green', textAlign: 'center'}}>
              {data.title}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: 'green',
                textAlign: 'center',
                paddingBottom: 10,
              }}>
              Articles:
            </Text>
            <FlatList
              data={data.articles}
              keyExtractor={({id}, index) => id}
              renderItem={({item}) => (
                <Text>{item.id + '. ' + item.title}</Text>
              )}
            />
          </View>
        )}
      </View> */}
    </View>
  );
};

export default App;
