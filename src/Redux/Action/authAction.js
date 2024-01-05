import {Alert} from 'react-native';

export const authAction = ({...params}) => {
  return dispatch => {
    const param = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        verify_code: 23,
      }),
    };
    fetch('https://vdmeter.com/vd_meter/veryfi_code.php?verify_code=23', param) //formData
      .then(response => response.json())
      .then(data => {
        dispatch({type: 'AUTH_SUCCESS', payload: data});
        // if (data.success === 200) {
        //   console.log('response', data);
        // } else {
        //   Alert.alert('Email Id Does Not Match');
        // }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
};
