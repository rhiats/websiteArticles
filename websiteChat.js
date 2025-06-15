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

// Get page ID based on filename
const pageId = location.pathname.split("/").pop().replace(".html", "");

const chatRef = ref(db, `chats/${pageId}`);

// Display messages
onChildAdded(chatRef, (snapshot) => {
  const message = snapshot.val();
  const chatBox = document.getElementById("chat-box");
  const p = document.createElement("p");
  p.textContent = message;
  chatBox.appendChild(p);
});

// Send a message
document.getElementById("send-btn").addEventListener("click", () => {
  const input = document.getElementById("chat-input");
  const text = input.value.trim();
  if (text) {
    push(chatRef, text);
    input.value = "";
  }
});