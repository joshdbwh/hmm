import { Routes } from "@angular/router";
import { AuthGuard } from "@auth0/auth0-angular";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  {
    path: "home",
    loadChildren: () => import("./app/features/home/routes"),
  },
  {
    path: "menu",
    loadChildren: () => import("./app/features/menu/routes"),
  },
  {
    path: "profile",
    loadChildren: () => import("./app/features/profile/routes"),
  },
  {
    path: "**",
    loadChildren: () => import("./app/features/notFound/routes"),
  },
];
