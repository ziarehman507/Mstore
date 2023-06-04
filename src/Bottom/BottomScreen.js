import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Home,Window,Search,Cart,Guest} from '../Bottom/index';
import StackScreen from '../Stack/StackScreen';
import StackScreen1 from '../Stack/StackWindow';
import StackWindow from '../Stack/StackWindow';







const Tab = createBottomTabNavigator();

const BottomScreen = () => {
    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={{ tabBarShowLabel: false ,headerShown:false}}
        >
            <Tab.Screen name="Home1" component={StackScreen} options={{
               
                tabBarIcon: ({ focused }) => (
                    <AntDesign name="home" size={25} color={focused ? '#00CED1' : 'black'} />
                )
            }} />


             <Tab.Screen name="Window" component={StackWindow} options={{
                

                tabBarIcon: ({ focused }) => (
                    <Ionicons name="grid-outline" size={25} color={focused ? '#00CED1' : 'black'} />
                ),
            }}
            />


        <Tab.Screen name="searcg" component={Search}
        options={{ 
          tabBarIcon: ({focused }) => (
              <Feather name="search" size={25}color={focused ? '#00CED1' : 'black'} />
          ),
        }}
      /> 

<Tab.Screen name="cart" component={Cart}
        options={{ 
          tabBarIcon: ({focused }) => (
              <Feather name="shopping-cart" size={25}color={focused ? '#00CED1' : 'black'} />
          ),
        }}
      />

<Tab.Screen name="guest" component={Guest}
        options={{ 
          tabBarIcon: ({ focused}) => (
              <Ionicons name="ios-person-outline" size={25}color={focused ? '#00CED1' : 'black'} />
          ),
        }}
      />

        </Tab.Navigator>
    );
}

export default BottomScreen