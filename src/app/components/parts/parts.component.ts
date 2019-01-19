import {Component, OnInit, ViewChild} from '@angular/core';
import {Part} from "../../container/part";
import {Currency} from "../../container/currency.enum";
import {Unit} from "../../container/unit.enum";
import {WarehouseService} from "../../services/warehouse.service";
import {MatTable} from "@angular/material";

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent implements OnInit {

  private newPart: Part;

  private unitVariants: string[];
  private currencyVariants: string[];

  private parts: Part[];

  @ViewChild('partsTable') partsTable: MatTable<Part>;
  private displayedColumns = ['number', 'name', 'description', 'unit', 'price', 'currency'];

  constructor(private warehouseService: WarehouseService) {
  }

  ngOnInit() {
    this.newPart = new Part();

    this.unitVariants = [];
    for (let unitKey in Unit) {
      this.unitVariants.push(unitKey);
    }

    this.currencyVariants = [];
    for (let unitKey in Currency) {
      this.currencyVariants.push(unitKey);
    }

    // get parts
    this.warehouseService.getParts()
      .subscribe(parts => this.parts = parts);
  }

  isFormFilled(): boolean {
    return (this.newPart != undefined
      && this.newPart.number != undefined
      && this.newPart.name != undefined
      && this.newPart.price != undefined
      && this.newPart.unit != undefined
      && this.newPart.currency != undefined
    );
  }

  add(): void {
    this.warehouseService.addPart(this.newPart)
      .subscribe(part => {
        this.parts.push(part);
        this.partsTable.renderRows();
        this.newPart = new Part();
      });
  }

}
