import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BASEURL, ENVIRONMENT} from './Config';

const App = () => {
  return (
    <View style={styles.container}>
      <Text>
        Environment: <Text style={styles.text}>{ENVIRONMENT}</Text>
      </Text>
      <Text>
        BaseURL: <Text style={styles.text}>{BASEURL}</Text>
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'blue',
  },
});
