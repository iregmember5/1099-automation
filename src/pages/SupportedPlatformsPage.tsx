import { useEffect } from "react";
import Tables from "../components/landingpage/Tables";

const SupportedPlatformsPage = () => {
  useEffect(() => {
    document.title = "Supported Platforms - W-9 1099 Chaser";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Tables />
    </div>
  );
};

export default SupportedPlatformsPage;
