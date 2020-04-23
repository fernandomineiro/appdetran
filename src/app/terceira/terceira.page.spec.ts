import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TerceiraPage } from './terceira.page';

describe('TerceiraPage', () => {
  let component: TerceiraPage;
  let fixture: ComponentFixture<TerceiraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerceiraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TerceiraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
