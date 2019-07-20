import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

import {AccountService} from '../../services/account.service';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss']
})
export class AuthDialogComponent implements OnInit {

  public username = '';
  public password = '';

  public waitingForResponse = false;
  public loginFailed = false;

  constructor(
    public dialogRef: MatDialogRef<AuthDialogComponent>,
    public account: AccountService) { }

  ngOnInit() {
  }

  public clickedLogin() {
    this.waitingForResponse = true;
    this.dialogRef.disableClose = true;
    this.account.attemptLogin(this.username, this.password)
      .then(result => {
        console.log(result);
        this.waitingForResponse = false;
        this.loginFailed = !result;
        this.dialogRef.disableClose = false;
        if (result) {
          this.dialogRef.close('success');
        }
      })
      .catch(error => {
        console.error(error);
        this.dialogRef.disableClose = false;
        this.waitingForResponse = false;
        this.loginFailed = true;
      });
  }

}
