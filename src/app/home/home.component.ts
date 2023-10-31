import { Component } from '@angular/core';
import { PublicationService } from '../services/publication.service';
import { Publication } from 'src/core/Publication';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  titre: string = ""
  publication : Publication | null = null

  publications : Publication[] = []

  constructor (private pubserv: PublicationService, private router: Router) {}


  ngOnInit () {
    this.pubserv.getListe().subscribe({
      next: (res: any) => {
        this.publications = res
        console.log(res)
      }
    })
  }



  like (publication : Publication) {

    publication.like++;

    this.pubserv.updatePublication(publication).subscribe({
      next: (res) => {}
    })
  }



  chercherPub() {

    let index = this.publications.findIndex((pub: Publication) => {
      return pub.titre == this.titre;
    })

    if (index != -1) {
      this.publication = this.publications[index]
    } else {
      this.publication = null
    }

    console.log(this.publication)
  }


  detailsPub(id : number) {
    this.router.navigate(['/publication/' + id])
  }


}
