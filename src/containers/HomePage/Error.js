import React from 'react';
import { View, Text } from 'react-native';

const Error = ({ error }) => {
  return (
    <View style={{
      backgroundColor: 'white',
      padding: 10,
      marginTop: 10,
      borderRadius: 3
    }}>
      <Text style={{
        color: 'red'
      }}>
        {error}
      </Text>
    </View>
  )
};

export default Error;
