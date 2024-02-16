import { memo } from "react";
import React from "react";

const BlogItem = dynamic(() =>
  import("../../components/organisms/blogItem/BlogItem")
);

const BlogItemPage = () => {
  return <BlogItem />;
};

export default memo(BlogItemPage);
