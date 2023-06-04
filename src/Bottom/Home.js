import { StyleSheet, Text, View,ScrollView, Image,TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
 import AntDesign from 'react-native-vector-icons/AntDesign';





const Home = () => {
  return (
    <View style={{height:'100%', backgroundColor:'#f4f4f4',}}>
    <ScrollView >

<View style={{marginLeft:30,marginTop:10}}>
<Image style={{height:60,width:60}} source={require('../../imges/ccc.jpg')}/>
<Text style={{marginLeft:54,fontSize:30,marginTop:-40, color:'black'}}>Zstore</Text>
<Text style={{marginTop:10,marginLeft:25,color:'black'}}>TUESDAY 09 MAY</Text>
</View>

<View>
<FlatList horizontal={true}
data={[
  {
  title: "Shoes",
  image: require('../../imges/shoes.jpg'),
  },

  {
    title: "Hokey",
    image: require('../../imges/hokey.jpg'),
    },

     {
      title: "Football",
      image: require('../../imges/football.jpg'),
      },
      
      {
        title: "T-shirt",
        image: require('../../imges/tshirt.jpg'),
        } ,
        
        {
          title: "bag",
          image: require('../../imges/bag.jpg'),
          },


]}
renderItem={({item,index}) =>{
  return(<View>
   <TouchableOpacity>
    <Image
    source={item.image}
    style={{
      width:70,
      alignItems:'center',
      borderRadius:50,
      height:70,
      marginTop:10,
      margin:10
      
      
    }}
     />
    
     <Text style={{marginLeft:30,marginTop:-5}}>{item.title}</Text>
     </TouchableOpacity>
     </View>
     
    )
}}
/>

</View>



<View>
<FlatList horizontal={true}
data={[
  {
  title: "Stitch Detail Tanic",
  price: '$ 200',
  image: require('../../imges/dress.jpg'),
  },

  {
    title: "Stitch Detail Tanic",
     price: '$ 120',
    image: require('../../imges/dress1.jpg'),
    },

     {
      title: "Stitch Detail Tanic",
       price: '$ 100',
      image: require('../../imges/dress3.jpg'),
      },
      
      {
        title: "Stitch Detail Tanic",
         price: '$ 150',
        image: require('../../imges/dress4.jpg'),
        } ,
        
        {
          title: "Stitch Detail Tanic",
           price: '$ 180',
          image: require('../../imges/dress2.webp'),
          },


]}
renderItem={({item,index}) =>{
  return(<View>
   <TouchableOpacity>
    <ImageBackground
    source={item.image}
    style={{
      width:230,
height:350,
borderRadius:10,
marginTop:30,
margin:10,
marginLeft:20
      
      
    }}>
     
    
     <Text style={{marginLeft:30,marginTop:250,fontSize:20}}>{item.title}</Text>
     <Text style={{position:'absolute',fontSize:20,marginTop:270,marginLeft:30,color:"red"}}>{item.price}</Text>


     </ImageBackground>
     </TouchableOpacity>
     </View>
     
    )
}}
/>

</View>


<TouchableOpacity>
<View>
<Image style={{width:330,height:130,marginLeft:20,borderRadius:10 ,margin:10}} source={require('../../imges/girl.jpeg')}/>
</View>
</TouchableOpacity>


<TouchableOpacity>
<View>
<Image style={{width:330,height:130,marginLeft:20,borderRadius:10}} source={require('../../imges/boy.jpeg')}/>
</View>
</TouchableOpacity>


<View>
  <Text style={{fontSize:20,marginLeft:25,marginTop:10}}>Feature Products</Text>
  <TouchableOpacity>
  <Text style={{fontSize:13,marginLeft:280,marginTop:-18}}>Show All</Text>
<AntDesign style={{marginLeft:330,marginTop:-15}} name="right" size={15}color={'black'} />
</TouchableOpacity>


</View>

<View>
<FlatList horizontal={true}
data={[
  {
    title: 'Tshirt',
    price: '$50',
  image: require('../../imges/boytshirt1.jpg'),
},
{
  title: 'Tshirt',
  price: '$50',
image: require('../../imges/tshirt2.jpg'),
},
{
  title: 'Tshirt',
  price: '$50',
image: require('../../imges/tshirt3.jpg'),
},
{
  title: 'Tshirt',
  price: '$50',
image: require('../../imges/tshirt4.jpg'),
}
    


]}
renderItem={({item,index}) =>{
  return(<View>
    <TouchableOpacity>
    <Image
    source={item.image}
    style={{
      width:110,
      height:160,
      borderRadius:10,
      marginTop:30,
      margin:10,
      marginLeft:20
      
      
    }}
     />
       <Text style={{marginLeft:35,fontSize:18}}>{item.title}</Text>
       <Text style={{marginLeft:35,fontSize:18}}>{item.price}</Text>




</TouchableOpacity>
</View>
    )
}}
/>
</View>

    </ScrollView>
      
      
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})