import { Text, StyleSheet } from 'react-native';

export default function Label({ children }) {
  return <Text style={styles.label}>{children}</Text>;
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16
  }
});
