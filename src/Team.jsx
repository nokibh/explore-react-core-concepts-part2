import { useState } from 'react';

export default function Team() {
  const [team, setItem] = useState(11);
  const addCount = () => {
    const newCount = team + 1;
    setItem(newCount);
  };
  const reduce = () => {
    const newCount = team - 1;
    setItem(newCount);
  };
  const teamStyle = {
    border: '2px solid purple',
    margin: '15px',
    padding: '15px',
    borderRadius: '15px',
  };
  return (
    <div style={teamStyle}>
      <h3>Players : {team}</h3>
      <button onClick={addCount}>Add</button>
      <button onClick={reduce}>Remove</button>
    </div>
  );
}
