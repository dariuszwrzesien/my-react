const Confirm = ({ message, onConfirm, onCancel, ...props }) => {
  const handleConfirm = () => {
    onConfirm();
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleConfirm}>Yes</button>
      <button onClick={handleCancel}>No</button>
    </div>
  );
};

export default Confirm;
