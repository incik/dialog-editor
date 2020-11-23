import { Answer, Dialogue, DialogueLine } from "./types";

export const serializeAnswers = (answers?: Answer[]) => {
  const res = answers
    ? answers
        .map(
          (answer: Answer) =>
            `\n  - id: "${answer.answerId}"\n    sentense: ${answer.sentense}\n    goTo: ${answer.goTo}`
        )
        .join("")
    : "[]";
  return res;
};

export const serializeDialogue = (dialogue: Dialogue) => {
  const res = dialogue.lines.map(
    (line: DialogueLine) =>
      `- id: "${line.lineId}"\n  sentense: "${
        line.sentense
      }"\n  answers: ${serializeAnswers(line.answers)}\n  goTo: "${line.goTo}"`
  );
  console.log(res.join(`\n`));
};
