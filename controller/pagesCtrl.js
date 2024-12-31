const path = require('path');

exports.indexPage = (req, res) =>{
  res.sendFile(path.join(__dirname, '..public', 'index.html'));
}

exports.sagaIndexPage = (req, res) =>{
  res.sendFile(path.join(__dirname, '../public', 'saga-index.html'));
}

exports.sagaInfoPage = (req, res) =>{
  res.sendFile(path.join(__dirname, '../public', 'saga-info.html'));
}

exports.cartPage = (req, res) =>{
  res.sendFile(path.join(__dirname, '../public', 'cart.html'));
}
