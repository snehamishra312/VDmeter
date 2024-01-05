import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  BackHandler,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';
import {useDispatch} from 'react-redux';
import Color from '../assets/Images/Color';
import Images from '../assets/Images/Images';
import {authAction} from '../Redux/Action/authAction';
import Axios from 'axios';
import MillimeterScale from '../MillimeterScale/index.js';
import ActivityIndicter from '../ActivityIndicter';
import {FontFamily} from '../assets/FontFamily';

const Home = () => {
  const [enteredNumbers, setEnteredNumbers] = useState('');
  const [button1Active, setButton1Active] = useState(true);
  const [button2Active, setButton2Active] = useState(false);
  const [button3Active, setButton3Active] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(false);
  const [aImage, setAiImage] = useState(false);
  const [bImage, setBiImage] = useState(false);
  const [loader, setLoader] = useState(false);
  const [cImage, setCiImage] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);
  const [image100, set100] = useState(false);
  const [hide, setHide] = useState(true);
  const [result, setResult] = useState('');

  const handleNumberPress = number => {
    if (enteredNumbers.length < 3) {
      setEnteredNumbers(prevNumbers => prevNumbers + number);
      setUserNotFound(false);
    }
    // setEnteredNumbers(prevNumbers => prevNumbers + number);
    // setUserNotFound(false);
  };

  const handleRemove = () => {
    setEnteredNumbers('');
  };

  const toggleIcon = () => {
    setIsOpen(true);
    setImage(false);
  };

  const toggleIcon1 = () => {
    setImage(true);
    setIsOpen(false);
  };

  const fun1 = () => {
    setAiImage(true);
    setBiImage(false);
    setCiImage(false);
  };

  const fun2 = () => {
    setAiImage(false);
    setBiImage(true);
    setCiImage(false);
  };
  const fun3 = () => {
    setAiImage(false);
    setBiImage(false);
    setCiImage(true);
  };

  const handleButtonPress = buttonNumber => {
    switch (buttonNumber) {
      case 1:
        setButton1Active(true);
        setButton2Active(false);
        setButton3Active(false);
        setHide(true);
        break;
      case 2:
        setButton1Active(false);
        setButton2Active(true);
        setButton3Active(false);
        setHide(true);
        break;
      case 3:
        setButton1Active(false);
        setButton2Active(false);
        setButton3Active(true);
        break;
      default:
        break;
    }
  };

  const dispatch = useDispatch();

  const _onDone = () => {
    if (enteredNumbers) {
      setUserNotFound(false);
      setButton2Active(true);
      setButton1Active(false);
      setButton3Active(false);
      dispatch(authAction(enteredNumbers));
    } else {
      setUserNotFound(true);
    }
  };

  const handleOnPress2 = () => {
    if (image || isOpen) {
      setUserNotFound(false);
      setButton2Active(false);
      setButton1Active(false);
      setButton3Active(true);
    } else {
      setUserNotFound(true);
    }
  };

  const graphImage = () => {
    if (aImage || bImage || cImage) {
      // setButton3Active(false);
      handleApiResponse();
    } else {
      console.log('Please select option');
    }
  };

  const handleApiResponse = async () => {
    const biotype =
      cImage == true ? '1' : bImage == true ? '2' : aImage == true ? '3' : '';
    const gender = isOpen == true ? 'male' : 'female';
    const data = new FormData();
    data.append('user_id', '54');
    data.append('distance', enteredNumbers);
    data.append('gender', gender);
    data.append('biotype', biotype);
    setLoader(true);
    await Axios({
      method: 'post',
      url: 'https://vdmeter.com/vd_meter/vd_result.php',
      data: data,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(res => {
        set100(true);
        setHide(false);
        setLoader(false);
        console.log('res====>', res.data);
        setResult(res.data.total_vd_result);
      })
      .catch(err => {
        setLoader(false);

        console.log('err===>', err);
      });
  };

  const backButton = () => {
    setButton2Active(false);
    setButton1Active(true);
    setButton3Active(false);
  };
  const backButton2 = () => {
    setButton3Active(false);
    setButton2Active(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header12}>
          {/* <Text style={styles.text}>VD - METER</Text> */}
          <Image
            style={styles.logo}
            source={require('../assets/Images/logo.png')}
          />
          <TouchableOpacity onPress={BackHandler.exitApp}>
            <Text style={styles.text}>X</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.paso}>
          <TouchableOpacity
            style={[styles.button, button1Active && styles.activeButton]}
            onPress={() => handleButtonPress(1)}>
            <Text style={styles.buttonText}>Paso 1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, button2Active && styles.activeButton]}
            onPress={() => handleButtonPress(2)}>
            <Text style={styles.buttonText}>Paso 2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, button3Active && styles.activeButton]}
            onPress={() => handleButtonPress(3)}>
            <Text style={styles.buttonText}>Paso 3</Text>
          </TouchableOpacity>
        </View>
      </View>
      {button1Active === true && (
        <View>
          <View style={styles.box}>
            <Text style={styles.textBox}>Ingrese distancia ojo/oreja</Text>
            <Text style={styles.textBox}>izquierda</Text>
          </View>
          <View style={styles.imagesss}>
            <Image style={styles.img} source={Images.scale} />
          </View>
          <View style={styles.input}>
            <Text style={styles.disText}>
              {enteredNumbers == '' ? 'distancia' : enteredNumbers}
            </Text>
          </View>
          {userNotFound && (
            <Text style={styles.errorMessage}>
              Por favor ingress la distancia.
            </Text>
          )}
          <View style={{padding: 20}}></View>
          <View style={styles.calu}>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.numberButton}
                onPress={() => handleNumberPress('7')}>
                <Text style={styles.numberButtonText}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.numberButton}
                onPress={() => handleNumberPress('8')}>
                <Text style={styles.numberButtonText}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.numberButton}
                onPress={() => handleNumberPress('9')}>
                <Text style={styles.numberButtonText}>9</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.numberButton}
                onPress={handleRemove}>
                <Text style={styles.numberButtonText}>{'<-'}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.numberButton}
                onPress={() => handleNumberPress('4')}>
                <Text style={styles.numberButtonText}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.numberButton}
                onPress={() => handleNumberPress('5')}>
                <Text style={styles.numberButtonText}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.numberButton}
                onPress={() => handleNumberPress('6')}>
                <Text style={styles.numberButtonText}>6</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.numberButton}
                onPress={() => handleNumberPress('3')}>
                <Text style={styles.numberButtonText}>3</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.numberButton}
                onPress={() => handleNumberPress('2')}>
                <Text style={styles.numberButtonText}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.numberButton}
                onPress={() => handleNumberPress('1')}>
                <Text style={styles.numberButtonText}>1</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.numberButton}
                onPress={() => handleNumberPress('.')}>
                <Text style={styles.numberButtonText}>.</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.numberButton}
                onPress={() => handleNumberPress('0')}>
                <Text style={styles.numberButtonText}>0</Text>
              </TouchableOpacity>
              <View style={styles.row}>
                <TouchableOpacity style={styles.removeButton} onPress={_onDone}>
                  <Text style={styles.removeButtonText}>Siguiente</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      )}
      {button2Active === true && (
        <View style={{flex: 1, marginTop: 20}}>
          <View style={styles.title}>
            <TouchableOpacity onPress={backButton} style={styles.backImage}>
              <Image
                style={{tintColor: Color.white}}
                source={Images.backButton}
              />
            </TouchableOpacity>
            <View style={styles.boxText}>
              <Text style={styles.textPaso2}>Indique genero</Text>
            </View>
          </View>
          <View style={{alignItems: 'center', marginTop: 10}}>
            <TouchableOpacity onPress={toggleIcon}>
              {!image === true ? (
                <Image
                  style={{height: 120, width: 120}}
                  source={Images.maleIcon}
                />
              ) : (
                <Image
                  style={{height: 120, width: 120}}
                  source={Images.InActivemale}
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop: 30}} onPress={toggleIcon1}>
              {!isOpen === true ? (
                <Image
                  style={{height: 140, width: 120}}
                  source={Images.femaleIconIn}
                />
              ) : (
                <Image
                  style={{height: 140, width: 120}}
                  source={Images.femaleIcon}
                />
              )}
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.secondButton}
            onPress={() => handleOnPress2()}>
            <Text style={{fontSize: 18, color: Color.white, fontWeight: '600'}}>
              Siguiente
            </Text>
          </TouchableOpacity>
        </View>
      )}
      {button3Active === true && hide === true && (
        <View
          style={{flex: 1, marginTop: 20, width: responsiveScreenWidth(100)}}>
          <View style={styles.title}>
            <TouchableOpacity onPress={backButton2} style={styles.backImage}>
              <Image
                style={{tintColor: Color.white}}
                source={Images.backButton}
              />
            </TouchableOpacity>
            <View style={styles.boxText}>
              <Text style={styles.textPaso2}>Indique biotipo facial</Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 10,
              height: responsiveScreenHeight(70),
              width: responsiveScreenWidth(100),
            }}>
            <TouchableOpacity
              onPress={fun3}
              style={{
                height: '20%',
                width: '100%',
                alignItems: 'center',
                padding: 5,
              }}>
              {cImage === true ? (
                <Image style={styles.imgIcon} source={Images.cin} />
              ) : (
                <Image style={styles.imgIcon} source={Images.c_in} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={fun2}
              style={{
                height: '20%',
                width: '100%',
                alignItems: 'center',
                padding: 5,
              }}>
              {bImage === true ? (
                <Image style={styles.imgIcon} source={Images.bin} />
              ) : (
                <Image style={styles.imgIcon} source={Images.b_in} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={fun1}
              style={{
                height: '20%',
                width: '100%',
                alignItems: 'center',
                padding: 5,
              }}>
              {aImage === true ? (
                <Image style={styles.imgIcon} source={Images.ain} />
              ) : (
                <Image style={styles.imgIcon} source={Images.a_in} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => graphImage()}
              style={styles.ThirdButton}>
              <Text
                style={{
                  fontSize: 18,
                  color: Color.white,
                  fontWeight: '600',
                }}>
                Resultado
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {button3Active === true && hide === false && (
        <View style={{flex: 1, marginVertical: responsiveScreenHeight(1.5)}}>
          <View style={styles.title}>
            <TouchableOpacity
              onPress={() => {
                setHide(true);
              }}
              style={styles.backImage}>
              <Image
                style={{tintColor: Color.white}}
                source={Images.backButton}
              />
            </TouchableOpacity>
            <View style={styles.boxText}>
              <Text style={styles.textPaso2}>DVO Determinada!</Text>
            </View>
          </View>
          <ScrollView
            style={{
              flex: 1,
              // alignItems: 'center',
              // height: responsiveScreenHeight(62),
              // width: responsiveScreenWidth(100),
            }}>
            {/* <Image
              style={{height: '100%', width: '50%'}}
              source={Images.maper}
            /> */}
            <MillimeterScale result={result} />
          </ScrollView>
          <TouchableOpacity
            onPress={() => {
              setEnteredNumbers('');
              setButton2Active(false);
              setButton3Active(false);
              setButton1Active(true);
              setHide(true);
            }}
            style={styles.lastButton}>
            <Text style={{fontSize: 18, color: Color.white, fontWeight: '600'}}>
              Volver a inicio
            </Text>
          </TouchableOpacity>
        </View>
      )}
      {loader && <ActivityIndicter show={loader} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.lightBlue,
  },
  header: {
    height: '12%',
    backgroundColor: Color.backGroundColor,
    justifyContent: 'space-between',
  },
  header12: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: Color.white,
    fontWeight: 'bold',
    fontSize: 22,
    bottom: -20,
    marginStart: 10,
    marginEnd: 10,
  },
  paso: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    bottom: 0,
  },
  pasoText: {
    color: Color.white,
  },
  butoon: {
    height: h('3.5%'),
    width: '22%',
    backgroundColor: '#b7deeb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calculator: {
    height: h('30%'),
    width: w('100%'),
    alignItems: 'center',
  },
  cal: {
    height: h('30%'),
    width: w('80%'),
  },
  box: {
    height: h('8%'),
    width: w('75%'),
    borderWidth: 3,
    borderColor: Color.whiteLight,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: Color.textColor,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBox: {
    fontSize: 18,
    color: Color.darkBalck,
  },
  img: {
    height: 150,
    width: 150,
  },
  imgIcon: {
    height: responsiveScreenHeight(10),
    width: responsiveScreenWidth(50),
    resizeMode: 'contain',
  },
  imagesss: {
    // height: '30%',
    alignItems: 'center',
    marginTop: 30,
  },
  calText: {
    height: h('20%'),
    width: w('60%'),
    backgroundColor: Color.whiteLight,
    alignSelf: 'center',
    marginTop: 20,
  },
  input: {
    height: 40,
    width: '80%',
    backgroundColor: Color.white,
    // borderWidth: 0.12,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 5,
    justifyContent: 'center',
  },
  disText: {
    marginStart: 10,
    color: Color.whiteLight,
    fontWeight: 'bold',
  },

  calu: {
    backgroundColor: Color.darkBalck,
    alignSelf: 'center',
  },
  numberPadContainer: {
    backgroundColor: Color.darkBalck,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
    marginTop: 5,
  },
  numberButton: {
    marginHorizontal: 4,
    backgroundColor: Color.whiteLight,
    borderRadius: 1,
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  removeButton: {
    backgroundColor: 'red',
    padding: 6,
    borderRadius: 5,
    marginTop: -5,
  },
  removeBut: {
    padding: 8,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  removeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  enteredNumbersText: {
    marginTop: 20,
    fontSize: 24,
    textAlign: 'center',
  },
  button: {
    backgroundColor: Color.inActive,
    borderRadius: 5,
    width: w('25%'),
    height: h('4%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  activeButton: {
    backgroundColor: Color.active,
  },
  title: {
    flexDirection: 'row',
    height: h('6%'),
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  backImage: {
    height: h('5%'),
    width: w('10%'),
    backgroundColor: Color.inActive,
  },
  boxText: {
    height: h('5%'),
    width: w('70%'),
    backgroundColor: Color.active,
    borderWidth: 0.2,
    justifyContent: 'center',
  },
  textPaso2: {
    fontSize: 18,
    alignSelf: 'center',
    color: Color.darkBalck,
    fontWeight: '600',
  },
  secondButton: {
    height: 45,
    width: '55%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    marginVertical: '10%',
  },
  ThirdButton: {
    height: 45,
    width: '55%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  errorMessage: {
    color: 'red',
    alignSelf: 'center',
    marginTop: 5,
  },
  logo: {
    height: '45%',
    width: '35%',
    resizeMode: 'contain',
    bottom: -20,
    marginStart: 10,
    marginEnd: 10,
  },
  lastButton: {
    height: 45,
    width: '55%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
    position: 'absolute',
    bottom: '0.5%',
  },
});

export default Home;
