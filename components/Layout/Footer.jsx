import React from "react";

const Footer = () => {
  return (
    <section>
      <div className="px-20 bg-[#0A0014] py-10">
        <div className="flex justify-between items-center">
          <img src="/images/footerlogo.png" />
          <div className="flex w-full justify-end text-white items-center">
            <p className="pr-4">Waiting list</p>

            <div className="flex bg-white py-1 px-4">
              <input className="outline-none" />
              <button className="bg-secondary w-full text-white py-2 px-5">
                JOIN
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <div>
            <p className='text-white mb-3'>Follow us on</p>
            <div className="flex">
              <div>
                <img src="/images/fb.png" />
              </div>
              <div className="ml-2">
                <img src="/images/twitter.png" />
              </div>{" "}
              <div className="ml-2">
                <img src="/images/insta.png" />
              </div>{" "}
              <div className="ml-2">
                <img src="/images/linkedin.png" />
              </div>
            </div>
          </div>
          <div>
            <p className="text-white">Contact Us</p>
            <div className="flex">
                <img src='/images/sms.png' />
                <p className="ml-2 text-gray-400">connect@tinfoexpress.com</p>
            </div>
          </div>
          <div>
            <p className='text-center text-white mb-1'>COMING SOON</p>
            <img src='/images/appgoo.png' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
