import GridPostList from "@/components/shared/GridPostList";
import Loader from "@/components/shared/Loader";
import { useGetCurrentUser } from "@/lib/react-query/queriesAndMutations";

const LikedPosts = () => {
  const { data: currentUser, isLoading } = useGetCurrentUser();
  if (isLoading) return <Loader />;
  if (!currentUser) return <h1> User not found </h1>;
  return (
    <div>
      <GridPostList posts={currentUser?.liked} showStats={false} />
    </div>
  );
};

export default LikedPosts;
