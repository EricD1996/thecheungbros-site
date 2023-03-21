import { Parallax  } from "react-scroll-parallax";

const About = () => {
  return (
    <>
      <section className="page" id="about">
        <Parallax>
            <div class = "about-bubble">
              <div class = "text-bubble">
                <h1>Who are the Cheung Bros.</h1>
                <p>We are 2 brothers. Yeah 2 brothers. One younger, one older. We do Youtube.
                  Yeah. We are hoping to be the very best. Like no one ever was. To reach a mill is our real test.
                  To be monoplolized is our cause. We will watch all anime across Japan. Searching far and wide.
                  Teach people to understand. The weeb that is inside.
                </p>
              </div>
            </div>
        </Parallax>
      </section>
    </>
  )
}

export default About;