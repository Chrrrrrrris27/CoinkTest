import { Pipe, PipeTransform } from "@angular/core";



// ---- Allow to convert a basic number in cellphone number (3208461212)  -> (320 8461212)
@Pipe({
  name: "tel"
})

export class TelPipe implements PipeTransform {
  transform(value: string | null):string {
    let tel = value?.toString();
    if (!tel || tel.length === 0) return "(XXX - XXXXXXX)";
    if (tel.length > 3)  return tel.slice(0,3) + " " + tel.slice(3);
    return tel
  }
}