import React from "react";
import { View, Text } from "react-native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Window } from "../Bottom";
import BottomScreen from "../Bottom/BottomScreen";
import News from "./News";
import Contact from "./Contact";



const Drawer = createDrawerNavigator();

const DrawerScreen = () => {

  return (
    <Drawer.Navigator>
     
    
  
      <Drawer.Screen name="SHOP" component={BottomScreen}  options={{headerShown:false}}/>
       <Drawer.Screen name="NEWS" component={News}options={{headerShown:false}} />
       <Drawer.Screen name="CONTACT US" component={Contact} options={{headerShown:false}}/>
      
    </Drawer.Navigator>
  )

}
export default DrawerScreen