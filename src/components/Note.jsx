import { HR } from "flowbite-react";
import { SecondaryButton } from "./buttons";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import styles from "./Note.module.css";
export default function Note({ selectedNote, onDelete }) {
  const formattedDate = new Date(selectedNote.date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );
  return (
    <div className="flex justify-center w-full items-center">
      <div className="bg-gray-50 p-5 min-h-3/4 w-1/2 rounded-xl drop-shadow-2xl drop-shadow-gray-500">
        <header className="flex w-full justify-between">
          <h2 className="font-black text-2xl uppercase font-mono tracking-widest">
            {selectedNote.title}
          </h2>
          <SecondaryButton onClick={onDelete}>Delete</SecondaryButton>
        </header>
        <HR />
        <p className="text-right text-sm text-gray-500">{formattedDate}</p>
        <div id="markdown" className={styles.markdown}>
          {" "}
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {selectedNote.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
