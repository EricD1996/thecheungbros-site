import { useRef, useEffect } from 'react';
import { ParallaxBanner  } from "react-scroll-parallax";
import App from '../App';
import bg from '../img/bg.jpg'
import mai from '../img/mai.png'
import yukino from '../img/yukino.png'
import yukino_a from '../img/yukino_a.png'

const Banner = () => {
  const bannerRef = useRef();
  const anchorRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].boundingClientRect.y < 0) {
        bannerRef.current.classList.remove("banner-sticky");
      } else {
        bannerRef.current.classList.add("banner-sticky");
      }
    })
    observer.observe(anchorRef.current);
  }, [])

  return (
    <>
      <section className="banner" id="home-banner" ref={bannerRef}>
        <ParallaxBanner 
          layers={[
            { image: bg, speed: -10},
            { image: yukino, translateX: [-10, 10.7]},
            { image: mai, translateX: [10, -10.7]},
            { image: yukino_a, translateX: [-10, 10.7]},
          ]}
          style={{ aspectRatio: '2 / 1' }}
          >
        </ParallaxBanner>
      </section>
      <div className="banner-anchor" ref={anchorRef}></div>
    </>
  )
}

export default Banner;