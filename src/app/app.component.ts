import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CodeEditorComponent, CodeModel } from '@ngstack/code-editor';
import { MatDialog } from '@angular/material/dialog';
import { LEVELS } from './levels';
import { ExecuteTestComponent } from './execute-test/execute-test.component';
import { Level } from './Level';
import { DialogConfirmationComponent } from './dialog-confirmation/dialog-confirmation.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild(CodeEditorComponent, { static: false })
  private codeEditor?: any;
  
  localStorageKey = 'codeChallenge-minimizejs-1';
  sanitizedDescription: any = '';
  numCharacters = 0;

  actualLevel: Level = LEVELS[0];

  theme = 'vs-dark';

  codeModel: CodeModel = {
    language: 'javascript',
    uri: 'javascript.json',
    value: ``
  };

  options  = {
    lineNumbers: true,
    contextmenu: false,
    lineNumbersMinChars: 3,
    smoothScrolling: true,
    wordWrap: "on",
    minimap: {
      enabled: false
    }
  };

  constructor(private sanitizer: DomSanitizer, 
    public dialog: MatDialog,
  ) {}


  ngOnInit(): void {
    this.sanitizedDescription = this.sanitizer.bypassSecurityTrustHtml(this.actualLevel.description);
    this.readStorage();
    this.calculateCharacters();
  }


  executeTest() {
    this.dialog.open(ExecuteTestComponent, {
      width: '500px',
      data: {level: this.actualLevel, code: this.codeModel.value}
    });

  }

  private saveStorage() {
    localStorage.setItem(this.localStorageKey, this.codeModel.value);
  }

  private readStorage() {
    this.codeModel.value = localStorage.getItem(this.localStorageKey) || this.actualLevel.templateCode;
  }

  public onCodeChanged() : void {
    this.calculateCharacters();
    this.saveStorage();
  }

  calculateCharacters() : void {
    let code = this.codeModel.value;
    var regex = /^(("((?!("|\\))(.|\n|\r)|\\(.|\n|\r))*"|'((?!('|\\))(.|\n|\r)|\\(.|\n|\r))*'|((?!(\/|"|'))(.|\n|\r)))*)(\/\*((?!\*)(.|\n|\r)|\*(?!\/)(.|\n|\r))*\*\/|\/\/.*(\r\n?|\n|$))/g;

    var l = code.length;
    while (true) {
        code = code.replace(regex, "$1");
        if (code.length == l) {
            break;
        }
        l = code.length;
    }

    code = code.replaceAll(' ', '').replaceAll('\n', '').replaceAll('\t', '').replaceAll('\r', '');

    this.numCharacters = code.length;
  }


  getEmailTo(): string {
    return "pablo.jimenez-martinez@%63%61%70%67%65%6D%69%6E%69.%63%6F%6D";
  }

  getEmailBody(): string {
    let code = this.codeModel.value.replaceAll('\n', '%0D%0A').replaceAll('&', '%26');
    return "Aquí tienes mi solución al nivel "+this.actualLevel.id+" de CodeChallenge:%0D%0A%0D%0A"+code+"%0D%0A%0D%0A%0D%0AUn saludo.";
  }


  onReset() : void {

    const dialogRef = this.dialog.open(DialogConfirmationComponent, {
      data: { title: "Reiniciar el código", description: "Atención si reinicia el código fuente perderá el código que tiene actualmente.<br> ¿Desea reiniciar el código?" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.codeModel.value = this.actualLevel.templateCode;
        this.codeEditor.editor.setValue(this.codeModel.value);
        this.saveStorage();
      }
    });

  }

  onSendEmail() : void {
    window.open('mailto:'+this.getEmailTo()+'?subject=[CodeChallenge] MinimizeJS-1&body='+this.getEmailBody(), '_self');
  }


  @HostListener('window:resize', ['$event'])
  onResize() : void {
    let editor = this.codeEditor.editor;
    editor.layout({width: 0, height: 0});
  }

}

