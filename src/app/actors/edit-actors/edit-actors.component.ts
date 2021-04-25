import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreationDTO } from '../actors.model';

@Component({
  selector: 'app-edit-actors',
  templateUrl: './edit-actors.component.html',
  styleUrls: ['./edit-actors.component.css']
})
export class EditActorsComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute) { }


  model: actorCreationDTO = { name: 'Bobo Yii', dateOfBirth: new Date() }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
    });
  }

  saveChanges(actorCreationDTO: actorCreationDTO) {
    console.log(actorCreationDTO);
  }
}
