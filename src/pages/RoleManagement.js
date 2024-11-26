// pages/RoleManagement.js
import React, { useState } from "react";
import { Button, Table, TableHead, TableRow, TableCell, TableBody, Modal, TextField } from "@mui/material";

const RoleManagement = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
  ]);

  const [openModal, setOpenModal] = useState(false);
  const [newRole, setNewRole] = useState({ name: "", permissions: [] });

  const handleAddRole = () => {
    setRoles([...roles, { id: roles.length + 1, ...newRole }]);
    setOpenModal(false);
    setNewRole({ name: "", permissions: [] });
  };

  return (
    <div>
      <h1>Role Management</h1>
      <Button variant="contained" color="primary" onClick={() => setOpenModal(true)}>
        Add Role
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Role Name</TableCell>
            <TableCell>Permissions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {roles.map((role) => (
            <TableRow key={role.id}>
              <TableCell>{role.id}</TableCell>
              <TableCell>{role.name}</TableCell>
              <TableCell>{role.permissions.join(", ")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <div style={{ padding: 20, background: "#fff", margin: "50px auto", width: 400 }}>
          <h2>Add New Role</h2>
          <TextField
            fullWidth
            label="Role Name"
            value={newRole.name}
            onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Permissions (comma-separated)"
            value={newRole.permissions}
            onChange={(e) => setNewRole({ ...newRole, permissions: e.target.value.split(",") })}
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleAddRole}>
            Save
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default RoleManagement;
