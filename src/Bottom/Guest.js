import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Guest = () => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>

      <Text>
<MaterialCommunityIcons name="account-cowboy-hat" size={60}color={'black'} />

</Text>
      <Text style={{fontSize:50}}>Guest</Text>
    </View>
  )
}

export default Guest

const styles = StyleSheet.create({})

