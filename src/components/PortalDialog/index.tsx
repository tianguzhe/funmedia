import { createPortal } from "react-dom";
import "./style.css";

const PortalDialog = (props: any) => {
  const { visible, children } = props;
  return visible
    ? createPortal(
        <div className="pop-wrap">
          <div className="portal-sample">{children}</div>
        </div>,
        document.getElementById("dialog-root")
      )
    : null;
};

export default PortalDialog;
