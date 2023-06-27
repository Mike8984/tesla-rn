import { View, Text, FlatList, Dimensions } from 'react-native'
import styles from './styles'
import cars from '../../cars'
import CartItem from '../carItem'

const CarList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CartItem car={item} />}
        snapToAlignment="start"
        decelerationRate="fast"
        snapToInterval={Dimensions.get('screen').height}
      />
    </View>
  )
}

export default CarList
