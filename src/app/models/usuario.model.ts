
// Generated by https://quicktype.io

export interface Usuario {
    antiguedad_laboral: string;
    direccion:          string;
    email:              string;
    id_cliente:         number;
    ingreso_mensual:    string;
    nombre_completo:    string;
    num_documento:      string;
    ocupacion:          string;
    telefono:           string;
    tipo_contrato:      TipoContrato;
    tipo_documento:     TipoDocumento;
    tipo_vivienda:      TipoVivienda;
}

enum TipoContrato {
    Anual = "Anual",
    Indefinido = "Indefinido",
    PrestaciónDeServicio = "Prestación de servicio",
}

enum TipoDocumento {
    CedulaCiudadania = "Cedula Ciudadania",
    Extranjero = "Extranjero",
    Pasaporte = "Pasaporte",
}

enum TipoVivienda {
    Arrendada = "Arrendada",
    Propia = "Propia",
}