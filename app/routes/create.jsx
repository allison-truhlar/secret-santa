import { Form, useActionData } from "@remix-run/react";

export const action = async ({ params, request }) => {
  console.log("action");
  const formData = await request.formData();
  const name = formData.get("name");
  const memberArr = formData
    .getAll("members")
    .filter((member) => member != "")
    .map((member) => ({ name: member }));
  console.log(memberArr);

  let response;
  try {
    response = await fetch(`http://localhost:5000/api/groups`, {
      method: "POST",
      body: JSON.stringify({ name, members: memberArr }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      const error = await response.json();
      console.error("API Error:", error);
      return { error: error.msg || "Something went wrong!" };
    }

    const data = await response.json();
    console.log("API Response:", data);
    return { success: data.msg };
  } catch (err) {
    console.error("Fetch Error:", err);
    return { error: "Failed to connect to API" };
  }
};

export default function Create() {
  const actionData = useActionData();
  return (
    <div>
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
      {actionData?.success && <p className="success">{actionData.success}</p>}
      {actionData?.error && <p className="error">{actionData.error}</p>}
    </div>
  );
}
