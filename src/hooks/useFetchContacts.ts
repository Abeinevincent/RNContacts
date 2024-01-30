import {useEffect, useState} from 'react';
import Contacts from 'react-native-contacts';
import useContactsPermission from './useContactsPermission';
import {IContact} from '../typings/contacts.type';

export const useFetchContacts = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);

  const isPermissionGranted = useContactsPermission();

  const fetchContacts = async () => {
    await Contacts.getAll()
      .then((allContacts: any) => {
        setContacts(allContacts);
      })
      .catch((err: Error) => console.warn(err));
  };

  useEffect(() => {
    isPermissionGranted ? fetchContacts() : console.log('not granted');
  }, [isPermissionGranted]);

  return contacts;
};
