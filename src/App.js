import { useEffect, useState } from "react";
import "./App.css";
import { auth } from "./Firebase/init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import Nav from "./Components/Nav";

function App() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      onAuthStateChanged(auth, (user) => {
        setLoading(false)
        console.log(user)
        setUser(user)
      })
    }, 3000);
  }, [])

  function register() {
    console.log("Register user");
    createUserWithEmailAndPassword(auth, "email@gmail.com", "test123")
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function login() {
    signInWithEmailAndPassword(auth, "email@gmail.com", "test123")
      .then(({ user }) => {

        console.log(user);
        setUser(user);
        document.body.classList.add("useProfile")
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function logout(){
    signOut(auth);
    setUser({})
  }

  return (
    <div className="App">
      <Nav register={register} login={login} user={user} loading={loading}/>
      {/* <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button> */}
      {/* <div>The user is {user.email}</div> */}
    </div>
  );
}

export default App;
