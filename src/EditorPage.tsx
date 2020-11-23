import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
// @ts-ignore
import { v4 as uuid4 } from "uuid";
import { Dialogue } from "./types";
import { serializeDialogue } from "./serializer";

import DialogueLineForm from "./DialogueLineForm";

const EditorPage = () => {
  const initialState = {
    dialogue: {
      lines: [
        {
          lineId: "59e954c8-cbdb-4d5b-95f8-95614e5f0e2d",
          sentense: "Welcome {{playerName}}!",
          goTo: "d9096716-8cec-4aec-8486-7c6d3c7ef0fe",
          answers: [
            {
              answerId: "4b921625-a1f0-4a53-bfcf-dbd5c9f3c056",
              sentense: "Oh, hi there!",
              goTo: "d9096716-8cec-4aec-8486-7c6d3c7ef0fe"
            },
            {
              answerId: "dc02763f-5a0d-4153-9524-6937fa27be38",
              sentense: "Goodbye!",
              goTo: "9c62b11c-6f77-4f78-8028-80131698cae9"
            }
          ]
        },
        {
          lineId: "d9096716-8cec-4aec-8486-7c6d3c7ef0fe",
          sentense: "",
          goTo: ""
        },
        {
          lineId: "1ab4da60-8328-4c61-b175-3c2083e238ee",
          sentense: "",
          goTo: ""
        },
        {
          lineId: "9c62b11c-6f77-4f78-8028-80131698cae9",
          sentense: "",
          goTo: ""
        }
      ]
    }
  };

  const [dialogue, setDialogue] = useState({
    lines: initialState.dialogue.lines
  });

  const { control, register, handleSubmit } = useForm({
    defaultValues: dialogue
  });
  const { fields: lines, append, remove } = useFieldArray({
    control,
    name: "lines"
  });

  const onSubmit = (data: Dialogue) => {
    setDialogue(data);
    console.log(serializeDialogue(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="toolbar">
        <button type="submit">EXPORT!</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            append({ lineId: uuid4() });
          }}
        >
          Add new line
        </button>
      </div>

      <div className="formsArea">
        {lines.map((line, index) => (
          <DialogueLineForm
            key={line.id}
            line={line}
            index={index}
            control={control}
            remove={remove}
            register={register}
          />
        ))}
      </div>
    </form>
  );
};

export default EditorPage;
