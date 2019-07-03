import { Component, OnInit } from '@angular/core';
import { Moderator } from '../shared/moderator';
import { ModeratorService } from '../services/moderator.service';

@Component({
  selector: 'app-moderators',
  templateUrl: './moderators.component.html',
  styleUrls: ['./moderators.component.scss']
})
export class ModeratorsComponent implements OnInit {
    moderators: Moderator[];

    constructor(private moderatorService: ModeratorService) { }

    ngOnInit() {
        this.moderatorService.getModerators().subscribe(moderators => this.moderators = moderators);
  }

}
