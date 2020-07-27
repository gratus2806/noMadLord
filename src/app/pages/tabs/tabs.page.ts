import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {


  constructor(
    public menu: MenuController,
  ) {}
  ngOnInit() {
    this.menu.enable(true);
  }
}
