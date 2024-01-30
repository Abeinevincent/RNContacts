import {useEffect, useState} from 'react';
import {PermissionsAndroid, Platform} from 'react-native';
import {PERMISSIONS, request} from 'react-native-permissions';

const useContactsPermission: () => boolean = () => {
  const [isPermissionGranted, setPermissionGranted] = useState(false);

  useEffect(() => {
    const requestContactsPermission = async () => {
      try {
        if (Platform.OS === 'android') {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
            {
              title: 'Contacts Permission',
              message: 'App needs access to your contacts',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Contacts permission granted');
            setPermissionGranted(true);
          } else {
            console.log('Contacts permission denied');
            setPermissionGranted(false);
          }
        } else if (Platform.OS === 'ios') {
          const permissionStatus = await request(PERMISSIONS.IOS.CONTACTS);

          if (permissionStatus === 'granted') {
            console.log('Contacts permission granted');
            setPermissionGranted(true);
          } else {
            console.log('Contacts permission denied');
            setPermissionGranted(false);
          }
        } else {
          console.log('Unsupported platform');
          setPermissionGranted(false);
        }
      } catch (err) {
        console.warn(err);
        setPermissionGranted(false);
      }
    };

    requestContactsPermission();
  }, []); // Empty dependency array means this effect runs once on component mount

  return isPermissionGranted;
};

export default useContactsPermission;
