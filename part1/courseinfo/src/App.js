import React from 'react'

const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
};

const Part = (props) => {
  return (
    <p>
      {props.coursePart} {props.courseExercises}
    </p>
  )
}

const Content = (props) => {
  const courseList = props.courses.map((course) => {
    return (
      <>
        <Part coursePart={course.part} courseExercises={course.exercises}/>
      </>
    )
  })

  return (
    <>
      {courseList}
    </>
  )
};

const Total  = (props) => {
  const noOfTotalExercises = props.courses.reduce((a, b) => a + (b.exercises || 0), 0);

  return (
    <>
      <p>Number of exercises {noOfTotalExercises}</p>
    </>
  )
};

const App = () => {
  const courseTitle = 'Half Stack application development'
  const courseExercises = [
    {
      part: 'Fundamentals of React',
      exercises: 10,
    },
    {
      part: 'Using props to pass data',
      exercises: 7,
    },
    {
      part: 'State of a component',
      exercises: 14,
    },
  ]

  return (
    <div>
      <Header course={courseTitle}/>
      <Content courses={courseExercises}/>
      <Total courses={courseExercises}/>
    </div>
  )
}

export default App