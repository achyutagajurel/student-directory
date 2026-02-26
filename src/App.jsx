import { useState } from "react";
import AddStudentForm from "./components/AddStudentForm";
import StudentCard from "./components/StudentCard";
import "./styles/App1.css";

function App() {
  const [students, setStudents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [sortOption, setSortOption] = useState("name");

  const handleAddStudent = (student) => {
    setStudents((prev) => [...prev, student]);
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const sortedStudents = [...filteredStudents].sort((a, b) => {
    if (sortOption === "name") return a.name.localeCompare(b.name);
    if (sortOption === "grade") return b.grade - a.grade;
    return 0;
  });

  return (
    <div className="container">
      <header>
        <h1>Student Directory</h1>
        <p>Manage your students easily</p>
      </header>

      <div className="toolbar">
        <input
          type="text"
          placeholder="Search by name"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="name">Sort by Name</option>
          <option value="grade">Sort by Grade</option>
        </select>

        <button className="btn add-btn" onClick={() => setShowForm(!showForm)}>
          {showForm ? "Cancel" : "Add Student"}
        </button>
      </div>

      {showForm && <AddStudentForm onAdd={handleAddStudent} />}

      {sortedStudents.length > 0 ? (
        <div className="student-grid">
          {sortedStudents.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              onDelete={handleDelete}
            />
          ))}
        </div>
      ) : (
        <p className="empty">No students found.</p>
      )}
    </div>
  );
}

export default App;