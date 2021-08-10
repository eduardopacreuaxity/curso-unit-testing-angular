import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ColorDetailComponent } from './color-detail.component';

describe('ColorDetailComponent', () => {
  let component: ColorDetailComponent;
  let fixture: ComponentFixture<ColorDetailComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ColorDetailComponent],
      }).compileComponents();
    })
  );

  it('should create', () => {
    fixture = TestBed.createComponent(ColorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
