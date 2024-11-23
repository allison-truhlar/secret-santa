import { Form } from "@remix-run/react";

export default function Edit() {
  return (
    <div>
      <p>
        <span>Family or group name: </span>
        The Smiths
      </p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}
