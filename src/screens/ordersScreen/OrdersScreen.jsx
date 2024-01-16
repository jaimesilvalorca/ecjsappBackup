import { FlatList } from "react-native";
import OrderItem from "../../components/orderItem/OrderItem";
import order_data from '../../data/orders_data.json'


const OrdersScreen = () => {

    const renderOrderItem = ({ item }) => {

        const total = item.items.reduce((acc, currentItem) => (
            acc += currentItem.price * currentItem.quantity
        ), 0)
        return (
            <OrderItem order={item} total={total} />
        )
    }

    return (
        <FlatList
            data={order_data}
            renderItem={renderOrderItem}
            keyExtractor={item => item.id}
        />
    )
}

export default OrdersScreen