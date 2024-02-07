import { IChartItem } from './types';

class Chart {
  dom: HTMLCanvasElement;
  lineWidth: number;

  constructor(dom: HTMLCanvasElement, lineWidth: number) {
    this.dom = dom;
    this.lineWidth = lineWidth;
  }

  get ctx() {
    return this.dom.getContext('2d') as CanvasRenderingContext2D;
  }

  get width() {
    return this.dom.width;
  }

  get x() {
    return Math.round(this.width / 2);
  }

  get y() {
    return Math.round(this.height / 2);
  }

  get height() {
    return this.dom.height;
  }

  get radius() {
    return Math.round((this.width - this.lineWidth) / 2);
  }

  drawStroke(lineWidth: number, color: string, df: number, w: number) {
    this.ctx.beginPath();
    this.ctx.lineWidth = lineWidth;
    this.ctx.strokeStyle = color;
    this.ctx.arc(this.x, this.y, this.radius, df, df + w, false);
    this.ctx.stroke();
  }

  drawCircle(data: IChartItem[]) {
    let df = 0;
    data.forEach((item) => {
      const w = Math.PI * 2 * (item.percent / 100);
      this.drawStroke(this.lineWidth, item.color, df, w);
      df += w;
    });
  }

  render(data: IChartItem[]) {
    this.drawCircle(data);
  }

  toImg() {
    return this.dom.toDataURL('image/png', 2.0);
  }
}

export default Chart;
