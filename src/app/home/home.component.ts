// import { Component, NgZone } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.scss'],
//   standalone: false
// })
// export class HomeComponent {
//   message: string = 'Initial message';

//   constructor(private ngZone: NgZone) {}

//   updateMessage() {
//     this.ngZone.runOutsideAngular(() => {
//       setTimeout(() => {
//         this.ngZone.run(() => {
//           this.message = 'Message updated outside Angular zone!'; 
//         });
//       }, 2000);
//     });
//   }
// }


import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false,
})
export class HomeComponent {
  message: string = 'Initial message';

  constructor(private cdr: ChangeDetectorRef) {}

  updateMessage() {
    setTimeout(() => {
      this.message = 'Message updated manually in a zoneless environment!';
      // Manually trigger change detection
      this.cdr.detectChanges();
    }, 2000);
  }
}
