import React, { useState } from 'react';
import { ScrollView, StyleSheet, ActivityIndicator, Text, Button } from 'react-native';


const Home = () => {
    let [loading, setLoading] = useState(true);
    return (
        <ScrollView noSpacer={true} noScroll={true} contentContainerStyle={styles.center}>
          {loading ? (
            <ActivityIndicator
              style={[styles.centering]}
              color="#ff8179"
              size="large"
            />
          ) : (
            <Text style={styles.text}>Loaded</Text>
          )}
        <Button 
            style={styles.button} 
            onPress={()=> setLoading(false)}
            title='click'/>
        </ScrollView>
      );
}

const styles = StyleSheet.create({
    centering: {
        margin: '10px auto',
    }, 
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 10
      },
    button: {
        fontSize: 16,
        color: 'white',
        backgroundColor: 'green',
    },
    text: {
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 30,
    }
})

export default Home;