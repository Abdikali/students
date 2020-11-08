import React from 'react'
import Student from './Student/Student'

const students = props => props.students.map((student, index) => {
    const {name, age, course, gpa} = student;
    return <Student
        delete={() => props.deleted(index)}
        name={name}
        age={age}
        course={course}
        gpa={gpa}
        change={() => props.change(index)}
    />
});

export default students;
