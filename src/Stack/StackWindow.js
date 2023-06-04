import { createStackNavigator } from '@react-navigation/stack';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import { Guest, Window } from '../Bottom';





const Stack = createStackNavigator();



const StackWindow = ({navigation}) => {

  return (

    
      <Stack.Navigator>
        <Stack.Screen name="Zstore" component={Window} 
          options={{  headerStyle: { backgroundColor: '#fff'},
          headerTintColor: '#1798A1',
          headerTitleStyle: {
          fontSize:25,
          
          
          marginLeft:-12
          },
              
          headerLeft: () => (
          
          <View style={{ flexDirection:'row'}}>
          
          
          <TouchableOpacity onPress={()=>{
              navigation.openDrawer();
          }}> 
          
          <Text style={{marginLeft:20,marginTop:5}}>
          <Octicons name="three-bars" size={25}color={'black'} />
          
          </Text>
          
          </TouchableOpacity>
          <Image style={{marginLeft:80,}} source={require('../../imges/hhh.jpg')}/>
          
          </View>
          ),
          
          
           
              }}
    
    />





        
      </Stack.Navigator>
    
  )
}

export default StackWindow