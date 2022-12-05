/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, ImageBackground, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
// import { Ionicons } from "@expo/vector-icons";
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Home = () => {
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
            Home
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
      <ScrollView
        style={{
          padding: 15,
        }}>
        <View
          style={
            {
              //padding: 15,
            }
          }>
          <Text style={{fontSize: 20, color: '#FF33D7'}}>
            hello nimi <Entypo name="hand" size={26} color="orange" />
          </Text>
          <Text style={{fontSize: 20, color: '#3392FF'}}>Welcome back!</Text>
        </View>
        <Text />
        <View
          style={{
            // padding: 15,
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: '85%',
            }}>
            <Text style={{fontSize: 10, color: '#FF33D7'}}>reminder</Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 10,
                color: '#3392FF',
                textDecorationLine: 'underline',
              }}>
              See Details
            </Text>
          </View>
        </View>
        <View>
          <ImageBackground
            imageStyle={{borderRadius: 16}}
            style={{
              top: 5,
              width: '100%',
              height: 150,
              borderRadius: 15,
              justifyContent: 'center',
              //   padding: 15,
              flexDirection: 'row',
              alignItems: 'center',
            }}
            source={require('./Images/background.jpeg')}
            resizeMode="cover">
            <View style={{width: '60%'}}>
              <Text style={{fontSize: 17, color: '#fff'}}>30 day byshape</Text>
              <Text style={{fontSize: 17, color: '#fff'}}>lift reminder</Text>
              <Text style={{fontSize: 10, color: 'gray'}}>
                you will complet 5 exercise Everyday, and with each passing day,
                the reps will increse by one
              </Text>
            </View>
            <View>
              <Image
                style={{width: 100, height: 150}}
                source={require('./Images/lady.jpeg')}
              />
            </View>
          </ImageBackground>
        </View>
        <Text />
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 22, color: '#3392FF'}}>ggtpass</Text>
          <Text style={{fontSize: 18, color: '#000'}}>
            One membership for your fitness
          </Text>
          <Text style={{fontSize: 13, color: '#FF33D7'}}>
            try for subscribe
          </Text>
        </View>
        <View
          style={{
            //   marginLeft: 40,
            marginTop: 10,
            //   paddingTop: 20,
            paddingBottom: 20,
            //   backgroundColor: '#68a0cf',
            borderRadius: 10,
            borderWidth: 1,
            borderBottomColor: 'gray',
          }}>
          <Image
            //   imageStyle={{borderRadius:10}}
            style={{
              width: '100%',
              height: 150,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
            source={require('./Images/fitnessgirl.jpeg')}
          />
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={{width: '80%'}}>
              <Text style={{fontSize: 18, color: '#FC4C90'}}>
                40 days full body
              </Text>
              <Text style={{fontSize: 18, color: '#FC4C90'}}>
                transformation
              </Text>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                <Feather name="user" size={20} color="#3392FF" />
                <Text style={{color: '#3392FF'}}>45</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <AntDesign name="star" size={10} color="orange" />
                <AntDesign name="star" size={10} color="orange" />
                <AntDesign name="star" size={10} color="orange" />
                <AntDesign name="star" size={10} color="orange" />
                <AntDesign name="staro" color="orange" size={10} />
              </View>
            </View>
          </View>
          <View
            style={{
              top: 20,
              backgroundColor: 'pink',
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomEndRadius: 10,
              borderBottomLeftRadius: 10,
              padding: 10,
            }}>
            <Text style={{fontSize: 12, color: '#fff'}}>Buy now</Text>
          </View>
        </View>
        <Text />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#E779F8',
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 20, color: '#fff'}}>People of ggtfit</Text>
          <Text style={{fontSize: 19, color: '#fff'}}>fitness</Text>
          <Image
            //   imageStyle={{borderRadius:10}}
            // style={{
            //   width: '100%',
            //   height: 150,
            //   borderTopLeftRadius: 10,
            //   borderTopRightRadius: 10,
            // }}
            source={require('./Images/boygirl.jpeg')}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                borderColor: 'red',
                borderWidth: 1,
                borderRadius: 8,
                right: 10,
                padding: 2,
              }}>
              <AntDesign name="left" size={20} color="#fff" />
            </View>
            <ImageBackground
              imageStyle={{borderRadius: 16}}
              style={{
                height: 100,
                width: 200,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              source={require('./Images/background.jpeg')}
              resizeMode="cover">
              <Text style={{color: '#000', fontSize: 10}}>
                lorem ipsum is simply dummy text of the{' '}
              </Text>
              <Text style={{color: '#000', fontSize: 10}}>
                printing and typesetting industry.{' '}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 5,
                }}>
                <Image
                  //   imageStyle={{borderRadius:10}}
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                  }}
                  source={require('./Images/women.jpeg')}
                />
                <Text style={{color: '#3392FF', fontSize: 8, left: 5}}>
                  Anklita Shani
                </Text>
              </View>
            </ImageBackground>
            <View
              style={{
                borderColor: 'red',
                borderWidth: 1,
                borderRadius: 8,
                left: 10,
                padding: 2,
              }}>
              <AntDesign name="right" size={20} color="#fff" />
            </View>
          </View>
          <Text />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'pink', fontSize: 22}}>ggtfit Facts</Text>
          <Text style={{fontSize: 18, color: '#000'}}>
            Lorem ipsum is simply dummy text of the{' '}
          </Text>
          <Text style={{fontSize: 18, color: '#000'}}>
            printing and typesetting industry.{' '}
          </Text>
          <View style={{borderRadius: 10}}>
            <Image
              //   imageStyle={{borderRadius:10}}
              style={{
                width: 380,
                height: 200,
                borderRadius: 10,
              }}
              source={require('./Images/fitnessgirl.jpeg')}
            />
            <View
              //   imageStyle={{borderRadius: 16}}
              style={{
                bottom: 50,
                borderTopEndRadius: 16,
                borderTopLeftRadius: 16,
                borderBottomEndRadius: 16,
                borderBottomLeftRadius: 16,
                height: 170,
                width: 330,
                justifyContent: 'center',
                // alignItems: 'center',
                borderColor: 'red',
                borderWidth: 2,
                backgroundColor: '#fff',
                left: 25,
                padding: 5,
              }}
              resizeMode="cover">
              <Text style={{fontSize: 13, color: '#3392FF'}}>
                Also known as filler or dummy text, this is text copy that
                serves to fill a space without saying anything meaningful.{' '}
              </Text>
              <View
                style={{
                  borderBottomColor: 'red',
                  borderBottomWidth: 0.5,
                  width: '20%',
                }}>
                <Text style={{fontSize: 10, color: '#000'}}>
                  {' '}
                  <Fontisto name="date" size={10} color="#3392FF" /> 10-16-22
                </Text>
              </View>

              <Text style={{fontSize: 13, color: '#000'}}>
                Also known as filler or dummy text, this is text copy that
                serves to fill a space without saying anything meaningful. It's
                essentially nonsense text that still gives.{' '}
              </Text>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: '#3392FF',
                    borderWidth: 1,
                    width: '30%',
                    padding: 5,
                    borderRadius: 5,
                  }}>
                  <Text style={{fontSize: 12}}>Read more</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{bottom: 20}}>
          <View style={{flexDirection: 'row', width: '100%'}}>
            <Text style={{width: '85%', color: '#FF33D7'}}> latest videos</Text>
            <Text
              style={{
                textAlign: 'right',
                fontSize: 12,
                color: '#3392FF',
                textDecorationLine: 'underline',
              }}>
              {' '}
              View all
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <ImageBackground
              imageStyle={{borderRadius: 16}}
              style={{
                height: 150,
                width: 100,
                justifyContent: 'center',
                // alignItems: 'center',
              }}
              source={require('./Images/fitness1.jpeg')}
              resizeMode="cover">
              <View style={{flex: 1}} />
              <View style={{flex: 2, top: 50, padding: 10}}>
                <Text style={{color: '#fff'}}>4 week belly burrner</Text>
              </View>
            </ImageBackground>
            <ImageBackground
              imageStyle={{borderRadius: 16}}
              style={{
                height: 150,
                width: 100,
                justifyContent: 'center',
                // alignItems: 'center',
              }}
              source={require('./Images/fittness2.jpeg')}
              resizeMode="cover">
              <View style={{flex: 1}} />
              <View style={{flex: 2, top: 50, padding: 10}}>
                <Text style={{color: '#fff'}}>full body transformation</Text>
              </View>
            </ImageBackground>
            <ImageBackground
              imageStyle={{borderRadius: 16}}
              style={{
                height: 150,
                width: 100,
                justifyContent: 'center',
                // alignItems: 'center',
              }}
              source={require('./Images/fitness3.jpeg')}
              resizeMode="cover">
              <View style={{flex: 1}} />
              <View style={{flex: 2, top: 50, padding: 10}}>
                <Text style={{color: '#fff'}}>4 week belly burrner</Text>
              </View>
            </ImageBackground>
          </View>
        </View>
        <Text />
      </ScrollView>
      {/* <Text style={{ color: "#006600", fontSize: 40 }}>Home Screen!</Text> */}
      {/* <Ionicons name="md-home" size={80} color="#006600" /> */}
    </View>
  );
};

export default Home;
