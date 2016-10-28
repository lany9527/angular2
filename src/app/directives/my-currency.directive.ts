import { Directive, HostListener, ElementRef, OnInit } from "@angular/core";
import { MyCurrencyPipe } from "../pipe/my-currency.pipe"

@Directive({
  selector: "[myCurrency]"
})

export class MyCurrencyDirective implements OnInit {
  private el: any;

  constructor(
    private elementRef: ElementRef,
    private currencyPipe: MyCurrencyPipe
  ) {
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit() {
    this.el.value = this.currencyPipe.transform(this.el.value);
  }

  @HostListener("focus", ["$event.target.value"])
  onFocus(value:any) {
    this.el.value = this.currencyPipe.parse(value);
  }

  @HostListener("blur", ["$event.target.value"])
  onBlur(value:any) {
    this.el.value = this.currencyPipe.transform(value);
  }

}