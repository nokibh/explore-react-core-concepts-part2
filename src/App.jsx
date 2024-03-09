import './App.css';
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {
  function buttonClick() {
    alert('Button click');
  }
  const handleClick = () => {
    alert('Bok');
  };
  const addToFive = () => {
    alert('button 3 clicker');
  };
  return (
    <>
      <h1>React Core Concepts two</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      <button onClick={buttonClick}>Click Me</button>
      <button onClick={handleClick}>Click Mee too</button>

      <button
        onClick={() => {
          alert('Hoiche ');
        }}
      >
        Click Me Three
      </button>
      <button onClick={() => addToFive(3)}>Five</button>
    </>
  );
}

export default App;
