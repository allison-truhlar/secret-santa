import { Form } from "@remix-run/react";

export default function Create() {
  return (
    <Form>
      <label>
        <span>Family or group name: </span>
        <input name="name" placeholder="The Smiths" type="text" />
      </label>
      <button type="submit">Go!</button>
    </Form>
  );
}
