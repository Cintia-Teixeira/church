import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BeliefsPage } from './beliefs.page';

describe('BeliefsPage', () => {
  let component: BeliefsPage;
  let fixture: ComponentFixture<BeliefsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeliefsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BeliefsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
