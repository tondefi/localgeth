const { ethers } = require('ethers');
const fs = require('fs');

const generateMnemonic = () => {
  // Generate a random wallet which includes a mnemonic
  const wallet = ethers.Wallet.createRandom();

  // Get the mnemonic, private key and address
  const mnemonic = wallet.mnemonic.phrase;
  const privateKey = wallet.privateKey;
  const address = wallet.address;

  console.log(`Mnemonic: ${mnemonic}`);
  console.log(`Private Key: ${privateKey}`);
  console.log(`Address: ${address}`);

  if (fs.existsSync('.env')) {
    const oldEnv = fs.readFileSync('.env', 'utf8');
    fs.appendFileSync('.env.old', `# ${new Date()}\n${oldEnv}\n`);
  }
  fs.writeFileSync('.env', `MNEMONIC="${mnemonic}"\nPRIVATE_KEY=${privateKey}`);
};

generateMnemonic();
