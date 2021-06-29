import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteConCLIComponent } from './componente-con-cli.component';

describe('ComponenteConCLIComponent', () => {
  let component: ComponenteConCLIComponent;
  let fixture: ComponentFixture<ComponenteConCLIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteConCLIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteConCLIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
