import Link from "next/link";
import "@/styles/UserCard.css";

export default function UserCard({ user }) {
  return (
    <div className="user-card">
      <div className="user-avatar">
        {user.name.charAt(0).toUpperCase()}
      </div>
      <div className="user-info">
        <h3 className="user-name">{user.name}</h3>
        <p className="user-email">{user.email}</p>
      </div>
      <Link href={`/users/${user.id}`} className="btn btn-view">
        View
      </Link>
    </div>
  );
}
