import { ApplicationRef, Component } from "@angular/core";
import { Store } from "@ngxs/store";
import { first } from "rxjs/operators";
import { Menus } from "./core";
import { NavBarComponent } from "./shared";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  imports: [NavBarComponent, RouterOutlet],
  standalone: true,
})
export class AppComponent {
  title = "spa-angular-typescript-dashboard";
  constructor(private store: Store, private appRef: ApplicationRef) {
    this.appRef.isStable.pipe(first((stable) => stable)).subscribe(() => {
      this.store.dispatch(new Menus.AppLoaded());
    });
  }
}
