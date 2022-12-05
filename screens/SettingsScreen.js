// import React in our code
import React, {useState, useEffect} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  PermissionsAndroid,
  Platform,
  Button,
  ImageBackground,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Geolocation from '@react-native-community/geolocation';

// import Loader from './loader';
const App = ({navigation}) => {
  const [currentLongitude, setCurrentLongitude] = useState('...');
  const [currentLatitude, setCurrentLatitude] = useState('...');
  const [locationStatus, setLocationStatus] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        // getOneTimeLocation();
        //  subscribeLocationLocation();
        navigation.navigate('MainTabScreen');
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            getOneTimeLocation();
            // subscribeLocationLocation();
          } else {
            setLocationStatus('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
    return () => {
      // eslint-disable-next-line no-undef
      Geolocation.clearWatch(watchID);
    };
  }, [navigation]);

  const getOneTimeLocation = () => {
    setLoading(true);
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        setLocationStatus('You are Here');
        setLoading(false);
        //getting the Longitude from the location json
        const currentLongitude = JSON.stringify(position.coords.longitude);
        //getting the Latitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);

        console.log('hear is ', currentLongitude, currentLatitude);

        // navigation.navigate('SignInScreen')
        //Setting Longitude state
        setCurrentLongitude(currentLongitude);

        //Setting Longitude state
        setCurrentLatitude(currentLatitude);
      },
      error => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };

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
            Location
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
        <Text>currentLatitude: {currentLatitude}</Text>
        <Text>currentLongitude: {currentLongitude}</Text>
        <Text>{locationStatus}</Text>
        <Button
          onPress={getOneTimeLocation}
          title="Get Location"
          color="#009933"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // height:10
  },
  boldText: {
    fontSize: 25,
    color: 'red',
    marginVertical: 16,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    // eslint-disable-next-line no-dupe-keys
    justifyContent: 'center',
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#F66664',
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Outfit',
  },
});

export default App;
