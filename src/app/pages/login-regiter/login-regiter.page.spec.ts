import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginRegiterPage } from './login-regiter.page';

describe('LoginRegiterPage', () => {
  let component: LoginRegiterPage;
  let fixture: ComponentFixture<LoginRegiterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginRegiterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginRegiterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
