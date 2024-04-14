export default function Home() {
  async function onSubmit(formData: FormData) {
    "use server";

    const rawFormData = {
      url: formData.get("url"),
    };

    console.log(rawFormData);
  }
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <div className="text-center">
        <form className="mb-4" action={onSubmit}>
          <input
            type="url"
            name="url"
            placeholder="Enter your URL"
            className="w-72 p-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700 focus:border-blue-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Shorten
          </button>
        </form>
        <div id="results">
          <p>
            Shortened URL: <span>Hi</span>
          </p>
        </div>
      </div>
    </main>
  );
}
