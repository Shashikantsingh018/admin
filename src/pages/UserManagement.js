import React, { useState } from "react";
import { Button, Table, TableHead, TableRow, TableCell, TableBody, Modal, TextField } from "@mui/material";

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Surbhi Singh", email: "surbhi@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Usha Singh", email: "singh@example.com", role: "Editor", status: "Inactive" },
  ]);

  const [openModal, setOpenModal] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "", status: "Active" });
  const [editingUser, setEditingUser] = useState(null);

  // Add a new user or update an existing one
  const handleSaveUser = () => {
    if (editingUser) {
      setUsers(users.map((user) => (user.id === editingUser.id ? { ...editingUser, ...newUser } : user)));
    } else {
      setUsers([...users, { id: users.length + 1, ...newUser }]);
    }
    setOpenModal(false);
    setNewUser({ name: "", email: "", role: "", status: "Active" });
    setEditingUser(null);
  };

  // Edit a user
  const handleEditUser = (user) => {
    setEditingUser(user);
    setNewUser(user);
    setOpenModal(true);
  };

  // Delete a user
  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Read user details
  const handleReadUser = (user) => {
    alert(`User Details:\nName: ${user.name}\nEmail: ${user.email}\nRole: ${user.role}\nStatus: ${user.status}`);
  };

  return (
    <div>
      <h1>User Management</h1>
      <Button variant="contained" color="primary" onClick={() => setOpenModal(true)}>
        Add User
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.status}</TableCell>
              <TableCell>
                <Button variant="contained" color="info" onClick={() => handleReadUser(user)} size="small" style={{ marginRight: 5 }}>
                  Read
                </Button>
                <Button variant="contained" color="secondary" onClick={() => handleEditUser(user)} size="small" style={{ marginRight: 5 }}>
                  Edit
                </Button>
                <Button variant="contained" color="error" onClick={() => handleDeleteUser(user.id)} size="small">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <div style={{ padding: 20, background: "#fff", margin: "50px auto", width: 400 }}>
          <h2>{editingUser ? "Edit User" : "Add New User"}</h2>
          <TextField
            fullWidth
            label="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Role"
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Status"
            value={newUser.status}
            onChange={(e) => setNewUser({ ...newUser, status: e.target.value })}
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleSaveUser}>
            Save
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default UserManagement;
