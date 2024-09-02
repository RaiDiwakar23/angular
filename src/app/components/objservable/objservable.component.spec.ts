import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjservableComponent } from './objservable.component';

describe('ObjservableComponent', () => {
  let component: ObjservableComponent;
  let fixture: ComponentFixture<ObjservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjservableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
