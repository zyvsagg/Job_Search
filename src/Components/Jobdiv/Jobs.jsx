import React from "react";
//imported icons
import { BiTimeFive } from "react-icons/bi";
//imported images
import logo from "../../assets/logo.png";

const Data = [
  {
    id: 1,
    image: logo,
    title: "Web Developer",
    time: "Now",
    location: "Canada",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsamaliquam odio laboriosam veritatis, debitis reprehenderit.",
    company: "Hantey Production",
  },
  {
    id: 2,
    image: logo,
    title: "Cyber Security",
    time: "Now",
    location: "Australia",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsamaliquam odio laboriosam veritatis, debitis reprehenderit.",
    company: "1999 Production",
  },
  {
    id: 3,
    image: logo,
    title: "Ui/Ux Designer",
    time: "Now",
    location: "India",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsamaliquam odio laboriosam veritatis, debitis reprehenderit.",
    company: "Rakke Production",
  },
  {
    id:4,
    image: logo,
    title: "MERN Stack Developer",
    time: "Now",
    location: "Nepal",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsamaliquam odio laboriosam veritatis, debitis reprehenderit.",
    company: "Chiplo Production",
  },
  {
    id:5,
    image: logo,
    title: "Manager",
    time: "Now",
    location: "Nepal",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsamaliquam odio laboriosam veritatis, debitis reprehenderit.",
    company: "Chiplo Production",
  },



];

const Jobs = () => {
  return (
    <div>
      <div
        className="jobContainer flex gap-10 justify-center flex-wrap items-center
    py-10">
        {
        Data.map(({id,image,title,time,location,desc,company}) => {
          return (
            <div
              key={id}
              className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
            >
              <span className="flex justify-between items-center gap-4">
                <h1
                  className="text-[16px] font-semibold text-textColor
        group-hover:text-white"
                >
                  {title}
                </h1>

                <span className="flex items-center text-[#ccc] gap-1">
                  <BiTimeFive />
                  {time}
                </span>
              </span>
              <h6 className="text-[#ccc]">{location}</h6>
              <p
                className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] 
        group-hover:text-white"
              >
                {desc}
              </p>

              <div className="company flex item-center gap-2">
                <img src={image} alt="Company logo" className="w-[20%]" />
                <span className=" text-[14px] py-[1rem] block group-hover:text-white">
                  {company}
                </span>
              </div>
              <button
                className=" border-[2px] rounded-[10px] block p-[10px] w-full text-[14px]
              font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white"
              >
                Apply Now
              </button>
            </div>
          );
        }
        )
        }
      </div>
    </div>
  );
};

export default Jobs;
