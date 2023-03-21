import { Parallax  } from "react-scroll-parallax";
import AniTracker from "./anilist-tracker"

const Recommendation = () => {
  // AniTracker({userId: 662219}); // AsianBoy510
  // AniTracker({userId: 671348}); // ChitStains

  return (
    <>
      <section className="page" id="recommendation">
        <Parallax>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Totam esse accusantium beatae cupiditate officiis consequatur
            ipsam dolorem non earum porro temporibus sapiente deleniti
            inventore quis possimus et, incidunt eum fugit.
          </p>
        </Parallax>
      </section>
    </>
  )
}

export default Recommendation; 
