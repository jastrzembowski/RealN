import { TextField } from "@mui/material";
import { useState } from "react";

export default function SearchComponent() {
  const [name, setName] = useState("");


  return (
    <TextField
      label="Filtruj po nazwie"
      variant="filled"
      value={name || ""}
      onChange={(event: any) => {
        setName(event.target.value);
      }}
      fullWidth
    />
  );
}
