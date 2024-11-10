/*
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Student = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/student')
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => {
                console.error('Error fetching students:', error);
            });
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6 text-center">Student List</h1>
            {students.length > 0 ? (
                <table className="min-w-full table-auto border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Name</th>
                            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm text-gray-800">{student.Name}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{student.Email}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center text-red-500">No students found.</p>
            )}
        </div>
    );
};

export default Student;
*/
