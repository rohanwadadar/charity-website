import React from 'react';
import { FaHouseDamage, FaHandshake, FaHandHoldingUsd, FaHandsHelping } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
      <section className="bg-[#FAF6EB] py-10 md:py-20 px-4 md:px-10">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-[1440px] mx-auto md:ml-20"
          style={{ height: 'auto', minHeight: '450px' }}
        >
          <div className="max-w-[500px] mx-auto md:mx-0">
            <h1
              className="text-gray-900 text-4xl md:text-[70px] font-semibold leading-tight md:leading-[81px] text-left w-full md:w-[500px] mb-4 md:mb-0"
              style={{
                fontFamily: 'Manuale',
              }}
            >
              Empower Hope, <br /> Transform Lives
            </h1>
            <p
              className="text-gray-700 text-base md:text-xl font-medium leading-relaxed md:leading-[30px] text-left w-full md:w-[499px]"
              style={{
                fontFamily: 'Montserrat',
              }}
            >
              The essence of charity by conveying the idea of uplifting individuals and
              communities through the power of hope and positive change.
            </p>
          </div>
          <div className="relative mt-10 md:mt-0">
            <div
              className="absolute bg-yellow-400 z-10 hidden md:block"
              style={{
                width: '120px',
                height: '120px',
                top: '-50px',
                left: '-40px',
                borderRadius: '50%',
              }}
            ></div>
            <div
              className="absolute bg-green z-0 hidden md:block"
              style={{
                width: '138px',
                height: '138px',
                top: '290px',
                left: '411px',
                borderRadius: '23px',
              }}
            ></div>
            <img
              src="/children.png"
              alt="Children"
              className="z-5 relative w-full md:w-auto rounded-t-lg md:rounded-tl-lg md:rounded-tr-none"
            />
          </div>
        </div>
      </section>

      <section
        className="bg-green text-white py-10 md:py-20 px-4 md:px-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer mx-auto relative transform translate-y-1/4 md:translate-y-0 mb-20 md:mb-0"
        style={{
          width: '90%',
          maxWidth: '1178px',
          borderRadius: '40px',
        }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 items-center text-white">
          {[
            { icon: FaHouseDamage, value: 563, label: "Projects Completed" },
            { icon: FaHandshake, value: 425, label: "Trusted Partners" },
            { icon: FaHandHoldingUsd, value: 978, label: "Money Donated" },
            { icon: FaHandsHelping, value: 32, label: "Active Volunteers" }
          ].map((item, index) => (
            <div key={index} className="stat-item text-center flex flex-col items-center">
              <item.icon size={30} className="stat-icon mb-2" />
              <h3 className="text-2xl md:text-4xl font-bold text-yellow-400">{item.value}</h3>
              <p className="mt-2 text-sm md:text-lg">{item.label}</p>
            </div>
          ))}
        </div>
      </section>


 
    <section 
      className="bg-[#F8F6E4] py-10 md:py-20 px-4 md:px-10"
      style={{
        width: '100%',
        maxWidth: '1440px',
        margin: '0 auto',
      }}
    >
      <div className="text-center mb-8 md:mb-12">
        <h2
          className="font-semibold text-3xl md:text-5xl mb-2 mx-auto"
          style={{
            fontFamily: 'Manuale',
            lineHeight: '1.2',
            maxWidth: '313px',
          }}
        >
          Urgent Causes
        </h2>
        <p
          className="text-base md:text-lg font-medium text-[#4A4A4A] mt-2 mx-auto"
          style={{
            fontFamily: 'Montserrat',
            lineHeight: '1.9',
            maxWidth: '400px',
          }}
        >
          Supporting urgent causes, changing lives.
        </p>
      </div>

      <div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >          
        {[
          { img: "/1.png", title: "Morocco Strikes With Earthquake", desc: "Current situation for Morocco has gone horrible due to the strike of Earthquake.", donated: 4400, progress: 30 },
          { img: "/2.png", title: "Harmful Disease In Air", desc: "World has been infected with deadly life-taking virus.", donated: 7888, progress: 60 },
          { img: "/3.png", title: "Patna Suffer With Heavy Flood", desc: "People in Patna have suffered a very heavy flood in the past few days.", donated: 11000, progress: 90 }
        ].map((cause, index) => (
          <div 
            key={index}
            className="bg-white shadow-lg rounded-lg p-5"
            style={{
              width: '100%',
              maxWidth: '370px',
              margin: '0 auto',
            }}
          >
            <img src={cause.img} alt={cause.title} className="rounded-lg mb-4 w-full" />
            <h3 
              className="text-xl font-bold mb-3"
              style={{
                fontFamily: 'Manuale',
                fontSize: '22px',
                fontWeight: 600,
                lineHeight: '1.2',
                textAlign: 'left'
              }}
            >
              {cause.title}
            </h3>
            <p className="text-gray-700 mb-4">
              {cause.desc}
            </p>
            <p className="text-xl font-bold text-gray-900">${cause.donated} <span className="text-sm text-gray-500">Donated till now</span></p>
            <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
              <div
                className={`h-4 rounded-full ${cause.progress >= 0 && cause.progress < 33 ? 'bg-red-500' : cause.progress >= 33 && cause.progress < 66 ? 'bg-orange-500' : 'bg-green'}`}
                style={{ width: `${cause.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  


   <section
  className="bg-white py-20 px-4 sm:px-6 lg:px-10 relative"
  style={{
    width: '100%',
    maxWidth: '1521px',
    margin: '0 auto',
    padding: '100px',
    gap: '50px',
    opacity: 1
  }}
>
  <h2
    className="text-center mb-10 mx-auto donation-heading"
    style={{
      fontFamily: 'Manuale, serif',
      fontSize: '50px',
      fontWeight: 600,
      lineHeight: '1.2',
      width: '100%',
      maxWidth: '653px',
      height: 'auto',
      minHeight: '110px',
      opacity: 1,
      wordWrap: 'break-word',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }}
  >
    Making a difference for those who face hardship
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
    {[
      { title: "Donate Money", image: "4.png", borderColor: "border-green-500" },
      { title: "Donate Clothes", image: "6.png", borderColor: "border-green" },
      { title: "Donate Food", image: "5.png", borderColor: "border-green-500" }
    ].map((item, index) => (
      <div
        key={index}
        className={`bg-white shadow-lg rounded-lg text-center border-4 ${item.borderColor}`}
        style={{
          width: '370px',
          height: '420px',
          padding: '38px 23px 38px 24px',
          borderRadius: '20px',
          opacity: 1
        }}
      >
        <div className="flex justify-center mb-4">
          <img src={item.image} alt={item.title} className="h-12" />
        </div>
        <h3 
          className="text-xl font-bold mb-3 mx-auto"
          style={{
            fontFamily: 'Manuale',
            fontSize: '18px',
            fontWeight: 600,
            lineHeight: '25.87px',
            textAlign: 'center',
            width: '120px',
            height: '26px',
            marginTop: '40px',
            opacity: 1,
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          {item.title}
        </h3>
        <p
          className="text-gray-600 mb-6 mx-auto"
          style={{
            fontFamily: 'Montserrat',
            fontSize: '15px',
            fontWeight: 400,
            marginTop: '20px',
            lineHeight: '21px',
            textAlign: 'center',
            width: '323px',
            height: '84px',
            opacity: 1
          }}
        >
          Your small help can change someone else's life and can make someone happy, and you will have a good deed added to your cart.
        </p>
        <Link to="/product-list">
          <button 
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-full"
            style={{
              width: '162px',
              height: '60px',
              padding: '20px 30px',
              borderRadius: '30px 30px 30px 30px',
              border: '1.5px solid',
              opacity: 1
            }}
          >
            Donate Now
          </button>
        </Link>
      </div>
    ))}
  </div>
</section>

      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 20px !important;
          }
        

          p {
            font-size: 1rem !important;
            line-height: 1.5 !important;
          }
          p1 {
            font-size: 1rem !important;
            line-height: 7 !important;
            left: '50px'
            
          }
          div
          .grid {
            grid-template-columns: 1fr !important;
          }
          .stat-item {
            margin-bottom: 20px;
          }
          button {
            width: 100% !important;
            height: auto !important;
            padding: 25px !important;
          }
         
          .absolute.bg-yellow-400 {
            width: 80px !important; /* Adjust width for mobile */
            height: 80px !important; /* Adjust height for mobile */
            top: -30px !important; /* Adjust position for mobile */
            left: -20px !important; /* Adjust position for mobile */
          }
          .div {
            width: 100px !important; /* Adjust width for mobile */
            height: 100px !important; /* Adjust height for mobile */
            top: 220px !important; /* Adjust position for mobile */
            left: 320px !important; /* Adjust position for mobile */
          }
          img {
            width: 100% !important; /* Ensure image is responsive */
            border-radius: 10px !important; /* Adjust border radius for mobile */
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
