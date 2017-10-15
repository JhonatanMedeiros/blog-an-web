import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  agendar: boolean = false;

  typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];


  public froalaEditorOptsTitle: Object = {
    placeholderText: 'Escreva o titulo aqui!',
    editInPopup: true,
    language: 'pt_br',
    charCounterMax: 60,
    inlineMode: false
  };

  public froalaEditorOpts: Object = {
    placeholderText: 'Escreva o conteúdo aqui!',
    charCounterCount: true,
    language: 'pt_br',
    heightMin: 550,
    pastePlain: true,
    theme: 'gray',
    zIndex: 2001
    // toolbarButtons: ['fullscreen', '|', 'bold', 'italic', 'strikeThrough', 'underline', '|', 'paragraphFormat', 'paragraphStyle', 'align', 'formatOL', 'formatUL', 'indent', 'outdent', '|', 'insertImage', 'insertLink', 'insertVideo', 'insertFile', 'html']
  };

  constructor() { }

  ngOnInit() {
  }

}
