"use client";

import { use } from "react";
import Link from "next/link";
import UserDetail from "@/components/UserDetail";

export default function UserPage({ params }) {
  const { id } = use(params);

  return (
    <div className="user-page">
      <Link href="/users" className="back-link">
        Back to users
      </Link>
      <UserDetail userId={id} />
    </div>
  );
}
