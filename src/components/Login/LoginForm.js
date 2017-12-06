/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar

} from 'react-native';

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>

      <StatusBar
      barStyle='light-content'
      />


          <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor='rgba(255,255,255,0.7)'
          returnKeyType='next'
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
          />

          <TextInput
           style={styles.input}
           placeholder="Senha"
           secureTextEntry
           placeholderTextColor='rgba(255,255,255,0.7)'
           returnKeyType='go'
           ref={(input) => this.passwordInput = input}
           />

           <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Login</Text>
           </TouchableOpacity>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,

  },
  input:{
    backgroundColor: 'rgba(255, 255, 255,0.1)',
    borderRadius: 25,
    height:40,
    color: 'white',
    marginBottom: 20,
    paddingHorizontal: 10
  },

  buttonContainer:{
    backgroundColor: 'rgba(44, 62, 80,1.0)',
    paddingVertical: 10,
    borderRadius: 15
  },
  buttonText:{
    textAlign: 'center',
    color:'#FFF',
    fontWeight: '100'
  }

});
