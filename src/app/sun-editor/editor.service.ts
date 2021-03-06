import { Injectable } from '@angular/core';

export enum DocumentNodeType {
  h2 = 2,
  h3 = 3,
  h4 = 4,
  h5 = 5,
  h6 = 6,
  p = 10,
  img = 11,
  list = 12,
  code = 13,
  link = 14,
  quote = 15,
  table = 16,
  audio = 17,
  video = 18,
  file = 19,
  other = 0,
}

export interface LooseObject {
  [key: string]: string
}

interface NodeCallback {
  (message: string): void;
}

export class DocumentNode {
  type: DocumentNodeType = DocumentNodeType.other;
  content: string = '';
  url: string = '';
  remark: string = '';
  order: number = 1;
  data: LooseObject = {};
  children: DocumentNode[] = [];

  constructor(type: DocumentNodeType = DocumentNodeType.other, content: string = '', url: string = '', data: LooseObject = {}) {
    this.type = type;
    this.content = content;
    this.url = url;
    this.data = data;
  }

  private callback: NodeCallback | undefined;
  call(callback: NodeCallback): void {
    this.callback = callback;
  }

  //外部调用回调函数
  public notify(msg: string) {
    if (this.callback) this.callback(msg);
  }

}

export class DocumentLinkNode {
  name: string = '';
  url: string = '';
}

export enum DocumentOperateType {
  edit = 1,
  copy = 2,
  paste = 3,
  delete = 4,
  dialog = 10,
  upload = 11,
  download = 12,
  other = 0,
}

export class NodeTypeItem {
  type: DocumentNodeType = DocumentNodeType.other;
  name: string = '';
  icon: string = '';
}

export class OperateItem {
  type: DocumentOperateType = DocumentOperateType.other;
  name: string = '';
  icon: string = '';
}

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  constructor() { }

}
