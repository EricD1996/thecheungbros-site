import { Parallax  } from "react-scroll-parallax";
import ReactPlayer from 'react-player'

// Youtube API call are limited to about 100 'search' queries a day; much less if used with video data query
// WIP workaround:
// Call CheckForUpload() function every hour of the day (max 24 calls a day), or max increase interval of every 20min
// Per call, query for the latest video's ID
// Using video ID, fetch the video description 
// Total API cost of quota 7200/10000 with 2800 possible video queries possible
// Do this on server-side

// const YOUTUBE_VIDEO_API = "https://www.googleapis.com/youtube/v3/videos";
// const YOUTUBE_SEARCH_API = "https://www.googleapis.com/youtube/v3/search"


// const response = await fetch(`${YOUTUBE_SEARCH_API}?part=snippet&channelId=UC0izRlvuPHnmJiu8oQm0dJA&maxResults=1&order=date&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
// var data = await response.json();
// var latest_vid_id = data.items[0].id.videoId;
// return latest_vid_id;
// fetch(`${YOUTUBE_SEARCH_API}?part=snippet&channelId=UC0izRlvuPHnmJiu8oQm0dJA&maxResults=1&order=date&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// var latest_vid_id = JSON['id'];
// console.log(latest_vid_id);

// fetch(`${YOUTUBE_VIDEO_API}?part=snippet&id=${latest_vid_id}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
//   .then((response) => response.json())
//   .then((data) => console.log(data));



 // var latest_vid_id;
  // fetch(`${YOUTUBE_SEARCH_API}?part=snippet&channelId=UC0izRlvuPHnmJiu8oQm0dJA&maxResults=1&order=date&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
  // .then((response) => response.json())
  // .then((data) => {
  //   latest_vid_id = data.items[0].id.videoId;
  // });
  
  // console.log(latest_vid_id)

  //   fetch(`${YOUTUBE_SEARCH_API}?part=snippet&channelId=UC0izRlvuPHnmJiu8oQm0dJA&maxResults=1&order=date&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
  // .then((response) => { return response.blob(); })
  // .then((data) => {
  //   var a = document.createElement("a");
  //   a.href = window.URL.createObjectURL(data);
  //   a.download = "FILENAME";
  //   a.click();
  // });

  // fetch(`${YOUTUBE_SEARCH_API}?part=snippet&channelId=UC0izRlvuPHnmJiu8oQm0dJA&maxResults=1&order=date&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
  // .then((response) => response.json())
  // .then((data) => console.log(data.items[0].id.videoId));


const LatestUpload = () => {

  return (
    <>
      <section className="page" id="latest-upload">
        <div className="video">
          {/* <ReactPlayer width = '1280px' height = '720px' url="https://www.youtube.com/watch?v=41OKpUQmOKI"/> */}
        </div>
      </section>
    </>
  )
}

export default LatestUpload; 
