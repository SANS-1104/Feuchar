import { useEffect, useState } from "react";
import axios from "axios";
import "./admin.css"; 

export default function AdminCourseDetails() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("/api/students"); // Update with your actual API endpoint
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="AdminStudentDetails-wrapper">
      <div className="table-container">
        <table className="responsive-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Course Name</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.courseName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
