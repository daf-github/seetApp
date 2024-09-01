import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetTextInput,
} from '@gorhom/bottom-sheet';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';

import { useCallback, useMemo, useRef } from 'react';

export default function TabOneScreen() {
  const snapPoints = useMemo(() => ['25%', '50%', '70%', '100%'], []);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleClosePress = () => bottomSheetRef.current?.close();

  const handleOpenPress = () => bottomSheetRef.current?.expand();

  const handleCollapsePress = () => bottomSheetRef.current?.collapse();

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={2}
        disappearsOnIndex={0}
        {...props}
      />
    ),
    []
  );

  const snapToIndex = (index: any) =>
    bottomSheetRef.current?.snapToIndex(index);

  return (
    <View style={styles.container}>
      <Button title="Close" onPress={handleClosePress} />
      <Button title="Open" onPress={handleOpenPress} />
      <Button title="Collapse" onPress={handleCollapsePress} />
      <Button title="Snap to index 0" onPress={() => snapToIndex(0)} />
      <Button title="Snap to index 1" onPress={() => snapToIndex(1)} />
      <Button title="Snap to index 2" onPress={() => snapToIndex(2)} />
      <Button title="Snap to index 3" onPress={() => snapToIndex(3)} />

      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backgroundStyle={{ backgroundColor: '#1d0f4e' }}
        handleIndicatorStyle={{ backgroundColor: '#fff' }}
        backdropComponent={renderBackdrop}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.containerHeadLine}>Awesome Bottom Sheet!!! </Text>
        </View>
        {/* <TextInput style={styles.input} /> */}
        <BottomSheetTextInput style={styles.input} />
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  contentContainer: {
    // flex: 1,
    alignItems: 'center',
  },
  containerHeadLine: {
    fontSize: 24,
    fontWeight: '600',
    padding: 20,
    color: '#fff',
  },
  input: {
    marginTop: 8,
    marginHorizontal: 16,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 16,
    lineHeight: 20,
    padding: 8,
    backgroundColor: 'rgba(151, 151, 151, 0.25)',
    color: '#fff',
  },
});
