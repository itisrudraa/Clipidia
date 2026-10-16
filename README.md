# Clipidia 🎬

**A simple video downloader built with React and FastAPI.**

Clipidia lets users inspect video information and download videos from supported platforms through a clean, responsive web interface.

## ✨ Features

- 🔗 **URL-based downloads** — Submit a video URL to get started.
- 🔍 **Video inspection** — View the video title, thumbnail, uploader, and duration before downloading.
- 📥 **Video downloads** — Download video files directly to your device.
- 🎞️ **MP4 processing** — Uses yt-dlp and FFmpeg to select and process compatible video formats.
- ⏳ **Loading states** — Visual feedback while inspecting and downloading videos.
- ⚠️ **Error handling** — Displays errors when requests fail or video information cannot be retrieved.
- 🌐 **Supported platforms** — YouTube, Instagram, and X, subject to video availability and platform restrictions.

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- React Router
- Axios

### Backend
- Python
- FastAPI
- Pydantic
- yt-dlp
- FFmpeg

## 📁 Project Structure

```text
clipidia/
├── backend/
│   ├── main.py
│   ├── models.py
│   ├── services/
│   │   ├── video_service.py
│   │   └── download_service.py
│   └── pyproject.toml
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

*The structure above reflects the main files; other configuration and lock files may also be present.*

## ⚙️ Prerequisites

Install the following before running Clipidia:

- [Node.js](https://nodejs.org/)
- [Python](https://www.python.org/)
- [uv](https://docs.astral.sh/uv/)
- [FFmpeg](https://ffmpeg.org/)

Make sure `node`, `npm`, `python`, `uv`, and `ffmpeg` are available from your terminal.

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/itisrudraa/Clipidia.git
cd clipidia
```

Replace the placeholder with your repository URL.

### 2. Set up the backend

Open a terminal:

```bash
cd backend
uv sync
```

Start the FastAPI development server:

```bash
uv run uvicorn main:app --reload
```

The backend will run at:

`http://127.0.0.1:8000`

Interactive API documentation is available at:

`http://127.0.0.1:8000/docs`

### 3. Set up the frontend

Open a second terminal from the project root:

```bash
cd frontend
npm install
npm run dev
```

Open the local URL printed by Vite, usually:

`http://localhost:5173`

### 4. Start downloading

1. Open Clipidia in your browser.
2. Paste a supported video URL.
3. Inspect the video's metadata.
4. Click **Download video**.
5. Find the downloaded file in your browser's Downloads folder.

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Checks whether the backend is running |
| POST | `/api/downloads/inspect` | Retrieves video metadata |
| POST | `/api/downloads` | Downloads and returns the video file |

### Inspect a video

Example request body:

```json
{
  "url": "https://www.youtube.com/watch?v=VIDEO_ID",
  "platform": "youtube"
}
```

The inspection endpoint returns metadata such as the title, thumbnail, duration, and uploader.

The `platform` field accepts the supported values `youtube`, `instagram`, and `x`.

## 🧠 What I Learned

Building Clipidia has been an opportunity to explore:

- Connecting a React frontend to a FastAPI backend.
- Designing and consuming REST API endpoints.
- Validating request data with Pydantic.
- Handling asynchronous API requests and loading states in React.
- Working with binary responses and browser Blob URLs.
- Downloading media using yt-dlp.
- Using FFmpeg for media merging and format processing.
- Managing temporary files and cleaning up backend resources.
- Debugging issues across the frontend-backend boundary.



## ⚠️ Disclaimer

Clipidia is an educational project intended for lawful personal use. Users are responsible for respecting copyright, platform terms of service, privacy, and applicable laws.

Only download content you own or are authorized to save. Clipidia is not affiliated with YouTube, Instagram, or X.

## 📄 License

MIT License
