import { useEffect, useState } from "react";
import type { LandingPageData } from "../types/landing";
import { fetchLandingPageData } from "../types/landing";
import { useTheme } from "../contexts/ThemeContext";
import GlassNavbar from "../components/landingpage/GlassNavbar";
import Footer from "../components/landingpage/Footer";
import Tables from "../components/landingpage/Tables";

const SupportedPlatformsPage = () => {
  const [data, setData] = useState<LandingPageData | null>(null);
  const [loading, setLoading] = useState(true);
  const { setTheme } = useTheme();

  useEffect(() => {
    const loadData = async () => {
      try {
        const pageData = await fetchLandingPageData();
        
        if (pageData.color_theme) {
          setTheme(pageData.color_theme);
        }
        
        setData(pageData);
        document.title = "Supported Platforms - " + (pageData.title || "1099automation");
      } catch (err) {
        console.error("Failed to load page data:", err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [setTheme]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-theme-background">
        <div className="animate-spin rounded-full h-20 w-20 border-4 border-theme-primary border-t-transparent"></div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-theme-background">
        <p className="text-theme-text">Unable to load page</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-theme-background">
      <GlassNavbar data={data} />
      <div className="pt-20">
        <Tables />
      </div>
      <Footer data={data} />
    </div>
  );
};

export default SupportedPlatformsPage;
