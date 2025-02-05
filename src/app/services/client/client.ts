/** Modelo Cliente */

export class ClientSearchResult {
    id_persona!: number;
    numero_ide!: string;
    nombre_completo!: string
}

export class ClientEmail {
    dir_email!: string;
    ver_email: boolean = false
}

export class ClientDom {
    tipo_domicilio!: string;
    id_ref_cp!: number;
    nom_direccion!: string;
    no_ext!: string;
    no_int!: string;
    vigencia!: boolean;
}

export class ClientTel {
    tipo_tel!: string;
    no_tel!: number
}

export class Client {
    id_cat_ide!: number;
    numero_ide!: string;
    nom_1!: string;
    nom_2!: string;
    apellido_pat!: string;
    apellido_mat!: string;
    edad!: number;
    correos!: ClientEmail[]
    domicilios!: ClientDom[]
    telefonos!: ClientTel[]
}