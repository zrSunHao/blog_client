import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { EditorService, DocumentNode } from '../editor.service';

@Component({
  selector: 'app-editor-audio',
  templateUrl: './editor-audio.component.html',
  styleUrls: ['./editor-audio.component.scss']
})
export class EditorAudioComponent implements OnInit {

  @ViewChild("audioInput", { static: false })
  audioInput!: ElementRef;
  file: any;

  @Input() node: DocumentNode = new DocumentNode();

  constructor(public service: EditorService) { }

  ngOnInit() {

  }

  onAvatarClick(): void {
    this.audioInput.nativeElement.click();
  }

  onFileChange(e: any): void {
    if (e?.target?.files?.length) {
      // const formData = new FormData();
      // formData.append('avatar', e.target.files[0]);
      this.node.url = 'assets/files/song.mp3';
      this.node.content = e.target.files[0].name;
      console.log(e.target.files[0])
    }
  }

}
