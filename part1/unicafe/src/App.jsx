import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>Provide feedback to UniCafe</h2>
      <button type="button" onClick={() => console.log('Good')}>Good</button>
      <button type="button" onClick={() => console.log('Neutral')}>Neutral</button>
      <button type="button" onClick={() => console.log('Bad')}>Bad</button>

      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  );
};

export default App

const Statistics = (props) => {
  return (
  <div>
  <h2>Statistics</h2>
  <Row text="good" value={props.good}/>
  <Row text="neutral" value={props.neutral}/>
  <Row text="bad" value={props.bad}/>
  </div>
  // .. add if no feedback given
  //<button text="neutral" onClick="#">Neutral</button>
      //<button text="bad" onClick="#">Bad</button>
      //<Statistics good="good" neutral="neutral" bad="bad" />
  );
};

const Row = (props) => {
  return (
    <p>
      {props.text} {props.value}
    </p>

  );

};