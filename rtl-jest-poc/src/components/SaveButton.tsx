type SaveButtonProps = {
  onSave: () => void;
};

function SaveButton({ onSave }: SaveButtonProps) {
  return <button onClick={onSave}>Save</button>;
}

export default SaveButton;