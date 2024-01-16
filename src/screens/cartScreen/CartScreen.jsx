import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import cart_data from "../../data/cart_data.json"
import CartItem from '../../components/cartItem/CartItem'
import styles from './Styles'
import { useState,useEffect} from 'react'
import {useSelector} from "react-redux"
import { usePostOrderMutation } from '../../services/shopService'

const CartScreen = ({navigation}) => {

  // const [total, setTotal] = useState()

  // useEffect(()=>{
  //     const totalCart = cart_data.reduce((acc,currentItem)=>(

  //       acc += currentItem.price * currentItem.quantity

  //     ),0)

  //     setTotal(totalCart)

  // },[])

  const cartItems = useSelector(state=>state.cartReducer.items)
  const total = useSelector(state=>state.cartReducer.total)

  const renderCartItem = ({item}) =>(
    <CartItem item={item} />
  )

  const [triggerPost,result] = usePostOrderMutation()

  const confirmCart = () =>{
    console.log(result)
    triggerPost({total,cartItems,user:"LoggedUser",updateAt: Date.now().toLocaleString()})
    navigation.navigate("Categorias")

  }

  return (
    <View style={styles.cartContainer}>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={item => item.id}
      />
      <View style={styles.cartConfirm}>
        <Text style={styles.totalPrice}>Total:${total}</Text>
        <TouchableOpacity 
        style={styles.confirmButton}
        onPress={confirmCart}
        >
          <Text style={styles.textConfirm}>Confirmar</Text>
        </TouchableOpacity>

      </View>
    </View>



  )
}

export default CartScreen