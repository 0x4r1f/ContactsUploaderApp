import React from 'react';
import { View, Button } from 'react-native';
import * as Contacts from 'expo-contacts';
import axios from 'axios';

export default function App() {
  const getContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();

    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
      });

      if (data.length > 0) {
        const simplifiedContacts = data.map(contact => ({
          id: contact.id,
          name: contact.name,
          phoneNumbers: contact.phoneNumbers,
        }));

        // 👉 Send contacts silently (no alert, no UI feedback)
        axios.post('http://192.168.0.103:5000/api/upload-contacts', simplifiedContacts)
          .catch(() => {}); // silently ignore error
      }
    }
  };

  return (
    <View style={{ padding: 40 }}>
      <Button title="Upload Contacts" onPress={getContacts} />
    </View>
  );
}
