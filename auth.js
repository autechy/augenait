import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { firebaseConfig, AUTHORIZED_DOMAIN, ADMIN_EMAIL } from "./firebase-config.js";

const configured = !Object.values(firebaseConfig).some(value => String(value).startsWith("YOUR_"));

let auth = null;
let provider = null;

if (configured) {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  provider = new GoogleAuthProvider();
  provider.setCustomParameters({ hd: AUTHORIZED_DOMAIN });
}

export function isAllowedUser(user) {
  const email = (user?.email || "").toLowerCase();
  return email === ADMIN_EMAIL.toLowerCase() || email.endsWith(`@${AUTHORIZED_DOMAIN}`);
}

export function isAdmin(user) {
  return (user?.email || "").toLowerCase() === ADMIN_EMAIL.toLowerCase();
}

export async function signIn() {
  if (!configured) {
    throw new Error("Firebase is not configured yet. Update firebase-config.js.");
  }

  const result = await signInWithPopup(auth, provider);

  if (!isAllowedUser(result.user)) {
    await signOut(auth);
    throw new Error(`Access is limited to ${AUTHORIZED_DOMAIN} accounts.`);
  }

  return result.user;
}

export async function logout() {
  if (auth) await signOut(auth);
}

export function watchAuth(callback) {
  if (!configured) {
    callback(null, { configured: false });
    return;
  }
  onAuthStateChanged(auth, callback);
}

window.authReady = {
  configured,
  isAllowedUser,
  isAdmin
};
