import { Component } from '@angular/core';
import { Villain } from '../villain';
import { VillainService } from '../villain.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-villains',
  // standalone: true,
  // imports: [],
  templateUrl: './villains.component.html',
  styleUrl: './villains.component.css',
})
export class VillainsComponent {
  selectedVillain?: Villain;
  villains: Villain[] = [];
  villain: Villain | undefined;

  constructor(
    private villainService: VillainService,
    private messageService: MessageService
  ) {}
  onSelect(villain: Villain): void {
    this.selectedVillain = villain;
    this.messageService.add(`VillainsComponent: Selected villain id=${villain.id}`);
  }
  getVillains(): void {
    this.villainService
      .getVillains()
      .subscribe((villains) => (this.villains = villains));
  }
  delete(villain: Villain): void {
    this.villains = this.villains.filter((h) => h !== villain);
    this.villainService.deleteVillain(villain.id).subscribe();
  }
  ngOnInit() {
    this.getVillains();

    // this.getHeroes();
  }
  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.villainService
      .addVillain({ name } as Villain)
      .subscribe((villain) => {
        this.villains.push(villain);
      });
  }
}
