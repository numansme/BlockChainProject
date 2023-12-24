const axios = require('axios')
const FormData = require('form-data')
const fs = require('fs')
require('dotenv').config()

const pinFileToIPFS = async () => {
  try {
    let data = new FormData()
   
    //process.env.HOME + '/Desktop/basit_ipfs/pinata-api-starter/assets/Pinnie.png'
    //./assets/Pinnie.png
  
    data.append('file', fs.createReadStream("C:/Users/Numan/Desktop/basit_ipfs/pinata-api-starter/assets/Pinnie.png"));
    data.append('pinataOptions', '{"cidVersion": 0}')
    data.append('pinataMetadata', '{"name": "pinnie"}')
    console.log(process);

    const res = await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', data, {
      headers: {
       // 'Authorization': `Bearer ${process.env.PINATA_JWT}`
       'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI2NmU0ZWFhMC1lOGQzLTRkZjQtOTkwZS1iMjg2ZjIxNGJmZTYiLCJlbWFpbCI6Im51bWFuLnNtZTA2QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJlYjI3NDM0NjM1ZWY1MDNjYWZlNyIsInNjb3BlZEtleVNlY3JldCI6Ijc2NzVjZGMwMDBiMjhlOTczZjIxMTNlZWJiY2EzM2VjYzg5Y2JhOWVjODY5YWRlMzc3YzM1NmVlMTFiOWI0NmUiLCJpYXQiOjE3MDMzNjUyMjh9.sliqeeaUzub-LDgbNR0p52zci76_GHwisb9JcuwXGdU`
      }
    })
    console.log(res.data)
    console.log(`View the file here: https://gateway.pinata.cloud/ipfs/${res.data.IpfsHash}`)
  } catch (error) {
    console.log(error)
  } 
}

pinFileToIPFS()
