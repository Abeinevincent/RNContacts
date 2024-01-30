import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

const SearchInput = ({
  query,
  setQuery,
}: {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <View
      style={{
        elevation: 1,
        paddingHorizontal: 30,
        width: '90%',
        borderRadius: 25,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      }}>
      {/* <View style={styles.leftIconWrapper}>
        <MaterialIconsIcon name={'search'} color={primaryColor} size={35} />
      </View> */}
      <TextInput
        value={query}
        onChangeText={val => setQuery(val)}
        placeholder="Search..."
        placeholderTextColor={'#999'}
        style={{
          fontSize: 17,
          textDecorationLine: 'none',
          fontWeight: '500',
          width: '100%',
          color: '#555',
        }}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  leftIconWrapper: {
    justifyContent: 'flex-end',
    opacity: 0.6,
  },
});
