import Link from 'next/link';

function Form({ type, post, setPost, submitting, handleSubmit }) {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="text-left head_text blue_gradient">{type} Post</h1>
      <p className="text-left desc max-w-md">
        {type} and share amazing prompts with the world, and let your
        imagination run with any AI-powered platform
      </p>

      <form
        onSubmit={handleSubmit}
        className="glassmorphism mt-10 w-full max-w-2xl flex flex-col gap-7"
      >
        <label>
          <span className="text-gray-700 text-base font-semibold font-satoshi">
            Your AI Prompt
          </span>

          <textarea
            className="form_textarea"
            required
            placeholder="Here you can write your prompt..."
            value={post.prompt}
            onChange={(e) => {
              setPost({ ...post, prompt: e.target.value });
            }}
          />
        </label>

        <label>
          <span className="text-gray-700 text-base font-semibold font-satoshi">
            Tag{' '}
            <span className="font-normal">
              (#product, #webdevelopment, #idea)
            </span>
          </span>

          <input
            className="form_input"
            required
            placeholder="#tag"
            value={post.tag}
            onChange={(e) => {
              setPost({ ...post, tag: e.target.value });
            }}
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500">
            Cancel
          </Link>
          <button className="py-1.5 text-sm px-5 bg-primary-orange rounded-full text-white orange_hover">
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form;
