import { useState } from "react";
import "../styles/Form.css";
import Button from "./Button";
import Input from "./Input";

function AddStudentForm({ onAdd }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [grade, setGrade] = useState("");
  const [isPresent, setIsPresent] = useState(true); // start ON by default

  const courses = ["BBS", "BHM", "CSIT", "BBA", "BSW"];

  function handleSubmit(e) {
    e.preventDefault();

    const numericGrade = Number(grade);

    if (!name || !course || grade === "") {
      alert("Please fill all fields");
      return;
    }

    if (numericGrade < 0 || numericGrade > 100) {
      alert("Grade must be between 0 and 100");
      return;
    }

    const newStudent = {
      id: Date.now(),
      name,
      course,
      grade: numericGrade,
      isPresent,
    };

    onAdd(newStudent);

    // reset form
    setName("");
    setCourse("");
    setGrade("");
    setIsPresent(true); // reset toggle ON
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      {/* Name */}
      <Input
        label="Name"
        value={name}
        onChange={setName}
        placeholder="Enter student name"
      />

      {/* Course */}
      <div className="form-group">
        <label htmlFor="course">Course</label>
        <select
          id="course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        >
          <option value="" disabled hidden>
            Select Course
          </option>
          {courses.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Grade */}
      <Input
        label="Grade (%)"
        type="number"
        value={grade}
        onChange={setGrade}
        placeholder="Enter grade as percentage"
        min="0"
        max="100"
      />

      {/* Toggle Present / Absent */}
      <div className="form-group">
        <label>Present / Absent</label>
        <button
          type="button"
          className={`toggle-btn ${isPresent ? "on" : "off"}`}
          onClick={() => setIsPresent(!isPresent)}
        >
          {isPresent ? "Present" : "Absent"}
        </button>
      </div>

      <Button type="submit">Add Student</Button>
    </form>
  );
}

export default AddStudentForm;