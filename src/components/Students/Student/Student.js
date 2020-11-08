import React from 'react';
import "./Student.css";

const student = props => {
    const {name, age, course, gpa} = props;
    return (
        <div className="student">
            <h1>Name: {name}</h1>
            <hr/>
            <div>
                <p><span>Age:</span> {age}</p>
                <p><span>Course:</span> {course}</p>
                <p><span>GPA:</span> {gpa}</p>
            </div>
            <div className="student-controllers">
                <button onClick={props.change}>Change</button>
                <button
                    onClick={props.delete}
                    className="delete"
                >Delete
                </button>
            </div>
        </div>
    )
};

export default student;
