import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanPreviewComponent } from './artisan-preview.component';

describe('ArtisanPreviewComponent', () => {
  let component: ArtisanPreviewComponent;
  let fixture: ComponentFixture<ArtisanPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanPreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtisanPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
