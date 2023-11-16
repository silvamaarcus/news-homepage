// Figuras
import photo1 from "../../../img/image-retro-pcs.jpg";
import photo2 from "../../../img/image-top-laptops.jpg";
import photo3 from "../../../img/image-gaming-growth.jpg";

const Hero = () => {
  return (
    <>
      <section className="container my-3 p-0">
        <div className="row news-mobile">
          <div className="grid-4 flex py-0">
            <a href="">
              <img src={photo1} alt="" />
            </a>

            <div className="ml-2">
              <h5 className="bold color-gray">01</h5>
              <a href="">
                <h6 className="bold color-black mt-1">Reviving Retro PCs</h6>
              </a>
              <p className="mt-1">
                What happens when old PCs are given modern upgrades?
              </p>
            </div>
          </div>

          <div className="grid-4 flex py-0">
            <a href="">
              <img src={photo2} alt="" />
            </a>

            <div className="ml-2">
              <h5 className="bold color-gray">02</h5>
              <a href="" className="link">
                <h6 className="bold color-black mt-1">
                  Top 10 Laptops of 2022
                </h6>
              </a>
              <p className="mt-1">
                Our best picks for various needs and budgets.
              </p>
            </div>
          </div>

          <div className="grid-4 flex py-0">
            <a href="">
              <img src={photo3} alt="" />
            </a>

            <div className="ml-2">
              <h5 className="bold color-gray">03</h5>
              <a href="">
                <h6 className="bold color-black mt-1">The Growth of Gaming</h6>
              </a>
              <p className="mt-1">
                How the pandemic has sparked fresh opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
