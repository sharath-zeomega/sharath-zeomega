import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title dashboard component',async(()=>{
    fixture= TestBed.createComponent(DashboardComponent);
    component=fixture.debugElement.componentInstance;

    expect(component.title).toEqual('Dashboard component');
  }));

  it('should have a h1 tag of `dashboard works`',()=>{
    let de:DebugElement =fixture.debugElement;

    expect(de.query(By.css('h1')).nativeElement.innerText).toBe('dashboard works!');
  })
});
