export interface IMessage {
  contact_id: string;
  body: string;
  handle: string;
  to: string;
}

export interface IFile {
  buffer: string;
  name: string;
  mimetype: string;
}
