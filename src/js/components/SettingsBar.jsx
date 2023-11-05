import { useEffect } from "react";
import { Dismissible } from "../managers/Dismissible";
export function SettingsBar({
  id,
  title,
  actionText,
  closeText,
  onActionClick,
  children,
}) {
  useEffect(() => {
    Dismissible.init([Dismissible.SETTINGS_BAR]);
  }, []);

  return (
    <div id={id} className="settings-bar">
      <div className="settings-bar-box">
        <span className="settings-bar-title">{title}</span>
        <div className="settings-bar-content">{children}</div>

        <div className="settings-bar-footer">
          {actionText && onActionClick && (
            <button
              className="btn btn-accent btn-small"
              onClick={() => {
                if (onActionClick) onActionClick();
              }}
            >
              {actionText}
            </button>
          )}
          <button
            className="btn btn-flat btn-small"
            action="dismiss-settings-bar"
          >
            {closeText ? closeText : "CLOSE"}
          </button>
        </div>
      </div>
    </div>
  );
}
