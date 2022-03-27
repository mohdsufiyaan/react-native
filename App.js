import * as React from 'react';
import {useState} from 'react';
import { Text, View, StyleSheet, Button,FlatList } from 'react-native';
import {List, ListItem, Icon} from 'react-native-elements';
import Constants from 'expo-constants';
import { createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'

import { useContext } from 'react';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList,DrawerItem, Linking } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import 'react-native-reanimated';

 

function Feed(props) {
 const [nnn, setnnn] = useState();
 AsyncStorage.getItem('fav').then(value =>
    setnnn(value)
);
  return ( 
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> 
      <Text>{nnn}</Text>
    </View>
  );
}

function Article() {
  const [nn, setnn] = useState();
 AsyncStorage.getItem('employee').then(value =>
setnn(value) 
);
  return ( 
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> 
      <Text>{nn}</Text>
    </View>
  );
}






 function Appdata(props) {
  

  const [value, setvalue] = useState(false);
  const [val, setval] = useState([{fir:"sufi", las:"mohd", sal:"2323"}]);
  const [star, setstar] = useState(false);
  const [count, setcount] = useState(0);
  const [pp, setpp] = useState(null);
function closebtn(cbtn){ 
  setvalue(cbtn);
  }

   function fetchdata(databtn) {
     AsyncStorage.setItem('employee', val.length); 
setval([databtn, ...val]);

  }
 
  function starbtn(event){
     AsyncStorage.setItem('fav', count);
     setcount(count+1);   
  event.target.style.color="yellow";
  }



 
  return (
    
    <View >
 


 

    {value?<AssetExample data={closebtn} maindata={fetchdata}/>:null}
      {value==false?<Button title="ADD EMPLOYEE" color="green" onPress={() => setvalue(true)} />:null}
    
     

   <View>
     {
    val.map((item, i) => (
      <ListItem key={i} bottomDivider>
      
        <ListItem.Content style={styles.flexi}>
          <ListItem.Title style={styles.listitem}>{item.fir.charAt(0).toUpperCase()} {item.las.slice(-1).toUpperCase()}</ListItem.Title>
          <View>
          <Text style={styles.textdata}>{item.fir} {item.las}</Text><br/>
          <Text style={styles.subdata}>{item.fir}</Text>
          </View>
          
        </ListItem.Content>
        <Icon style={styles.star}
  name='star' color={star} id={item.fir} onPress={starbtn} />
      </ListItem>
    ))
  }
   </View>
     
    </View>
  );
}


const Drawer = createDrawerNavigator();
function MyDrawer() { 
  
  return (
    <Drawer.Navigator>
  
      <Drawer.Screen name="Home" component={Appdata} />
      
      <Drawer.Screen name="Favorate" component={Feed} />
      <Drawer.Screen name="article" component={Article} />
    </Drawer.Navigator>
   

  );
}


export default function App() {
 
  return (
    
 
 <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>

  );
}






const styles = StyleSheet.create({
  star:{
    fontSize :30
  },
  flexi:{
    flex : 1,
    flexDirection : "row",
    marginLeft: -140
  },
  subdata: {
   marginLeft: 10
  },
   listitem : {
     borderWidth: 2,
     borderRadius :50,
     padding: 9,
     backgroundColor : "lightgreen"
   },
   textdata : {
     paddingLeft:9,
     marginTop:-6,
     marginBottom : -17,
     fontSize: 20,
     fontStyle: "bold",
     
   }
});
