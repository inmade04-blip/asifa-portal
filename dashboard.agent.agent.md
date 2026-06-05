<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard - ASIFA</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        * {margin: 0; padding: 0; box-sizing: border-box; font-family: 'Poppins', sans-serif;}
        body {background: #0f172a; color: #e2e8f0;}

        /* Header */
      .header {background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 15px 20px;
                 display: flex; justify-content: space-between; align-items: center; position: sticky; top: 0; z-index: 100;}
      .header-left h2 {font-size: 18px; margin-bottom: 3px;}
      .header-left p {font-size: 12px; opacity: 0.9;}
      .wallet {background: rgba(255,255,255,0.2); padding: 8px 15px; border-radius: 20px;
                 display: flex; align-items: center; gap: 8px; font-weight: 600;}
      .logout-btn {background: rgba(239, 68, 68, 0.9); color: white; border: none;
                     padding: 8px 15px; border-radius: 20px; cursor: pointer; font-weight: 600; margin-left: 10px;}

        /* Dashboard */
      .dashboard {padding: 20px; max-width: 1200px; margin: auto;}
      .stats {display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-bottom: 30px;}
      .stat-box {background: #1e293b; padding: 20px; border-radius: 12px; border: 1px solid #334155;}
      .stat-box.icon {width: 40px; height: 40px; border-radius: 8px; display: flex; align-items: center;
                         justify-content: center; font-size: 18px; margin-bottom: 12px;}
      .stat-box h4 {color: #94a3b8; font-size: 13px; margin-bottom: 8px; font-weight: 500;}
      .stat-box h2 {font-size: 24px; font-weight: 700;}

        /* Services */
      .section-title {font-size: 20px; margin-bottom: 20px; font-weight: 600; display: flex;
                        justify-content: space-between; align-items: center;}
      .filter-btn {background: #1e293b; color: #94a3b8; padding: 8px 16px; border: 1px solid #334155;
                     border-radius: 20px; margin: 5px; cursor: pointer; font-size: 13px; font-weight: 600;}
      .filter-btn.active,.filter-btn:hover {background: #667eea; color: white; border-color: #667eea;}
      .service-item {background: #1e293b; border: 1px solid #334155; padding: 20px; border-radius: 12px;
        .service-grid {
    display: grid; 
    grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); 
    gap: 8px; 
    padding: 10px; 
}

.service-item {
    background: #1e293b; 
    border: 1px solid #334155; 
    padding: 10px 6px; 
    border-radius: 8px;
    text-align: center; 
    cursor: pointer; 
    transition: all 0.3s;
    min-height: 95px;
}

.service-item:hover {
    border-color: #667eea; 
    transform: translateY(-2px); 
    box-shadow: 0 3px 10px rgba(102, 126, 234, 0.3);
}

.service-item i {
    font-size: 24px; 
    color: #667eea; 
    margin-bottom: 4px;
}

.service-item h4 {
    font-size: 11px; 
    margin-bottom: 2px; 
    font-weight: 600;
    line-height: 1.1;
}

.service-item .commission {
    color: #22c55e; 
    font-size: 10px; 
    font-weight: 600;
}
                       text-align: center; cursor: pointer; transition: all 0.3s;}
      .service-item:hover {border-color: #667eea; transform: translateY(-3px); box-shadow: 0 5px 20px rgba(102, 126, 234, 0.3);}
      .service-item i {font-size: 32px; color: #667eea; margin-bottom: 12px;}
      .service-item h4 {font-size: 14px; margin-bottom: 5px;}
      .service-item.commission {color: #22c55e; font-size: 12px; font-weight: 600;}

        /* Transactions */
      .tx-table {background: #1e293b; border: 1px solid #334155; border-radius: 12px; overflow-x: auto; margin-top: 30px;}
       table {width: 100%; border-collapse: collapse; min-width: 600px;}
       th {background: #0f172a; padding: 12px; text-align: left; font-size: 12px; color: #94a3b8; font-weight: 600;}
       td {padding: 12px; border-top: 1px solid #334155; font-size: 13px;}
      .status {padding: 4px 10px; border-radius: 15px; font-size: 11px; font-weight: 600;}
      .status.success {background: rgba(34, 197, 94, 0.1); color: #22c55e;}
      .status.pending {background: rgba(245, 158, 11, 0.1); color: #f59e0b;}

        /* Modal */
      .modal {display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0;
                background: rgba(0,0,0,0.7); z-index: 200; align-items: center; justify-content: center;}
      .modal.active {display: flex;}
      .modal-content {background: #1e293b; border: 1px solid #334155; border-radius: 16px;
                        padding: 30px; max-width: 500px; width: 90%; max-height: 90vh; overflow-y: auto;}
      .modal-header {display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px;}
      .close-modal {background: none; border: none; color: #94a3b8; font-size: 24px; cursor: pointer;}
      .form-group {margin-bottom: 20px;}
      .form-group label {display: block; margin-bottom: 8px; font-size: 14px; color: #cbd5e1;}
      .form-group input,.form-group select {width: 100%; padding: 12px; background: #0f172a;
                                               border: 1px solid #334155; border-radius: 8px;
                                               color: #e2e8f0; font-size: 14px;}
      .btn-submit {width: 100%; padding: 14px; background: #667eea; border: none;
                     border-radius: 8px; color: white; font-weight: 600; cursor: pointer; font-size: 15px;}
      .btn-submit:disabled {background: #475569; cursor: not-allowed;}

        /* Login Screen */
      .login-screen {display: flex; align-items: center; justify-content: center; min-height: 100vh;
                       background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);}
      .login-box {background: #1e293b; padding: 40px; border-radius: 16px; width: 90%; max-width: 400px;}
      .login-box h2 {text-align: center; margin-bottom: 30px;}

        @media (max-width: 768px) {
          .header {flex-direction: column; gap: 10px; align-items: flex-start;}
          .service-grid {grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));}
        }
        /* Service Grid - 1 Line এ 4টা Box */
#serviceGrid {
    display: grid !important;
    grid-template-columns: repeat(4, 1fr) !important;
    gap: 8px !important;
    padding: 10px !important;
}

#serviceGrid .service-item {
    background: #1e293b !important;
    border: 1px solid #334155 !important;
    padding: 8px 4px !important;
    border-radius: 8px !important;
    text-align: center !important;
    cursor: pointer !important;
    min-height: 80px !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
}

#serviceGrid .service-item:hover {
    border-color: #667eea !important;
    background: #233447 !important;
    transform: scale(1.02) !important;
}

#serviceGrid .service-item i {
    font-size: 22px !important;
    color: #667eea !important;
    margin-bottom: 4px !important;
}

#serviceGrid .service-item h4 {
    font-size: 10px !important;
    margin: 2px 0 !important;
    color: white !important;
    font-weight: 600 !important;
    line-height: 1.1 !important;
}

#serviceGrid .service-item .commission {
    font-size: 9px !important;
    color: #22c55e !important;
    font-weight: 700 !important;
    margin: 0 !important;
}
/* Service Grid - 1 Line এ 4টা Box */
#serviceGrid {
    display: grid !important;
    grid-template-columns: repeat(4, 1fr) !important;
    gap: 8px !important;
    padding: 10px !important;
}

#serviceGrid .service-item {
    background: #1e293b !important;
    border: 1px solid #334155 !important;
    padding: 8px 4px !important;
    border-radius: 8px !important;
    text-align: center !important;
    min-height: 85px !important;
    cursor: pointer !important;
}

#serviceGrid .service-item:hover {
    border-color: #667eea !important;
    background: #233447 !important;
    transform: scale(1.02) !important;
}

#serviceGrid .service-item i {
    font-size: 22px !important;
    color: #667eea !important;
    margin-bottom: 4px !important;
}

#serviceGrid .service-item h4 {
    font-size: 10px !important;
    margin: 2px 0 !important;
    color: white !important;
    line-height: 1.1 !important;
}

#serviceGrid .service-item .commission {
    font-size: 9px !important;
    color: #22c55e !important;
    font-weight: 700 !important;
    margin: 0 !important;
}

/* Mobile এ 1 লাইনে 3টা */
@media (max-width: 600px) {
    #serviceGrid {
        grid-template-columns: repeat(3, 1fr) !important;
        gap: 6px !important;
    }
    
    #serviceGrid .service-item {
        min-height: 75px !important;
        padding: 6px 2px !important;
    }
    
    #serviceGrid .service-item i {
        font-size: 20px !important;
    }
    
    #serviceGrid .service-item h4 {
        font-size: 9px !important;
    }
}

/* ছোট Mobile এ 1 লাইনে 2টা */
@media (max-width: 380px) {
    #serviceGrid {
        grid-template-columns: repeat(2, 1fr) !important;
    }
}
    </style>
</head>
<body>

    <!-- Login Screen -->
    <div class="login-screen" id="loginScreen">
        <div class="login-box">
            <h2><i class="fas fa-user-lock"></i> Agent Login</h2>
            <form onsubmit="loginAgent(event)">
                <div class="form-group">
                    <label>Email / Mobile</label>
                    <input type="text" id="loginEmail" placeholder="Enter email" required>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" id="loginPassword" placeholder="Enter password" required>
                </div>
                <button type="submit" class="btn-submit">Login to Dashboard</button>
            </form>
            <p style="text-align: center; margin-top: 20px; font-size: 13px; color: #94a3b8;">
                New Agent? Contact Admin on WhatsApp
            </p>
        </div>
    </div>

    <!-- Dashboard Screen -->
    <div id="dashboardScreen" style="display: none;">
        <div class="header">
            <div class="header-left">
                <h2 id="agentName">Loading...</h2>
                <p>Agent ID: <span id="agentId">-</span></p>
            </div>
            <div style="display: flex; align-items: center;">
                <div class="wallet">
                    <i class="fas fa-wallet"></i>
                    <span id="walletBalance">₹0</span>
                </div>
                <button class="logout-btn" onclick="logout()"><i class="fas fa-sign-out-alt"></i></button>
            </div>
        </div>

        <div class="dashboard">
            <!-- Stats -->
            <div class="stats">
                <div class="stat-box">
                    <div class="icon" style="background: rgba(34, 197, 94, 0.1); color: #22c55e;">
                        <i class="fas fa-rupee-sign"></i>
                    </div>
                    <h4>Wallet Balance</h4>
                    <h2 id="statWallet">₹0</h2>
                </div>
                <div class="stat-box">
                    <div class="icon" style="background: rgba(59, 130, 246, 0.1); color: #3b82f6;">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <h4>Total Earning</h4>
                    <h2 id="statEarning">₹0</h2>
                </div>
                <div class="stat-box">
                    <div class="icon" style="background: rgba(245, 158, 11, 0.1); color: #f59e0b;">
                        <i class="fas fa-receipt"></i>
                    </div>
                    <h4>Total Transaction</h4>
                    <h2 id="statTx">0</h2>
                </div>
                <div class="stat-box">
                    <div class="icon" style="background: rgba(239, 68, 68, 0.1); color: #ef4444;">
                        <i class="fas fa-clock"></i>
                    </div>
                    <h4>Pending</h4>
                    <h2 id="statPending">0</h2>
                </div>
            </div>

            <!-- Services -->
            <div class="section-title">
                <span>Available Services</span>
            </div>
            <div style="margin-bottom: 20px;">
                <button class="filter-btn active" onclick="filterServices('all')">All</button>
                <button class="filter-btn" onclick="filterServices('Government')">Government</button>
                <button class="filter-btn" onclick="filterServices('Private')">Private</button>
                <button class="filter-btn" onclick="filterServices('Banking')">Banking</button>
                <button class="filter-btn" onclick="filterServices('Insurance')">Insurance</button>
            </div>
            <div style="text-align: right; margin-bottom: 10px;">
    <button onclick="togglePayment()" style="padding: 8px 15px; background: #e94560; color: white; border: none; border-radius: 5px; cursor: pointer;">
        💰 Payment Link
    </button>
</div>
            <div class="service-grid" id="serviceGrid"></div>
            <!-- Flight Booking Widget Start -->
<div id="flightWidget" style="display: none; margin-top: 20px;">
    <div class="section">
        <h2>✈️ Flight Booking - Cheapest Fare</h2>
        <div style="background: #16213e; padding: 20px; border-radius: 10px;">
            <!-- Travelpayouts Widget Start -->
            <script async src="https://tpwgts.com/content?currency=inr&trs=TOMAR_MARKER&shmarker=TOMAR_MARKER&locale=en&limit=10&powered_by=true&primary_color=00B1DD&color_button=e94560&color_font=FFFFFF&search_host=aviasales.com" charset="utf-8"></script>
            <!-- Travelpayouts Widget End -->
        </div>
        <button onclick="closeFlightWidget()" style="margin-top: 10px; padding: 8px 15px; background: #555; color: white; border: none; border-radius: 5px; cursor: pointer;">Close</button>
    </div>
</div>
<!-- Flight Booking Widget End -->
            <!-- Razorpay Backend Payment Link Generator -->
<div class="section"id="paymentSection"style="display:none;">
    <h2>⚡ Instant Payment Link - Backend Safe</h2>
    <div style="background: #16213e; padding: 20px; border-radius: 10px;">
        <input type="number" id="amount" placeholder="Amount in ₹ - Ex: 500" 
               style="width: 100%; padding: 12px; margin: 8px 0; border-radius: 5px; border: none; background: #0f0f23; color: white;">
        
        <input type="text" id="purpose" placeholder="Payment For? Ex: Passport Apply Fee" 
               style="width: 100%; padding: 12px; margin: 8px 0; border-radius: 5px; border: none; background: #0f0f23; color: white;">
        
        <input type="text" id="customer" placeholder="Customer Name" 
               style="width: 100%; padding: 12px; margin: 8px 0; border-radius: 5px; border: none; background: #0f0f23; color: white;">
        
        <button onclick="generatePaymentLink()" 
                style="width: 100%; padding: 15px; background: #e94560; color: white; border: none; border-radius: 5px; font-weight: bold; cursor: pointer; margin-top: 10px;">
            🔗 Generate Link Now
        </button>
        
        <div id="linkResult" style="margin-top: 15px; padding: 15px; background: #0f0f23; border-radius: 5px; display: none;">
            <p style="color: #00ff88; font-weight: bold;">✅ Payment Link Ready:</p>
            <input type="text" id="paymentLink" readonly 
                   style="width: 100%; padding: 10px; margin: 10px 0; background: #1a1a2e; color: white; border: 1px solid #00ff88; border-radius: 5px;">
            <button onclick="copyLink()" 
                    style="width: 49%; padding: 10px; background: #00ff88; color: #0f0f23; border: none; border-radius: 5px; font-weight: bold; cursor: pointer;">
                📋 Copy Link
            </button>
            <button onclick="shareWhatsApp()" 
                    style="width: 49%; padding: 10px; background: #25D366; color: white; border: none; border-radius: 5px; font-weight: bold; cursor: pointer; float: right;">
                💬 WhatsApp
            </button>
        </div>
        
        <p id="errorMsg" style="color: red; margin-top: 10px; display: none;"></p>
    </div>
</div>

<script>
async function generatePaymentLink() {
    const amount = document.getElementById('amount').value;
    const purpose = document.getElementById('purpose').value;
    const customer = document.getElementById('customer').value;
    const errorMsg = document.getElementById('errorMsg');
    const linkResult = document.getElementById('linkResult');
    
    errorMsg.style.display = 'none';
    linkResult.style.display = 'none';
    
    if(!amount || !purpose) {
        errorMsg.innerText = 'Amount আর Purpose দিতে হবে';
        errorMsg.style.display = 'block';
        return;
    }
    
    try {
        // Backend Function Call করছি
        const response = await fetch('/.netlify/functions/razorpay-link', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount, purpose, customer })
        });
        
        const data = await response.json();
        
        if(data.short_url) {
            document.getElementById('paymentLink').value = data.short_url;
            linkResult.style.display = 'block';
        } else {
            errorMsg.innerText = 'Error: ' + (data.error?.description || 'Link বানানো গেল না');
            errorMsg.style.display = 'block';
        }
    } catch(err) {
        errorMsg.innerText = 'Server Error. Backend Check করো';
        errorMsg.style.display = 'block';
    }
}

function copyLink() {
    const linkInput = document.getElementById('paymentLink');
    linkInput.select();
    document.execCommand('copy');
    alert('Link Copy হয়েছে!');
}

function shareWhatsApp() {
    const link = document.getElementById('paymentLink').value;
    const purpose = document.getElementById('purpose').value;
    const amount = document.getElementById('amount').value;
    const text = `ASIFA Portal Payment%0A%0APurpose: ${purpose}%0AAmount: ₹${amount}%0A%0APay Now: ${link}`;
    window.open(`https://wa.me/?text=${text}`, '_blank');
}
function openService(serviceName) { // সব Section লুকাও
    document.getElementById('paymentSection').style.display = 'none';
    document.getElementById('flightWidget').style.display = 'none';
    
    if(serviceName === "FLIGHT BOOKING") {
        document.getElementById('flightWidget').style.display = 'block';
        document.getElementById('flightWidget').scrollIntoView({behavior: 'smooth'});
    }
    else if(serviceName === "PAN CARD TEST") {
        window.open('pan-apply.html', '_blank');
    }
}

function closeFlightWidget() {
    document.getElementById('flightWidget').style.display = 'none';
}

function addTransaction(service, customer, amount, commission) {
    const table = document.querySelector('.tx-table table tbody');
    
    // Date Fix
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    
    const row = `
        <tr>
            <td>${formattedDate}</td>
            <td>${service}</td>
            <td>${customer}</td>
            <td>₹${amount}</td>
            <td>₹${commission}</td>
            <td><span style="color: #4ecca3;">Success</span></td>
        </tr>
    `;
    table.innerHTML = row + table.innerHTML;
}
</script>

            <!-- Recent Transactions -->
            <div class="section-title" style="margin-top: 40px;">
                <span>Recent Transactions</span>
            </div>
            <div class="tx-table">
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Service</th>
                            <th>Customer</th>
                            <th>Amount</th>
                            <th>Commission</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody id="txTableBody">
                        <tr><td colspan="6" style="text-align: center; padding: 30px;">No transactions yet</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- Service Modal -->
    <div class="modal" id="serviceModal">
        <div class="modal-content">
            <div class="modal-header">
                <h3 id="modalServiceName">Service Name</h3>
                <button class="close-modal" onclick="closeModal('serviceModal')">&times;</button>
            </div>
            <form onsubmit="submitService(event)">
                <input type="hidden" id="modalServiceId">
                <input type="hidden" id="modalServicePrice">
                <input type="hidden" id="modalServiceCommission">

                <div class="form-group">
                    <label>Customer Name</label>
                    <input type="text" id="customerName" required>
                </div>
                <div class="form-group">
                    <label>Customer Mobile</label>
                    <input type="text" id="customerMobile" required pattern="[0-9]{10}">
                </div>
                <div class="form-group">
                    <label>Additional Details</label>
                    <input type="text" id="customerDetails" placeholder="e.g. Aadhaar Number, DOB">
                </div>

                <div style="background: #0f172a; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                        <span style="color: #94a3b8;">Service Price:</span>
                        <span id="displayPrice">₹0</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                        <span style="color: #94a3b8;">Your Commission:</span>
                        <span style="color: #22c55e;" id="displayCommission">₹0</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding-top: 8px; border-top: 1px solid #334155;">
                        <span style="font-weight: 600;">Deduct from Wallet:</span>
                        <span style="font-weight: 600;" id="displayDeduct">₹0</span>
                    </div>
                </div>

                <button type="submit" class="btn-submit" id="submitBtn">
                    Submit & Deduct from Wallet
                </button>
            </form>
        </div>
    </div>

<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
  import { getFirestore, collection, getDocs, query, where, doc, getDoc, addDoc, updateDoc, orderBy, limit } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
  import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
  import { getFunctions, httpsCallable } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-functions.js";

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAG-JNoF4LjEphuLU9Yt1bCveo6w_thI1k",
  authDomain: "asifa-64da9.firebaseapp.com",
  projectId: "asifa-64da9",
  storageBucket: "asifa-64da9.firebasestorage.app",
  messagingSenderId: "127951467270",
  appId: "1:127951467270:web:17a46f2e4760dd06e06487",
  measurementId: "G-GPNRD8EHPT"
};

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  const functions=getFunctions(app);
  
  let currentAgent = null;
  let currentAgentDocId = null;

  // Check Auth State
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      await loadAgentData(user.email);
      document.getElementById('loginScreen').style.display = 'none';
      document.getElementById('dashboardScreen').style.display = 'block';
      loadServices('all');
      loadTransactions();
    } else {
      document.getElementById('loginScreen').style.display = 'flex';
      document.getElementById('dashboardScreen').style.display = 'none';
    }
  });

  // Login
  window.loginAgent = async function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert('Login Failed: ' + error.message);
    }
  }

  // Load Agent Data
  async function loadAgentData(email) {
    const q = query(collection(db, "agents"), where("email", "==", email));
    const snap = await getDocs(q);
    if (!snap.empty) {
      const doc = snap.docs[0];
      currentAgentDocId = doc.id;
      currentAgent = doc.data();

      if(currentAgent.status!== 'active') {
        alert('Your account is blocked. Contact Admin.');
        logout();
        return;
      }

      document.getElementById('agentName').innerText = currentAgent.name;
      document.getElementById('agentId').innerText = currentAgent.agentId;
      document.getElementById('walletBalance').innerText = '₹' + (currentAgent.wallet || 0).toLocaleString();
      document.getElementById('statWallet').innerText = '₹' + (currentAgent.wallet || 0).toLocaleString();
      document.getElementById('statEarning').innerText = '₹' + (currentAgent.totalEarning || 0).toLocaleString();
    }
  }

  // Load Services
  window.loadServices = async function(category = 'all') {
    const serviceGrid = document.getElementById('serviceGrid');
   serviceGrid.innerHTML = '<div style="text-align: center; padding: 20px; color: #667eea;"><i class="fas fa-spinner fa-spin"></i> Loading...</div>';
    let q = category === 'all'
     ? query(collection(db, "services"), where("status", "==", "active"))
      : query(collection(db, "services"), where("category", "==", category), where("status", "==", "active"));

    const snap = await getDocs(q);
    let html = '';

    snap.forEach((doc) => {
      const s = doc.data();
      html += `<div class="service-item" onclick="openService('${doc.id}', '${s.name}', ${s.price}, ${s.commission})">
          <i class="fas ${s.icon}"></i>
          <h4>${s.name}</h4>
          <p class="commission">Earn ₹${s.commission}</p>
        </div>`;
    });
    serviceGrid.innerHTML = html || '<div style="text-align: center; grid-column: 1/-1; padding: 40px; color: #94a3b8;">No services available</div>';
  }

  // Filter Services
  window.filterServices = function(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    loadServices(category);
  }

  // Open Service Modal
  window.openService = function(id, name, price, commission) {
    document.getElementById('modalServiceId').value = id;
    document.getElementById('modalServiceName').innerText = name;
    document.getElementById('modalServicePrice').value = price;
    document.getElementById('modalServiceCommission').value = commission;
    document.getElementById('displayPrice').innerText = '₹' + price;
    document.getElementById('displayCommission').innerText = '₹' + commission;
    document.getElementById('displayDeduct').innerText = '₹' + (price - commission);
    document.getElementById('serviceModal').classList.add('active');
  }

  // Submit Service
  window.submitService = async function(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  btn.disabled = true;
  btn.innerText = 'Processing...';

  try { // 👈 Line 364 এ try Start করো
    const price = parseInt(document.getElementById('modalServicePrice').value);
    const commission = parseInt(document.getElementById('modalServiceCommission').value);
    const deductAmount = price - commission;

    // Check Wallet
    if((currentAgent.wallet || 0) < deductAmount) {
      alert('Insufficient Wallet Balance! Please recharge.');
      btn.disabled = false;
      btn.innerText = 'Submit & Deduct from Wallet';
      return;
    }

  // FLIGHT BOOKING এর জন্য 
  let flightDetails = {};
const serviceName = document.getElementById('modalServiceName').innerText;
console.log('Service Name:', serviceName); // Check করার জন্য
if(serviceName.toLowerCase().includes('flight')) {
    
    const from = prompt("From Airport Code: ex CCU");
    if (!from) return;
    const to = prompt("To Airport Code: ex DEL");
    if (!to) return;
    const date = prompt("Date: 2026-06-25");
    if (!date) return;
    
    const fromCode = from.toUpperCase();
    const toCode = to.toUpperCase();
    const marker = "734653.Asifatravels"; // তোমার Marker ID
    const flightUrl = `https://www.aviasales.com/search?origin_iata=${fromCode}&destination_iata=${toCode}&depart_date=${date}&marker=${marker}`;
    
    window.open(flightUrl, '_blank');
    
    // Auto Transaction Add করার জন্য
    addTransaction('FLIGHT BOOKING', fromCode + ' to ' + toCode, 'N/A', 250);
    
} // <-- এই } টা Main, এটা না থাকলেই Error

      // Add Transaction
      await addDoc(collection(db, "transactions"), {
    agentId: currentAgent.agentId,
    agentName: currentAgent.name,
    agentEmail: currentAgent.email,
    service: document.getElementById('modalServiceName').innerText,
    customerName: document.getElementById('customerName').value,
    customerMobile: document.getElementById('customerMobile').value,
    customerDetails: document.getElementById('customerDetails').value,
    amount: price,
    commission: commission,
    deductAmount: deductAmount,
    status: flightDetails.status || 'success',
    ackNo: flightDetails.status? 'FLT' + Date.now() : 'ASIFA' + Date.now(),
    date: new Date(),
   ...flightDetails // Flight এর Data Add হবে
  });

      // Update Wallet
      const newWallet = (currentAgent.wallet || 0) - deductAmount;
      const newEarning = (currentAgent.totalEarning || 0) + commission;
      await updateDoc(doc(db, "agents", currentAgentDocId), {
        wallet: newWallet,
        totalEarning: newEarning
      });

      currentAgent.wallet = newWallet;
      currentAgent.totalEarning = newEarning;

      // Update UI
      document.getElementById('walletBalance').innerText = '₹' + newWallet.toLocaleString();
      document.getElementById('statWallet').innerText = '₹' + newWallet.toLocaleString();
      document.getElementById('statEarning').innerText = '₹' + newEarning.toLocaleString();

      alert('Success! Service submitted.\nCommission ₹' + commission + ' added to earnings.\nNew Balance: ₹' + newWallet);
      closeModal('serviceModal');
      e.target.reset();
      loadTransactions();

    } catch (error) {
      alert('Error: ' + error.message);
    }

    btn.disabled = false;
    btn.innerText = 'Submit & Deduct from Wallet';
  }

  // Load Transactions
  async function loadTransactions() {
    const q = query(
      collection(db, "transactions"),
      where("agentEmail", "==", currentAgent.email),
      orderBy("date", "desc"),
      limit(10)
    );
    const snap = await getDocs(q);
    let html = '';
    let count = 0;

    snap.forEach((doc) => {
      const t = doc.data();
      count++;
      const date = t.date? new Date(t.date.seconds * 1000).toLocaleDateString() : 'N/A';
      html += `<tr>
        <td>${date}</td>
        <td>${t.service}</td>
        <td>${t.customerName}</td>
        <td>₹${t.amount}</td>
        <td style="color: #22c55e;">₹${t.commission}</td>
        <td><span class="status success">${t.status}</span></td>
      </tr>`;
    });

    document.getElementById('txTableBody').innerHTML = html || '<tr><td colspan="6" style="text-align: center; padding: 30px;">No transactions yet</td></tr>';
    document.getElementById('statTx').innerText = count;
  }

  window.closeModal = function(id) {
    document.getElementById(id).classList.remove('active');
  }

  window.logout = async function() {
    await signOut(auth);
  }

</script>

</body>
</html>