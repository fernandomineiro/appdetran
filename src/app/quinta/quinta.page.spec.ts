import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuintaPage } from './quinta.page';

describe('QuintaPage', () => {
  let component: QuintaPage;
  let fixture: ComponentFixture<QuintaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuintaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuintaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
