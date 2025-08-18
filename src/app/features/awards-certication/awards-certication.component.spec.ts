import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsCerticationComponent } from './awards-certication.component';

describe('AwardsCerticationComponent', () => {
  let component: AwardsCerticationComponent;
  let fixture: ComponentFixture<AwardsCerticationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwardsCerticationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwardsCerticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
