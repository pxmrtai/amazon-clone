import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="123412s34"
            title="Amazon Essentials Men's Slim-Fit Wrinkle-Resistant Long-Sleeve Dress Shirt"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/515YOBH2SgL._AC_UY741_.jpg"
            rating={4}
          />
          <Product
            id="12341asd234"
            title="Apple AirPods with Charging Case (Wired)"
            price={59.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71NTi82uBEL._AC_SX522_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="123412342"
            title="DualSense Wireless Controller"
            price={69.98}
            image="https://images-na.ssl-images-amazon.com/images/I/71y%2BUGuJl5L._SX522_.jpg"
            rating={5}
          />
          <Product
            id="12341234sg"
            title="Betsey Johnson Women's Moon and Star Drop Earrings"
            price={37.14}
            image="https://images-na.ssl-images-amazon.com/images/I/81YUAig%2B87L._AC_UY695_.jpg"
            rating={3}
          />
          <Product
            id="12341234ds"
            title="Dr. Martens Women's Shriver Hi Fashion Boot"
            price={197.45}
            image="https://images-na.ssl-images-amazon.com/images/I/61UJsnYaIZL._AC_UY625_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="12341234zxc"
            title="
            All-New Toshiba 32LF221U21 32-inch Smart HD 720p TV - Fire TV Edition, Released 2020"
            price={129.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61x0OuU9XtL._AC_SL1000_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
