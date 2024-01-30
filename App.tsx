import {View, FlatList, StatusBar} from 'react-native';
import React, {useState} from 'react';
import SingleContactWrapper from './src/components/SingleContactWrapper';
import {useFetchContacts} from './src/hooks/useFetchContacts';
import SearchInput from './src/components/SearchInput';
import {searchContacts} from './src/utils/searchContacts';

const App = () => {
  const contacts = useFetchContacts();

  console.log(contacts.length, 'length');

  const [query, setQuery] = useState('');

  return (
    <View
      style={{
        backgroundColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 15,
      }}>
      <StatusBar
        hidden={false}
        backgroundColor={'white'}
        barStyle="dark-content"
      />
      <SearchInput query={query} setQuery={setQuery} />
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={query ? searchContacts(contacts, query) : contacts}
        showsVerticalScrollIndicator={true}
        renderItem={({item}) => <SingleContactWrapper item={item} />}
      />
    </View>
  );
};

export default App;
