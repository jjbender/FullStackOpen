import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
// The .toFixed(2) method in JavaScript formats a number to two decimal places and returns the result as a string.


  const all = good + neutral + bad;
  const average = all === 0 ? 0 : ((good - bad) / all).toFixed(2);
  const positive = all === 0 ? 0 : ((good / all) * 100).toFixed(2);

  return (
    <div>
      <h2>Provide feedback to UniCafe</h2>
      <button type="button" onClick={() => setGood(good + 1)}>Good</button>
      <button type="button" onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button type="button" onClick={() => setBad(bad + 1)}>Bad</button>

      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />

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
  <Row text="all" value={props.all}/>
  <Row text="positive" value={props.average}/>
  <Row text="average" value={props.positive + "%"}/>
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