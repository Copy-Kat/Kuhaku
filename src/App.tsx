import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { Button } from "./components/ui/button";

import "./styles/globals.css";
import { Input } from "./components/ui/input";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="container p-9">
      <Input value={name} onChange={(e) => setName(e.target.value)}></Input>
      <Button onClick={greet}>Grett</Button>

      <p>{greetMsg}</p>
    </div>
  );
}

export default App;
