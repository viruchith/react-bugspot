import React, { useState } from "react";
import { CodeBlock } from "react-code-blocks";
import { validate } from "validate.js";
import FieldErrorsToStateMapper from "../helpers/FieldErrorsToStateMapper";
import FieldErrorsComponent from "../components/FieldErrorsComponent";
import AlertBoxComponent from "../components/AlertBoxComponent";
import userProjectsMockArray from "../mock/userProjectsMock";
import { useParams } from "react-router-dom";
import issuesMockArray from "../mock/issuesMock";

function EditIssuePage() {
  const { projectId,issueId } = useParams();

  const project = userProjectsMockArray.find((p) => p.id == projectId);

  const issue = issuesMockArray.find((iss)=>iss.id==issueId);

  const [projectVersions, setprojectVersions] = useState(
    project.projectVersions
  );

  const [sourceCode, setSourceCode] = useState("");

  const [fieldsErrors, setFieldsErrors] = useState({
    category: [],
    reproducibility: [],
    severity: [],
    priority: [],
    productVersion: [],
    summary: [],
    description: [],
  });

  const [alertState, setAlertState] = useState({
    visible: false,
    type: "danger",
    message: "",
  });

  const createIssueRules = {
    category: {
      presence: true,
      inclusion: ["BUILD", "CORE", "INFRSTRUCTURE", "TESTS", "UI"],
    },
    reproducibility: {
      presence: true,
      inclusion: ["ALWAYS", "SOMETIMES", "RANDOM", "UTR", "NA"],
    },
    severity: {
      presence: true,
      inclusion: [
        "FEATURE",
        "TRIVIAL",
        "TEXT",
        "TWEAK",
        "MINOR",
        "MAJOR",
        "BLOCK",
      ],
    },
    priority: {
      presence: true,
      inclusion: ["LOW", "NORMAL", "HIGH", "URGENT", "IMMEDIATE"],
    },
    summary: {
      presence: true,
      length: {
        maximum: 256,
      },
    },
    description: {
      presence: true,
    },
    productVersion: {
      presence: true,
    },
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setAlertState({ visible: false, type: "success", message: "" });
    const formValues = validate.collectFormValues(e.target);
    const errors = validate(formValues, createIssueRules);
    FieldErrorsToStateMapper(errors, fieldsErrors, setFieldsErrors);
    if (errors === undefined) {
      setAlertState({
        visible: true,
        type: "success",
        message: "Issue updated Successfully !",
      });
      console.log(formValues);
    }
  };

  return (
    <div className="mt-5 mb-5 d-flex justify-content-center">
      <div className="card p-3 col-sm-8 col-md-6 col-lg-6">
        <div className="mb-3">
          <h3>Edit Issue : </h3>
        </div>
        <hr />
        <form action="" method="post" onSubmit={onSubmitHandler}>
          {alertState.visible && (
            <AlertBoxComponent
              visible={alertState.visible}
              type={alertState.type}
              message={alertState.message}
            />
          )}
          <div className="mb-3">
            <label htmlFor="status">Status</label>
            <select
              className="form-select form-select-lg"
              name="status"
              id="status"
              defaultValue={issue.status}
            >
              <option value="NEW">New</option>
              <option value="ACKNOWLEDGED">Acknowledged</option>
              <option value="CONFIRMED">Confirmed</option>
              <option value="RESOLVED">Resolved</option>
            </select>
            <FieldErrorsComponent errors={fieldsErrors.category} />
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category <span className="text-danger">*</span>
            </label>
            <select
              className="form-select form-select-lg"
              name="category"
              id="category"
              defaultValue={issue.category}
            >
              <option value="BUILD">Build</option>
              <option value="CORE">Core</option>
              <option value="INFRASTRUCTURE">Infrastructure</option>
              <option value="TESTS">Tests</option>
              <option value="UI">User Interface</option>
            </select>
            <FieldErrorsComponent errors={fieldsErrors.category} />
          </div>
          <div className="mb-3">
            <label htmlFor="reproducibility" className="form-label">
              Reproducibility : <span className="text-danger">*</span>
            </label>
            <select
              className="form-select form-select-lg"
              name="reproducibility"
              id="reproducibility"
              defaultValue={issue.reproducibility}
            >
              <option value="ALWAYS">Always</option>
              <option value="SOMETIMES">Sometimes</option>
              <option value="RANDOM">Random</option>
              <option value="UTR">Unable to Reproduce</option>
              <option value="NA">NA</option>
            </select>
            <FieldErrorsComponent errors={fieldsErrors.reproducibility} />
          </div>
          <div className="mb-3">
            <label htmlFor="severity" className="form-label">
              Severity : <span className="text-danger">*</span>
            </label>
            <select
              className="form-select form-select-lg"
              name="severity"
              id="severity"
              defaultValue={issue.severity}
            >
              <option value="FEATURE">Feature</option>
              <option value="TRIVIAL">Trivial</option>
              <option value="TEXT">Text</option>
              <option value="TWEAK">Tweak</option>
              <option value="MINOR">Minor</option>
              <option value="MAJOR">Major</option>
              <option value="CRASH">Crash</option>
              <option value="BLOCK">Block</option>
            </select>
            <FieldErrorsComponent errors={fieldsErrors.severity} />
          </div>
          <div className="mb-3">
            <label htmlFor="priority" className="form-label">
              Priority : <span className="text-danger">*</span>
            </label>
            <select
              className="form-select form-select-lg"
              name="priority"
              id="priority"
              defaultValue={issue.priority}
            >
              <option value="LOW">Low</option>
              <option value="NORMAL">Normal</option>
              <option value="HIGH">High</option>
              <option value="URGENT">Urgent</option>
              <option value="IMMEDIATE">Immediate</option>
            </select>
            <FieldErrorsComponent errors={fieldsErrors.priority} />
          </div>
          <div className="mb-3">
            <label htmlFor="projectVersion" className="form-label">
              Project Version : <span className="text-danger">*</span>
            </label>
            <select
              className="form-select form-select-lg"
              name="productVersion"
              id="projductVersion"
              defaultValue={issue.productVersion}
            >
              <option value="NA">NA</option>
              {projectVersions.map((version) => (
                <option key={version} value={version}>
                  {version}
                </option>
              ))}
            </select>
            <FieldErrorsComponent errors={fieldsErrors.productVersion} />
          </div>
          <div className="mb-3">
            <label htmlFor="summary" className="form-label">
              Summary : <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="summary"
              id="summary"
              defaultValue={issue.summary}
            />
            <FieldErrorsComponent errors={fieldsErrors.summary} />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description : <span className="text-danger">*</span>
            </label>
            <textarea
              className="form-control"
              name="description"
              id="description"
              cols="30"
              rows="10"
              defaultValue={issue.description}
            ></textarea>
            <FieldErrorsComponent errors={fieldsErrors.description} />
          </div>
          <div className="mb-3">
            <label htmlFor="stepsToReproduce" className="form-label">
              Steps To Reproduce :{" "}
            </label>
            <textarea
              className="form-control"
              name="stepsToReproduce"
              id="stepsToReproduce"
              cols="30"
              rows="10"
              defaultValue={issue.stepsToReproduce}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Additional Information :{" "}
            </label>
            <textarea
              className="form-control"
              name="additionalInformation"
              id="additionalInformation"
              cols="30"
              rows="10"
              defaultValue={issue.additionalInformation}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="sourceCode" className="form-label">
              Source Code :{" "}
            </label>
            {sourceCode !== "" && (
              <div className="mb-3">
                <label htmlFor="">Code Preview :</label>
                <CodeBlock text={sourceCode} language={"text"} wrapLines />
              </div>
            )}
            <textarea
              className="form-control"
              name="sourceCode"
              id="sourceCode"
              value={sourceCode}
              onChange={(e) => {
                setSourceCode(e.target.value);
              }}
              cols="30"
              rows="10"
              defaultValue={issue.sourceCode}
            ></textarea>
          </div>
          <div className="mb-3">
            {alertState.visible && (
              <AlertBoxComponent
                visible={alertState.visible}
                type={alertState.type}
                message={alertState.message}
              />
            )}
          </div>
          <div className="mb-3">
            <button className="btn btn-primary">Update</button>
          </div>
        </form>
        <br />
      </div>
    </div>
  );
}

export default EditIssuePage;
