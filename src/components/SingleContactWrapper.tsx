import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {IContact} from '../typings/contacts.type';

const SingleContactWrapper = ({item}: {item: IContact}) => {
  return (
    <TouchableOpacity
      onPress={() => console.log('first')}
      style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.user_image}
          source={{
            uri:
              item?.thumbnailPath ||
              'https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png',
          }}
        />
      </View>

      <View style={styles.name_message}>
        <View style={styles.security_btn}>
          <Text style={styles.name}>{item.displayName}</Text>
        </View>

        <Text style={styles.message}>{item.phoneNumbers[0]?.number} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 15,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    paddingVertical: 10,
  },

  imageWrapper: {
    padding: 3,
    position: 'relative',
  },

  user_image: {
    width: 35,
    height: 35,
    borderRadius: 50,
    objectFit: 'contain',
    borderColor: '#ddd',
    borderWidth: 1,
  },

  name_message: {
    flex: 3,
    flexDirection: 'column',
    gap: 2,
  },

  name: {
    fontSize: 15,
    color: '#333',
    fontWeight: 'bold',
  },

  message: {
    fontSize: 13,
    color: 'gray',
  },

  time_wrapper: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  icon_wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 50,
    padding: 6,
    marginRight: 3,
  },

  time: {
    color: 'gray',
    fontSize: 11,
  },

  online_btn: {
    width: 10,
    height: 10,
    borderRadius: 25,
    backgroundColor: '#0f0',
    position: 'absolute',
    borderColor: 'white',
    borderWidth: 2,
    right: 5,
    bottom: 3,
  },

  security_btn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SingleContactWrapper;
