export default function TextArea({title, id}) {
  return (
    <div className="input-group flex flex-col items-start">
      <label htmlFor={id} className="text-sm font-semibold mb-1">{title}</label>
      <textarea id={id} className="border rounded outline-none p-2 w-full bg-transparent" rows={6}/>
    </div>
  );
}
