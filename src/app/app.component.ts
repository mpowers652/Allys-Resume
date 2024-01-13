import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from "./profile/profile.component";
import { SummaryComponent } from "./summary/summary.component";
import { Summary2Component } from "./summary2/summary2.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      CommonModule,
      ProfileComponent,
      SummaryComponent,
      Summary2Component
    ]
})
export class AppComponent {
  title = 'Allys-Resume';
}
