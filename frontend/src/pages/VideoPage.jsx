import { useLocation, useNavigate } from "react-router-dom";

function VideoPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const url = location.state?.url;

  if (!url) {
    return (
      <section className="min-h-full flex flex-col items-center justify-center px-6 py-16">
        <h1 className="text-2xl font-bold">
          No video URL provided
        </h1>

        <button
          onClick={() => navigate("/")}
          className="mt-5 bg-indigo-600 hover:bg-indigo-500 rounded-lg px-5 py-3"
        >
          Go back
        </button>
      </section>
    );
  }

  return (
    <section className="min-h-full flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-2xl bg-gray-900 border border-gray-800 rounded-2xl p-8">
        <p className="text-indigo-400 text-sm mb-3">
          Video details
        </p>

        <h1 className="text-3xl font-bold">
          Inspect your video
        </h1>

        <p className="text-gray-400 mt-4">
          Submitted URL:
        </p>

        <p className="mt-2 p-4 rounded-lg bg-gray-950 border border-gray-800 break-all text-sm">
          {url}
        </p>

        <p className="text-gray-500 text-sm mt-5">
          Next, we'll fetch the video information from the backend.
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 border border-gray-700 hover:bg-gray-800 rounded-lg px-5 py-3"
        >
          ← Back
        </button>
      </div>
    </section>
  );
}

export default VideoPage;