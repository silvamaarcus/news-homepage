// Figuras
import photoMain from "../../../img/image-web-3-desktop.jpg";

const Hero = () => {
  return (
    <>
      <main className="container flex p-0">
        <div className="row flex flex-wrap">
          <div className="grid-8 pt-0">
            <div>
              <img src={photoMain} alt="" />
            </div>

            <div>
              <div className="grid-6">
                <h3 className="bold color-black">
                  The Bright Future of Web 3.0?
                </h3>
              </div>
              <div className="grid-6">
                <p>
                  {" "}
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <a href="" className="mt-3 btn uppercase bold">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="grid-4 pt-0 bg-black px-3">
            <h3 className="mt-4 bold color-yellow">New</h3>

            <div className="mt-4 pb-3 bb-black">
              <h6 className="bold color-white">Hydrogen VS Electric Cars</h6>
              <p className="mt-1">
                Will hydrogen-fueled cars ever catch up to EVs?
              </p>
            </div>

            <div className="mt-4 pb-3 bb-black">
              <h6 className="bold color-white">The Downsides of AI Artistry</h6>
              <p className="mt-1">
                What are the possible adverse effects of on-demand AI image
                generation?
              </p>
            </div>

            <div className="mt-4 pb-3">
              <h6 className="bold color-white">Is VC Funding Drying Up?</h6>
              <p className="mt-1">
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Hero;
