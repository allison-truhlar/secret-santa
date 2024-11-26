import { Form } from "@remix-run/react";

export const action = async ({ params, request }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const members = formData.getAll("members");
  console.log(JSON.stringify({ name, members }));
  const response = await fetch(`http://localhost:5000/create`, {
    method: "POST",
    body: JSON.stringify({ name, members }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response);

  // const json = await response.json();
  setMsg(json.msg);
  return null;
};

export default function Create() {
  return (
    <Form method="post">
      <label>
        <span>Family or group name: </span>
        <input name="name" placeholder="The Smiths" type="text" />
      </label>
      <label>
        <span>Member 1: </span>
        <input name="members" placeholder="Jill" type="text" />
      </label>
      <label>
        <span>Member 2: </span>
        <input name="members" placeholder="Jack" type="text" />
      </label>
      <label>
        <span>Member 3: </span>
        <input name="members" placeholder="Jane" type="text" />
      </label>
      <label>
        <span>Member 4: </span>
        <input name="members" placeholder="John" type="text" />
      </label>
      <button type="submit">Go!</button>
    </Form>
  );
}
