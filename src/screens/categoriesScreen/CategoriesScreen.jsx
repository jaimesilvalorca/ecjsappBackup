import {FlatList, Text, View } from 'react-native'
import styles from './Styles'
// import categories_data from '../../data/categories_data.json'
import CategoryItem from '../../components/categoryItem/CategoryItem'
import {useSelector} from 'react-redux'
import { useGetCategoriesQuery } from '../../services/shopService'


const CategoriesScreen = ({navigation}) => {

  const {data,isLoading,error} = useGetCategoriesQuery()

  // const categories = useSelector(state=>state.shopReducer.categories)

  const renderCategoryItem = ({item}) => (
    <CategoryItem category={item} navigation={navigation}/>)


  return (
    <>
    <FlatList style={styles.categories}
      data={data}
      renderItem={renderCategoryItem}
      keyExtractor={item=>item}
    />


    </>
  )
}

export default CategoriesScreen
