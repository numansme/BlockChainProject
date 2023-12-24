const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');
require('dotenv').config();

const pinFileToIPFSWithoutJWT = async () => {
  try {
    // Pinata API anahtarı ve API sırrı
    const apiKey = process.env.PINATA_API_KEY;
    const apiSecret = process.env.PINATA_API_SECRET;

    // Yüklemek istediğiniz string veri
    const dataString = 'abcd';

    // Veriyi bir dosyaya yazma
    fs.writeFileSync('data.txt', dataString, 'utf-8');

    // FormData objesini oluşturun
    const formData = new FormData();
    formData.append('file', fs.createReadStream('data.txt'));
    formData.append('pinataOptions', JSON.stringify({ cidVersion: 0 }));
    formData.append('pinataMetadata', JSON.stringify({ name: 'data' }));

    // Pinata servisine isteği gönderin
    const response = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'pinata_api_key': apiKey,
        'pinata_secret_api_key': apiSecret,
      },
    });

    // IPFS hash'ini konsola yazdırın
    console.log('IPFS Hash:', response.data.IpfsHash);
    console.log(`View the file here: https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`);
  } catch (error) {
    console.error('IPFS Yükleme Hatası:', error);
  }
};

pinFileToIPFSWithoutJWT();
