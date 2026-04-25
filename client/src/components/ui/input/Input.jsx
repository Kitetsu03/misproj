export function Input({ label, type, placeholder, value, onChange }) {
  return (
    <>
      <div className="space-y-2">
        <label className="font-medium">{label}</label>
        <input
          type={type}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
}
