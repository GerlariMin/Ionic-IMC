import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private taille: number;
  private masse: number;
  private imc: number;
  private peutCalculer: boolean;
  private analyse: any;
  private progres: any;

  constructor() {
    this.imc = -1;
    this.masse = 0;
    this.taille = 0;
    this.peutCalculer = false;
    this.analyse = null;
    this.progres = { couleur: 'danger', message: 'En attente de vos données...', statut: 0 };
  }

  /**
   * Affiche le texte correspondant au résultat de l'IMC
   */
  analyseIMC() {

    if(this.imc < 16.5) {
      this.analyse = { couleur: 'danger', message: 'Famine!' };
    } else if (this.imc >= 16.5 && this.imc < 18.5) {
      this.analyse = { couleur: 'danger', message: 'Maigreur!' };
    } else if (this.imc >= 18.5 && this.imc < 25) {
      this.analyse = { couleur: 'success', message: 'Poids normal.' };
    } else if (this.imc >= 25 && this.imc < 30) {
      this.analyse = { couleur: 'warning', message: 'Surpoids!' };
    } else if (this.imc >= 30 && this.imc < 35) {
      this.analyse = { couleur: 'danger', message: 'Obésite modérée!' };
    } else if (this.imc >= 35 && this.imc < 40) {
      this.analyse = { couleur: 'danger', message: 'Obésite sévère!' };
    } else if (this.imc >= 40) {
      this.analyse = { couleur: 'danger', message: 'Obésite morbide!' };
    }

  }

  /**
   * Calcule l'arrondi d'un nombre
   *
   * @param nombre : valeur à traiter
   * @returns valeur arrondie au centième
   */
  arrondirAuCentieme(nombre: number) {
    return Math.round((nombre + Number.EPSILON) * 100) / 100;
  }

  /**
   * Calcul de l'IMC basé sur les valeurs saisies par l'utilisateur
   *
   * @returns
   */
  calculIMC() {
    // On vérifie que l'utilisateur ait bien rempli le champ taille
    if (!this.taille) {
      alert('Veuillez saisir votre taille (en cm)!');
      return;
    }
    // On vérifie que l'utilisateur ait bien rempli le champ masse
    if (!this.masse) {
      alert('Veuillez saisir votre masse (en Kg)!');
      return;
    }
    // Convertion des centimètres en mètres
    const taille = this.taille / 100;
    // Calcul de l'IMC + arrondi du résultat
    this.imc = this.masse / Math.pow(taille, 2);
    this.imc = this.arrondirAuCentieme(this.imc);
    // Génération du résultat de l'analyse
    this.analyseIMC();
    // Remise à zéro
    this.remiseAZero();

  }

  /**
   * Affiche la progression du remplissage du formulaire
   */
  progression() {
    if (this.taille && this.masse) {
      this.progres = { couleur: 'success', message: 'Vous pouvez calculer votre IMC!', statut: 1 };
      this.peutCalculer = true;
    } else if (this.taille || this.masse) {
      this.progres = { couleur: 'warning', message: 'Reste 1 champ à remplir...', statut: 0.5 };
    } else {
      this.progres = { couleur: 'danger', message: 'En attente de vos données...', statut: 0 };
    }
  }

  /**
   * Remise à zéro des valeurs de champs
   */
  remiseAZero() {
    this.taille = 0;
    this.masse = 0;
    this.progression();
  }

}
