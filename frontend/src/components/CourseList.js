function CourseList({ courses }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Course List</h2>
      {courses.length === 0 ? (
        <p>No courses available.</p>
      ) : (
        <table
          border="1"
          cellPadding="10"
          style={{ borderCollapse: "collapse", width: "100%" }}
        >
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Course Code</th>
              <th>Credit Units</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td>{course.name}</td>
                <td>{course.id}</td>
                <td>{course.creditUnits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CourseList;

