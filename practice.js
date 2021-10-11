
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyCIo3UcHCaVcipCfgb8zS_fReCKnGLqWMo",
    authDomain: "kkkk-2810c.firebaseapp.com",
    databaseURL: "https://kkkk-2810c-default-rtdb.firebaseio.com",
    projectId: "kkkk-2810c",
    storageBucket: "kkkk-2810c.appspot.com",
    messagingSenderId: "476817619226",
    appId: "1:476817619226:web:fe047b386a4a4dc43114a3"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function addUser()
  {
      user_name = document.getElementById("user_name").nodeValue;
      firebaseConfig.databaseURL().ref("/").child(user_name).update({
          purpose:"adding user"a
      });
  }