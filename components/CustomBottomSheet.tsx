import { View, Text, StyleSheet } from 'react-native';
import React, { forwardRef, useMemo } from 'react';
import BottomSheet, { BottomSheetTextInput } from '@gorhom/bottom-sheet';

interface Props {
  title: string;
}

type Ref = BottomSheet;

const CustomBottomSheet = forwardRef<Ref, Props>((props, ref) => {
  const snapPoints = useMemo(() => ['25%', '50%', '70%', '100%'], []);

  return (
    <BottomSheet
      ref={ref}
      index={1}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      backgroundStyle={{ backgroundColor: '#1d0f4e' }}
      handleIndicatorStyle={{ backgroundColor: '#fff' }}
      //   backdropComponent={renderBackdrop}
    >
      <View style={styles.contentContainer}>
        <Text style={styles.containerHeadLine}>{props.title}</Text>
      </View>
      {/* <TextInput style={styles.input} /> */}
      <BottomSheetTextInput style={styles.input} />
    </BottomSheet>
  );
});

export default CustomBottomSheet;

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
