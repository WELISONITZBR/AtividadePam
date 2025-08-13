import { TouchableOpacity, View, StyleSheet } from 'react-native';

export default function Checkbox({ checked, onToggle }) {
  return (
    <TouchableOpacity onPress={onToggle} style={styles.box}>
      {checked && <View style={styles.inner} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#555',
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inner: {
    width: 12,
    height: 12,
    backgroundColor: '#4f46e5'
  }
});
