import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import CartItem from './components/carItem'

export default function App() {
  return (
    <View style={styles.container}>
      <CartItem
        title="Model 3"
        tagline="Order Online For"
        taglineCTA="Touchless Delivery"
        image={require('../assets/images/model-3.jpg')}
      />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
})
