import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyActivityPage } from './my-activity.page';

describe('MyActivityPage', () => {
  let component: MyActivityPage;
  let fixture: ComponentFixture<MyActivityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyActivityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyActivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
