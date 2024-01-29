import CompoundAlert, {
  AlertButton,
  AlertIcon,
  AlertText,
} from "./CompoundAlert";

function CompoundAlertDemo() {
  const onConfirm = () => console.log("confirm");
  const onCancel = () => console.log("cancel");

  return (
    <div className="container">
      <h2>CompoundAlert</h2>
      <p>CompoundAlert status</p>
      <CompoundAlert status="success">
        <AlertIcon />
        <AlertText>This is a success alert</AlertText>
        <AlertButton buttonType="confirm" onClick={onConfirm}>
          Confirm
        </AlertButton>
      </CompoundAlert>
      <CompoundAlert status="warning">
        <AlertIcon />
        <AlertText>This is a warning alert</AlertText>
        <AlertButton buttonType="confirm" onClick={onConfirm}>
          Confirm
        </AlertButton>
      </CompoundAlert>
      <CompoundAlert status="error">
        <AlertIcon />
        <AlertText>This is a error alert</AlertText>
        <AlertButton buttonType="confirm" onClick={onConfirm}>
          Confirm
        </AlertButton>
      </CompoundAlert>
      <p>without icon</p>
      <CompoundAlert status="success">
        <AlertText>This is a alert without icon</AlertText>
        <AlertButton buttonType="confirm" onClick={onConfirm}>
          Confirm
        </AlertButton>
      </CompoundAlert>
      <p>without Actions</p>
      <CompoundAlert status="success">
        <AlertIcon />
        <AlertText>This is a alert without action</AlertText>
      </CompoundAlert>
      <p>cancel Action type</p>
      <CompoundAlert status="success">
        <AlertIcon />
        <AlertText>This is a alert with cancel action</AlertText>
        <AlertButton buttonType="cancel" onClick={onCancel}>
          Cancel
        </AlertButton>
      </CompoundAlert>
    </div>
  );
}

export default CompoundAlertDemo;
