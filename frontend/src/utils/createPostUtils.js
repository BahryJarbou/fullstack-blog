const submitAction = async (prevState, formData) => {
  const author = formData.get("author");
  const title = formData.get("title");
  const content = formData.get("content");
  const cover = formData.get("cover");

  const validationErrors = validate({ author, title, content, cover });
  if (Object.keys(validationErrors).length > 0) {
    return { error: validationErrors, success: false };
  }

  console.log("submitted", { author, title, content, cover });
  const res = await sendPostData({ author, title, content, cover });
  console.log("we reached here");
  alert(`${res.message}:  '${res.data.author}', titled: '${res.data.title}'`);
  return { error: null, success: true };
};

const validate = ({ author, title, content, cover }) => {
  const newErrors = {};
  if (!author.trim()) newErrors.author = "Author is required.";
  if (!title.trim()) newErrors.title = "Title is required";
  if (!content.trim()) newErrors.content = "Content is required";
  if (!cover.trim()) {
    newErrors.cover = "cover url is required";
  } else if (!/https:\/\/\S+\.\S+\.\S+/.test(cover)) {
    newErrors.cover = "Invalid cover url";
  }
  return newErrors;
};

const sendPostData = async ({ author, title, content, cover }) => {
  const body = { author, title, content, cover };
  try {
    const res = await fetch("http://localhost:3000/posts", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return { message: "Post created successfully! by", data: data };
  } catch (e) {
    return { message: "something went wrong!", data: e };
  }
};

export default submitAction;
