export default function Input({ label, textarea, ref, ...props }) {
    const inputClass = "peer outline-none border pl-2 py-1 duration-500 border-black focus:border-dashed relative placeholder:duration-500 placeholder:absolute focus:placeholder:pt-10 focus:rounded-md";
    const labelClass = "pl-2 duration-500 opacity-0 peer-focus:opacity-100 -translate-y-5 peer-focus:translate-y-0";
  return (
<div className="flex flex-col-reverse">
        {textarea ? (
          <textarea ref={ref} className={inputClass + " h-60"} {...props} placeholder={label}/>
        ) : (
          <input ref={ref} {...props} className={inputClass} placeholder={label}/>
        )}

        <label className={labelClass}>
          {label}
        </label>
        </div>
  );
}
