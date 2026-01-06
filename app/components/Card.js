"use client";

import { useState } from "react";
import Modal from "./Modal";

export default function Card() {
  const [open, setOpen] = useState(false);

  return (
    <div className="card">
      <h3>Card</h3>
      <button onClick={() => setOpen(true)}>Open Modal</button>

      {open && <Modal onClose={() => setOpen(false)} />}
    </div>
  );
}
