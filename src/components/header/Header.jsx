import { Text, View, TouchableOpacity } from 'react-native'
import styles from './Styles'
import { AntDesign } from '@expo/vector-icons';




const Header = ({ title, navigation }) => {
  return (
    <View style={styles.headerContainer}>
      {
        navigation.canGoBack()
          ?
          <TouchableOpacity onPress={navigation.goBack}>
            <AntDesign name="leftcircleo" size={24} color="white" />
          </TouchableOpacity>
          :
          <View style={styles.viewNull}></View>
      }

      <View style={styles.viewTitle}>
        <Text style={styles.headerTitle}>{title}</Text>

      </View>

    </View>
  )
}

export default Header

