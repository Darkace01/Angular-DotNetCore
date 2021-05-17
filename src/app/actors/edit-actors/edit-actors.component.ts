import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { actorCreationDTO, actorDTO } from '../actors.model';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-edit-actors',
  templateUrl: './edit-actors.component.html',
  styleUrls: ['./edit-actors.component.css']
})
export class EditActorsComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute, private actorsService: ActorsService
    , private router: Router) { }


  model!: actorDTO;

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.actorsService.getById(params.id).subscribe(actor => this.model = actor);
    });
  }

  saveChanges(actorCreationDTO: actorCreationDTO) {
    this.actorsService.edit(this.model.id, actorCreationDTO).subscribe(() => {
      this.router.navigate(['/actors']);
    });
  }
}
