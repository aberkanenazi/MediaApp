import UserForm from "@/components/forms/UserForm";

const UpdateProfile = () => {
  return (
    <div className="flex flex-1">
      <div className="common-container">
        <div className=" max-w-5xl flex-start gap-3 justify-start w-full">
          <img src="/assets/icons/edit.svg" width={36} height={36} alt="edit" />
          <h2 className="h3-bold md:h2-bold text-left w-full">
            Update Profile (TO / DO )
          </h2>
        </div>
        <UserForm />
      </div>
    </div>
  );
};

export default UpdateProfile;
