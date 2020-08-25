import { Component, OnInit} from '@angular/core';
import{Router, RouterEvent} from '@angular/router'
@Component({
  selector: 'app-my-activity',
  templateUrl: './my-activity.page.html',
  styleUrls: ['./my-activity.page.scss'],
})
export class MyActivityPage implements OnInit {
  selectedPath;
  constructor(private router:Router) { 
    router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
      if(this.selectedPath=='/app/tab/my-activity'){
        this.router.navigateByUrl('/app/tab/upload-photos');
      }
      console.log("path",this.selectedPath)
    })
  }
  ngOnInit() {}
}
