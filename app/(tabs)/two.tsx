import { Button, StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import CustomBottomSheet from '@/components/CustomBottomSheet';
import { useRef, useState } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { TextInput } from 'react-native-gesture-handler';

export default function TabTwoScreen() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [title, setTitle] = useState<string>('');

  const handleClosePress = () => bottomSheetRef.current?.close();

  const handleOpenPress = () => bottomSheetRef.current?.expand();

  const handleCollapsePress = () => bottomSheetRef.current?.collapse();

  const snapToIndex = (index: any) =>
    bottomSheetRef.current?.snapToIndex(index);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Whe totally control the bottom sheet from here!!
      </Text>

      <Button title="Close" onPress={handleClosePress} />
      <Button title="Open" onPress={handleOpenPress} />
      <Button title="Collapse" onPress={handleCollapsePress} />
      <Button title="Snap to index 0" onPress={() => snapToIndex(0)} />
      <Button title="Snap to index 1" onPress={() => snapToIndex(1)} />
      <Button title="Snap to index 2" onPress={() => snapToIndex(2)} />
      <Button title="Snap to index 3" onPress={() => snapToIndex(3)} />

      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={{
          padding: 5,
          borderWidth: 0.5,
          borderColor: 'grey',
          borderRadius: 16,
          width: '80%',
        }}
      />

      <CustomBottomSheet title={title} ref={bottomSheetRef} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
