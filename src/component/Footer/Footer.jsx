import instagram from "../../assets/social/instagram.svg";
import x from "../../assets/social/x.svg";
import fb from "../../assets/social/fb.svg";
import discord from "../../assets/social/discord.svg";
const Footer = () => {
  return (
    <footer className="bg-[#F4F4F6] py-[10%]">
      {/* links part */}
      <div className=" grid grid-cols-2  lg:grid-cols-4 gap-7 md:gap-5 items-center justify-center w-[70%] mx-auto">
        <div className="h-full space-y-5 text-center md:text-start">
          <h2 className="text-[#00000080] text-sm">Categories</h2>
          <div className="flex flex-col space-y-2  text-[#000000B3] font-semibold">
            <a href="">Nutrition and diet</a>
            <a href="">Fitness training</a>
            <a href="">Mindfulness</a>
            <a href="">Mental health</a>
            <a href="">Personal growth</a>
            <a href="">Social well-being</a>
          </div>
        </div>
        <div className="h-full space-y-5 text-center md:text-start">
          <h2 className="text-[#00000080] text-sm">About</h2>
          <div className="flex flex-col space-y-2  text-[#000000B3] font-semibold">
            <a href="">About us</a>
            <a href="">Our partners</a>
            <a href="">Investors</a>
            <a href="">Career</a>
          </div>
        </div>
        <div className="h-full space-y-5 text-center md:text-start">
          <h2 className="text-[#00000080] text-sm">Resources</h2>
          <div className="flex flex-col space-y-2  text-[#000000B3] font-semibold">
            <a href="">FAQ</a>
            <a href="">Refund policies</a>
            <a href="">Terms and conditions</a>
            <a href="">Cookies</a>
            <a href="">Latest posts</a>
          </div>
        </div>
        <div className="h-full space-y-5 text-center md:text-start">
          <h2 className="text-[#00000080] text-sm">Support</h2>
          <div className="flex flex-col space-y-2  text-[#000000B3] font-semibold">
            <a href="">Get in touch</a>
            <a href="">Visit our forum</a>
          </div>
        </div>
      </div>

      {/* social part */}
      <div className="border-b-2 border-t-2 border-dashed flex flex-col md:flex-row items-center gap-5 md:gap-0 justify-between mt-10 w-[70%] mx-auto py-8">
        <h1 className="text-black font-bold text-lg">
          Join our official channels
        </h1>
        <div className="flex items-center justify-evenly gap-2">
          <img src={instagram} alt="" />
          <img src={x} alt="" />
          <img src={fb} alt="" />
          <img src={discord} alt="" />
        </div>
      </div>
      {/* copyright */}
      <p className="text-xs text-[#00000080] w-[70%] mx-auto mt-10">
        © 2024 EduPath. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
