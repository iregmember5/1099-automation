export interface WidgetPlaceholder {
  id: string;
  type: string;
  value: string;
}

export interface PricingPageData {
  id: number;
  title: string;
  content: {
    heading: string;
    description: string;
  };
  widget_placeholders: WidgetPlaceholder[];
  header_config?: any;
  footer_config?: any;
  color_theme?: {
    id: number;
    name: string;
    primary_color: string;
    secondary_color: string;
    accent_color: string;
  };
  meta?: {
    meta_title?: string;
    meta_description?: string;
  };
}

const baseApiUrl = "https://mypowerly.com/v1/blogs/api/v2";
const frontendUrl = "https://1099automation.com";

export const fetchPricingPageData = async (): Promise<PricingPageData> => {
  const response = await fetch(`${baseApiUrl}/pricing-pages/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Frontend-Url": frontendUrl,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch pricing page: ${response.statusText}`);
  }

  const data = await response.json();
  
  if (!data.items || data.items.length === 0) {
    throw new Error("No pricing page found for this domain");
  }

  return data.items[0];
};
