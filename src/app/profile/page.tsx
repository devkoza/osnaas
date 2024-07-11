import { UserProfile } from "@clerk/nextjs";

const ProfilePage = () => {
  return (
    <>
      <div className=" h-auto">
        <div className="flex flex-col p-24 items-center">
          <UserProfile />
        </div>
      </div>
    
    </>
  );
};

export default ProfilePage


