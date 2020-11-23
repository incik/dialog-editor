import * as React from "react";
import { useFieldArray } from "react-hook-form";
// @ts-ignore
import { v4 as uuid4 } from "uuid";
import { Answer } from "./types";

type AnswerFormProps = {
  register: any;
  control: any;
  namePrefix: string;
};

const AnswerForm = ({ register, control, namePrefix }: AnswerFormProps) => {
  const {
    fields: answers,
    append: appendAnswer,
    remove: removeAnswer
  } = useFieldArray({
    control,
    name: namePrefix
  });

  return (
    <div className="answerForm">
      {answers.map((item, index) => (
        <div key={item.id}>
          <label>
            ID
            <input
              ref={register()}
              name={`${namePrefix}[${index}].id`}
              defaultValue={item.answerId}
              readOnly
            />
          </label>
          <label>
            Sentense
            <input
              ref={register()}
              name={`${namePrefix}[${index}].sentense`}
              defaultValue={item.sentense}
            />
          </label>
          <label>
            Go to:
            <input
              ref={register()}
              name={`${namePrefix}[${index}].goTo`}
              defaultValue={item.goTo}
            />
          </label>

          <button type="button" onClick={() => removeAnswer(index)}>
            Delete
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => {
          appendAnswer({ answerId: uuid4() });
        }}
      >
        Add answer
      </button>
    </div>
  );
};

export default AnswerForm;
