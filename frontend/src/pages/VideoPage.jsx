import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import Loader from "../components/Loader";

function formatDuration(seconds) {
  if (seconds == null) return "Unknown";

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
}

function VideoPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [downloading, setDownloading] = useState(false);

  const url = location.state?.url;
  const platform = location.state?.platform;


  useEffect(()=>{
    if(!url || !platform) return;

    async function inspectVideo(){
        setLoading(true);
        setError("");
        setData(null);

        try{
            const response = await api.post("/api/downloads/inspect", {
                url,
                platform
            });

            setData(response.data);
        } catch(error) {
            setError(error.response?.data?.detail || "something went wrong");
        } finally {
            setLoading(false)
        }

    }

    inspectVideo()

  }, [url, platform]);

  if (!url || !platform) {
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

        <div className="mt-5 space-y-3 text-sm">
            {loading && <Loader />}
            {error && <p className="text-red-500">{error}</p>}


            {data && (
            <div className="mt-5 space-y-4 rounded-xl border border-gray-800 bg-gray-950 p-4">
                {data.thumbnail && (
                <img
                    src={data.thumbnail}
                    alt={data.title || "Video thumbnail"}
                    className="w-full max-h-72 rounded-lg object-cover"
                />
                )}

                <div>
                <h2 className="text-xl font-semibold text-white">
                    {data.title || "Untitled video"}
                </h2>

                <p className="mt-2 text-gray-400">
                    Uploader: {data.uploader || "Unknown"}
                </p>

                <p className="mt-1 text-gray-400">
                    Duration: {formatDuration(data.duration)}
                </p>
                </div>
            </div>
            )}



        </div>

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