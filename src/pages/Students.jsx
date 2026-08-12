import { useState } from "react";
import { Link } from "react-router-dom";

function Students({ students, setStudents }) {

    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [year, setYear] = useState("");
    const [search, setSearch] = useState("");

    const [editId, setEditId] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const addStudent = () => {
        if (name === "" || course === "" || year === "") {
            alert("Please fill all fields");
            return;
        }

        const newStudent = {
            id: students.length + 1,
            name,
            course,
            year,
        };

        setStudents([...students, newStudent]);

        setName("");
        setCourse("");
        setYear("");
    };

    const editStudent = (student) => {
        setName(student.name);
        setCourse(student.course);
        setYear(student.year);
        setEditId(student.id);
        setIsEditing(true);
    };

    const updateStudent = () => {
        const updatedStudents = students.map((student) =>
            student.id === editId
                ? { ...student, name, course, year }
                : student
        );

        setStudents(updatedStudents);

        setName("");
        setCourse("");
        setYear("");
        setEditId(null);
        setIsEditing(false);
    };

    const deleteStudent = (id) => {
        setStudents(students.filter((student) => student.id !== id));
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">

            <h1 className="text-4xl font-bold text-blue-700 mb-2">
                Student Management System
            </h1>

            <Link
                to="/dashboard"
                className="inline-block mb-6 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
                ← Back to Dashboard
            </Link>

            <div className="bg-white p-6 rounded-xl shadow-lg mb-6 flex gap-3 flex-wrap">

                <input
                    type="text"
                    placeholder="Student Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border p-2 rounded-lg"
                />

                <input
                    type="text"
                    placeholder="Course"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="border p-2 rounded-lg"
                />

                <input
                    type="text"
                    placeholder="Year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="border p-2 rounded-lg"
                />

                <button
                    onClick={addStudent}
                    className="bg-green-600 text-white px-5 rounded-lg hover:bg-green-700"
                >
                    Add Student
                </button>

                <input
                    type="text"
                    placeholder="Search Student..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border p-2 rounded-lg w-full mt-4"
                />

            </div>

            <table className="w-full bg-white shadow-lg rounded-xl overflow-hidden">
                <thead className="bg-blue-600 text-white">
                    <tr>
                        <th className="p-3">ID</th>
                        <th className="p-3">Name</th>
                        <th className="p-3">Course</th>
                        <th className="p-3">Year</th>
                        <th className="p-3">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {students
                        .filter((student) =>
                            student.name.toLowerCase().includes(search.toLowerCase())
                        )
                        .map((student) => (
                            <tr key={student.id} className="text-center border-b">
                                <td className="p-3">{student.id}</td>
                                <td className="p-3">{student.name}</td>
                                <td className="p-3">{student.course}</td>
                                <td className="p-3">{student.year}</td>
                                <td className="p-3">
                                    <button
                                        onClick={() => deleteStudent(student.id)}
                                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>

        </div>
    );
}

export default Students;