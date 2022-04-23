import React, { useState } from "react";
import { AutocompleteInput } from "./components";

const App = (): JSX.Element => {
  const [search, setSearch] = useState<string>("");

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div style={{ width: "800px" }}>
        <AutocompleteInput value={search} onChange={setSearch} />
      </div>
    </main>
  );
};

export default App;
