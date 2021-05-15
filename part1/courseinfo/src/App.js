import React from 'react'

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
};

const Part = ({ partName, partExercises }) => {
  return (
    <p>
      {partName} {partExercises}
    </p>
  )
}

const Content = ({course}) => {
  const courseList = course.parts.map((part) => {
    return (
      <Part partName={part.name} partExercises={part.exercises}/>
    )
  })

  return (
    <>
      {courseList}
    </>
  )
};

const Total = ({course}) => {
  const noOfTotalExercises = course.parts.reduce((a, b) => a + (b.exercises || 0), 0);

  return (
    <p>Number of exercises {noOfTotalExercises}</p>
  )
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      }
    ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

export default App