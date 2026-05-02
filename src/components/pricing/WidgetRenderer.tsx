import React, { useEffect, useRef } from "react";
import type { WidgetPlaceholder } from "../../types/pricing";

interface WidgetRendererProps {
  widget: WidgetPlaceholder;
}

const WidgetRenderer: React.FC<WidgetRendererProps> = ({ widget }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!widget.value || !containerRef.current) return;

    // Parse the StructValue string to extract embed_code
    const embedCodeMatch = widget.value.match(/'embed_code':\s*"([^"]+)"/);
    const nameMatch = widget.value.match(/'name':\s*'([^']+)'/);
    
    if (!embedCodeMatch) return;

    const embedCode = embedCodeMatch[1]
      .replace(/\\'/g, "'")
      .replace(/\\"/g, '"');

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = embedCode;

    // Extract and execute scripts
    const scripts = tempDiv.querySelectorAll("script");
    scripts.forEach((script) => {
      const newScript = document.createElement("script");
      if (script.src) {
        newScript.src = script.src;
        newScript.async = true;
      } else {
        newScript.textContent = script.textContent;
      }
      document.head.appendChild(newScript);
    });

    // Append non-script content
    const nonScriptContent = tempDiv.querySelectorAll(":not(script)");
    nonScriptContent.forEach((el) => {
      containerRef.current?.appendChild(el.cloneNode(true));
    });
  }, [widget.value]);

  return (
    <div className="widget-container">
      <div ref={containerRef} className="w-full" />
    </div>
  );
};

export default WidgetRenderer;
