import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../common/auth.service';
import { UtilitiesService} from '../common/utilities.service';

/**
 * The chrome of the whole application
 * Shows status bar at the top of the screen and car data below
 *
 * @class ChromeComponent
 */
@Component({
  selector: 'app-chrome',
  templateUrl: './chrome.component.html',
  styleUrls: ['./chrome.component.css']
})
export class ChromeComponent {

	constructor (private authService: AuthService, private utilitiesService: UtilitiesService, private router: Router) { }

	signOut(): void {
		this.authService.logout().then(() => {
			this.router.navigate(['landing', 'signIn']);
		})
		.catch(error => this.utilitiesService.handleError(error));
	}
}
