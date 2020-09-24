import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MemberAreaPage } from './member-area.page';

describe('MemberAreaPage', () => {
  let component: MemberAreaPage;
  let fixture: ComponentFixture<MemberAreaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberAreaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MemberAreaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
