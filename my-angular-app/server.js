const express = require('express');
const path = require('path');

const app = express();

const appName = 'my-angular-app'; // Replace with your actual app name

app.use(express.static(path.join(__dirname, 'dist', appName)));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist', appName, 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
