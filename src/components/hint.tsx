import React from "react";
import clsx from "clsx";

export const Hint: React.FC<
  React.PropsWithChildren<{ style?: "info" | "warning" }>
> = ({ style = "info", children }) => {
  return (
    <div className={`hint hint-${style}`}>
      <div className="hint-icon">
        <i
          className={clsx(
            "fa",
            style === "warning" && "fa-exclamation-circle",
            style === "success" && "fa-check-circle",
            style === "info" && "fa-info-circle",
            style === "danger" && "fa-exclamation-triangle",
          )}
        ></i>
      </div>

      {children}
    </div>
  );
};
