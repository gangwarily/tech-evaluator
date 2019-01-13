import React from 'react';
import { View, Text } from 'react-native';
import styles from './App.css';

const App = () => (
    <View id="text-view-container">
        <Text className={styles.RedText}>
            Hello!
        </Text>
    </View>
);

export default App;