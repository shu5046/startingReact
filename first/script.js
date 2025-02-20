// const heading = document.createElement("h1");
// heading.innerText = "Hello";
// const heading1 = document.createElement("h1");
// heading1.innerText = "I am learning";
const root = document.getElementById("root");

// root.append(heading, " ", heading1);

//REACT with JS

// const heading = React.createElement(
//   "h1",
//   { className: "head" },
//   "Hello React!"
// );

//REACT with JSX

// const jsxHeading = (
//   <React.Fragment>
//     <h1>About React</h1>
//     <ul>
//       <li>React helps us to create fast SPA.</li>
//       <li>React helps us to create reusable components.</li>
//       <li>React's virtual DOM allows to manage changes efficiently.</li>
//     </ul>
//   </React.Fragment>
// );
// ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);

//using react component

// const App=()=>
//   (
//     <React.Fragment>
//       <h1>About React</h1>
//       <ul>
//         <li>React helps us to create fast SPA.</li>
//         <li>React helps us to create reusable components.</li>
//         <li>React's virtual DOM allows to manage changes efficiently.</li>
//       </ul>
//     </React.Fragment>
//   );

//   function Name(){
//     return(
//       <>
//       <p>JSX is Javascript XML</p>
//       </>
//     )
//   }
// ReactDOM.createRoot(document.getElementById('root')).render(<><App/><Name/></>)

//HOW TO USE ARRAY AND OBJ IN AJX
function Arr(){
  const a = [1,2,3,4,5];
  return(
    <>
    <ul>{a.map((i)=><li>{i}</li>)}</ul>
    {a.filter((i)=>i>2).map((i) => <h1 key={i}>{i}</h1>)}
    </>
  )
 
}
ReactDOM.createRoot(document.getElementById('root')).render(<Arr/>)
