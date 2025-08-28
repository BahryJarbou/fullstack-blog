import { useState, useEffect, useActionState } from "react";
import { validate, sendPostData } from "../utils/updateModalUtils.js";
import { PostsContext } from "../context/postsContext.jsx";
import { use } from "react";
import { PostContext } from "../context/postContext.jsx";
const UpdateModal = ({ id }) => {
  const { setPosts } = use(PostsContext);
  const { post, setPost } = use(PostContext);
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
    const res = await sendPostData({ author, title, content, cover, id });
    setPost({
      ...post,
      author: res.data.author,
      title: res.data.title,
      content: res.data.content,
      cover: res.data.cover,
    });
    alert(`${res.message}:  '${res.data.author}', titled: '${res.data.title}'`);
    return { error: null, success: true };
  };

  const [state, formAction, isPending] = useActionState(submitAction, {});
  const [{ author, title, content, cover }, setFormData] = useState({
    author: post.author,
    title: post.title,
    content: post.content,
    cover: post.cover,
  });

  useEffect(() => {
    setFormData({
      author: post.author,
      title: post.title,
      content: post.content,
      cover: post.cover,
    });
  }, [post]);
  // console.log({ author, title, content, cover });
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // // useEffect(() => {
  // //   if (state.success) {
  // //     setFormData({
  // //       author: "",
  // //       title: "",
  // //       content: "",
  // //       cover: "",
  // //     });
  // //   }
  // }, [state]);
  return (
    <div
      className="hero bg-[url('https://static.vecteezy.com/system/resources/previews/025/871/495/non_2x/travel-destination-background-and-template-design-with-travel-destinations-and-famous-landmarks-and-attractions-for-tourism-let-s-go-travel-illustration-vector.jpg')] min-h-screen min-w-[80%]"
      data-theme="nord"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card card-xl bg-base-100 w-full max-w-sm shrink-0 shadow-2xl min-w-[60vw]">
          <div className="card-body">
            <form action={formAction} className="fieldset min-w-[60vw]">
              <div>
                <label className="label min-w-[50vw]">Author</label>
                <input
                  name="author"
                  value={author}
                  onChange={handleChange}
                  className="input input-md min-w-[50vw]"
                  placeholder={author}
                />
                {state.error?.author && (
                  <p className="text-sm text-red-600 mt-1">
                    {state.error?.author}
                  </p>
                )}
              </div>
              <div>
                <label className="label min-w-[50vw]">Title</label>
                <input
                  name="title"
                  value={title}
                  onChange={handleChange}
                  className="input input-md min-w-[50vw]"
                  placeholder={title}
                />
                {state.error?.title && (
                  <p className="text-sm text-red-600 mt-1">
                    {state.error?.title}
                  </p>
                )}
              </div>
              <div>
                <label className="label min-w-[50vw]">Cover URL</label>
                <input
                  name="cover"
                  value={cover}
                  onChange={handleChange}
                  className="input input-md min-w-[50vw]"
                  placeholder={cover}
                />
                {state.error?.cover && (
                  <p className="text-sm text-red-600 mt-1">
                    {state.error?.cover}
                  </p>
                )}
              </div>
              <div>
                <label className="label min-w-[50vw]">Content</label>
                <textarea
                  name="content"
                  value={content}
                  rows={10}
                  onChange={handleChange}
                  className="textarea textarea-md min-w-[50vw]"
                  placeholder={content}
                />
                {state.error?.content && (
                  <p className="text-sm text-red-600 mt-1">
                    {state.error?.content}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className={`btn btn-xl mt-4 max-w-[50vw] ${
                  isPending
                    ? "btn-block cursor-not-allowed"
                    : "btn-neutral hover:bg-blue-700"
                }`}
                disabled={isPending}
              >
                {isPending ? "Updating..." : "Update"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
