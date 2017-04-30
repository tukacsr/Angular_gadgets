import { Component, Input, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: './008_CanvasDraw.component.html',
  styles: ['canvas {border: 1px solid #000;}']
})
export class CanvasComponent implements AfterViewInit {

  @ViewChild('canvas') public canvas: ElementRef;

  @Input() public width = window.innerWidth - 30;
  @Input() public height = window.innerHeight - 120;

  private cx: CanvasRenderingContext2D;

  public ngAfterViewInit() {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d');

    canvasEl.width = this.width;
    canvasEl.height = this.height;

    this.cx.lineWidth = 3;
    this.cx.lineCap = 'round';
    this.cx.strokeStyle = '#FFF';

    this.captureEvents(canvasEl);
  }
  
  private captureEvents(canvasEl: HTMLCanvasElement) {
  Observable
    .fromEvent(canvasEl, 'mousedown')
    .switchMap((e) => {
      return Observable
        .fromEvent(canvasEl, 'mousemove')
        .takeUntil(Observable.fromEvent(canvasEl, 'mouseup'))
        .pairwise()
    })
    .subscribe((res: [MouseEvent, MouseEvent]) => {
      const rect = canvasEl.getBoundingClientRect();

      const prevPos = {
        x: res[0].clientX - rect.left,
        y: res[0].clientY - rect.top
      };

      const currentPos = {
        x: res[1].clientX - rect.left,
        y: res[1].clientY - rect.top
      };

      this.drawOnCanvas(prevPos, currentPos);
    });
}

  private drawOnCanvas(prevPos: { x: number, y: number }, currentPos: { x: number, y: number }) {
    if (!this.cx) { return; }

    this.cx.beginPath();

    if (prevPos) {
      this.cx.moveTo(prevPos.x, prevPos.y); // from
      this.cx.lineTo(currentPos.x, currentPos.y);
      this.cx.stroke();
    }
  }

}
