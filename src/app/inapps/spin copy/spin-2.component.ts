import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spin-2',
  templateUrl: './spin-2.component.html',
  styleUrls: ['./spin-2.component.css'],
})
export class SpinComponent2 implements OnInit {
  showInstructions = true;

  constructor(private router: Router) {}

  reverseInstruction() {
    this.showInstructions = false;
  }

  setStart() {
    this.router.navigateByUrl('spin2/game2');
  }

  ngOnInit(): void {}
}
