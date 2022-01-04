import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CpService } from "../services/cp/cp.service";

@Component({
  selector: "app-agregar-cliente",
  templateUrl: "./agregar-cliente.component.html",
  styleUrls: ["./agregar-cliente.component.scss"],
})
export class AgregarClienteComponent implements OnInit {
  form: FormGroup;
  submited = false;

  constructor(private formBuilder: FormBuilder, private cpService: CpService) {
    this.form = this.formBuilder.group({
      nom_1: ["", Validators.required],
      nom_2: [""],
      apellido_pat: ["", Validators.required],
      apellido_mat: ["", Validators.required],
      edad: ["", Validators.required],
      numero_ide: ["", Validators.required],
      id_cat_ide: ["", Validators.required],
      correo: ["", Validators.required],
      telefono: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    this.cpService.searchCp("5916").subscribe((data) => {
      console.log(data);
    });
  }
}
