import Loader from "@/components/shared/Loader";
import PostCard from "@/components/shared/PostCard";
import UserCard from "@/components/shared/UserCard";
import {
  useGetRecentPosts,
  useGetUsers,
} from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";

const Home = () => {
  const {
    data: posts,
    isPending: isPostLoading,
    isError: isErrorPosts,
  } = useGetRecentPosts();

  const {
    data: creators,
    isPending: isCreatorloading,
    isError: isErrorCreators,
  } = useGetUsers();

  if (isErrorPosts || isErrorCreators) {
    return (
      <div className="flex flex-1">
        <div className="home-container">
          <p className="body-medium text-light-1">Something bad happened</p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-1">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full">Home Feed</h2>
          {isPostLoading && !posts ? (
            <Loader />
          ) : (
            <ul className="flex flex-col flex-1 gap-9 w-full ">
              {posts?.documents.map((post: Models.Document) => (
                <li key={post.$id} className="flex justify-center w-full">
                  <PostCard post={post} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="home-creators">
        <h2 className="h3-bold text-light-1">Top Creator</h2>
        {isCreatorloading && !creators ? (
          <Loader />
        ) : (
          <div className="grid 2xl:grid-cols-2 gap-6">
            {creators?.documents.map((creator) => (
              <UserCard user={creator} key={creator.$id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
