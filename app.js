const HASH="2e12901188590d521deb2dc8a85c9ab4b416b9684ea85d09f6a580f81ef05e2a";
async function sha256(s){const b=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(s));return [...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,"0")).join("")}
async function login(){let v=document.getElementById("pw").value;if(await sha256(v)===HASH){sessionStorage.setItem("pc_auth","1");showApp()}else document.getElementById("error").textContent="Password non corretta."}
function showApp(){document.getElementById("login").classList.add("hidden");document.getElementById("app").classList.remove("hidden")}
function logout(){sessionStorage.removeItem("pc_auth");location.reload()}
function openSection(t,d){document.getElementById("home").classList.add("hidden");document.getElementById("section").classList.remove("hidden");document.getElementById("st").textContent=t;document.getElementById("sd").textContent=d;window.scrollTo(0,0)}
function goHome(){document.getElementById("section").classList.add("hidden");document.getElementById("home").classList.remove("hidden");window.scrollTo(0,0)}
document.getElementById("pw").addEventListener("keydown",e=>{if(e.key==="Enter")login()})
if(sessionStorage.getItem("pc_auth")==="1")showApp();
