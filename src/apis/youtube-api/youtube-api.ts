import axios from "axios";
import express from "express";

const app = express();
const PORT = 3001;

app.use(express.json());

interface VideoData {
  videoId: string;
  thumbnailUrl: string;
  publishedAt: string;
  playlistTitle: string;
  videoTitle: string;
}

app.get("/api/youtubeData", async (req, res) => {
  try {
    // 다른 서버에서 YouTube API로부터 전체 동영상 데이터를 받아옴
    const response = await axios.get(
      "https://other-server.com/api/youtubeData",
    );

    const videoDataList: VideoData[] = response.data;
    res.json(videoDataList);
  } catch (error) {
    console.error("Error fetching video data", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/youtubeData/latest", async (req, res) => {
  try {
    const response = await axios.get(
      "https://other-server.com/api/youtubeData/latest",
    );

    const videoDataListLatest: VideoData[] = response.data;
    res.json(videoDataListLatest);
  } catch (error) {
    console.error("Error fetching latest video data", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
