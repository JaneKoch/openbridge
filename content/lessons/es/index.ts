import { elJardinDeLaLuna } from "./el-jardin-de-la-luna";
import { elPequenoBarcoRojo } from "./el-pequeno-barco-rojo";
import type { Lesson } from "@/lib/content/types";

/**
 * Content pack: Spanish · Levels 1–2.
 *
 * Los cuentos en español siguen el mismo contrato de calidad que los
 * cuentos en inglés. Véase `content/lessons/en/maya-and-the-river-bridge.ts`
 * como referencia. Mantén las oraciones cortas y el vocabulario amable.
 *
 * AUTORES: crea tus archivos de cuento en esta carpeta, impórtalos abajo y
 * agrégalos al arreglo.
 */
export const lessonsEs: Lesson[] = [elPequenoBarcoRojo, elJardinDeLaLuna];
