import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="calculator">
        <div className="screen">4376464+488585-5484844+3838</div>
        <div className="keyboard">
          <div className="numbers">
            <button>0</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
          </div>
          <div className="operators">
            <button>AC</button>
            <button>/</button>
            <button>x</button>
            <button>-</button>
            <button>+</button>
            <button>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
