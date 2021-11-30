export default function Checkbox({ onChange, id, value, checked }) {
  return (
    <input
      className="custom-checkbox"
      type="checkbox"
      name="select-item"
      value={value}
      checked={checked}
      onChange={() => onChange(id)}
    />
  );
}
