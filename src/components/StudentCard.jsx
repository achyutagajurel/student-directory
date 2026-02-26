import "../styles/StudentCard.css";
import Button from "./Button";
import Badge from "./Badge";

function StudentCard({ student, onDelete }) {
  return (
    <div className="card">
      <h3 className="student-name">{student.name}</h3>
      <p className="student-course">Course: {student.course}</p>
      <p className="student-grade">Marks: {student.grade}</p>

      <div className="badges">
        <Badge type={student.isPresent ? "success" : "danger"}>
          {student.isPresent ? "Present" : "Absent"}
        </Badge>

        {student.grade >= 90 && <Badge type="gold">Top Performer</Badge>}
      </div>

      <div className="actions">
        <Button variant="danger" onClick={() => onDelete(student.id)}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default StudentCard;