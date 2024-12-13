import GridPostList from "@/components/shared/GridPostList";
import Loader from "@/components/shared/Loader";
import { useUserContext } from "@/context/AuthContext";
import { useGetInfiniteSavedPosts } from "@/lib/react-query/queriesAndMutations";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Saved = () => {
  const { ref, inView } = useInView();

  const { user } = useUserContext();

  const {
    data: savedPosts,
    fetchNextPage,
    hasNextPage,
    isPending,
  } = useGetInfiniteSavedPosts(user.id);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  if (!savedPosts) {
    return (
      <div className="flex-center w-full h-full">
        <Loader />
      </div>
    );
  }
  const posts = savedPosts.pages[0].documents.map((save) => save.post);
  return (
    <div className="saved-container">
      <h2 className="h3-bold md:h2-bold w-full">
        <img src="/assets/icons/save.svg" width={24} height={24} alt="saved" />
        Saved Posts
      </h2>
      <div className="flex flex-wrap gap-9 w-full max-w-5xl">
        {isPending ? (
          <div className="flex-center w-full h-full">
            <Loader />
          </div>
        ) : (
          <GridPostList posts={posts} />
        )}
      </div>

      {hasNextPage && (
        <div ref={ref} className="mt-10">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Saved;
