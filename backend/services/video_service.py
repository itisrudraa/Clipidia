import yt_dlp

def inspect_video(url: str):
    options = {
        "quiet": True,
        "no_warnings": True,
        "skip_download": True
    }

    with yt_dlp.YoutubeDL(options) as ydl:
        info = ydl.extract_info(url, download=False)

    return info