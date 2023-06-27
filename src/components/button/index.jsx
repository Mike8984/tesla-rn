import { Pressable, Text } from 'react-native'
import styles from './styles'

const Button = ({ type, title, onPress }) => {
  const bgColor = type === 'primary' ? '#171a20cc' : '#ffffffa6'
  const txtColor = type === 'primary' ? '#fff' : '#171a20'

  return (
    <Pressable
      style={[styles.button, { backgroundColor: bgColor }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: txtColor }]}>{title}</Text>
    </Pressable>
  )
}

export default Button
