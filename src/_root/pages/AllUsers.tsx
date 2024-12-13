import { useGetAllUsers } from "@/lib/react-query/queriesAndMutations";
import React from "react";

const AllUsers = () => {
  const { data: users, isError, isPending } = useGetAllUsers();
  if (isError) {
    return (
      <div className="flex flex-1">
        <div className="home-container">
          <p className="body-medium text-light-1">Something bad happened</p>
        </div>
      </div>
    );
  }
  return <div></div>;
};

export default AllUsers;
