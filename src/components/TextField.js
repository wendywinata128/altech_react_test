export default function TextField({title, id, className}) {
  return (
    <div className={`input-group flex flex-col items-start ${className}`}>
      <label htmlFor={id} className="text-sm font-semibold mb-1">{title}</label>
      <input id={id} className="border h-10 rounded outline-none p-2 bg-transparent w-full"></input>
    </div>
  );
}
