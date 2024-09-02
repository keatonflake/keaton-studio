import Image from "next/image";

const ProfileImage = () => {
  return (
    <div className="flex justify-center items-center overflow-hidden w-[250px] h-[250px] rounded-full bg-blue border-4 border-light mx-auto">
      <Image
        className="translate-y-1/4"
        src="/images/profile.png"
        width={200}
        height={200}
        priority
        alt="portrait of Keaton Flake"
      />
    </div>
  );
};

export default ProfileImage;
