import React from 'react'
import FileUpload from './fileUpload'

class StudentSubmissionForm extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <h2>Student Assigment Submission</h2>
                </div>
                <h2>Upload your assignments here</h2>
                <FileUpload />
            </div>
        )
    }
}

export default StudentSubmissionForm;