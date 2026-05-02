export interface WidgetPlaceholder {
  id: string;
  name?: string;
  embed_code: string;
  notes?: string;
}

export interface PricingPageData {
  id: number;
  title: string;
  heading: string;
  description?: string;
  widget_placeholders: WidgetPlaceholder[];
  header_config?: any;
  footer_config?: any;
  color_theme?: any;
  meta_title?: string;
  meta_description?: string;
}

const baseApiUrl = "https://mypowerly.com/v1/blogs/api/v2";

export const fetchPricingPageData = async (): Promise<PricingPageData> => {
  const hostname = window.location.hostname;
  const response = await fetch(
    `${baseApiUrl}/pricing-pages/?domain=${hostname}&fields=*`
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch pricing page: ${response.statusText}`);
  }

  const data = await response.json();
  
  if (!data.items || data.items.length === 0) {
    throw new Error("No pricing page found for this domain");
  }

  return data.items[0];
};
