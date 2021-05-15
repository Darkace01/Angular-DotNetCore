import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreationDTO, actorDTO } from '../actors.model';

@Component({
  selector: 'app-edit-actors',
  templateUrl: './edit-actors.component.html',
  styleUrls: ['./edit-actors.component.css']
})
export class EditActorsComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute) { }


  model: actorDTO = {
    id: 1,
    name: 'Sonya',
    dateOfBirth: new Date(),
    picture: 'https://m.media-amazon.com/images/M/MV5BODBkNTYwZTAtZDMxOC00M2JmLWE0M2UtOGFjNjljMjNkYTU4XkEyXkFqcGdeQXVyNjkxNzc0Mzg@._V1_UX214_CR0,0,214,317_AL_.jpg',
    biography: 'Defualt Biography'
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
    });
  }

  saveChanges(actorCreationDTO: actorDTO) {
    console.log(actorCreationDTO);
  }
}
