import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';


const News = ({navigation}) => {
  return (
    <View style={{alignItems:'center'}}>
<TouchableOpacity onPress={()=>{
    navigation.goBack();
}}> 

<Text style={{marginTop:50,marginEnd:290}}>
<Ionicons name="arrow-back-sharp" size={30}color={'black'} />

</Text>

</TouchableOpacity>


      <Text style={{fontSize:30,marginTop:150}}>
        News
      </Text>
    
      
      
      
    </View>
  )
}

export default News

const styles = StyleSheet.create({})