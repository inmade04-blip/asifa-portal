<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Dashboard</title>
    <style>
        body{font-family: Arial; background:#f2f2f2;}
        .card{width:200px; padding:20px; margin:10px; background:white; border-radius:10px; cursor:pointer; display:inline-block; text-align:center; box-shadow:0 2px 5px rgba(0,0,0,0.1);}
        .card:hover{background:#e0e0e0;}
        #logoutBtn{padding:10px 20px; background:red; color:white; border:none; border-radius:5px; cursor:pointer;}
    </style>
</head>
<body>

<h1>Welcome to Dashboard</h1>
<button id="logoutBtn" onclick="logout()">Logout</button>
<hr>

<!-- 1. SOB SERVICE EKHANE THAKBE -->
<div id="allServices">
    
    <!-- PAN CARD -->
    <div id="panCard" class="card">
        <h3>PAN CARD</h3>
        <p>New PAN / Correction</p>
    </div>

    <!-- AADHAAR CARD -->
    <div class="card">
        <h3>AADHAAR</h3>
        <p>Aadhaar Services</p>
    </div>

    <!-- Baki service ekhane add korbi -->
    
</div>

<!-- 2. LOGIN NA THAKLE EI TA DEKHABE -->
<div id="loginMsg" style="display:none; text-align:center; margin-top:100px;">
    <h2 style="color:red;">⚠️ Age Login Korte Hobe</h2>
    <a href="index.html">Login Page e Jao</a>
</div>

<script>
// 3. PAGE LOAD E CHECK KORBE
window.onload = function(){
    if(localStorage.getItem("login") == "ok"){
        // Login thakle sob dekhabe
        document.getElementById("allServices").style.display = "block";
        document.getElementById("loginMsg").style.display = "none";

        // PAN CARD click er kaj
        document.getElementById("panCard").onclick = () => {
            window.open('https://snpapnapan.com/portallogin/nsdlekycpan', '_blank');
        }

    } else {
        // Login na thakle sob hide
        document.getElementById("allServices").style.display = "none";
        document.getElementById("loginMsg").style.display = "block";
    }
}

// 4. LOGOUT FUNCTION
function logout(){
    localStorage.removeItem("login");
    window.location.href = "index.html";
}
</script>

</body>
</html>
