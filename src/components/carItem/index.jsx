import { View, Text, ImageBackground } from 'react-native'
import styles from './styles'
import Button from '../button'

const CartItem = ({car}) => {
  const { title, taglineCTA, tagline, image } = car

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        style={styles.bgImage}
        source={image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>
          {tagline}
          {' '}
          <Text style={styles.subtitleCTA}>
            {taglineCTA}
          </Text>
        </Text>
      </View>
      <View style={styles.buttons}>
        <Button
          type="primary"
          title="custom order"
          onPress={() => console.warn('custom order was pressed')}
        />
        <Button
          type="secondary"
          title="existing inventory"
          onPress={() => console.warn('existing inventory was pressed')}
        />
      </View>
    </View>
  )
}

export default CartItem
