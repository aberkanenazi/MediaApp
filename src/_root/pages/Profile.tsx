import GridPostList from "@/components/shared/GridPostList";
import Loader from "@/components/shared/Loader";
import { useUserContext } from "@/context/AuthContext";
import { useGetUserById } from "@/lib/react-query/queriesAndMutations";

import { Link, Outlet, Route, Routes, useParams } from "react-router-dom";
import LikedPosts from "./LikedPosts";

const Profile = () => {
  const { id } = useParams();
  const { data: currentUser, isPending } = useGetUserById(id || "");
  const { user } = useUserContext();
  // to do : infitinte sroll for posts
  if (isPending)
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );
  if (!currentUser)
    return (
      <div className="flex-center w-full h-full">
        <h1 className=" text-light-3 font-bold text"> User not found </h1>
      </div>
    );

  return (
    <div className="profile-container">
      <div className="profile-inner_container">
        <div className="flex xl:flex-row flex-col max-xl:items-center flex-1 gap-7">
          <img
            src={
              currentUser.imageUrl || "/assets/icons/profile-placeholder.svg"
            }
            alt="profile"
            className="w-28 h-28 lg:h-36 lg:w-36 rounded-full"
          />
          <div className="flex flex-col flex-1 md:mt-2">
            <div className="flex flex-col">
              <div className="flex items-center justify-center gap-4 xl:justify-normal">
                <h1 className="text-center xl:text-left h3-bold md:h1-semibold">
                  {currentUser.name}
                </h1>

                <div className={`${user.id !== currentUser.$id && "hidden"}`}>
                  <Link
                    to={`/update-profile/${currentUser.$id}`}
                    className={`h-12 bg-dark-4 px-5 text-light-1 flex-center gap-2 rounded-lg ${
                      user.id !== currentUser.$id && "hidden"
                    }`}
                  >
                    <img
                      src={"/assets/icons/edit.svg"}
                      alt="edit"
                      width={20}
                      height={20}
                    />
                    <p className="small-medium">Edit Profile</p>
                  </Link>
                </div>
              </div>

              <p className="small-regular md:body-medium text-light-3 text-center xl:text-left">
                @{currentUser.username}
              </p>
            </div>

            <p className="small-medium md:base-medium text-center xl:text-left mt-7 max-w-screen-sm">
              {currentUser.bio}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center ">
        <Link to={`/profile/${id}`} className="profile-tab rounded-l-lg">
          <img
            src="/assets/icons/posts.svg"
            alt="posts"
            width={20}
            height={20}
          />
          Posts
        </Link>
        <Link
          to={`/profile/${id}/liked-posts`}
          className="profile-tab rounded-r-lg"
        >
          <img
            src="/assets/icons/like.svg"
            alt="posts"
            width={20}
            height={20}
          />
          Liked Posts
        </Link>
      </div>

      <Routes>
        <Route
          index
          element={<GridPostList posts={currentUser.posts} showUser={false} />}
        />
        <Route />
        {currentUser.$id === user.id && <Route />}
        {currentUser.$id === user.id && (
          <Route path="/liked-posts" element={<LikedPosts />} />
        )}
      </Routes>
      <Outlet />
    </div>
  );
};

export default Profile;
