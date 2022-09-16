import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListByUserComponent } from './post-list-by-user.component';

describe('PostListByUserComponent', () => {
  let component: PostListByUserComponent;
  let fixture: ComponentFixture<PostListByUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostListByUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostListByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
