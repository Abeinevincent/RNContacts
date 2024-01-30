import {IContact} from '../typings/contacts.type';

// Search contacts using any of the keys on the IContact interface
export const searchContacts = (contactlist: IContact[], query: string) => {
  return contactlist?.filter((contact: IContact) => {
    return Object.values(contact).some(value => {
      if (typeof value === 'string') {
        return value.toLowerCase().includes(query);
      } else if (typeof value === 'boolean') {
        // Allow searching for boolean values
        return value.toString().toLowerCase().includes(query);
      } else if (
        Array.isArray(value) &&
        value.length > 0 &&
        typeof value[0] === 'object'
      ) {
        // Handle array of objects
        const arrayValues = value as Array<{[key: string]: any}>;
        return arrayValues.some(item =>
          Object.values(item).some(
            itemValue =>
              typeof itemValue === 'string' &&
              itemValue.toLowerCase().includes(query),
          ),
        );
      } else if (typeof value === 'object' && value !== null) {
        // Handle other objects
        return Object.values(value).some(
          itemValue =>
            typeof itemValue === 'string' &&
            itemValue.toLowerCase().includes(query),
        );
      }

      return false;
    });
  });
};
