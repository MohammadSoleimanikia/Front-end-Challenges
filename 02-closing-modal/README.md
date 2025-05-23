# React Modal Component with Click Outside Functionality

## Challenge:
The challenge is that we detect Click outside of the modal and close it when the user Clicked Outside of the modal
## hooks used 
1. `useState` to save the open State
2. `useEffect` to add event listener after component mounting and add isOpen as dependency and cleanup event listener after unmounting
3. `useRef` to access to DOM (modal)

```jsx
import { useEffect, useRef, useState } from "react";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  // connect ref to modal div
  const modalRef = useRef(null);

  
  useEffect(() => {
    const handleClickOutside = (event) => {

      // if modal was open 
      // safety check: modalRef.current =>wait until modal ref is available
      // the element that clicked is NOT in the modal 
      if (isOpen && modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false); 
      }
    };
    // add event handler to the window 
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // cleanup after unmounting the modal for preventing bugs
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <button data-testid="btn" onClick={() => setIsOpen(true)}>
        OPEN
      </button>

      {isOpen && (
        <div data-testid="modal" ref={modalRef}>
          <h2>CLICK OUTSIDE OF ME</h2>
        </div>
      )}
    </>
  );
}

export default Modal;

```