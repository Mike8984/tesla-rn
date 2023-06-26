import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: '100%',
  },
  titles: {
    marginTop: '30%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 16,
    color: '#5c5e62',
  },
  subtitleCTA: {
    textDecorationLine: 'underline'
  },
  bgImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  buttons: {
    width: '100%',
    gap: 15,
    position: 'absolute',
    bottom: 50
  },
})

export default styles
