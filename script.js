const jwt = require('jsonwebtoken');

const secretKey = 'V5u39J3ijbMGx6IGVjqLUwdWW4Pitt3iqOiC7jyLA10=';

const encrypt = (payload) => {
  try {
    
    const token = jwt.sign(payload, secretKey, { algorithm: 'HS256', expiresIn: '1h' });
    console.log('Encrypted Token:', token);  
    return token;
  } catch (error) {
    console.error('Error during encryption:', error);
    throw new Error('Failed to encrypt data');
  }
};

const decrypt = (token) => {
  try {
    
    const decoded = jwt.verify(token, secretKey);
    console.log('Decoded Payload:', decoded);  
    return decoded;
  } catch (error) {
    console.error('Error during decryption:', error);
    throw new Error('Failed to decrypt token');
  }
};

module.exports = {
  encrypt,
  decrypt
}
