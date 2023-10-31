import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Publication } from 'src/core/Publication';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  baseUrl = environment.server + "/publication"

  constructor(private http: HttpClient) { }

  getListe () {
    return this.http.get(this.baseUrl)
  }

  getPubById (id : number) {
    let url = this.baseUrl + "/" + id
    return this.http.get(url)
  }

  addPublication (publication: Publication) {
    return this.http.post(this.baseUrl, publication)
  }

  updatePublication (publication: Publication) {
    let url = this.baseUrl + "/" + publication.id

    // http://localhost:3000/publication/1

    return this.http.put(url, publication)
  }

}
