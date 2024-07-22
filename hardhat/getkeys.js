const { Wallet, HDNodeWallet, Mnemonic } = require('ethers');
const dotenv = require('dotenv');
dotenv.config()

const generateKeysFromMnemonic = async () => {
  const pharse = process.env.MNEMONIC;
  const mnemonic = Mnemonic.fromPhrase(pharse);

  for (let i = 0; i < 15; i++) {
    const childNode = HDNodeWallet.fromMnemonic(mnemonic, `m/44'/60'/0'/0/${i}`);
    const childWallet = new Wallet(childNode.privateKey);
    console.log(`Index: ${i}`);
    console.log(`Private Key: ${childWallet.privateKey}`);
    console.log(`Address: ${childWallet.address}`);
    console.log('-----------------------------------------');
  }
};

generateKeysFromMnemonic();
