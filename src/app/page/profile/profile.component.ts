import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, switchMap, take, tap } from 'rxjs/operators';

import { AlertService } from '../../service/alert.service';
import { UserService } from '../../service/user.service';

import { AppRoutes } from '../../util/app.routes';
import { ErrorUtil } from '../../util/error.util';

import { User } from '../../model/user.interface';
import { UserProfile } from '../../model/user-profile.interface';

@Component({
    selector: 'ow-profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

    profile: UserProfile;
    readonly form: FormGroup = new FormGroup<unknown>({
        username: new FormControl<string>('', [Validators.required]),
        email: new FormControl<string>('', [Validators.required, Validators.email])
    });
    private existing: User;

    constructor(private readonly service: UserService,
                private readonly router: Router,
                private readonly alertService: AlertService) {
        this.getUser();
    }

    update(): void {
        const { username, email }: FormValue = this.form.value;

        const request: User = {
            ...this.existing,
            username,
            email
        };

        this.service
        .update(request)
        .pipe(take(1))
        .subscribe({
            next: () => {
                this.alertService.add('Saved profile changes');

                void this.router.navigate([AppRoutes.ALL]);
            },
            error: (e: HttpErrorResponse) => {
                this.alertService.add(ErrorUtil.getMessage(e), true);
            }
        });
    }

    private getUser(): void {
        this.service
        .loadLoggedInUser()
        .pipe(
            take(1),
            filter((user: User) => !!user),
            take(1),
            tap((user: User) => {
                this.existing = user;
                this.form.setValue({
                    username: user.username,
                    email: user.email
                });
            }),
            take(1),
            switchMap(() => this.service.getUserProfile()),
            take(1)
        )
        .subscribe({
            next: (profile: UserProfile) => {
                this.profile = profile;
            }
        });
    }
}

interface FormValue {
    username: string;
    email: string;
}
