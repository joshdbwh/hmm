import { Route } from "@angular/router";
import { UserRoleGuard, USER_ROLES } from "src/app/core";
import { MenuComponent } from "./menu.component";

export default [
  {
    path: "",
    component: MenuComponent,
    children: [
      {
        path: "",
        loadChildren: () => import("./menu-items/routes"),
      },
      {
        path: "add",
        loadChildren: () => import("./add-item/routes"),
        canActivate: [UserRoleGuard],
        data: { role: USER_ROLES.MENU_ADMIN },
      },
      {
        path: ":id",
        loadChildren: () => import("./menu-item/routes"),
      },
      {
        path: ":id/edit",
        loadChildren: () => import("./edit-item/routes"),
        data: { role: USER_ROLES.MENU_ADMIN },
      },
      {
        path: ":id/delete",
        loadChildren: () => import("./delete-item/routes"),
        data: { role: USER_ROLES.MENU_ADMIN },
      },
    ],
  },
] as Route[];
