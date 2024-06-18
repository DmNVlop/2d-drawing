import { ASSEMBLY_TYPES } from "./ASSEMBLY_TYPES.const";

export const ASSEMBLY_DATA = [
  {
    type: ASSEMBLY_TYPES.NOVENTA_SIMPLE,
    selected: true,
    src: "/images/assembly/assembly-simple.png",
    alt: "Ensamblaje simple",
    title: "Ensamblaje simple",
  },
  {
    type: ASSEMBLY_TYPES.NOVENTA_MECANIZADO,
    selected: false,
    src: "/images/assembly/assembly-noventa-grados.png",
    alt: "Ensamblaje ángulo de 90 grados",
    title: "Ensamblaje ángulo de 90 grados",
  },
  {
    type: ASSEMBLY_TYPES.VARIABLE_MECANIZADO,
    selected: false,
    src: "/images/assembly/assembly-diagonal.png",
    alt: "Ensamblaje ángulo variable",
    title: "Ensamblaje ángulo variable",
  },
  {
    type: ASSEMBLY_TYPES.RECTO_MECANIZADO,
    selected: false,
    src: "/images/assembly/assembly-recto.png",
    alt: "Ensamblaje en Recto",
    title: "Ensamblaje en Recto",
  },
  {
    type: ASSEMBLY_TYPES.NOVENTA_MECANIZADO_EMBOQUILLADO,
    selected: false,
    src: "/images/assembly/assembly-recto-chaflan.png",
    alt: "Ensamblaje recto chaflan",
    title: "Ensamblaje recto chaflan",
  },
];
