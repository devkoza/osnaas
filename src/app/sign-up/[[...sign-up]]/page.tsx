import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <>
      <div className=" h-auto">
        <div className="flex flex-col p-24 items-center">
          <SignUp
            appearance={{
              elements: {
                formButtonPrimary: "w-full !px-4 !py-[8px] !font-bold rounded-xl text-white bg-blue-600 hover:bg-orange-600 hover:text-white md:w-auto  lg:!px-[28px] lg:!py-[14px] ",
                headerSubtitle: "",
                headerTitle: "text-xl",
                formFieldInput: "rounded-lg py-6",
                cardBox:"shadow-lg w-500",
                footer:"bg-white",
              
              },
            }}
          
          />
        </div>
      </div>
    
    </>
  );
};

export default SignUpPage



// import {SignUp} from '@clerk/nextjs'

// export default function page() {
//   return <SignUp />;
// }
