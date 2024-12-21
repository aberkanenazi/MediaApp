import GridPostList from "@/components/shared/GridPostList";
import Loader from "@/components/shared/Loader";
import { useGetCurrentUser } from "@/lib/react-query/queriesAndMutations";

const LikedPosts = () => {
  const { data: currentUser, isLoading } = useGetCurrentUser();
  if (isLoading)
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
    <div>
      <GridPostList posts={currentUser?.liked} showStats={false} />
    </div>
  );
};

export default LikedPosts;
