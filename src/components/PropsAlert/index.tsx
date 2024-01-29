import PropsAlert from "./PropsAlert";

function PropsAlertDemo() {
  const onConfirm = () => console.log("confirm");
  const onCancel = () => console.log("cancel");

  return (
    <div className="container">
      <h2>PropsAlert</h2>
      <p>PropsAlert status</p>
      <PropsAlert
        status="success"
        message="This is a success alert"
        onAction={onConfirm}
      />
      <PropsAlert
        status="warning"
        message="This is a warning alert"
        onAction={onConfirm}
      />
      <PropsAlert
        status="error"
        message="This is a error alert"
        onAction={onConfirm}
      />
      <p>without icon</p>
      <PropsAlert
        status="success"
        message="This is a alert without icon"
        showIcon={false}
        onAction={onConfirm}
      />
      <p>without Action</p>
      <PropsAlert status="success" message="This is a alert without action" />
      <p>cancel Action type</p>
      <PropsAlert
        status="success"
        actionType="cancel"
        message="This is a alert with cancel action"
        onAction={onCancel}
        actionText="Cancel"
      />
    </div>
  );
}

export default PropsAlertDemo;
