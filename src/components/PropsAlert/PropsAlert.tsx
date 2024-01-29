import "../../styles/alert.scss";
import { FaCheckCircle } from "react-icons/fa";
import { RiErrorWarningFill } from "react-icons/ri";
import { MdCancel } from "react-icons/md";

type Status = "success" | "error" | "warning";
type ActionType = "confirm" | "cancel";

interface PropsAlertProps {
  status: Status;
  message: string;
  showIcon?: boolean;
  actionType?: ActionType;
  actionText?: string;
  onAction?: () => void;
}

const Icon = ({ status }: { status: Status }) => {
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

const AlertButton = ({
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

const PropsAlert = (props: PropsAlertProps) => {
  const {
    status,
    message,
    showIcon = true,
    onAction,
    actionType = "confirm",
    actionText = "Confirm",
  } = props;

  return (
    <div className={`alert ${status}`}>
      {showIcon && <Icon status={status} />}
      <div className="alert__message">{message}</div>
      {onAction && (
        <AlertButton buttonType={actionType} onClick={onAction}>
          {actionText}
        </AlertButton>
      )}
    </div>
  );
};

export default PropsAlert;
