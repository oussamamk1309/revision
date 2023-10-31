import { Component } from '@angular/core';
import { PublicationService } from '../services/publication.service';
import { ActivatedRoute } from '@angular/router';
import { Publication } from 'src/core/Publication';

@Component({
  selector: 'app-details-publication',
  templateUrl: './details-publication.component.html',
  styleUrls: ['./details-publication.component.css']
})
export class DetailsPublicationComponent {

  id! : number
  publication : Publication | null = null

  constructor (private pubserv: PublicationService, private activatedrout: ActivatedRoute) {
    this.id = this.activatedrout.snapshot.params['id']
    this.pubserv.getPubById(this.id).subscribe({
      next: (res: any) => {
        this.publication = res
      },
      error: (err) => {
        this.publication = null
      }
    })
    console.log(this.id)
  }

  ngOnInit () {
  }

}
