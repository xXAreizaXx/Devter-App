import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCprzMoRksQDHZhLLJzMxL6dJKQ-JJkWOY",
  authDomain: "devter-5ed2d.firebaseapp.com",
  projectId: "devter-5ed2d",
  storageBucket: "devter-5ed2d.appspot.com",
  messagingSenderId: "172932188425",
  appId: "1:172932188425:web:98cbdaa9482dbeb0ae6bd8",
  measurementId: "G-FFKRLBDEY0"
}

firebase.apps.length === 0 && firebase.initializeApp(firebaseConfig)

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, photoURL, email } = user

  return {
    avatar: photoURL,
    username: displayName,
    email
  }
}

export const onAuthStateChanged = (onChange) => {
  firebase.auth().onAuthStateChanged(user => {
    const normalizedUser = mapUserFromFirebaseAuthToUser(user)
    onChange(normalizedUser)
  })
}

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase.auth().signInWithRedirect(githubProvider).then(mapUserFromFirebaseAuthToUser)
}
