import { Models } from "appwrite";
import React from "react";
import { Button } from "../ui/button";

type UserCardProps = {
  user: Models.Document;
};
const UserCard = ({ user }: UserCardProps) => {
  if (!user.$id) return null;
  return (
    <div className="flex-center flex-col gap-4 border border-dark-4 rounded-[20px] px-5 py-8">
      <div>
        <img
          src={user?.imageUrl || "/assets/icons/profile-placeholder.svg"}
          alt="creator"
          className="rounded-full w-12 h-12"
        />
      </div>

      <p className="base-medium text-light-1 text-center line-clamp-1">
        {user.name}
      </p>
      <p className="small-regular text-light-3 text-center line-clamp-1">
        @{user.username}
      </p>
      <Button
        className="shad-button_primary"
        onClick={() => {
          console.log("follow user");
        }}
      >
        {" "}
        Follow{" "}
      </Button>
    </div>
  );
};

export default UserCard;
