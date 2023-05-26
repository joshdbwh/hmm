import { Component } from "@angular/core";
import { Store } from "@ngxs/store";
import { User, UserState } from "src/app/core";
import { RouterLinkActive, RouterLink } from "@angular/router";
import { ButtonComponent } from "../button/button.component";
import { NgFor, NgTemplateOutlet, NgIf, AsyncPipe } from "@angular/common";
import { LogoComponent } from "../logo/logo.component";

export interface INavBarMenuLinkProps {
  to: string;
  icon?: string;
  label: string;
}

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"],
  standalone: true,
  imports: [
    LogoComponent,
    NgFor,
    NgTemplateOutlet,
    NgIf,
    ButtonComponent,
    RouterLinkActive,
    RouterLink,
    AsyncPipe,
  ],
})
export class NavBarComponent {
  isAuthenticated$ = this.store.select(UserState.isLoggedIn);
  user$ = this.store.select(UserState.user);

  navOptions: INavBarMenuLinkProps[] = [
    { to: "/home", label: "Home", icon: "" },
    { to: "/menu", label: "Menu", icon: "" },
  ];

  constructor(private store: Store) {}

  loginWithRedirect(): void {
    this.store.dispatch(new User.AllNavbarActions.LoginFlowInitiated());
  }

  logout(): void {
    this.store.dispatch(new User.AllNavbarActions.LogoutFlowInitiated());
  }
}
