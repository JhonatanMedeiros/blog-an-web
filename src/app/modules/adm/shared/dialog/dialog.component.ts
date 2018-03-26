import { Component, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'dialog-component',
  templateUrl: 'dialog.component.html',
})
export class DialogComponent {

  config: {
    title: string,
    msg: string,
    showBtnNo: boolean,
    showBtnYes: boolean,
    btnNoMsg: string,
    btnYesMsg: string,
  };

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.config = {
      title: this.data.title || 'AVISO',
      msg: this.data.msg || '',
      showBtnNo: this.data.showBtnNo || true,
      showBtnYes: this.data.showBtnYes || false,
      btnNoMsg: this.data.btnNoMsg || 'Cancelar',
      btnYesMsg: this.data.btnYesMsg || 'Sim'

    }

  }

}
