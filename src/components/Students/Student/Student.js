import React from 'react';
import "./Student.css";
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

const student = props => {
    const {name, age, course, gpa} = props;
    return (
        <div className="student">
            <AuthContext.Consumer>
                {(context) => context.authenticated ? <p>Student is logged in </p> : <p>Student is not logged in</p>}
            </AuthContext.Consumer>

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

student.propTypes = {
    change: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    course: PropTypes.number,
    gpa: PropTypes.number,
    delete: PropTypes.func,

};

export default student;
