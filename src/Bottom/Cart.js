import React from 'react'
import {
    View,Text,Image,StyleSheet,TouchableOpacity
}
from 'react-native'
import Feather from 'react-native-vector-icons/Feather';


function Cart () {
    

return(

<View style={{alignItems:'center',marginTop:130}}>  

<Feather name="shopping-cart" size={60}color={'black'} />

    <Text style={{fontSize:30, color:'black',padding:10}}> Your Cart is Empty </Text>
    <Text style={{color:'black'}}>Add a product to the shopping cart</Text>

    <TouchableOpacity >
        <View style={{height:40,width:160,backgroundColor:'#00CED1',alignItems:'center',justifyContent:'center',marginTop:200,borderRadius:50}}>
        <Text style={{color:'white'}}>
            Shop Now
        </Text>
        </View>
    </TouchableOpacity>
</View>

)


};

const styles = StyleSheet.create({

   
    });

export default Cart;