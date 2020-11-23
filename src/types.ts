export type Effect = string;

export type Answer = {
  id?: any;
  answerId: string;
  sentense: string;
  effects?: Effect[];
  goTo: string;
};

export type DialogueLine = {
  id?: any;
  lineId: string;
  sentense: string;
  answers?: Answer[];
  effects?: Effect[];
  goTo: string;
};

export type Dialogue = {
  lines: DialogueLine[];
};
