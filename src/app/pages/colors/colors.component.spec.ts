import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ColorsComponent } from './colors.component';

describe('ColorsComponent', () => {
  let component: ColorsComponent;
  let fixture: ComponentFixture<ColorsComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ColorsComponent],
      }).compileComponents();
    })
  );

  it('should create', () => {
    fixture = TestBed.createComponent(ColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
