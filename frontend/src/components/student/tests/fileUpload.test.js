import React from "react"
import FileUpload from "../fileUpload"
import StudentSubmissionForm from '../submissionForm'
import ShallowRenderer from "react-test-renderer/shallow"

describe("<StudentSubmissionForm />", () => {
  it("should render the StudentSubmissionForm and its children", () => {
    const renderer = new ShallowRenderer()
    renderer.render(
      <StudentSubmissionForm>
        <FileUpload />
      </StudentSubmissionForm>
    )
    const result = renderer.getRenderOutput()
    console.log(result)
    expect(result.type).toBe("div")
  })
})
