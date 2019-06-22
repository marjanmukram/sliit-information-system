import React from 'react'
import JoinCourse from './joinCourse';

const Course = ({ code, name, selectedCourse }) => {
    return (
        <div>
            <div className="card-header">{code} - {name}</div>
            <div
                className="card-body">View Assignmts</div>
            <div className="card-footer"><JoinCourse /></div>

        </div>
    )
}

export default Course;