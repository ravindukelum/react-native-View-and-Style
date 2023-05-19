import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.body}>
      <View style={styles.row}>
        <View style={styles.view1}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.view2}>
          <Text style={styles.text}>2</Text>
        </View>
        <View style={styles.view3}>
          <Text style={styles.text}>3</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.view4}>
          <Text style={styles.text}>4</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.view5}>
          <Text style={styles.text}>5</Text>
        </View>
      </View>

      <View style={styles.bigrow}>
        <View style={styles.view6}>
          <Text style={styles.text}>5</Text>
        </View>
        <View style={styles.view7}>
          <Text style={styles.text}>7</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigrow: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  view1: {
    flex: 1,
    backgroundColor: '#00ffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    flex: 2,
    backgroundColor: 'pink',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  view3: {
    flex: 3,
    backgroundColor: 'yellow',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  view4: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  view5: {
    flex: 1,
    backgroundColor: 'purple',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  view6: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view7: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 35,
    fontStyle: 'italic',
    margin: 10,
  },
});

export default App;
