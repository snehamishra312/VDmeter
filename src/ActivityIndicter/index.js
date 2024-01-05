import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React from 'react';

const ActivityIndicter = ({show, style}) => {
  // const [loader, setLoader] = uLeState(false);

  return (
    <View style={[styles.activityIndicator, {style}]}>
      <ActivityIndicator animating={show} size="large" />
    </View>
  );
};

export default ActivityIndicter;

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    width: '100%',
    position: 'absolute',
    justifyContent: 'center',
  },
});
