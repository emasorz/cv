import { Component } from '@angular/core';
import { GroupItem } from './models/group-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cv';


  contats = [new GroupItem('Via Cesare Cabella 1/8', 'las la-map-marked'),
  new GroupItem('+39 3270005881', 'las la-phone'),
  new GroupItem('emanuele.sorzana@outlook.it', 'las la-envelope'),
  new GroupItem('emasorz', 'lab la-github')];

  info = [new GroupItem('27/12/1996 - 26 anni', 'las la-birthday-cake'),
  new GroupItem('Genova (GE)', 'las la-map-marker-alt'),]

  softSkills = [new GroupItem('Autonomia', '', 9),
  new GroupItem('Fiducia in se stessi', '', 10),
  new GroupItem('Flessibilita', '', 8),
  new GroupItem('Resistenza allo stress', '', 7),
  new GroupItem('Capacita organizzare', '', 8),
  new GroupItem('Gestire Informazioni', '', 9),
  new GroupItem('Precisione', '', 10),
  new GroupItem('Apprendimento', '', 10),
  new GroupItem('Conseguire obbiettivi', '', 10),
  new GroupItem('Intraprendenza', '', 9),
  new GroupItem('Comunicazione', '', 9),
  new GroupItem('Problem solving', '', 9),
  new GroupItem('Team work', '', 9),
  new GroupItem('Leadership', '', 7)];

  languages = [new GroupItem('Inglese: Buon a (B2)', 'las la-language')];

  futures  = [new GroupItem('Settore Economico: Informatica/Elettronica', 'las la-chart-line'),
  new GroupItem('Area Professionale: engineering e progettazione / sistemi informativi, edp', 'las la-user-tie'),
  new GroupItem('Provincia Preferita: GENOVA / BOLOGNA', 'las la-city'),
  new GroupItem('Disponibilità a trasferte: Sì, in numero limitato', 'las la-luggage-cart'),
  new GroupItem('Disponibilità a trasferirsi all estero: No', 'las la-globe-europe')];
}
