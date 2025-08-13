import { View, StyleSheet } from 'react-native';
import Checkbox from './Checkbox';
import Label from './Label';

export default function ListItem({ text, checked, onToggle }) {
  return (
    <View style={styles.item}>
      <Checkbox checked={checked} onToggle={onToggle} />
      <Label>{text}</Label>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4
  }
});
