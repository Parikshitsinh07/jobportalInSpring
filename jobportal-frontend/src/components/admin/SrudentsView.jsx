import React, { useState } from "react";

const StudentTable = ({ students, onDelete, onViewProfile }) => {
  // Function to handle delete button click
  const handleDelete = (id) => {
    onDelete(id);
  };

  // Function to handle view profile button click
  const handleViewProfile = (id) => {
    onViewProfile(id);
  };

  return (
    <div className="container mt-4 " style={{ width: "139%" }}>
      <h2 className="my-4">Student List</h2>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>
                  <button
                    className="btn btn-primary mr-2"
                    onClick={() => handleViewProfile(student.id)}
                  >
                    View Profile
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Demo data for students
const studentsData = [
  { id: 1, name: "John Doe", email: "john.doe@example.com" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
  { id: 3, name: "Michael Johnson", email: "michael.johnson@example.com" },
  { id: 4, name: "Emily Davis", email: "emily.davis@example.com" },
];

export const StudentsView = () => {
  const [students, setStudents] = useState(studentsData);

  // Function to delete a student
  const handleDelete = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  };

  // Function to view a student's profile (placeholder action)
  const handleViewProfile = (id) => {
    console.log(`View profile for student with ID ${id}`);
    // Replace with actual logic to view profile
  };

  return (
    <div>
      <StudentTable
        students={students}
        onDelete={handleDelete}
        onViewProfile={handleViewProfile}
      />
    </div>
  );
};
