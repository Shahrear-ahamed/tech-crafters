/* eslint-disable @next/next/no-img-element */
import { Carousel } from "antd";
import sliderImg from "../../public/slider_template.png";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const Hero = () => (
  <Carousel effect="scrollx" autoplay autoplaySpeed={10000}>
    <div>
      <img src={sliderImg} alt="Slider image" />
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);
export default Hero;
