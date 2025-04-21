import { SecondaryButton } from "./buttons";
import { useState } from "react";

export default function Sidebar({ onCreate, notes, onSelect }) {
  const [expanded, setExpanded] = useState(false);

  function handleExpand(e) {
    setExpanded(!expanded);
  }
  return (
    <section className="md:w-72 w-1 bg-slate-950 text-stone-50 p-10 px-8 py-16 rounded-r-xl overflow-auto">
      <h2 className="md:text-xl font-bold mb-4 uppercase text-stone-200">
        Your notes
      </h2>
      <div className="mb-8">
        <SecondaryButton textColor={" text-white"} onClick={onCreate}>
          + Add Notes
        </SecondaryButton>
      </div>
      <ul className="mt-8">
        {notes.map((note) => {
          return (
            <li key={note.id} className="mb-4">
              <button
                onClick={() => onSelect(note.id)}
                className="w-full border-b-4 border-indigo-500 border-double py-1 cursor-pointer rounded-2xl hover:bg-slate-800"
              >
                {note.title}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
