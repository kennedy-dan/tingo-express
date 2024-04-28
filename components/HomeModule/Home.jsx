// components
import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Card = ({ property }) => {
  const { img, text, index } = property;
  return (
    <div
      className=" card w-scree sm:w-[200px] rounded-lg  px-3 py-6 "
      id={`card-${index}`}
    >
      <div className="flex justify-center ">
        <img src={img} alt='' className="" />
      </div>
      <div className="details  bg-[#F3F3F3] -mt-24 pt-24 rounded-lg">
        <p className="text-sm py-3 text-center text-gray-500">{text}</p>
      </div>
    </div>
  );
};



const Home = () => {
  const data = {
    properties: [
      {
        img: "/images/feat1.png",
        text: "Fruits & Vegetables",
        index: 0,
      },
      {
        img: "/images/feat2.png",
        text: "Frozen Food",
        index: 1,
      },
      {
        img: "/images/feat3.png",
        text: "Meals",
        index: 2,
      },
      {
        img: "/images/feat4.png",
        text: "Food",
        index: 3,
      },

      {
        img: "/images/feat5.png",
        text: "Wine",
        index: 4,
      },
      {
        img: "/images/feat6.png",
        text: "Non Alcoholic Drink",
        index: 5,
      },
      {
        img: "/images/feat7.png",
        text: "Bakery",
        index: 6,
      },
      {
        img: "/images/feat8.png",
        text: "Snacks",
        index: 7,
      },
      {
        img: "/images/feat9.png",
        text: "Coffee & Tea",
        index: 8,
      },
      {
        img: "/images/feat10.png",
        text: "Liquor",
        index: 9,
      },
    ],
  };

  const states = [
    "Lagos",
    "Jigawa",
    "Ondo",
    "Osun",
    "Anambra",
    "Bauchi",
    "Abuja",
    "Kwara",
    "Rivers",
    "Sokoto",
    "Lagos",
    "Jigawa",
    "Ondo",
    "Osun",
    "Anambra",
    "Bauchi",
    "Abuja",
    "Kwara",
    "Rivers",
    "Sokoto",
    "Others",
  ];
  const hero = {
    heroSlide: [
      {
        img: "/images/fruit1.png",
        text: "Groceries & Vegetables",
        desc: "El sol brilla en el cielo azul",
        index: 0,
      },
      {
        img: "/images/fruit2.png",
        text: "Groceries & Vegetables",
        desc: "El sol brilla en el cielo azul",
        index: 1,
      },
    ],
  };

  //useState
  const [property, setproperty] = useState(data.properties[0]);
  const [properties, setproperties] = useState(data.properties);
  const [heroproperty, setHeroproperty] = useState(hero.heroSlide[0]);
  const [heroproperties, setHeroproperties] = useState(hero.heroSlide);
  const [activeBtn, setActiveBtn] = useState(true);
  const [heroactiveBtn, setActiveHeroBtn] = useState(false);
  const time = [
    { days: "00", time: "Days" },
    { days: "00", time: "Hours" },
    { days: "30", time: "Minutes" },
    { days: "49", time: "Seconds" },
  ];
  // next movement
  const nextProperty = () => {
    const newIndex = property.index + 1;
    setproperty(data.properties[newIndex]);
    setActiveBtn(true);
  };
  //prev movement
  const prevProperty = () => {
    const newIndex = property.index - 1;
    setproperty(data.properties[newIndex]);
    setActiveBtn(false);
  };

  const nextHeroProperty = () => {
   
    setActiveHeroBtn(true);
  };
  //prev movement
  const prevHeroProperty = () => {
   
    setActiveHeroBtn(false);
  };

  // Splitting the array into three lines
  const firstLine = states.slice(0, 7);
  const secondLine = states.slice(7, 15); // 7 + 8 = 15
  const thirdLine = states.slice(15);

  const data1 = {
    img:'/images/fruit1.png'
  }

  const data2 = {
    img:'/images/fruit2.png'
  }

  return (
    <section>
      <section className="">
        <div className="bg-[url('/images/bghero.png')] bg-cover bg-blend-multiply bg-primary pt-10  h-screen flex items-center">
          <div className="w-[70%]  ml-20">
            <p className="text-white font-bold text-[50px] leading-[110%]">
              Discover the Future of Grocery Shopping with  Tingo
              Express{" "}
            </p>
            <div className="flex mt-6 justify-between w-[70%]">
              {time.map((items, index) => (
                <div key={index}>
                  <div className="bg-white  rounded-md p-5">
                    <p className='font-bold text-2xl'>{items.days}</p>
                  </div>
                  <p className='text-white text-sm'>{items.time}</p>
                </div>
              ))}
            </div>

            <button className="text-white font-bold w-[70%] bg-primary px-20 py-4 mt-6">
              Be Prepared
            </button>
          </div>
          <div className=" z-1 w-1/2 ">
            <div className="mt-10   overflow-x-clip z-1">
              <div className="w-[310%]">
                <div className={` flex z-1 overflow-x-hidde items-end max-w-ful ml-[260px] `}>
                  <div className="  relative overflow-visible mr-4 sm:w-[290px] bg-[#FFEEDE] h-[300px] rounded-lg   py-6 ">
                   
                    <div className="details pt-24 rounded-lg">
                      <p className=" py-3 text-left px-[52px] text-black text-2xl font-bold">
                        Groceries <br /> Vegetables
                      </p>
                      <p className="3F612D px-[52px] text-sm">El sol brilla en el cielo azul</p>
                      <p className="text-bold px-[52px] text-[#3F612D] pt-2">Read More...</p>
                    </div>
                    <div className=" absolute  top-[-60%] left-[-18%] w-[400px] b z-10 bg-re ">
                      <img src={!heroactiveBtn? data1.img: data2.img} alt='' className=" b w-[400px] h-[300px] z-10 " />
                    </div>
                  </div>
                  <div className="  w-scree sm:w-[200px]  rounded-lg  px-3  ">
                    <div className="flex justify-center ">
                      <img src={heroactiveBtn? data1.img: data2.img} alt='' className="w-40 h-40" />
                    </div>
                    <div className="details  bg-[#FFEEDE] -mt-16 pt-20 pb-4   rounded-lg">
                      <p className="text-sm py-3  pl-[40px]  text-black">
                        Groceries <br /> Vegetables
                      </p>
                      <p className="3F612D px-[40px] text-[9px]">El sol brilla en el cielo azul</p>

                    </div>
                  </div>
               
                </div>
              </div>
            </div>
            <div className="flex justify-center  mt-10 ml-28">
              <button
                className=" "
                onClick={prevHeroProperty}
              >
                <div
                  className={`p-5 ${
                    !heroactiveBtn ? "bg-[#3F612D] " : "bg-[#F3F3F3]"
                  } rounded-full`}
                >
                  <IoIosArrowBack />
                </div>
              </button>{" "}
              <button
                className="    ml-4"
                onClick={nextHeroProperty}
              >
                <div
                  className={`p-5 ${
                    heroactiveBtn ? "bg-[#3F612D] " : "bg-[#F3F3F3]"
                  } rounded-full`}
                >
                  <IoIosArrowForward />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ste into the future */}

      <section>
        <div className="relative flex justify-center">
          <img
            src="/images/bannericon.png"
            className=" left-[50%] right-[50%] -mt-10 w-20 h-20"
            alt=''
          />
        </div>
        <div className="flex justify-center -mt-10">
          <div className="bg-white shadow border pt-10 pb-5 w-[60%] px-4   mb-20 rounded-2xl text-center">
            <p className="text-gray-600">
              Step into the future of shopping with our revolutionary ecommerce
              platform! Utilizing state-of-the-art technology, we seamlessly
              link you to the closest Tingo Express supermarket, guaranteeing
              rapid order fulfillment
            </p>
          </div>
        </div>
      </section>

      {/* Ai Sopping and Mobile */}

      <section className="mx-20 mb-20">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-secondary flex items-center justify-between pl-10 rounded-md">
            <div className="text-white">
              <p className="text-3xl">
                TangoAI shopping <br /> assistant{" "}
              </p>
              <button className="bg-primary px-7 py-2 rounded-md mt-4">
                Coming Soon
              </button>
            </div>
            <div className=''>
              <img src="/images/robot.png"  alt=''/>
            </div>
          </div>
          <div className="bg-secondary flex items-center justify-between px-10 rounded-md">
            <div className="text-white">
              <p className="text-3xl">
                TangoAI express mobile{" "}
              </p>
              <button className="bg-primary px-7 py-2 rounded-md mt-4">
                Coming Soon
              </button>
            </div>
            <div className=''>
              <img src="/images/phone.png" alt=''/>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Product */}

      <section>
        <p className="ml-20 text-2xl font-semibold">Feature Product</p>
        <div>
          <div className="mt-10 ml-20  relative overflow-hidden">
            <div
              className={`cards-slider  overflow-x-hidde max-w-ful active-slide-${property.index}`}
            >
              <div
                className="cards-slider-wrapper absolut fle"
                style={{
                  transform: `translateX(-${
                    property.index * (100 / properties.length)
                  }%)`,
                }}
              >
                {properties.map((props) => (
                  <div key={props.index}
                    className={`${props.index === property.index ? "" : " "}`}
                  >
                    <Card key={props._id} property={props} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-10 mx-20">
          <button
            className=" "
            onClick={prevProperty}
            disabled={property.index === 0}
          >
            <div
              className={`p-5 ${
                !activeBtn ? "bg-secondary " : "bg-[#F3F3F3]"
              } rounded-full`}
            >
              <IoIosArrowBack />
            </div>
          </button>{" "}
          <button
            className="    ml-4"
            onClick={nextProperty}
            disabled={property.index === data.properties.length - 1}
          >
            <div
              className={`p-5 ${
                activeBtn ? "bg-secondary " : "bg-[#F3F3F3]"
              } rounded-full`}
            >
              <IoIosArrowForward />
            </div>
          </button>
        </div>
      </section>

      {/* Nation wide */}

      <section className="mt-24">
        <div className="bg-secondary px-20 py-20">
          <div className="flex justify-center">
            <img src="/images/world.png" className="" alt=''/>
          </div>
          <p className=" text-center font-semibold text-white pt-6 leading-[48px] text-[37px]">
            Nation Wide Supermarket Outlets and Fast Delivery{" "}
          </p>
          <section className="flex justify-center mt-10">
            {firstLine.map((country, index) => (
              <div
                key={index}
                className="mr-6 bg-white border rounded-md px-5 font-semibold py-1 text-primary"
              >
                {country}
              </div>
            ))}
          </section>
          <section className="flex justify-center mt-5">
            {secondLine.map((country, index) => (
              <div
                key={index}
                className="mr-6 bg-white border rounded-md px-5 font-semibold py-1 text-primary"
              >
                {country}
              </div>
            ))}
          </section>
          <section className="flex justify-center mt-5">
            {thirdLine.map((country, index) => (
              <div
                key={index}
                className="mr-6 bg-white border rounded-md px-5 font-semibold py-1 text-primary"
              >
                {country}
              </div>
            ))}
          </section>
        </div>
      </section>

      {/* Experience the Futrure */}

      <section className="grid grid-cols-2 gap-[60px] items-center mx-20 mt-24 justify-between">
        <div className="">
          <p className="text-[45px] font-semibold">
            Experience The Future <br /> of shopping with us
          </p>
          <p>
            and enjoy a seamless, stress-free shopping experience like never
            before!
          </p>
          <button className="border-2 w-[88%] py-2 hover:bg-secondary hover:text-white rounded-md mt-8">
            Join waiting Lists
          </button>
        </div>
        <div className="w">
          <div className="flex relative items-center mr-9">
            <div className=" absolute -left-[6%]">
              <img src="/images/exp1.png" alt='' className=" w-16 z-1" />
            </div>
            <div className="bg-white rounded-2xl shadow-lg py-4 -z-1 px-16">
              <p className="text-[31px]">Personalized Experience</p>
              <p className="text-sm pt-2">
                With our user-friendly interface and intuitive features, you can
                easily customize your shopping experience to suit your
                preferences and dietary requirements.
              </p>
            </div>
          </div>
          <div className="flex relative items-center  ml-9 mt-3">
            <div className=" absolute -left-[6%]">
              <img src="/images/exp2.png" className=" w-16 z-1" alt=''/>
            </div>
            <div className=" bg-primary rounded-2xl text-white shadow-lg py-4 -z-1 px-16">
              <p className="text-[31px]">Speedy Delivery</p>
              <p className="text-sm pt-2">
                Our efficient delivery network ensures that your orders are
                fulfilled quickly and delivered to your doorstep within the
                shortest possible time frame.
              </p>
            </div>
          </div>
          <div className="flex relative items-center mr-9 mt-3">
            <div className=" absolute -left-[6%]">
              <img alt=''src="/images/exp3.png" className=" w-16 z-1" />
            </div>
            <div className="bg-white rounded-2xl shadow-lg py-4 -z-1 px-16">
              <p className="text-[31px]">Quality and Freshness</p>
              <p className="text-sm pt-2">
                We prioritize quality and freshness, sourcing our products from
                trusted local suppliers and ensuring that they reach you in
                pristine condition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* banner buttom */}

      <section className="mt-24">
        <div className="bg-secondary flex items-center px-20 ">
          <img src="images/handshake.png" alt=''/>
          <div className="text-white">
            <p className="text-[30px]">
              Join Us in Revolutionizing Grocery Shopping: Partnership
              Opportunities Await!
            </p>
            <p className="pt-7 text-gray-300 text-sm">
              uality: Our wholesalWhether you are a delivery partner,
              franchiser, or media partner, there's a place for you in our
              network.e enterprise is driven by a commitment to building lasting
              partnerships and delivering superior products.
            </p>
            <button className="px-6 py-2 rounded-sm bg-primary mt-5">
              Become A Partner
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
