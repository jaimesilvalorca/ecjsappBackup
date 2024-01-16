import { Text, View, TouchableOpacity } from "react-native"
import Card from "../card/Card"
import styles from './Styles'
import { Feather } from '@expo/vector-icons';



const OrderItem = ({order,total}) => {
  return (
    <Card style={styles.cartItemContainer}>
      <View>
        <Text style={styles.createdAt}>
          Creada el {new Date(order.createdAt).toLocaleString()}
        </Text>
        <Text style={styles.total}>
          Total: ${total}
        </Text>
      </View>
      <TouchableOpacity style={styles.searchIcon} onPress={null}>
        <Feather name="search" size={24} color="black" />
      </TouchableOpacity>

    </Card>
  )
}

export default OrderItem