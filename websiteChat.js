// websiteChat.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyD7EKNDTPOCBX1eUPllgSjhpuGLK2VcYks",
  authDomain: "websitechat-39ef6.firebaseapp.com",
  databaseURL: "https://websitechat-39ef6-default-rtdb.firebaseio.com/",
  projectId: "websitechat-39ef6",
  storageBucket: "websitechat-39ef6.firebasestorage.app",
  messagingSenderId: "676553467649s",
  appId: "1:676553467649:web:dd7e31bcd393fc68209d00"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

window.addEventListener("DOMContentLoaded", () => {
  const chatBox = document.getElementById("chat-box");
  const chatInput = document.getElementById("chat-input");
  const sendBtn = document.getElementById("send-btn");

  if (!chatBox || !chatInput || !sendBtn) return; // only run if elements exist

  sendBtn.onclick = () => {
    const msg = chatInput.value.trim();
    if (msg) {
      push(ref(db, "messages"), { text: msg });
      chatInput.value = "";
    }
  };

  onChildAdded(ref(db, "messages"), (data) => {
    const div = document.createElement("div");
    div.className = "chat-message";
    div.innerText = data.val().text;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
  });
});