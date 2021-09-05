import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAirkgEuhLb_tkZ-P_Hk_VaYneACfLs-dE",
  authDomain: "school-attendance-41bfb.firebaseapp.com",
  databaseURL: "https://school-attendance-41bfb-default-rtdb.firebaseio.com",
  projectId: "school-attendance-41bfb",
  storageBucket: "school-attendance-41bfb.appspot.com",
  messagingSenderId: "145478226711",
  appId: "1:145478226711:web:a63fcc01add3d64ca9dd52"
};

  let app=firebase.initializeApp(firebaseConfig)

  if(!firebase.apps.length){
     app=firebase.initializeApp(firebaseConfig);
  }
  
  
  
  export default firebase.database();


