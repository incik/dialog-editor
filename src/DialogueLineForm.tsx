import * as React from "react";
import { useState, RefObject } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuid4 } from "uuid";
import {
  Stack,
  IconButton,
  TextField,
  PrimaryButton
} from "office-ui-fabric-react";
import { DialogueLine } from "./types";
import AnswerForm from "./AnswerForm";

type DialogueLineFormProps = {
  line: DialogueLine;
  index: number;
  register: any;
  remove: (index: number) => void;
  control: any;
};

const DialogueLineForm = ({
  line,
  index,
  register,
  remove,
  control
}: DialogueLineFormProps) => {
  const columnProps = {
    tokens: { childrenGap: 15 },
    styles: { root: { width: 300 } }
  };
  return (
    <div className="dialogFormWrapper">
      <div className="box dialogForm" key={line.id}>
        <Stack {...columnProps}>
          <IconButton
            iconProps={{ iconName: "Cancel" }}
            title="Close"
            ariaLabel="Close"
            onClick={() => remove(index)}
          />
          <TextField
            label="ID"
            required
            readOnly
            defaultValue={line.lineId}
            componentRef={register()}
            name={`lines[${index}].lineId`}
          />
          <TextField
            label="Sentense"
            required
            defaultValue={line.sentense}
            componentRef={register()}
            name={`lines[${index}].sentense`}
          />
          <TextField
            label="Go to"
            defaultValue={line.goTo}
            componentRef={register()}
            name={`lines[${index}].goTo`}
          />
          <AnswerForm
            register={register}
            control={control}
            namePrefix={`lines[${index}].answers`}
          />
        </Stack>
      </div>
    </div>
  );
};

export default DialogueLineForm;
