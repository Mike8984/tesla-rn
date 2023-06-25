import { View, Text, ImageBackground } from 'react-native'
import styles from './styles'

const CartItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        style={styles.bgImage}
        source={require('../../../assets/images/model-s.jpg')}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69,420</Text>
      </View>
    </View>
  )
}

export default CartItem
