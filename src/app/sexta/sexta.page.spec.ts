import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SextaPage } from './sexta.page';

describe('SextaPage', () => {
  let component: SextaPage;
  let fixture: ComponentFixture<SextaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SextaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SextaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
