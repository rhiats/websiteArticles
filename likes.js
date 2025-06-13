import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, get, set, onValue } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// ✅ Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyD57U7Cc3vN7zg8eAkdLk91LanWPtLzL6I",
  authDomain: "like-counter-2b119.firebaseapp.com",
  databaseURL: "https://like-counter-2b119-default-rtdb.firebaseio.com/",
  projectId: "like-counter-2b119",
  storageBucket: "like-counter-2b119.firebasestorage.app",
  messagingSenderId: "1097477475022",
  appId: "1:1097477475022:web:d112c828db7bf2635a9e9f"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// ✅ List of like IDs (add more if needed)
const likeIDs = ["airbnb_nyc", "lifeExpectancy", "breastCancerClassification",
  "CADClassification", "CommercialAnalytics"
];

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