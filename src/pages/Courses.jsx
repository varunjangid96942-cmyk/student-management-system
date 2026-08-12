import { Link } from "react-router-dom";

function Courses() {
    const courses = [
        { id: 1, name: "BCA" },
        { id: 2, name: "B.Tech" },
        { id: 3, name: "BBA" },
        { id: 4, name: "B.Com" },
        { id: 5, name: "MCA" },
        { id: 6, name: "MBA" },
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-8">

            <h1 className="text-4xl font-bold text-green-700 mb-2">
                Courses
            </h1>

            <Link
                to="/dashboard"
                className="inline-block mb-6 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
                ← Back to Dashboard
            </Link>

            <table className="w-full bg-white shadow-lg rounded-xl overflow-hidden">
                <thead className="bg-green-600 text-white">
                    <tr>
                        <th className="p-3">ID</th>
                        <th className="p-3">Course Name</th>
                    </tr>
                </thead>

                <tbody>
                    {courses.map((course) => (
                        <tr key={course.id} className="text-center border-b">
                            <td className="p-3">{course.id}</td>
                            <td className="p-3">{course.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default Courses;