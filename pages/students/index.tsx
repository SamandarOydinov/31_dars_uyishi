import { useEffect, useState } from 'react';
import { TableWrapper } from '../../components/styles/index.style'; // Path to the new location


interface Student {
  id: number;
  name: string;
}

const StudentsPage = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [name, setName] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editName, setEditName] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/students')
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  const addStudent = () => {
    if (!name.trim()) return;
    fetch('http://localhost:3001/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    })
      .then((res) => res.json())
      .then((newStudent) => {
        setStudents((prev) => [...prev, newStudent]);
        setName('');
      });
  };

  const deleteStudent = (id: number) => {
    fetch(`http://localhost:3001/students/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setStudents((prev) => prev.filter((s) => s.id !== id));
    });
  };

  const startEdit = (id: number, name: string) => {
    setEditingId(id);
    setEditName(name);
  };

  const saveEdit = () => {
    if (editingId === null) return;

    fetch(`http://localhost:3001/students/${editingId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: editName }),
    })
      .then((res) => res.json())
      .then((updated) => {
        setStudents((prev) =>
          prev.map((s) => (s.id === updated.id ? updated : s)),
        );
        setEditingId(null);
        setEditName('');
      });
  };

  return (
    <TableWrapper>
      <div>
        <h2 className="title">Students</h2>
        <div className="mb-4 flex space-x-2">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Student Name"
            className="border px-2 py-1"
          />
          <button
            onClick={addStudent}
            className="bg-blue-500 text-white px-4 py-1 rounded"
          >
            Add
          </button>
        </div>
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td className="border px-4 py-2">{student.id}</td>
                <td className="border px-4 py-2">
                  {editingId === student.id ? (
                    <input
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="border px-2 py-1"
                    />
                  ) : (
                    student.name
                  )}
                </td>
                <td className="border px-4 py-2 space-x-2">
                  {editingId === student.id ? (
                    <button
                      onClick={saveEdit}
                      className="bg-green-500 text-white px-2 py-1 rounded"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => startEdit(student.id, student.name)}
                      className="bg-yellow-500 text-white px-2 py-1 rounded"
                    >
                      Edit
                    </button>
                  )}
                  <button
                    onClick={() => deleteStudent(student.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </TableWrapper>
  );
};

export default StudentsPage;
