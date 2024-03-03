import { Component } from '@angular/core';
import { NavigationError, Router } from '@angular/router';
import { Subject, filter, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'quizz-project';
  destroy$ = new Subject();
  constructor(
    private router: Router,
  ) {
    router.events
      .pipe(
        filter((e) => e instanceof NavigationError),
        takeUntil(this.destroy$)
      )
      .subscribe((e: any) => {
        if (
          (e?.error?.message.toLowerCase() as string).includes(
            'cannot match any routes'
          )
        ) {
          this.router.navigateByUrl('/login');
          location.reload();
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next('');
    this.destroy$.complete();
  }
}
