"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import EditForm from "@/components/EditForm";
import "@/styles/UserDetail.css";

export default function UserDetail({ userId }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUser();
  }, [userId]);

  const fetchUser = async () => {
    try {
      const res = await api.get(`/users/${userId}`);
      setUser(res.data);
    } catch (err) {
      setError("Failed to load user");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (updatedFields) => {
    const previousUser = { ...user };

    setUser({ ...user, ...updatedFields });
    setEditing(false);

    try {
      await api.put(`/users/${userId}`, {
        ...user,
        ...updatedFields,
      });
    } catch (err) {
      setUser(previousUser);
      setError("Update failed, changes reverted");
    }
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this user?")) return;

    router.push("/users");

    try {
      await api.delete(`/users/${userId}`);
    } catch (err) {
      console.error("Delete failed:", err.message);
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading user...</p>
      </div>
    );
  }

  if (error && !user) {
    return <div className="error-message">{error}</div>;
  }

  if (!user) return null;

  return (
    <div className="user-detail">
      {error && <div className="error-toast">{error}</div>}

      <div className="detail-header">
        <div className="detail-avatar">
          {user.name.charAt(0).toUpperCase()}
        </div>
        <div>
          <h1 className="detail-name">{user.name}</h1>
          <p className="detail-username">@{user.username}</p>
        </div>
      </div>

      <div className="detail-body">
        <div className="detail-section">
          <h3>Contact</h3>
          <div className="detail-row">
            <span className="detail-label">Email</span>
            <span className="detail-value">{user.email}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Phone</span>
            <span className="detail-value">{user.phone}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Website</span>
            <span className="detail-value">{user.website}</span>
          </div>
        </div>

        <div className="detail-section">
          <h3>Company</h3>
          <div className="detail-row">
            <span className="detail-label">Name</span>
            <span className="detail-value">{user.company?.name}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Catch Phrase</span>
            <span className="detail-value">{user.company?.catchPhrase}</span>
          </div>
        </div>

        <div className="detail-section">
          <h3>Address</h3>
          <div className="detail-row">
            <span className="detail-label">Street</span>
            <span className="detail-value">{user.address?.street}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">City</span>
            <span className="detail-value">{user.address?.city}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Zipcode</span>
            <span className="detail-value">{user.address?.zipcode}</span>
          </div>
        </div>
      </div>

      <div className="detail-actions">
        <button className="btn btn-edit" onClick={() => setEditing(true)}>
          Update
        </button>
        <button className="btn btn-delete" onClick={handleDelete}>
          Delete
        </button>
      </div>

      {editing && (
        <EditForm
          user={user}
          onSave={handleUpdate}
          onCancel={() => setEditing(false)}
        />
      )}
    </div>
  );
}
