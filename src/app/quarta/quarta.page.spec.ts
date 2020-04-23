import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuartaPage } from './quarta.page';

describe('QuartaPage', () => {
  let component: QuartaPage;
  let fixture: ComponentFixture<QuartaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuartaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuartaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
