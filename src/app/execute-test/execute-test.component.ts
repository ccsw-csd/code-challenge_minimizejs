import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Level } from '../Level';

class ItemTest {
  name: string;
  result: number;
  code: string;
}


@Component({
  selector: 'app-execute-test',
  templateUrl: './execute-test.component.html',
  styleUrls: ['./execute-test.component.scss']
})
export class ExecuteTestComponent implements OnInit {

  level: Level;
  tests: ItemTest[];
  code: string = '';
  testResult: number = 0;


  constructor(
    public dialogRef: MatDialogRef<ExecuteTestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

    this.code = this.data.code;
    this.level = this.data.level;
    this.tests = [];


    for (let i = 0; i < this.level.tests.length; i++) {
      this.tests.push({
        name: this.level.tests[i].name,
        result: 0,
        code: this.level.templateTestCode + "\n" + this.level.tests[i].code + "\n\n executeTest();"    
      })
    }
  }


  ngOnInit(): void {
    
    this.testResult = 0;
    setTimeout(()=>this.executeTest(0), 1000);


  }


  executeTest(index: number) {

    if (index >= this.tests.length) {

      if (this.testResult == 0) this.testResult = 1;
      return;
    }

    let test = this.tests[index];

    try {
      let result = eval(this.code +"\n\n"+test.code);
      if (result) test.result = 1;
      else test.result = -1;
    }
    catch (e) {
      test.result = -1;
    }

    if (test.result == -1) this.testResult = -1;

    setTimeout(()=>this.executeTest(index+1), 250);

  }

  onClose() {
    this.dialogRef.close();
  }

}
