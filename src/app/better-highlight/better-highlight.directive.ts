import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from "@angular/core";

@Directive({
    selector: '[appBetterHighlightDirective]'
})
export class BetterHighlightDirective implements OnInit{
    @Input() defaultColor: string
    //@Input('appBetterHighlightDirective') highlightColor: string = 'blue'
    @Input() highlightColor: string
    @HostBinding('style.backgroundColor') backgroundColor: String = 'transparent'

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    }

    ngOnInit() {
        /* this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue') */
        this.backgroundColor = this.defaultColor
    }

    @HostListener('mouseenter') mouseOver(eventData: Event) {
        /* this.renderer.setStyle(this.elementRef.nativeElement,'background-color','blue') */
        //this.backgroundColor = 'blue'
        this.backgroundColor = this.highlightColor
    }

    @HostListener('mouseleave') mouseLeave(eventData: Event) {
        /* this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent') */
        //this.backgroundColor = 'transparent'
        this.backgroundColor = this.defaultColor
    }
}