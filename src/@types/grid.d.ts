export interface GridResponse {
  data: GridResponseData;
}

interface GridResponseData {
  id: string;
  videos: Video[];
  images: Image[];
}

export interface IRow {
  id: string;
  videoPosition: 'left' | 'right';
  video: Video;
  images: Image[];
}

interface Video {
  id: string;
  video: string;
}

interface Image {
  id: string;
  image: string;
}
