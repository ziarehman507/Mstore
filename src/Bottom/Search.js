import React from 'react'
import {
    View,Text,Image,StyleSheet,TextInput
}
from 'react-native'
import Feather from 'react-native-vector-icons/Feather';


function Search () {
    

return(

<View>
<TextInput style={styles.input} placeholder="Search product by name"
            placeholderTextColor={"black"}
            autoCapitalize='none'/>
            <Text style={{marginLeft:50,marginTop:-67}}>
            <Feather name="search" size={25}color={ 'black'} /></Text>
</View>

)


};

const styles = StyleSheet.create({
    input: {
        // borderColor: 'black',
        paddingHorizontal: 52,
        
        borderRadius: 50,
        height: 50,
        width: 290,
        margin: 30,
        marginTop:60,
        borderWidth: 2,
        borderBottomColor:'#00CED1',
    
        fontSize: 17,
    
    
    
    
    
      },
   
    });

export default Search;