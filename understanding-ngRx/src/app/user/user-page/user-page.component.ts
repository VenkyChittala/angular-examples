import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

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
    this.store.dispatch({type: 'name-edit', payload: name.value})
  }

}
