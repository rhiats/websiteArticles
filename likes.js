import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, get, set, onValue } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// ✅ Firebase Config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "XXXXXXXXXXXX",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// ✅ List of like IDs (add more if needed)
const likeIDs = ["airbnb_nyc", "boston_listings"];

// Load and update counts on page load
likeIDs.forEach(id => {
  const countRef = ref(db, `likes/${id}`);
  onValue(countRef, (snapshot) => {
    const count = snapshot.val() ?? 0;
    const el = document.getElementById(`count-${id}`);
    if (el) el.innerText = count;
  });
});

// ✅ Expose `like` function globally
window.like = function(id) {
  const countRef = ref(db, `likes/${id}`);
  get(countRef).then(snapshot => {
    const current = snapshot.val() ?? 0;
    set(countRef, current + 1);
  });
};