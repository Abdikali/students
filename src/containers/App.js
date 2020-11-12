import React, {Component} from 'react';
import './App.css';
import StudentForm from '../components/StudentForm/StudentForm';
import Students from '../components/Students/Students';

import AuthContext from '../context/auth-context';

export default class App extends Component {

    constructor(props) {
        super(props);
        console.log("App.js [constructor]");
    }


    static contextType = AuthContext;


    static getDerivedStateFromProps(props, state) {
        console.log("App.js [getDerivedStateFromProps]", props);
        return state;
    }

    componentDidMount() {
        console.log(this.context.authenticated);
    }

    state = {
        students: [
            {name: "Alex", age: 20, course: 3, gpa: 3.2},
            {name: "Manu", age: 21, course: 4, gpa: 3.7}
        ],
        hidden: "Hide",
        name: "",
        age: "",
        course: "",
        gpa: "",
        changeIndex: null,
        authenticated: false,
    };

    loginHandler = () => {
        this.setState({authenticated: !this.state.authenticated})
    };

    changeNameHandler = () => {
        const name = this.state.name === "Manuel" ? "Manu" : "Manuel";
        this.setState({name})
    };


    hideStudents = () => {
        const hidden = this.state.hidden === "Hide" ? "Show" : "Hide";
        this.setState({hidden});
    };

    deleteStudent = index => {
        const students = [...this.state.students];
        students.splice(index, 1);
        this.setState({students});
    };

    changeStudent = index => {
        const student = {...this.state.students[index]};
        const {name, age, course, gpa} = student;
        this.setState({name});
        this.setState({age});
        this.setState({course});
        this.setState({gpa});
        this.setState({changeIndex: index})
    };

    renderStudents = () => (<Students
        students={this.state.students}
        deleted={this.deleteStudent}
        change={this.changeStudent}
    />);

    showStudents = () => {
        return this.state.hidden === "Hide" ? <div>{this.renderStudents()}</div> : null;
    };


    nameChangeHandler = event => {
        this.setState({name: event.target.value})

    };
    ageChangeHandler = event => {
        this.setState({age: event.target.value})
    };

    courseChangeHandler = event => {
        this.setState({course: event.target.value})
    };
    gpaChangeHandler = event => {
        this.setState({gpa: event.target.value})
    };

    clearState = () => {
        this.setState({name: ''});
        this.setState({age: ''});
        this.setState({course: ''});
        this.setState({gpa: ''});
        this.setState({changeIndex: null});
    };

    onFormSubmitHandler = () => {
        const {name, age, course, gpa} = this.state;
        const student = {name, age, course, gpa};
        if (this.state.changeIndex !== null) {
            const students = [...this.state.students];
            students[this.state.changeIndex] = student;
            this.setState({students});
            this.clearState();
        } else {
            this.setState({students: [...this.state.students, student]})
        }
    };


    render() {
        console.log("App.js [render]");
        const {name, age, course, gpa} = this.state;
        const student = {name, age, course, gpa};
        const buttonStyle = this.state.hidden === "Show" ? "green-button buttons" : "red-button buttons";
        return (
            <div className="main">
                <AuthContext.Provider value={{authenticated: this.state.authenticated, login: this.loginHandler}}>
                    <div className="controllers">
                        <h1>OLOLOLO</h1>
                        <button
                            className="buttons"
                            onClick={this.changeNameHandler}>
                            Change Name
                        </button>
                        <button
                            className={buttonStyle}
                            onClick={this.hideStudents}>
                            {this.state.hidden} Students
                        </button>
                        <AuthContext.Consumer>
                            {context =>
                                <button
                                    className="buttons"
                                    onClick={context.login}
                                >Login
                                </button>}
                        </AuthContext.Consumer>
                    </div>
                    <div className="student-info">
                        <StudentForm
                            student={student}
                            almau4ever={this.nameChangeHandler}
                            changeAge={this.ageChangeHandler}
                            changeCourse={this.courseChangeHandler}
                            changeGpa={this.gpaChangeHandler}
                            submit={this.onFormSubmitHandler}
                        />

                        {this.showStudents()}

                    </div>
                </AuthContext.Provider>
            </div>
        )
    }
}
