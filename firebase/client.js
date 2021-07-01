import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCprzMoRksQDHZhLLJzMxL6dJKQ-JJkWOY",
  authDomain: "devter-5ed2d.firebaseapp.com",
  projectId: "devter-5ed2d",
  storageBucket: "devter-5ed2d.appspot.com",
  messagingSenderId: "172932188425",
  appId: "1:172932188425:web:98cbdaa9482dbeb0ae6bd8",
  measurementId: "G-FFKRLBDEY0",
};

firebase.apps.length === 0 && firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, photoURL, email, uid } = user;
  return {
    avatar: photoURL,
    username: displayName,
    email,
    uid,
  };
};

export const onAuthStateChanged = (onChange) => {
  firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null;
    onChange(normalizedUser);
  });
};

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  return firebase
    .auth()
    .signInWithRedirect(githubProvider)
    .then(mapUserFromFirebaseAuthToUser);
};

export const addDevit = ({ avatar, content, img, userId, userName }) => {
  return db.collection("devits").add({
    avatar,
    content,
    img,
    userId,
    userName,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0,
  });
};

export const fetchLatestDevits = () => {
  return db
    .collection("devits")
    .orderBy("createdAt", "desc")
    .get()
    .then(({ docs }) => {
      return docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        const { createdAt } = data;

        return {
          ...data,
          id,
          createdAt: +createdAt.toDate(),
        };
      });
    });
};

export const uploadImage = (file) => {
  const ref = firebase.storage().ref(`image/${file.name}`);
  const task = ref.put(file);

  return task;
};
