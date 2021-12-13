export default function Checkbox({ onChange, id, value, checked }) {
  return (
    <input
      className="custom-checkbox"
      data-testid="checkbox"
      type="checkbox"
      name="select-item"
      value={value}
      checked={checked}
      onChange={() => onChange(id)}
    />
  );
}
