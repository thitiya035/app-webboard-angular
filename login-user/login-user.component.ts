import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../service/user.service';
import { User } from '../user.interface';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss'],
})
export class LoginUserComponent implements OnDestroy {
  users: User[] = [];
  private subscription?: Subscription;

  userForm = this.fb.group({
    username: this.fb.control<string | null>(null, Validators.required),
  });

  get username() {
    return this.userForm.get('username');
  }

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  login(): void {
    this.subscription?.unsubscribe();
    this.subscription = this.userService.getUsers().subscribe({
      error: (response) => {
        console.error(response);
        alert('Something went wrong! Please try again later.');
      },
      next: (users) => {
        const user = users.find(
          (user) => user.username === this.username?.value
        );

        if (user) {
          this.userService.userLogin = user;
          this.router.navigate(['/post-list']);
        } else {
          alert('Not Username');
        }
      },
    });
  }
}
