export type ComponentTypes = 'div' | 'span' | 'ul' | 'li' | 'header';
interface IComponent {
  template(): string;
  mounted(): void;
}
export default class Component<TComponentState = {}, TComponentProps extends { className?: string } = {}> {
  private container: HTMLElement;
  private renderTemplate: string = '';
  private state: TComponentState = {} as TComponentState;
  private props: TComponentProps;
  private parents: HTMLElement | null = null;
  components: Component[] = [];

  constructor(type: ComponentTypes = 'div', props: TComponentProps, parents: HTMLElement | null = null) {
    this.props = props;
    this.parents = parents;
    this.container = document.createElement(type);
    const { className } = this.props;
    if (className) {
      this.container.classList.add(`component`, className);
    }
    if (this.parents) {

    }
    this.lifeCycle();
  }
  private async lifeCycle() {
    await this.setState();
    //this.state = observalbe<TComponentState>(this.state);
  }
  protected setState(): Promise<TComponentState> | null {
    return null;
  }
  resume(): void {}
  show(): void {
    this.container.classList.add('show');
  }
  pause(): void {}
  hide(): void {
    this.container.classList.remove('show');
  }
  init(): void {}
  template(): string {
    return ``;
  }
  mounted(): void {}
  onKeyEvent(evt: KeyboardEvent): boolean {
    return true;
  }
  render(): void {
    this.renderTemplate = this.template();
    this.container.innerHTML = this.renderTemplate;
    this.mounted();
  }
  update(): void {}
  setChildComponent(childComponents: Component[]) : void {
    childComponents.forEach(component => {
      this.components.push(component);
      this.container.appendChild(component.container);
    });
  }
}
