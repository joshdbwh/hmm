import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";

export interface IMenuItemCardConfig {
  id: string;
  name: string;
  image: string;
  tagline: string;
  category: string;
}

@Component({
  selector: "app-menu-item-card",
  templateUrl: "./menu-item-card.component.html",
  styleUrls: ["./menu-item-card.component.scss"],
  standalone: true,
  imports: [RouterLink],
})
export class MenuItemCardComponent {
  @Input() config!: IMenuItemCardConfig;
}
