🧮 Math2Earn
Math2Earn is a lightweight Ethereum dApp that rewards users with tokens for solving simple math problems. Built with HTML, CSS, JavaScript, and Solidity, it runs entirely on the frontend — no backend required.

📁 Project Structure
Code
Math2Earn/
├── index.html         # Main UI
├── style.css          # Styling
├── app.js             # Wallet + mint logic
└── Math2Earn.sol      # ERC20 smart contract
🚀 How It Works
Users connect their MetaMask wallet.

A random math question appears (e.g., 3 + 7).

If the answer is correct, the frontend calls mint(1 ether) on the smart contract.

The user receives 1 MATH token.

🔧 Setup Instructions
1. Deploy the contract
Use Remix or Hardhat to deploy Math2Earn.sol to Sepolia. The contract exposes:

solidity
function mint(uint256 amount) external {
    _mint(msg.sender, amount);
}
2. No need to update contract address
The deployed contract address is already hardcoded in app.js:

js
const CONTRACT_ADDRESS = "0xYourDeployedContract";
If you redeploy in the future, just update this line — no backend or config files needed.

3. Serve the frontend
You can open index.html directly in your browser, or serve it with a static server:

bash
npx serve .
🦊 MetaMask Setup
Install MetaMask

Switch to Sepolia Testnet

Get test ETH from a Sepolia faucet

🎨 Technologies Used
Solidity – ERC20 token contract

JavaScript – Wallet connection, mint logic

ethers.js – Blockchain interaction

HTML/CSS – UI and styling

📌 Notes
This version is for demo purposes. Anyone can call mint() directly.

For secure minting, consider adding backend signature verification or on-chain math validation.

🔮 Future Updates
Here are some planned enhancements:

✅ Token balance display: Show how many MATH tokens the user owns.

✅ Leaderboard: Track top solvers and reward streaks.

✅ Difficulty levels: Add subtraction, multiplication, and timed challenges.

✅ Mint history: Show recent mints and transaction links.

✅ Mobile optimization: Improve layout and input UX on small screens.

✅ Secure minting: Add backend signer or zero-knowledge math verification.

Feel free to fork and contribute!

📜 License
MIT — free to use, remix, and learn from.
