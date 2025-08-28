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

const sendPostData = async ({ author, title, content, cover, id }) => {
  const body = { author, title, content, cover };
  try {
    const res = await fetch(`http://localhost:3000/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return { message: "Post updated successfully! by", data: data };
  } catch (e) {
    return { message: "something went wrong!", data: e };
  }
};

export { validate, sendPostData };
