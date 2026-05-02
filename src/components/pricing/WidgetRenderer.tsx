import React, { useEffect, useRef } from "react";
import type { WidgetPlaceholder } from "../../types/pricing";

interface WidgetRendererProps {
  widget: WidgetPlaceholder;
}

const WidgetRenderer: React.FC<WidgetRendererProps> = ({ widget }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!widget.embed_code || !containerRef.current) return;

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = widget.embed_code;

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
  }, [widget.embed_code]);

  return (
    <div className="widget-container">
      {widget.name && (
        <h3 className="text-2xl font-semibold text-theme-text mb-4">
          {widget.name}
        </h3>
      )}
      <div ref={containerRef} className="w-full" />
      {widget.notes && (
        <p className="text-sm text-theme-neutral mt-4 italic">{widget.notes}</p>
      )}
    </div>
  );
};

export default WidgetRenderer;
