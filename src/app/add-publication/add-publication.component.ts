import { Component } from '@angular/core';

import { Publication } from 'src/core/Publication';
import { PublicationService } from '../services/publication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-publication',
  templateUrl: './add-publication.component.html',
  styleUrls: ['./add-publication.component.css']
})
export class AddPublicationComponent {

  publication : Publication = new Publication();

  constructor (private pubservice: PublicationService, private router: Router) {}

  addPub () {
    console.log(this.publication)

    this.publication.public = this.publication.public == 1 ? true : false;

    this.pubservice.addPublication(this.publication).subscribe({
      next: (res) => {
        this.router.navigate(['/home'])
        console.log(res)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
