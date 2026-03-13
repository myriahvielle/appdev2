import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Student Information</Text>

      <View style={styles.infoBox}>
        <Text style={styles.text}>Course & Section: BSIS 3A</Text>
        <Text style={styles.text}>Name: Myriah Vielle A. Silverio</Text>
        <Text style={styles.text}>Age: 23</Text>
        <Text style={styles.text}>Favorite Hobby: Baking and Cooking</Text>
    
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.subtitle}>Pet Peeves in Class</Text>
        <Text style={styles.text}>When someone is being a "bibo kid" and being so self-centered; not considering other people's feelings. </Text>
        <Text style={styles.text}>When a group of friends are talking loudly even when being told to be quiet.</Text>
        <Text style={styles.text}>When being offended to something that wasn't meant for them but being too insensitive in making remarks towards others.</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  infoBox: {
    marginBottom: 20,
  },

  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});