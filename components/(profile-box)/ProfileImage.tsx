import React from "react";

const ProfileImage = () => {
  return (
    <div className="flex justify-center items-center overflow-hidden w-64 h-64 rounded-full bg-blue border-4 border-light mx-auto mb-10">
      <img
        className="w-48 translate-y-1/4"
        src="/images/profile.png"
        alt="portrait of Keaton Flake"
      />
    </div>
  );
};

export default ProfileImage;
