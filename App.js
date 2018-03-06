import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class HitungBalok extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panjang: 0,
      tinggi: 0,
      lebar: 0,
      luas: 0,
      volume: 0
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#E91E63' }}>

        <View style={{ backgroundColor: '#18FFFF' }}>
           <Text style={{ padding: 10, fontSize: 20, color: 'white', textAlign: 'center' }} >
            Menghitung Volume Balok
          </Text>
         </View>

        <View style={{ margin: 20, padding: 10, backgroundColor: '#01579B' }}>
            <TextInput
              style={{ height: 40 }}
              placeholder="Masukkan Panjang Balok"
              onChangeText={(panjang) => this.setState({ panjang })}
              keyboardType='numeric'
            />
            <TextInput
              style={{ height: 40 }}
              placeholder="Masukkan  Tinggi Balok"
              onChangeText={(tinggi) => this.setState({ tinggi })}
              keyboardType='numeric'
            />
            <TextInput
              style={{ height: 40 }}
              placeholder="Masukkan  Lebar Balok"
              onChangeText={(lebar) => this.setState({ lebar })}
              keyboardType='numeric'
            />

            <Button
              onPress={() => this.setState({
                volume: ((this.state.panjang * this.state.tinggi * this.state.lebar))
              })}
              title="Hitung"
              accessibilityLabel="Klik untuk menghitung"
            />
       </View>

        <View style={{ margin: 20, backgroundColor: '#E91E63' }}>
          <Text style={{ padding: 10, fontSize: 20 }} >
              Panjang = {this.state.panjang} {'\n'}
              Tinggi = {this.state.tinggi} {'\n'}
              Lebar = {this.state.lebar} {'\n'}
              Volume = {this.state.volume} {'\n'}
          </Text>
         </View>
   </View>
    );
  }
}
AppRegistry.registerComponent('AppForm2', () => HitungBalok);
