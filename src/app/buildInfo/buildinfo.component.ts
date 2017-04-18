import {Input, Component} from "@angular/core";
import {Building} from "app/models/ResponseBuildings";

@Component({
  selector: 'build-info',
  templateUrl: 'buildinfo.component.html',
  styleUrls: ['buildinfo.component.css']
})
export class BuildInfoComponent{
  @Input() buildInfo : Building[];
  @Input() buildLocation : string;
}
