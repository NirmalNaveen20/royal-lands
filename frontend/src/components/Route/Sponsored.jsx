import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="flex justify-between w-full">
        <div className="flex items-start">
          <img
            src="https://lh5.googleusercontent.com/p/AF1QipMcaEBJFIu_Kgv-BWwLTvJDc9oOOwNAHit_wuCf"
            alt=""
            style={{width:"150px", objectFit:"contain"}}
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://static.wixstatic.com/media/64a44f_f2f845224a474cc5ba4d9b7d235bde6f~mv2.png/v1/fit/w_2500,h_1330,al_c/64a44f_f2f845224a474cc5ba4d9b7d235bde6f~mv2.png"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://www.realestateagent.co.uk/wp-content/uploads/2021/11/real-logo-retina.jpg"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://watsonsrealestate.net/media/images/website/no-image.png"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://www.delawareshoreproperties.com/images/DSP_Logo_Final.png"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
