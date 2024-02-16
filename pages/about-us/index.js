import { memo } from "react";
const AboutPage = dynamic(() => import("../../components/organisms/aboutPage"));

const AboutUs = () => {
  return <AboutPage />;
};

export default memo(AboutUs);
