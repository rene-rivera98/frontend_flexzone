/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Modify_userComponent } from './modify_user.component';

describe('Modify_userComponent', () => {
  let component: Modify_userComponent;
  let fixture: ComponentFixture<Modify_userComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modify_userComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modify_userComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
