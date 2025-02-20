const root = document.getElementById("root");
let score = 0;
let wicket = 0;
let ballWiseRes = [];
let hit = 0;
let inputRef = React.createRef();
function addScore(num) {
  if (wicket < 10) {
    hit = num;
    rootElement.render(<App />);
  }
}
function addWicket() {
  if (wicket < 10) {
    hit = "W";
    rootElement.render(<App />);
  }
}
const ScoreButtons = () => (
  <div>
    <button onClick={() => addScore(0)}>0</button>
    <button onClick={() => addScore(1)}>1</button>
    <button onClick={() => addScore(2)}>2</button>
    <button onClick={() => addScore(3)}>3</button>
    <button onClick={() => addScore(4)}>4</button>
    <button onClick={() => addScore(5)}>5</button>
    <button onClick={() => addScore(6)}>6</button>
    <button onClick={addWicket}>Wicket</button>
  </div>
);
function handelSubmit(event) {
  event.preventDefault();
  if(hit==='W'){
    wicket+=1
  }else{
    score+=hit;
  }
  ballWiseRes.unshift(
    <span>{`${hit}, ${inputRef.current.value}`}</span>
  );
  console.log(event.target[1].value);
  hit=0;
  inputRef.current.value=""
  rootElement.render(<App />);
}

const Form = () => (
  <form onSubmit={handelSubmit}>
    <input value={hit} />
    <input ref={inputRef} placeholder="Add a comment"/>
    <button>Submit</button>
  </form>
);

const Result = () => (
  <div>
    {ballWiseRes.map((res, index) => (
      <p>{res}</p>
    ))}
   
  </div>
);
function App() {
  return (
    <>
      <h1>Score Keeper </h1>
      <h2>
        SCORE: {score}/{wicket}
      </h2>
      <ScoreButtons />
      <br />
      <Form />
      <hr />
      <Result />
      
    </>
  );
}

const rootElement = ReactDOM.createRoot(root);
rootElement.render(<App />);
