import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LoadingSpinnerContainerComponent } from "./loading-spinner-container.component";

describe("LoadingSpinnerContainerComponent", () => {
  let component: LoadingSpinnerContainerComponent;
  let fixture: ComponentFixture<LoadingSpinnerContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingSpinnerContainerComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingSpinnerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
