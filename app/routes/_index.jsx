import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <Link to="create">New User</Link>
      <Link to="edit">Returning User</Link>
    </div>
  );
}
