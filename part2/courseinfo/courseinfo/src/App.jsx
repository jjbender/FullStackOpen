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
      <p> Part "{part}". Total exercises per part: {exercises} </p> 
    </div>
  )
  
}

const Content = ({ parts }) => {
  console.log('Content includes parts:', parts);
  return (
    <div>
      <Part part={parts[0].name} exercises={parts[0].exercises}/>
      <Part part={parts[1].name} exercises={parts[1].exercises}/>
      <Part part={parts[2].name} exercises={parts[2].exercises}/> 
    </div>
  )
}

const Total = ({ parts }) => {
  const totalExercises = parts[0].exercises + parts[1].exercises + parts[2].exercises
  console.log(totalExercises)
  return (
    <div>
      <p>Total number of exercises: {totalExercises}</p>  
    </div>
  )
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
      {/*<Total parts={course.parts} /> */}
    </div>
  )
  }

  return <Course course={course} />
}

export default App