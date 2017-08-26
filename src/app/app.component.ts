import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  /*  template: `` */
  templateUrl: 'app/app.component.html'
})
export class AppComponent  {
  title = 'My Simple App'
  name = 'Vinay!';
  textColor = 'blue';

  changeSuitColor(){
    this.textColor = this.textColor === 'blue'? 'red' : 'blue';
  }

}
