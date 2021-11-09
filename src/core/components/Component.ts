export type ComponentTypes = "div" | "span";

export default abstract class Component<IComponentState = {}, IComponentProps = {}> {
  private container: JQuery;
  private renderTemplate: string;
  private state: IComponentState;

  constructor(
    type: ComponentTypes,
    props: IComponentProps,
    children: Component[]
  ) {
    this.container = $(`<${type}>`);
  }
  resume(): void {}
  show(): void {}
  pause(): void {}
  hide(): void {}
  abstract template(): string;
  abstract mounted(): void;
  abstract onKeyEvent(evt: KeyboardEvent): boolean;
  render(...params: string[]): void {
    this.renderTemplate = this.template();
    this.container.html(this.renderTemplate);
    this.mounted();
  }
}
