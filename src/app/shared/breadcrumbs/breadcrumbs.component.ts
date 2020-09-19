import { Component, OnDestroy } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [],
})
export class BreadcrumbsComponent implements OnDestroy {
  title: string;
  titleSub$: Subscription;

  constructor(private router: Router) {
    this.titleSub$ = this.getSubscription();
  }
  ngOnDestroy(): void {
    this.titleSub$.unsubscribe();
  }

  getRouteArguments() {
    return this.router.events.pipe(
      filter((event) => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }
  getSubscription() {
    return this.getRouteArguments().subscribe((data) => {
      this.title = data.title;
      document.title = `Admin Pro - ${data.title}`;
    });
  }
}
