import * as React from 'react';
import {useState} from 'react'; 
import { Text, View, StyleSheet, Image,Button , TextInput, Alert} from 'react-native';

export default function AssetExample(props) {
 const [first, setfirst] = useState();
 const [last, setlast] = useState();
 const [salary, setsalary] = useState();
 
 const datac = {fir:first, las: last, sal: salary};



   function sufi(){
   props.data(false);
props.maindata(datac);

 }



  return (
    <View style={styles.container}>
      <TextInput style={styles.inputbox} placeholder="first name ...." onChangeText={setfirst} required />
       <TextInput style={styles.inputbox} placeholder="last name ...." onChangeText={setlast} required />
        <TextInput style={styles.inputbox} placeholder="salary name ...." onChangeText={setsalary} required />
     

      <Button title="submit" color="red" onPress={sufi}  /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  inputbox: {
    margin: 24,
    marginBottom: 4,
    fontSize: 14,
    fontWeight: 'bold',
    
    borderBottomWidth: 2,
  },
  logo: {
    height: 128,
    width: 128,
  }
});
