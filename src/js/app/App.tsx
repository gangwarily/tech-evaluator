import React from 'react';
import { View, Text } from 'react-native';
// Import this for CSS Module (not going to work in React Native)
// import styles from './App.css';

const App = () => (
    <View>
        <Text style={styles.RedText}>
            Hello!
        </Text>
    </View>
);

const styles = {
    RedText: {
        color: 'red',
    },
};

export default App;