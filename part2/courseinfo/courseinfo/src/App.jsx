const Header = ({course}) => {
  return(
    <>
      <p> <strong>{course}</strong> </p> 
    </>
  ); 
};

const Part = ({part, exercises}) => {
  console.log(`Part - ${part}, Exercise number: ${exercises}`);
  return (
    <div>
      <p> Part "{part}".Exercises: {exercises} </p> 
    </div>
  );
};

const Content = ({ parts }) => {
  console.log('Content includes parts:', parts);
  return (
    <div>
      {parts.map((p) => (
        <Part key = {p.id} part = {p.name} exercises = {p.exercises} />
      ))}
    </div>
  );
};

const Total = ({parts}) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <>
      <p> Total of exercises: {total}</p>
   </>
  );
};

const Course = ({ course }) => {
    
    console.log('Course details:', course);
    return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
   );
  };


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  // possible without key parameter, but returns Warning: Each child in a list should have a unique "key" prop.

  return (
    <>
    {courses.map((course) => (
      <Course key={course.id} course={course} />
    ))}
    </>

  );
};

export default App