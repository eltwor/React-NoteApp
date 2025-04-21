import { useState } from 'react'
import Sidebar from './components/Sidebar'
import BlankMain from './components/BlankMain'
import AddNote from './components/AddNote'
import Note from './components/Note'
function App() {
  const [notesState, setNotesState] = useState({
    selectedNoteId: undefined,
    notes: []
  })
  const selectedNote = notesState.notes.find(
    (note) => note.id === notesState.selectedNoteId
  );

  let content = (
    <Note selectedNote={selectedNote} onDelete={handleDeleteNote} />
  )

  function createNote() {
    setNotesState((prevState) => {
      return {
        ...prevState,
        selectedNoteId: null,
      };
    });
  }

  function cancelNote() {
    setNotesState((prevState) => {
      return {
        ...prevState,
        selectedNoteId: undefined,
      };
    });
  }

  function addNote(noteData) {
    setNotesState((prevState) => {
      return {
        ...prevState,
        selectedNoteId: undefined,
        notes: [...prevState.notes, noteData],
      };
    });
  }

  function handleSelect(id) {
    setNotesState((prevState) => {
      return {
        ...prevState,
        selectedNoteId: id,
      };
    });
  }

  function handleDeleteNote(id) {
    setNotesState((prevState) => {
      return {
        ...prevState,
        selectedNoteId: undefined,
        notes: prevState.notes.filter(
          (note) => note.id !== prevState.selectedNoteId
        )};
    });
  }

  if(notesState.selectedNoteId === undefined) {
    content = <BlankMain onCreate={createNote}/>
  } else if(notesState.selectedNoteId === null) {
    content = <AddNote onSubmit={addNote} onCancel={cancelNote}/>
  }

  return (
    <main className='flex h-screen bg-gray-400'>
      <Sidebar notes={notesState.notes} onSelect={handleSelect} onCreate={createNote}/>
      {content}
    </main>
  )
}

export default App
