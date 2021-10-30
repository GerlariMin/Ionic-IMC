# Ionic-IMC

---

## Sommaire

- [Résumé](#résumé)
- [Prérequis](#prérequis)
- [Test](#test)
- [L'application](#lapplication)

---

## Résumé

> Développement hybride d'une application de calcul d'IMC.   
> Projet initialisé dans le cadre d'un cours d'initiation au développement hybride avec le framework Ionic, amélioré afin d'être plus ergonomique et de reprendre les bases étudiées durant la semaine de cours.
   
## Prérequis

- `Ionic 6` (`6.17.1`)
- `Graddle 6.5`
- `Java JDK 1.8` (ou `OpenJDK 1.8.0-292`)
- `NPM 6.14.5` ou ultérieur
- Terminal de commandes
- Un smartphone sous Android, émulateur Android ou un navigateur Web

## Test

### Environnement de développement/ test

 - Systèmes d'exploitations: `Windows 10 Professionnel (21H1)`/ `Windows 11 Professionnel (21H2)`
 - Navigateur Web: `Microsoft Edge` - Version `95.0.1020.38` (Version officielle) (64 bits)
 - Émulateur Android: `Google Pixel 4`, sous `Android 12` via `Android Studio`
 - Android Studio: `Android Studio Arctic Fox` | `2020.3.1 Patch 3`
 - Terminal de commandes: `Windows Powershell` - Version `5.1.22000.282`
 - Smarphone Android: `Samsung Galaxy A3 (2017)` (`Android 8.0.0`, `Samsung Experience 9.0`, `Kernel 3.18.14`, `Knox 3.1`)
 - Environnement de développement: `Visual Studio Code` - Version `1.61.2`

### Via l'invité de commandes/ Ionic

1. Télécharger le projet.
2. Installer les différentes ressources nécessaires pour faire tourner Ionic sur votre machine.
3. Ouvrir un invité de commande et accéder au répertoire du projet (`cd [chemin vers le répertoire du projet]/Ionic-IMC/`).
4. A partir de cette étape, vous disposez de 2 options pour tester le projet:
   - Tester le projet en local via le navigaeur:
Exécuter la commande `ionic lab` (pour un aperçu application mobile IOS/ Android) ou `ionic serve` (pour un aperçu site Web).
   - Tester le projet sur son smartphone ou via un émulateur (Android):
Brancher votre téléphone à votre machine.
Exécuter la commande `adb devices` pour détecter votre smartphone.
Exécuter la commande `ionic run android` pour tester l'application sur votre smartphone (ne pas débrancher l'appareil avant la fin de l'exécution!).

### Directement avec l'APK (`Android uniquement`)
1. Récupérer le fichier APK ([`IONIC-IMC/android/app/outputs/apk\debug/app-debug.apk`](/android/app/build/outputs/apk/debug/app-debug.apk)).
2. Brancher votre smartphone à votre machine.
3. Déplacer ou copieR le fichier .apk sur le stockage de votre smartphone.
4. Sur votre smartphone, utilisez l'explorateur de fichiers pour trouver le fichier à l'emplacement choisi, puis cliquez desssus pour l'installer.
   - Si l'installation ne veut pas se faire, pensez à vérifier les paramètres du smartphone (`Paramètres` > `Sécurité` > cocher `Sources inconnues`).

## L'application
   
![Capture d'écran 1](/ressourcesReadme/IonicIMC-001.png)   
Au lancement de l'application, la page du calcul de l'IMC apparaît.

![Capture d'écran 2](/ressourcesReadme/IonicIMC-002.png)   
Une barre de progression indque visuellement à l'utilisateur quand il pourra lancer le calcul.

![Capture d'écran 3](/ressourcesReadme/IonicIMC-003.png)
Une fois toutes les données remplies, l'utilisateur peut calculer son IMC.

![Capture d'écran 4](/ressourcesReadme/IonicIMC-004.png)
La barre de progression est alors remplacée par le résultat du calcul.

![Capture d'écran 5](/ressourcesReadme/IonicIMC-005.png)
Quand l'utilisateur appuie sur le bouton `?`, il peut accéder à une fiche explicative des différents résultats possibles.

![Capture d'écran 6](/ressourcesReadme/IonicIMC-006.png)   
En cliquant sur ce logo, cela vous redirigera sur la page web de [imc.fr](https://www.imc.fr/calcul) pour avoir plus de renseignements sur l'IMC.