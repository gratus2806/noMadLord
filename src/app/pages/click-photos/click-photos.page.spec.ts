import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClickPhotosPage } from './click-photos.page';

describe('ClickPhotosPage', () => {
  let component: ClickPhotosPage;
  let fixture: ComponentFixture<ClickPhotosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickPhotosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClickPhotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
