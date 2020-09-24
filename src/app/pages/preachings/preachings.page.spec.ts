import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreachingsPage } from './preachings.page';

describe('PreachingsPage', () => {
  let component: PreachingsPage;
  let fixture: ComponentFixture<PreachingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreachingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreachingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
