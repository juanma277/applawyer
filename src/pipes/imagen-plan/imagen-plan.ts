import { Pipe, PipeTransform } from '@angular/core';

import { URL_IMAGENES_PLANES } from '../../config/url.servicios';

@Pipe({
  name: 'imagenPlan',
})
export class ImagenPlanPipe implements PipeTransform {
  
 transform(codigo: string) {
    return URL_IMAGENES_PLANES + codigo;
  }
}
