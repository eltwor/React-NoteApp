import { PrimaryButton } from './buttons';
export default function BlankMain({onCreate}) {
  return (
    <div className="mt-24 text-center w-full">
      <h2 className="text-3xl font-bold text-slate-800 my-4">
        No Note Selected
      </h2>
      <p className="mb-4 text-slate-600">
        Select a note or create a new one!
      </p>
      <PrimaryButton onClick={onCreate}>Create new note</PrimaryButton>
    </div>
  );
}
