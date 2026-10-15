import yt_dlp
import os
import tempfile

def download_video(url: str):

    temp_dir = tempfile.mkdtemp(prefix="clipidia_")

    options = {
        #"format": "best",
        "outtmpl": os.path.join(temp_dir, "video.%(ext)s"),
        "noplaylist": True,
        "quiet": True,
        "no_warnings": True,
    }

    try: 
        with yt_dlp.YoutubeDL(options) as ydl:
            info = ydl.extract_info(url, download=True)
            file_path = ydl.prepare_filename(info)

        if not os.path.isfile(file_path):
            raise FileNotFoundError("Downloaded video file was not found.")

        return file_path, temp_dir

    except Exception:
        import shutil
        shutil.rmtree(temp_dir, ignore_errors=True)
        raise
        
