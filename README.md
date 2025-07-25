# ContactsUploaderApp

A simple React Native app to read contacts from your phone and upload them to a Node.js backend server that saves the contacts in a JSON file.

---
## Setup & Run

Follow the steps below to test the app on your physical device:

---

### 1️⃣ Start the Backend Server

Make sure your server is running:

```bash
cd contacts-backend
npm install
node server.js
```

This will start the server on:
```
http://localhost:5000
```
or your local IP address (e.g., `http://192.168.0.109:5000`)

---


1. Navigate to mobile folder:
   cd mobile
2. Install dependencies:

3. Start the server:
  node server.js
[Server runs on http://localhost:5000]
### 2️⃣ Start the React Native App (Expo)

```bash
cd ContactsUploaderApp
npm install
npm start
```

You will see a QR code in the terminal or browser (Expo Dev Tools).

---

### 3️⃣ Open Expo Go App on Your Phone

- **Android**: Open the **Expo Go** app and scan the QR code.
- **iOS**: Use the default **Camera app** to scan the QR code.

Make sure your **phone and PC are on the same Wi-Fi network.**

---

### 4️⃣ Press "Upload Contacts" Button

Once the app opens on your phone:

✅ Tap the **"Upload Contacts"** button  
✅ It will silently request permission and send contacts to the server  
❌ No contacts will be displayed on screen  
📝 Contacts will be saved in `backend/contacts.json`

---

### 🔧 Update Server IP in App.js (if needed)

In `mobile/App.js`, update the server IP like this:

```js
axios.post('http://192.168.0.109:5000/api/upload-contacts', simplifiedContacts);
```

Replace `192.168.0.103` with your actual local IP address (shown in Expo terminal).

