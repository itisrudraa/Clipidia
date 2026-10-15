import { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!url.trim()) {
      setError("Please enter a video URL.");
      return;
    }

    let parsedUrl;

    try {
      parsedUrl = new URL(url.trim());
    } catch {
      setError("Please enter a valid URL.");
      return;
    }

    if ( !["http:", "https:"].includes(parsedUrl.protocol) || !parsedUrl.hostname.includes(".") ){
      setError("Please enter a valid URL.");
      return;
    }

    let hostname = parsedUrl.hostname.toLowerCase();
    hostname = hostname.replace(/^www\./, "");
    
    let platform;
    if(hostname==="youtube.com" || hostname === "youtu.be") platform = "youtube";
    else if(hostname==="instagram.com") platform = "instagram";
    else if(hostname==="x.com" || hostname==="twitter.com") platform = "x";
    
    if(!platform){
        setError("Platform not supported");
        return;
    } 

    setError("");
    
    navigate("/video", {
      state: { 
        url: parsedUrl.href,
        platform
      },
    });
  }

  return (
    <section className="min-h-full flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-10">
          <p className="text-indigo-400 mb-4">
            Your video downloader
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Your videos,
            <br />
            <span className="text-indigo-500">
              one click away.
            </span>
          </h1>

          <p className="text-gray-400 mt-5">
            Download your favorite videos with ease.
          </p>

          <p className="text-gray-500 text-sm mt-2">
            Paste a supported link to get started.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8"
        >
          <label
            htmlFor="video-url"
            className="block text-sm text-gray-300 mb-3"
          >
            Video URL
          </label>

          <input
            id="video-url"
            type="text"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              setError("");
            }}
            placeholder="Paste video URL..."
            className="w-full bg-gray-950 border border-gray-700 rounded-xl px-4 py-3.5 outline-none focus:border-indigo-500"
          />

          {error && (
            <p className="text-red-400 text-sm mt-3">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full mt-5 bg-indigo-600 hover:bg-indigo-500 transition rounded-xl px-4 py-3.5 font-semibold"
          >
            Proceed →
          </button>

          <div className="mt-6 pt-5 border-t border-gray-800 flex justify-center gap-6 text-sm text-gray-400">
            <span>YouTube</span>
            <span>Instagram</span>
            <span>X</span>
          </div>
        </form>
      </div>
    </section>
  );
}

export default HomePage;