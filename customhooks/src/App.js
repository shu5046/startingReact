import { useEffect, useState } from "react";

export default function App() {
  const [reset, setReset] = useState(false);
  function toggle() {
    setReset((prev) => !prev);
  }
  return (
    <div className="App">
      <h2>Welcome!</h2>
      {reset ? <Reset toggle={toggle} /> : <Login toggle={toggle} />}
    </div>
  );
}
function Login({ toggle }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  useEffect(() => {
    localStorage.setItem("email", email);
  }, [email]);
  return (
    <div className="login">
      <h2>Login to the Portal</h2>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button>Login</button>
      <button onClick={toggle}>Forgot Password</button>
    </div>
  );
}

function Reset({ toggle }) {
  const [email, setEmail] = useState("");
  useEffect(() => {
    let email = localStorage.getItem("email");
    if (email) {
      setEmail(email);
    }
  },[]);
  return (
    <div className="login">
      <h2>Reset your Password</h2>
      <input value={email}/>
      <button onClick={toggle}>Back to Login</button>
    </div>
  );
}
// function Timer() {
//   const [timer, setTimer] = useState(180);
//   const [isRunning, setIsRunning] = useState(false);
//   useEffect(() => {
//     let interval;
//     if (isRunning && timer > 0) {
//        interval = setInterval(() => {
//         setTimer((prev) => prev - 1);
//       }, 1000);
//     }
//     return () => clearInterval(interval);
//   }, [isRunning, timer]);
//   return (
//     <div>
//       <p>{timer}</p>
//       <button onClick={() => setIsRunning(true)} disabled={isRunning}>Play</button>
//       <button onClick={() => setIsRunning(false)} disabled={!isRunning}>
//         Pause
//       </button>
//     </div>
//   );
// }
