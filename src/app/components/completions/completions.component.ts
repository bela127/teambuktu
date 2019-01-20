import {Component, OnInit} from '@angular/core';
import {CompletionService} from "../../services/completion.service";
import {Completion} from "../../container/completion";

@Component({
  selector: 'app-completions',
  templateUrl: './completions.component.html',
  styleUrls: ['./completions.component.css']
})
export class CompletionsComponent implements OnInit {

  private completions: Completion[];

  constructor(private completionService: CompletionService) {
  }

  ngOnInit() {
    this.getCompletions();
  }

  getCompletions(): void {
    this.completionService.getCompletions()
      .subscribe(completions => this.completions = completions);
  }

}
