import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule} from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, HomeComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'meu-app-angular';

}
