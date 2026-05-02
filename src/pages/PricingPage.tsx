import React, { useEffect, useState } from "react";
import type { PricingPageData } from "../types/pricing";
import { fetchPricingPageData } from "../types/pricing";
import { useTheme } from "../contexts/ThemeContext";
import WidgetRenderer from "../components/pricing/WidgetRenderer";

const PricingPage: React.FC = () => {
  const [data, setData] = useState<PricingPageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { setTheme } = useTheme();

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const pageData = await fetchPricingPageData();
        
        if (pageData.color_theme) {
          setTheme(pageData.color_theme);
        }
        
        setData(pageData);

        if (pageData.meta_title || pageData.title) {
          document.title = pageData.meta_title || pageData.title;
        }

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription && pageData.meta_description) {
          metaDescription.setAttribute("content", pageData.meta_description);
        }

        setError(null);
      } catch (err) {
        console.error("Failed to load pricing page:", err);
        setError(err instanceof Error ? err.message : "Failed to load page data");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [setTheme]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-theme-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-20 w-20 border-4 border-theme-primary border-t-transparent mx-auto mb-4"></div>
          <p className="text-xl font-medium text-theme-text">Loading pricing...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-theme-background">
        <div className="text-center max-w-md mx-auto px-4">
          <h2 className="text-3xl font-bold text-theme-text mb-3">Unable to Load Page</h2>
          <p className="text-theme-neutral mb-8 text-lg">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-8 py-4 bg-theme-primary text-white rounded-xl hover:opacity-90 transition-all"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-theme-background">
        <p className="text-theme-neutral text-xl">No pricing data available</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-theme-background">
      {data.color_theme && (
        <style>{`
          :root {
            --color-primary: ${data.color_theme.primary_color};
            --color-secondary: ${data.color_theme.secondary_color};
            --color-accent: ${data.color_theme.accent_color};
            --color-neutral: ${data.color_theme.neutral_color};
            --color-background: ${data.color_theme.background_color};
            --color-text: ${data.color_theme.text_color};
          }
        `}</style>
      )}

      <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-theme-text mb-4">
              {data.heading}
            </h1>
            {data.description && (
              <p className="text-lg sm:text-xl text-theme-neutral max-w-3xl mx-auto">
                {data.description}
              </p>
            )}
          </div>

          <div className="space-y-12">
            {data.widget_placeholders.map((widget) => (
              <WidgetRenderer key={widget.id} widget={widget} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
