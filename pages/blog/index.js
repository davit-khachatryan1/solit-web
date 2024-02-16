import dynamic from "next/dynamic";
import { memo } from "react";
const Blogs = dynamic(() => import('../../components/organisms/blog/Blogs'));


const Blog = () => {
  return <Blogs />;
};

export default memo(Blog);
