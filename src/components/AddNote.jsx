import { useRef, useState } from "react";
import { PrimaryButton, SecondaryButton } from "./buttons";
import Input from "./Input";
import { Button, HelperText, Modal, ModalBody } from "flowbite-react";

export default function AddNote({ onSubmit, onCancel }) {
  const noteTitle = useRef();
  const contentNote = useRef();
  const dateNote = useRef();
  
  const [openModal, setOpenModal] = useState(false);
  
  function handleSubmit(event) {
    event.preventDefault();
    
    const enteredTitle = noteTitle.current.value;
    const enteredContent = contentNote.current.value;
    const enteredDate = dateNote.current.value;

    if(enteredTitle.trim() === '' || enteredDate.trim() === '' || enteredContent.trim() === '') {
      setOpenModal(true);
      return;
    }

    const formData = {
      id: Math.random(),
      title: enteredTitle,
      content: enteredContent,
      date: enteredDate,
    };
    onSubmit(formData);
  }
  return (
    <>
    <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
      <ModalBody>
        <h3 className="text-xl font-bold text-sky-50">Wrong data!</h3>
        <p className="text-gray-400">Make sure to fill out all required fields!</p>
      </ModalBody>
      <div className="w-full flex justify-end p-5 pt-0">
        <SecondaryButton textColor={" text-white"} onClick={() => setOpenModal(false)}>Okay</SecondaryButton></div>
    </Modal>

    <div className="w-full flex justify-center">
      <form className="mt-24 text-center w-1/2 bg-gray-50 h-fit p-10 rounded-2xl shadow-xl ">
        <section className="flex justify-end gap-5">
          <PrimaryButton onClick={handleSubmit}>Add</PrimaryButton>
          <SecondaryButton textColor={" text-blue-950"} onClick={onCancel}>
            Cancel
          </SecondaryButton>
        </section>
        <Input label="Note Title" ref={noteTitle}/>
        <Input label="Content" textarea ref={contentNote}/>
        <HelperText className="text-right">Psst, use Markdown to style!</HelperText>
        <Input label="Date" type="date" ref={dateNote}/>
      </form>
    </div></>
  );
}
