import "../../styles/alert.scss";
import { FaCheckCircle } from "react-icons/fa";
import { RiErrorWarningFill } from "react-icons/ri";
import { MdCancel } from "react-icons/md";
import { createContext, useContext } from "react";

type Status = "success" | "error" | "warning";

interface CompoundAlertProps {
  status: Status;
  children?: React.ReactNode;
}

const AlertContext = createContext<Omit<CompoundAlertProps, "children">>({
  status: "success",
});
const useAlertContext = () => useContext(AlertContext);

export const AlertIcon = () => {
  const { status } = useAlertContext();

  switch (status) {
    case "success":
      return <FaCheckCircle size="20" />;
    case "warning":
      return <RiErrorWarningFill size="24" />;
    case "error":
      return <MdCancel size="24" />;
    default:
      return null;
  }
};

export const AlertText = ({ children }: { children?: React.ReactNode }) => (
  <div className="alert__message">{children}</div>
);

export const AlertButton = ({
  buttonType,
  children,
  onClick,
}: {
  buttonType: "confirm" | "cancel";
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <button
    type="button"
    className={`alert__button alert__button--${buttonType}`}
    onClick={onClick}
  >
    {children}
  </button>
);

const CompoundAlert = (props: CompoundAlertProps) => {
  const { status, children } = props;

  return (
    <AlertContext.Provider value={props}>
      <div className={`alert ${status}`}>{children}</div>
    </AlertContext.Provider>
  );
};

export default CompoundAlert;
