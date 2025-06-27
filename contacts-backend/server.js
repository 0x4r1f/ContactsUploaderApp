const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

// Allow cross-origin requests and parse large JSON payloads (fix 413 error)
app.use(cors());
app.use(express.json({ limit: '5mb' })); // ✅ Increased payload size limit

// Define path to save contacts
const filePath = path.join(__dirname, 'contacts.json');

// POST: Save contacts to contacts.json
app.post('/api/upload-contacts', (req, res) => {
  const contacts = req.body;

  console.log(`📥 Received ${contacts.length} contacts`);

  let existingContacts = [];
  if (fs.existsSync(filePath)) {
    const fileData = fs.readFileSync(filePath, 'utf-8');
    existingContacts = JSON.parse(fileData);
  }

  const allContacts = [...existingContacts, ...contacts]; // Add new contacts

  fs.writeFileSync(filePath, JSON.stringify(allContacts, null, 2)); // Save to file

  res.json({ message: 'Contacts saved to file!' });
});

// GET: Read contacts from contacts.json
app.get('/api/contacts', (req, res) => {
  if (!fs.existsSync(filePath)) {
    return res.json([]);
  }

  const fileData = fs.readFileSync(filePath, 'utf-8');
  const contacts = JSON.parse(fileData);
  res.json(contacts);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
