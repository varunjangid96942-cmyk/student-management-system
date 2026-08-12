import { Link } from "react-router-dom";

function Dashboard({ students }) {
    return (
        <div className="min-h-screen bg-slate-100">

            <div className="bg-blue-700 text-white p-5 text-3xl font-bold shadow">
                Student Management System
            </div>

            <div className="p-8">

                <h1 className="text-4xl font-bold mb-6">
                    Dashboard
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="bg-white shadow-lg rounded-xl p-6">
                        <h2 className="text-xl font-bold">Total Students</h2>
                        <p className="text-4xl mt-4 text-blue-600">
                            {students.length} </p>
                    </div>

                    <div className="bg-white shadow-lg rounded-xl p-6">
                        <h2 className="text-xl font-bold">Courses</h2>
                        <p className="text-4xl mt-4 text-green-600">6</p>
                        <Link
                            to="/courses"
                            className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
                        >
                            View Courses
                        </Link>
                    </div>

                    <div className="bg-white shadow-lg rounded-xl p-6">
                        <h2 className="text-xl font-bold">Teachers</h2>
                        <p className="text-4xl mt-4 text-red-600">5</p>
                        <Link to="/teachers"
                            className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                            View teachers
                        </Link>
                    </div>

                </div>

                <div className="mt-10">
                    <Link
                        to="/students"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                    >
                        View Students
                    </Link>
                </div>

            </div>

        </div>
    );
}

export default Dashboard;