export type ComponentTypes = "div" | "span" | "ul" | "li" | "header";

export default abstract class Component<
  TComponentState = {},
  TComponentProps = {}
> {
  private container: HTMLElement;
  private renderTemplate: string = "";
  private state: TComponentState = {} as TComponentState;
  private props: TComponentProps;
  private parents: HTMLElement | null = null;

  constructor(type: ComponentTypes = "div", props: TComponentProps, parents: HTMLElement | null = null) {
    this.props = props;
    this.parents = parents;
    this.container = document.createElement(type);
  }
  private async lifeCycle() {
    await this.setState();
    //this.state = observalbe<TComponentState>(this.state);
  }
  protected abstract setState(): Promise<TComponentState> | null;
  resume(): void {}
  show(): void {}
  pause(): void {}
  hide(): void {}
  abstract template(): string;
  abstract mounted(): void;
  abstract onKeyEvent(evt: KeyboardEvent): boolean;
  render(...params: string[]): void {
    this.renderTemplate = this.template();
    this.container.innerHTML = this.renderTemplate;
    this.mounted();
  }
}
