import React, { useState } from "react";
import { Button, Input } from "@miniComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function AddForm({
  submit = () => {},
  placeholder,
  btnText,
  ...props
}) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.trim() === "") return;

    submit(value);
    setValue("");
  };

  return (
    <form
      className="flex flex-1 items-center"
      onSubmit={handleSubmit}
      {...props}
    >
      <Input
        value={value}
        placeholder={placeholder || "new"}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button type="submit">
        {btnText || <FontAwesomeIcon icon={faPlus} />}
      </Button>
    </form>
  );
}
