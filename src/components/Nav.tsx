import { useState } from "react";
import { motion } from "framer-motion";
import avatar from "/avatar.png";

export default function Nav() {
  const [toggled, setToggled] = useState(false);
  return (
    <nav>
      <h1>Logo</h1>
    </nav>
  );
}
