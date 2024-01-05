import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  Image,
  ScrollView,
  Platform,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from 'react-native-responsive-dimensions';

const deviceHight = responsiveScreenHeight(100);

const index = ({result}) => {
  const [resultData, setResultData] = useState('');
  const [scrollerResult, setScrollerResult] = useState('');

  useEffect(() => {
    handleScaleFunction();
    handleScrollerFunction();
  }, [result]);

  const handleScrollerFunction = () => {
    const newArray = [];
    const length = `${result}`;
    if (length.length == 2) {
      const indexData = length - 1;
      Data.map((item, index) => {
        if (index == indexData) {
          return newArray.push({...item, scroller: true});
        } else {
          return newArray.push({...item});
        }
      });
    } else if (length.length == 3) {
      const indexData = length.slice(1) - 1;
      Data.map((item, index) => {
        if (index == indexData) {
          return newArray.push({...item, scroller: true});
        } else {
          return newArray.push({...item});
        }
      });
    } else if (length.length == 4) {
      const indexData = length.slice(0, 2) - 1;
      Data.map((item, index) => {
        if (index == indexData) {
          return newArray.push({...item, scroller: true});
        } else {
          return newArray.push({...item});
        }
      });
    } else if (length.length == 5) {
      const indexData = length.slice(1, 3) - 1;
      Data.map((item, index) => {
        if (index == indexData) {
          return newArray.push({...item, scroller: true});
        } else {
          return newArray.push({...item});
        }
      });
    }
    setScrollerResult(newArray);
  };

  const handleScaleFunction = () => {
    const newArray = [];
    if (result > 1 && result < 100) {
      console.log('work=1==>');
      Data.map((item, index) => {
        if (index == 9) {
          return newArray.push({...item, number: '1'});
        } else if (index == 19) {
          return newArray.push({...item, number: '2'});
        } else if (index == 29) {
          return newArray.push({...item, number: '3'});
        } else if (index == 39) {
          return newArray.push({...item, number: '4'});
        } else if (index == 49) {
          return newArray.push({...item, number: '5'});
        } else if (index == 59) {
          return newArray.push({...item, number: '6'});
        } else if (index == 69) {
          return newArray.push({...item, number: '7'});
        } else if (index == 79) {
          return newArray.push({...item, number: '8'});
        } else if (index == 89) {
          return newArray.push({...item, number: '9'});
        } else if (index == 99) {
          return newArray.push({...item, number: '10'});
        } else {
          return newArray.push({...item, number: ''});
        }
      });
    } else if (result > 100 && result < 200) {
      Data.map((item, index) => {
        if (index == 9) {
          return newArray.push({...item, number: '11'});
        } else if (index == 19) {
          return newArray.push({...item, number: '12'});
        } else if (index == 29) {
          return newArray.push({...item, number: '13'});
        } else if (index == 39) {
          return newArray.push({...item, number: '14'});
        } else if (index == 49) {
          return newArray.push({...item, number: '15'});
        } else if (index == 59) {
          return newArray.push({...item, number: '16'});
        } else if (index == 69) {
          return newArray.push({...item, number: '17'});
        } else if (index == 79) {
          return newArray.push({...item, number: '18'});
        } else if (index == 89) {
          return newArray.push({...item, number: '19'});
        } else if (index == 99) {
          return newArray.push({...item, number: '20'});
        } else {
          return newArray.push({...item, number: ''});
        }
      });
    } else if (result > 200 && result < 300) {
      Data.map((item, index) => {
        if (index == 9) {
          return newArray.push({...item, number: '21'});
        } else if (index == 19) {
          return newArray.push({...item, number: '22'});
        } else if (index == 29) {
          return newArray.push({...item, number: '23'});
        } else if (index == 39) {
          return newArray.push({...item, number: '24'});
        } else if (index == 49) {
          return newArray.push({...item, number: '25'});
        } else if (index == 59) {
          return newArray.push({...item, number: '26'});
        } else if (index == 69) {
          return newArray.push({...item, number: '27'});
        } else if (index == 79) {
          return newArray.push({...item, number: '28'});
        } else if (index == 89) {
          return newArray.push({...item, number: '29'});
        } else if (index == 99) {
          return newArray.push({...item, number: '30'});
        } else {
          return newArray.push({...item, number: ''});
        }
      });
    } else if (result > 300 && result < 400) {
      console.log('work=300==>');
      Data.map((item, index) => {
        if (index == 9) {
          return newArray.push({...item, number: '31'});
        } else if (index == 19) {
          return newArray.push({...item, number: '32'});
        } else if (index == 29) {
          return newArray.push({...item, number: '33'});
        } else if (index == 39) {
          return newArray.push({...item, number: '34'});
        } else if (index == 49) {
          return newArray.push({...item, number: '35'});
        } else if (index == 59) {
          return newArray.push({...item, number: '36'});
        } else if (index == 69) {
          return newArray.push({...item, number: '37'});
        } else if (index == 79) {
          return newArray.push({...item, number: '38'});
        } else if (index == 89) {
          return newArray.push({...item, number: '39'});
        } else if (index == 99) {
          return newArray.push({...item, number: '40'});
        } else {
          return newArray.push({...item, number: ''});
        }
      });
    } else if (result > 400 && result < 500) {
      console.log('work=400==>');
      Data.map((item, index) => {
        if (index == 9) {
          return newArray.push({...item, number: '41'});
        } else if (index == 19) {
          return newArray.push({...item, number: '42'});
        } else if (index == 29) {
          return newArray.push({...item, number: '43'});
        } else if (index == 39) {
          return newArray.push({...item, number: '44'});
        } else if (index == 49) {
          return newArray.push({...item, number: '45'});
        } else if (index == 59) {
          return newArray.push({...item, number: '46'});
        } else if (index == 69) {
          return newArray.push({...item, number: '47'});
        } else if (index == 79) {
          return newArray.push({...item, number: '48'});
        } else if (index == 89) {
          return newArray.push({...item, number: '49'});
        } else if (index == 99) {
          return newArray.push({...item, number: '50'});
        } else {
          return newArray.push({...item, number: ''});
        }
      });
    } else if (result > 500 && result < 600) {
      Data.map((item, index) => {
        if (index == 9) {
          return newArray.push({...item, number: '51'});
        } else if (index == 19) {
          return newArray.push({...item, number: '52'});
        } else if (index == 29) {
          return newArray.push({...item, number: '53'});
        } else if (index == 39) {
          return newArray.push({...item, number: '54'});
        } else if (index == 49) {
          return newArray.push({...item, number: '55'});
        } else if (index == 59) {
          return newArray.push({...item, number: '56'});
        } else if (index == 69) {
          return newArray.push({...item, number: '57'});
        } else if (index == 79) {
          return newArray.push({...item, number: '58'});
        } else if (index == 89) {
          return newArray.push({...item, number: '59'});
        } else if (index == 99) {
          return newArray.push({...item, number: '60'});
        } else {
          return newArray.push({...item, number: ''});
        }
      });
    } else if (result > 600 && result < 700) {
      Data.map((item, index) => {
        if (index == 9) {
          return newArray.push({...item, number: '61'});
        } else if (index == 19) {
          return newArray.push({...item, number: '62'});
        } else if (index == 29) {
          return newArray.push({...item, number: '63'});
        } else if (index == 39) {
          return newArray.push({...item, number: '64'});
        } else if (index == 49) {
          return newArray.push({...item, number: '65'});
        } else if (index == 59) {
          return newArray.push({...item, number: '66'});
        } else if (index == 69) {
          return newArray.push({...item, number: '67'});
        } else if (index == 79) {
          return newArray.push({...item, number: '68'});
        } else if (index == 89) {
          return newArray.push({...item, number: '69'});
        } else if (index == 99) {
          return newArray.push({...item, number: '70'});
        } else {
          return newArray.push({...item, number: ''});
        }
      });
    } else if (result > 700 && result < 800) {
      Data.map((item, index) => {
        if (index == 9) {
          return newArray.push({...item, number: '71'});
        } else if (index == 19) {
          return newArray.push({...item, number: '72'});
        } else if (index == 29) {
          return newArray.push({...item, number: '73'});
        } else if (index == 39) {
          return newArray.push({...item, number: '74'});
        } else if (index == 49) {
          return newArray.push({...item, number: '75'});
        } else if (index == 59) {
          return newArray.push({...item, number: '76'});
        } else if (index == 69) {
          return newArray.push({...item, number: '77'});
        } else if (index == 79) {
          return newArray.push({...item, number: '78'});
        } else if (index == 89) {
          return newArray.push({...item, number: '79'});
        } else if (index == 99) {
          return newArray.push({...item, number: '80'});
        } else {
          return newArray.push({...item, number: ''});
        }
      });
    } else if (result > 800 && result < 900) {
      Data.map((item, index) => {
        if (index == 9) {
          return newArray.push({...item, number: '81'});
        } else if (index == 19) {
          return newArray.push({...item, number: '82'});
        } else if (index == 29) {
          return newArray.push({...item, number: '83'});
        } else if (index == 39) {
          return newArray.push({...item, number: '84'});
        } else if (index == 49) {
          return newArray.push({...item, number: '85'});
        } else if (index == 59) {
          return newArray.push({...item, number: '86'});
        } else if (index == 69) {
          return newArray.push({...item, number: '87'});
        } else if (index == 79) {
          return newArray.push({...item, number: '88'});
        } else if (index == 89) {
          return newArray.push({...item, number: '89'});
        } else if (index == 99) {
          return newArray.push({...item, number: '90'});
        } else {
          return newArray.push({...item, number: ''});
        }
      });
    } else if (result > 900 && result < 1000) {
      Data.map((item, index) => {
        if (index == 9) {
          return newArray.push({...item, number: '91'});
        } else if (index == 19) {
          return newArray.push({...item, number: '92'});
        } else if (index == 29) {
          return newArray.push({...item, number: '93'});
        } else if (index == 39) {
          return newArray.push({...item, number: '94'});
        } else if (index == 49) {
          return newArray.push({...item, number: '95'});
        } else if (index == 59) {
          return newArray.push({...item, number: '96'});
        } else if (index == 69) {
          return newArray.push({...item, number: '97'});
        } else if (index == 79) {
          return newArray.push({...item, number: '98'});
        } else if (index == 89) {
          return newArray.push({...item, number: '99'});
        } else if (index == 99) {
          return newArray.push({...item, number: '100'});
        } else {
          return newArray.push({...item, number: ''});
        }
      });
    }
    setResultData(newArray);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <ImageBackground
          style={styles.imageBox}
          contentContainerStyle={{height: responsiveScreenHeight(100)}}
          resizeMode="contain"
          source={require('../assets/Images/ruler.png')}>
          <View style={{marginTop: responsiveScreenHeight(1.7)}}>
            <View style={styles.textBox}>
              <Text style={styles.txt}>{result} mm</Text>
            </View>
            <FlatList
              data={resultData}
              contentContainerStyle={{height: responsiveScreenHeight(100)}}
              scrollEnabled={false}
              renderItem={({item}) => {
                return (
                  <View>
                    <View style={styles.numberBox1}>
                      <Text
                        style={[
                          styles.numberText,
                          item?.numberStyle == true && {
                            top: responsiveScreenHeight(-0.3),
                          },
                        ]}>
                        {item?.number}
                      </Text>
                      {/* {item.scroller && (
                        <Image
                          style={styles.scrollerStyle}
                          source={require('../assets/Images/scroller.png')}
                        />
                      )} */}
                    </View>
                  </View>
                );
              }}
            />
            <FlatList
              data={scrollerResult}
              scrollEnabled={false}
              contentContainerStyle={{height: responsiveScreenHeight(100)}}
              style={styles.listBox2}
              renderItem={({item}) => {
                return (
                  <View>
                    <View style={[styles.numberBox1]}>
                      {item.scroller == true && (
                        <FastImage
                          style={[styles.scrollerStyle]}
                          source={require('../assets/Images/scroller.png')}
                        />
                      )}
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  imageBox: {
    height: responsiveScreenHeight(64.7),
    width: responsiveScreenWidth(90),
    marginLeft: responsiveScreenWidth(30),
    marginTop: responsiveScreenHeight(1),
  },
  numberBox1: {
    height: responsiveScreenHeight(0.47),
    width: responsiveScreenWidth(10),
    marginLeft:
      deviceHight == 667
        ? responsiveScreenWidth(30.5)
        : deviceHight > 731 && deviceHight < 800
        ? responsiveScreenWidth(31)
        : responsiveScreenWidth(27.2),
  },
  numberText: {
    fontSize: responsiveScreenFontSize(1.2),
    color: 'black',
    fontWeight: '700',
    position: 'absolute',
    top: responsiveScreenHeight(-0.7),
  },
  listBox2: {
    width: responsiveScreenWidth(100),
    position: 'absolute',
  },
  scrollerStyle: {
    position: 'absolute',
    width: responsiveScreenWidth(40),
    height: responsiveScreenHeight(12),
    resizeMode: 'contain',
    left: responsiveScreenWidth(-9),
    top: responsiveScreenHeight(1),
  },
  textBox: {
    backgroundColor: 'white',
    position: 'absolute',
    height: responsiveScreenHeight(6),
    width: responsiveScreenWidth(35),
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    left: responsiveScreenWidth(-25),
    top: responsiveScreenHeight(3),
  },
  txt: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
  },
});

const Data = [
  {
    number: '0',
    color: true,
    numberStyle: true,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    color: true,
    number: '1',
  },
  {},
  {},
  {},
  {},
  {
    scroller: false,
  },
  {},
  {},
  {},
  {},
  {
    color: true,
    number: '2',
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    color: true,
    number: '3',
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    color: true,
    number: '4',
    scroller: false,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    number: '5',
    color: true,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    number: '6',
    color: true,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    number: '7',
    color: true,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    number: '8',
    color: true,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    number: '9',
    color: true,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    number: '10',
    color: true,
    numberStyle: false,
  },
];
const scrollerData = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    scroller: false,
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
];
// const newNumber =
// result < 1
//   ? 'lineNo = 1'
//   : result < 10
//   ? 'lineNo = 2'
//   : result < 20
//   ? 'lineNo = 3'
//   : result < 30
//   ? 'lineNo = 4'
//   : result;
