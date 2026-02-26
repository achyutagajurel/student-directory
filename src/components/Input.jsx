function Input({ label, value, onChange, type = "text", placeholder = "" }) {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}  // <-- pass placeholder here
      />
    </div>
  );
}

export default Input;