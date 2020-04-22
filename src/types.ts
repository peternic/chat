export interface Message {
  id: string;
  chat: string;
  user: string;
  text: string;
  timestamp: number;
}

export interface User {
  id: string;
  name: string;
}

export interface Chat {
  id: string;
  chatters: Array<User>;
}
