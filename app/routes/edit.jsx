import { Form } from "@remix-run/react";

export default function Edit() {
  return (
    <Form>
      <div>
        <label>
          <span>Family or group name:</span>
          <input name="name" placeholder="The Smiths" type="text" />
        </label>
        <p>Edit</p>
        <p>Delete</p>
      </div>
    </Form>
  );
}
