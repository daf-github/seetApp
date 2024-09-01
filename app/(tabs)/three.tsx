import { Button, StyleSheet } from 'react-native';

import { View } from '@/components/Themed';

import { useRef } from 'react';
import { BottomSheetModal, useBottomSheetModal } from '@gorhom/bottom-sheet';

import CustomBottomSheetModal from '@/components/CustomBottomSheetModal';

export default function TabThreeScreen() {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const { dismiss } = useBottomSheetModal();

  const handlePresentModalPress = () => bottomSheetRef.current?.present();
  const handleDismissModalPress = () => bottomSheetRef.current?.dismiss();

  return (
    <View style={styles.container}>
      <Button title="Present" onPress={handlePresentModalPress} />
      <Button title="Dismiss" onPress={handleDismissModalPress} />

      <CustomBottomSheetModal ref={bottomSheetRef} />
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
