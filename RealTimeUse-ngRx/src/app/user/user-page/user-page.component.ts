import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateEmail, updateMobile, updateName } from '../actions';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
  }

  updateName(name: any) {
    this.store.dispatch(updateName({name: name.value}))
  }
  updateEmail(email: any) {
    this.store.dispatch(updateEmail({email: email.value}))
  }
  updateMobile(mobile: any) {
    this.store.dispatch(updateMobile({mobile: mobile.value}))
  }

}
