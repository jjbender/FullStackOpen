const Header = ({course}) => {
  return(
    <>
      <p> <strong>{course}</strong> </p> 
    </>
  ) 
}

const Part = ({part, exercises}) => {
  console.log(`Part - ${part}, Exercise number: ${exercises}`);
  return (
    <div>
      <p> Part "{part}".Exercises: {exercises} </p> 
    </div>
  )
  
}

const Content = ({ parts }) => {
  console.log('Content includes parts:', parts);
  return (
    <div>
      {parts.map((p) => (
        <Part key = {p.id} part = {p.name} exercises = {p.exercises} />
      ))}
    </div>
  );
}

const Total = ({parts}) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (<>
<p> Total of exercises: {total}</p>
  </>);
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  const Course = () => {
    return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
  }

  return <Course course={course} />
}

export default App