import React from 'react'
import "./StudentForm.css";

const studentForm = props => {
    const {changeName, changeAge, changeCourse, changeGpa, submit} = props;
    const {name, age, course, gpa} = props.student;
    return (
        <div className="student-form">
            <form>
                <fieldset>
                    <legend>Student Form</legend>
                    <label htmlFor="name">Student Name:
                        <input type="text" placeholder="Student name" name="name" onChange={changeName} value={name}/>
                    </label>
                    <label htmlFor="age">Student Age:
                        <input type="text" placeholder="Student age" name="age" onChange={changeAge} value={age}/>
                    </label>
                    <label htmlFor="course">Student course:
                        <input type="text" placeholder="Student course" name="course" onChange={changeCourse} value={course}/>
                    </label>
                    <label htmlFor="gpa">Student GPA:
                        <input type="text" placeholder="Student GPA" name="gpa" onChange={changeGpa} value={gpa}/>
                    </label>
                    <input type="button" value="Submit" onClick={submit}/>
                </fieldset>
            </form>
        </div>
    )
};


export default studentForm;
