import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  private tableauIMC: any;
  constructor() {
    this.tableauIMC = [
      { imcCouleur: 'danger', imc: '+ de 40', interpretation: 'Obésité morbide ou massive'},
      { imcCouleur: 'danger', imc: 'De 35 à 40', interpretation: 'Obésité sévère' },
      { imcCouleur: 'danger', imc: 'De 30 à 35', interpretation: 'Obésité modérée' },
      { imcCouleur: 'warning', imc: 'De 25 à 30', interpretation: 'Surpoids' },
      { imcCouleur: 'success', imc: 'De 18.5 à 25', interpretation: 'Corpulence normale' },
      { imcCouleur: 'danger', imc: 'De 16.5 à 18.5', interpretation: 'Maigreur' },
      { imcCouleur: 'danger', imc: '- de 16.5', interpretation: 'Famine' }
    ];
  }

  ngOnInit() {
  }

}
