import { Link } from "react-router-dom";

function Teachers() {

    const teachers = [
        { id: 1, name: "Amit Sharma", subject: "Java" },
        { id: 2, name: "Rahul Verma", subject: "DBMS" },
        { id: 3, name: "Neha Gupta", subject: "Python" },
        { id: 4, name: "Priya Singh", subject: "Operating System" },
        { id: 5, name: "Rohit Kumar", subject: "Computer Network" },
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-8">

            <h1 className="text-4xl font-bold text-red-700 mb-2">
                Teachers
            </h1>

            <Link
                to="/dashboard"
                className="inline-block mb-6 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
                ← Back to Dashboard
            </Link>

            <table className="w-full bg-white shadow-lg rounded-xl overflow-hidden">
                <thead className="bg-red-600 text-white">
                    <tr>
                        <th className="p-3">ID</th>
                        <th className="p-3">Teacher Name</th>
                        <th className="p-3">Subject</th>
                    </tr>
                </thead>

                <tbody>
                    {teachers.map((teacher) => (
                        <tr key={teacher.id} className="text-center border-b">
                            <td className="p-3">{teacher.id}</td>
                            <td className="p-3">{teacher.name}</td>
                            <td className="p-3">{teacher.subject}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default Teachers;