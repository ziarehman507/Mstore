// import * as React from 'react';
// import { Button, Text, View,TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Homescreen from './src';
// import { createDrawerNavigator } from '@react-navigation/drawer';







// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//   <NavigationContainer>
//   <Stack.Navigator initialRouteName="Home" >
//     <Stack.Screen name="Home" component={Home} 

//     options={{
//       headerStyle: { backgroundColor: '#fff' },
//       headerTintColor: '#1798A1',
//       headerTitleStyle: {
//         fontSize: 25,


//         marginLeft: 90
//       },

//       headerLeft: () => (

//         <View style={{ flexDirection: 'row' }}>


//           <TouchableOpacity onPress={() => { }}  >

//             <Text style={{ marginLeft: 20, marginTop: 5 }}>
//               {/* <Octicons name="three-bars" size={25} color={'black'} />  */}
//             </Text>

//           </TouchableOpacity>
//           {/* <Image style={{ marginLeft: 80, }} source={require('./imges/hhh.jpg')} /> */}

//         </View>
//       ),


//       headerRight: () => (

//         <View style={{ flexDirection: 'row' }}>

//           <TouchableOpacity onPress={() => { }}>
//             <Text style={{ marginRight: 10, }}>
//               {/* <Ionicons name="md-grid" size={25} color={'black'} /> */}
//             </Text>
//           </TouchableOpacity>
//         </View>
//       )
//     }}
//   />
    
    
    

//   </Stack.Navigator>
// </NavigationContainer>
// );
// }







// const Drawer = createDrawerNavigator();

//  function Home() {
//   return (
   
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Zstore" component={Homescreen} options={{headerShown:false}}/>
//         {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
//       </Drawer.Navigator>
    
//   );
// }



// // const Tab = createBottomTabNavigator();

// // export default function App() {
// //   return (
// //     <NavigationContainer>
// //       <Tab.Navigator screenOptions={{ headerShown: false }}>
// //         <Tab.Screen name="Home" component={HomeStackScreen} />
// //      
// //       </Tab.Navigator>
// //     </NavigationContainer>
// //   );
// // }


import React from "react";
import StackScreen from "./src/Stack/StackScreen";
import DrawerScreen from "./src/Drawer/DrawerScreen";
import { NavigationContainer, DrawerActions } from '@react-navigation/native';



const App = () => {



return (

<NavigationContainer>
<DrawerScreen/>
</NavigationContainer>
)
}

export default App