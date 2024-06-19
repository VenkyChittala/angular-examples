import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample2';
  user: any;
  constructor(private store: Store<any>) {
    store.select('user').subscribe(res => {
      this.user = res;
      console.log(this.user);
    })
  }
}
