/* eslint-disable react-native/no-inline-styles */
// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Dimensions,
//   Slider,
//   TouchableNativeFeedback,
//   ScrollView,
// } from 'react-native';
// import Video from 'react-native-video'; /// alreadyimported this
// import Icon from 'react-native-vector-icons/FontAwesome5'; // and this
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// // import Orientation from 'react-native-orientation';

// const {width} = Dimensions.get('window');
// // const samplevideo = require('./sample.mp4');

// export default class App extends React.Component {
//   constructor(p) {
//     super(p);
//     this.state = {
//       currentTime: 0,
//       duration: 0.1,
//       paused: false,
//       overlay: false,
//       fullscreen: false,
//     };
//   }

//   lastTap = null;
//   handleDoubleTap = (doubleTapCallback, singleTapCallback) => {
//     const now = Date.now();
//     const DOUBLE_PRESS_DELAY = 300;
//     if (this.lastTap && now - this.lastTap < DOUBLE_PRESS_DELAY) {
//       clearTimeout(this.timer);
//       doubleTapCallback();
//     } else {
//       this.lastTap = now;
//       this.timer = setTimeout(() => {
//         singleTapCallback();
//       }, DOUBLE_PRESS_DELAY);
//     }
//   };

//   getTime = t => {
//     const digit = n => (n < 10 ? `0${n}` : `${n}`);
//     // const t = Math.round(time);
//     const sec = digit(Math.floor(t % 60));
//     const min = digit(Math.floor((t / 60) % 60));
//     const hr = digit(Math.floor((t / 3600) % 60));
//     return hr + ':' + min + ':' + sec; // this will convert sec to timer string
//     // 33 -> 00:00:33
//     // this is done here
//     // ok now the theme is good to look
//   };

//   load = ({duration}) => this.setState({duration}); // now here the duration is update on load video
//   progress = ({currentTime}) => this.setState({currentTime}); // here the current time is upated

//   backward = () => {
//     this.video.seek(this.state.currentTime - 5);
//     clearTimeout(this.overlayTimer);
//     this.overlayTimer = setTimeout(() => this.setState({overlay: false}), 3000);
//   };
//   forward = () => {
//     this.video.seek(this.state.currentTime + 5); // here the video is seek to 5 sec forward
//     clearTimeout(this.overlayTimer);
//     this.overlayTimer = setTimeout(() => this.setState({overlay: false}), 3000);
//   };

//   onslide = slide => {
//     this.video.seek(slide * this.state.duration); // here the upation is maked for video seeking
//     clearTimeout(this.overlayTimer);
//     this.overlayTimer = setTimeout(() => this.setState({overlay: false}), 3000);
//   };

//   youtubeSeekLeft = () => {
//     const {currentTime} = this.state;
//     this.handleDoubleTap(
//       () => {
//         this.video.seek(currentTime - 5);
//       },
//       () => {
//         this.setState({overlay: true});
//         this.overlayTimer = setTimeout(
//           () => this.setState({overlay: false}),
//           3000,
//         );
//       },
//     );
//   };
//   youtubeSeekRight = () => {
//     const {currentTime} = this.state;
//     this.handleDoubleTap(
//       () => {
//         // this fn is used to detect the double tap first callback
//         this.video.seek(currentTime + 5);
//       },
//       () => {
//         this.setState({overlay: true});
//         this.overlayTimer = setTimeout(
//           () => this.setState({overlay: false}),
//           3000,
//         );
//       },
//     );
//   };

//   // fullscreen = () => {
//   //   const { fullscreen } = this.state;
//   //   if(fullscreen) {
//   //     Orientation.lockToPortrait();
//   //   } else {
//   //     Orientation.lockToLandscape();
//   //   }
//   //   this.setState({ fullscreen: !fullscreen });
//   // }

//   render = () => {
//     const {currentTime, duration, paused, overlay, fullscreen} = this.state;
//     return (
//       <View style={style.container}>
//         <View
//           style={{
//             flexDirection: 'row',
//             padding: 5,
//             shadowColor: '#000',
//             borderBottomColor: 'gray',
//             borderBottomWidth: 1,
//             shadowOffset: {
//               width: 1,
//               height: 1,
//             },
//             shadowOpacity: 0.18,
//             shadowRadius: 1.0,

//             elevation: 1,
//           }}>
//           <View style={{width: '35%'}}>
//             <MaterialCommunityIcons
//               name="weight-lifter"
//               size={26}
//               color="gray"
//             />
//           </View>
//           <View style={{width: '52%'}}>
//             <Text style={{fontSize: 23, color: '#000', fontWeight: '600'}}>
//               GGTFIT
//             </Text>
//           </View>
//           <View>
//             <Ionicons
//               style={{left: 10}}
//               name="wallet-outline"
//               size={20}
//               color="gray"
//             />
//             <Text style={{fontSize: 10, color: '#FF33D7'}}>10,000.00</Text>
//           </View>
//         </View>
//         <ScrollView>
//           <View style={fullscreen ? style.fullscreenVideo : style.video}>
//             <Video
//               fullscreen={fullscreen}
//               paused={paused} // this will manage the pause and play
//               ref={ref => (this.video = ref)}
//               source={{
//                 uri: 'https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4',
//               }}
//               style={{...StyleSheet.absoluteFill}}
//               resizeMode="cover"
//               onLoad={this.load}
//               onProgress={this.progress}
//               // onVideoEnd={this.onEndVideo}
//             />
//             <View style={style.overlay}>
//               {/* now we can remove this not */}
//               {overlay ? (
//                 <View style={{...style.overlaySet, backgroundColor: '#0006'}}>
//                   <Icon
//                     name="backward"
//                     style={style.icon}
//                     onPress={this.backward}
//                   />
//                   <Icon
//                     name={paused ? 'play' : 'pause'}
//                     style={style.icon}
//                     onPress={() => this.setState({paused: !paused})}
//                   />
//                   <Icon
//                     name="forward"
//                     style={style.icon}
//                     onPress={this.forward}
//                   />
//                   <View style={style.sliderCont}>
//                     <View style={style.timer}>
//                       <Text style={{color: 'white'}}>
//                         {this.getTime(currentTime)}
//                       </Text>
//                       <Text style={{color: 'white'}}>
//                         {this.getTime(duration)}{' '}
//                         <Icon
//                           onPress={this.fullscreen}
//                           name={fullscreen ? 'compress' : 'expand'}
//                           style={{fontSize: 15}}
//                         />
//                       </Text>
//                     </View>
//                     <Slider
//                       // we want to add some param here
//                       maximumTrackTintColor="white"
//                       minimumTrackTintColor="white"
//                       thumbTintColor="white" // now the slider and the time will work
//                       value={currentTime / duration} // slier input is 0 - 1 only so we want to convert sec to 0 - 1
//                       onValueChange={this.onslide}
//                     />
//                   </View>
//                 </View>
//               ) : (
//                 <View style={style.overlaySet}>
//                   <TouchableNativeFeedback onPress={this.youtubeSeekLeft}>
//                     <View style={{flex: 1}} />
//                   </TouchableNativeFeedback>
//                   <TouchableNativeFeedback onPress={this.youtubeSeekRight}>
//                     <View style={{flex: 1}} />
//                   </TouchableNativeFeedback>
//                 </View>
//               )}
//             </View>
//           </View>
//           {/* <Text
//           style={{
//             fontSize: 20,
//             textAlign: 'center',
//             marginVertical: 100,
//             color: 'red',
//             fontWeight: 'bold',
//           }}>
//           Hello Wellcome to TekNik GG
//         </Text> */}
//         </ScrollView>
//       </View>
//     );
//   };
// }

// const style = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   overlay: {
//     ...StyleSheet.absoluteFillObject,
//   },
//   overlaySet: {
//     flex: 1,
//     flexDirection: 'row',
//   },
//   icon: {
//     color: 'white',
//     flex: 1,
//     textAlign: 'center',
//     textAlignVertical: 'center',
//     fontSize: 25,
//   },
//   sliderCont: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     bottom: 0,
//   },
//   timer: {
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 5,
//   },
//   video: {width, height: width * 0.6, backgroundColor: 'black'},
//   fullscreenVideo: {
//     backgroundColor: 'black',
//     ...StyleSheet.absoluteFill,
//     elevation: 1,
//   },
// });
// Example of Image Picker in React Native
// https://aboutreact.com/example-of-image-picker-in-react-native/

/// Example of Image Picker in React Native
// https://aboutreact.com/example-of-image-picker-in-react-native/

// Import React
import React, {useState} from 'react';
// Import required components
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  PermissionsAndroid,
} from 'react-native';

// Import Image Picker
// import ImagePicker from 'react-native-image-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const App = () => {
  const [filePath, setFilePath] = useState([]);
  console.log(filePath.length);
  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else {
      return true;
    }
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else {
      return true;
    }
  };

  const captureImage = async type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, response => {
        console.log('Response = ', response);

        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        setFilePath(response.assets[0]);
      });
    }
  };

  // const chooseFile = type => {
  //   let options = {
  //     mediaType: type,
  //     maxWidth: 300,
  //     maxHeight: 550,
  //     quality: 1,
  //   };
  //   launchImageLibrary(options, response => {
  //     console.log('Response = ', response);

  //     if (response.didCancel) {
  //       alert('User cancelled camera picker');
  //       return;
  //     } else if (response.errorCode == 'camera_unavailable') {
  //       alert('Camera not available on device');
  //       return;
  //     } else if (response.errorCode == 'permission') {
  //       alert('Permission not satisfied');
  //       return;
  //     } else if (response.errorCode == 'others') {
  //       alert(response.errorMessage);
  //       return;
  //     }
  //     console.log('base64 -> ', response.base64);
  //     console.log('uri -> ', response.uri);
  //     console.log('width -> ', response.width);
  //     console.log('height -> ', response.height);
  //     console.log('fileSize -> ', response.fileSize);
  //     console.log('type -> ', response.type);
  //     console.log('fileName -> ', response.fileName);
  //     setFilePath(response);
  //   });
  // };

  return (
    <SafeAreaView style={{flex: 1}}>
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
            Camera
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
      <View style={styles.container}>
        {/* <Image
          source={{
            uri: 'data:image/jpeg;base64,' + filePath.data,
          }}
          style={styles.imageStyle}
        /> */}
        {filePath.length == 0 ? (
          <View
            style={{
              width: 200,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 0.5,
              borderColor: 'red',
            }}>
            <Ionicons name="camera-outline" size={100} color="red" />
          </View>
        ) : (
          // <Ionicons
          //    style={{left: 10,backgroundColor:'red'}}
          //   name="camera-outline"
          //   size={20}
          //   color="red"
          // />
          <Image source={{uri: filePath.uri}} style={styles.imageStyle} />
        )}

        {/* <Text style={styles.textStyle}>{filePath.uri}</Text> */}
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => captureImage('photo')}>
          <Text style={styles.textStyle}>Launch Camera for Image</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => captureImage('video')}>
          <Text style={styles.textStyle}>Launch Camera for Video</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => chooseFile('photo')}>
          <Text style={styles.textStyle}>Choose Image</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={() => chooseFile('video')}>
          <Text style={styles.textStyle}>Choose Video</Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 5,
    marginVertical: 10,
    width: 250,
  },
  imageStyle: {
    width: 200,
    height: 200,
    margin: 5,
  },
});
