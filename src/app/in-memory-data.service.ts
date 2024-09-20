import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Villain } from './villain';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes: Hero[] = [
      {
        id: 12,
        name: 'Dr. Nice',
        superpower: 'Healing Touch',
        description:
          'Dr. Nice has the ability to heal any wound or illness with a single touch, bringing peace and well-being to all.',
        powerLevel: 70, // Power Level from 0 to 100
      },
      {
        id: 13,
        name: 'Bombasto',
        superpower: 'Energy Blast',
        description:
          'Bombasto can generate and release explosive energy blasts from his hands, capable of demolishing entire buildings.',
        powerLevel: 85,
      },
      {
        id: 14,
        name: 'Celeritas',
        superpower: 'Super Speed',
        description:
          'Celeritas moves at the speed of light, able to run across oceans and defeat enemies before they even realize they’re in danger.',
        powerLevel: 90,
      },
      {
        id: 15,
        name: 'Magneta',
        superpower: 'Magnetic Manipulation',
        description:
          'Magneta can control magnetic fields, allowing her to lift massive objects, disable electronics, and create protective shields.',
        powerLevel: 88,
      },
      {
        id: 16,
        name: 'RubberMan',
        superpower: 'Elasticity',
        description:
          'RubberMan can stretch, bend, and twist his body into any shape, making him nearly indestructible and incredibly versatile in combat.',
        powerLevel: 75,
      },
      {
        id: 17,
        name: 'Dynama',
        superpower: 'Electric Manipulation',
        description:
          'Dynama can harness and control electricity, able to generate lightning strikes and power entire cities at will.',
        powerLevel: 82,
      },
      {
        id: 18,
        name: 'Dr. IQ',
        superpower: 'Super Intelligence',
        description:
          'Dr. IQ has a mind that operates at superhuman levels, allowing him to outthink any foe and create inventions that change the world.',
        powerLevel: 95,
      },
      {
        id: 19,
        name: 'Magma',
        superpower: 'Lava Manipulation',
        description:
          'Magma can control and generate molten lava, shaping it into weapons or using it to shield himself from attacks.',
        powerLevel: 80,
      },
      {
        id: 20,
        name: 'Tornado',
        superpower: 'Wind Control',
        description:
          'Tornado has the power to control the wind, creating massive storms and tornadoes to overwhelm enemies or aid in rescues.',
        powerLevel: 83,
      },
    ];

    const villains: Villain[] = [
      {
        id: 12,
        name: 'Dr. Badass',
        superpower: 'Corruption Touch',
        description:
          'Dr. Badass can corrupt anything he touches, turning pure-hearted individuals into malicious beings or decaying structures instantly.',
        powerLevel: 78,
      },
      {
        id: 13,
        name: 'BombVoyage',
        superpower: 'Telekinetic Bombs',
        description:
          'BombVoyage can conjure bombs out of thin air and mentally hurl them at his targets, causing destruction with pinpoint precision.',
        powerLevel: 85,
      },
      {
        id: 14,
        name: 'Acceleration Death',
        superpower: 'Time Manipulation',
        description:
          'Acceleration Death can speed up or slow down time in localized areas, rendering opponents helpless or accelerating their demise.',
        powerLevel: 93,
      },
      {
        id: 15,
        name: 'MagnetAvil',
        superpower: 'Magnetic Crush',
        description:
          'MagnetAvil uses his power over magnetism to create devastating crushing forces, capable of collapsing buildings and crushing enemies with ease.',
        powerLevel: 87,
      },
      {
        id: 16,
        name: 'EvilMan',
        superpower: 'Dark Energy Control',
        description:
          'EvilMan manipulates dark energy, using it to shroud areas in darkness, create force fields, and summon creatures from the void.',
        powerLevel: 89,
      },
      {
        id: 17,
        name: 'DynamamoSling',
        superpower: 'Energy Whips',
        description:
          'DynamamoSling generates powerful energy whips, which he can wield with incredible precision to ensnare, cut, or destroy anything in his path.',
        powerLevel: 80,
      },
      {
        id: 18,
        name: 'Dr. Evil',
        superpower: 'Mind Control',
        description:
          'Dr. Evil can control the minds of others, forcing them to do his bidding or turning allies into enemies at his command.',
        powerLevel: 91,
      },
      {
        id: 19,
        name: 'Magma Galactus',
        superpower: 'Planetary Destruction',
        description:
          'Magma Galactus has the power to create volcanic eruptions that can devastate entire continents and reshape planets with his immense power.',
        powerLevel: 95,
      },
      {
        id: 20,
        name: 'Tornado Supreme',
        superpower: 'Hurricane Generation',
        description:
          'Tornado Supreme can summon destructive hurricanes and cyclones, wreaking havoc across cities and causing widespread chaos.',
        powerLevel: 86,
      },
    ];
    return { heroes, villains };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
