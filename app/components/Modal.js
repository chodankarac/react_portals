// export default function Modal({ onClose }) {
//   return (
//     <div className="modal">
//       <p>I am a modal</p>
//       <button onClick={onClose}>Close</button>
//     </div>
//   );
// }

import { createPortal } from "react-dom";

export default function Modal({ onClose }) {
  return createPortal(
    <div className="modal">
      <p>I am a modal</p>
      <button onClick={onClose}>Close</button>
    </div>,
    document.body
  );
}
