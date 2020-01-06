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
      this.moderatorService.getModerators().subscribe(
        moderator => 

        {
          console.log(moderator)
          this.moderators = moderator["data"]
          // console.log(moderator)
        }
        );
    }

    onDelete(id: string) {
      if (confirm('هل تريد الحذف نهائى؟ ')) {
        this.moderators = this.moderators.filter(
          moderator => moderator.id !== id
        );
        this.moderatorService.deleteModerator(id).subscribe(
            (response) => {
              console.log(response);
              // this.router.navigate(['/employees']);
          },
          (error) => console.log(error)
        );
       }
    }

    onTrash() {
      this.moderatorService.getTrashModerators().subscribe(
        moderators => this.moderators = moderators
        );
    }

    allModerators() {
      this.moderatorService.getModerators().subscribe(
        moderators => this.moderators = moderators
        );
    }
}
