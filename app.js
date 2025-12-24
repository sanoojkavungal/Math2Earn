


// ================= CONFIG =================
const CONTRACT_ADDRESS = "0x53d40667ed7b5Ef87cCBb67164a5DE32859aeFcb";
const CONTRACT_ABI = [
  "function mint(uint256 amount)"
];

// ================= GLOBALS =================
let provider;
let signer;
let contract;
let userAddress;

// Math state
let a = 0;
let b = 0;
let correctAnswer = 0;

// ================= WALLET =================
async function connectWallet() {
  if (!window.ethereum) {
    alert("Please install MetaMask");
    return;
  }

  try {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    userAddress = await signer.getAddress();

    contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
    document.getElementById("wallet").innerText = userAddress;

    generateQuestion();
  } catch (err) {
    console.error("Wallet connection failed:", err);
    document.getElementById("wallet").innerText = "Connection failed";
  }
}

// ================= MATH =================
function generateQuestion() {
  a = Math.floor(Math.random() * 10);
  b = Math.floor(Math.random() * 10);
  correctAnswer = a + b;

  document.getElementById("question").innerText = `${a} + ${b}`;
  document.getElementById("answer").value = "";
  document.getElementById("status").innerText = "";
}

// ================= SUBMIT =================
async function submitAnswer() {
  const userAnswer = Number(document.getElementById("answer").value);

  if (userAnswer !== correctAnswer) {
    document.getElementById("status").innerText = "❌ Wrong answer!";
    return;
  }

  try {
    document.getElementById("status").innerText = "✅ Correct! Minting...";

    const amount = ethers.utils.parseUnits("1", 18); // 1 token
    const tx = await contract.mint(amount);
    await tx.wait();

    document.getElementById("status").innerText = "🎉 Token minted!";
    generateQuestion();
  } catch (err) {
    console.error(err);
    document.getElementById("status").innerText = "⚠️ Transaction failed";
  }
}

// ================= HOOKS =================
document.getElementById("connect").onclick = connectWallet;
document.getElementById("submit").onclick = submitAnswer;
