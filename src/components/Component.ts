export interface IComponentTypes {

}
export interface IComponentProps {
    className?: string;
}

export default abstract class Component {
    private container: HTMLElement;
    private template: string;
    private top: string;

    constructor(type: IComponentTypes, props: IComponentProps, children: Component[]) {

    }
    resume(): void {}
    show(): void {}
    pause(): void {}
    hide(): void {}
    abstract onKeyEvent(evt: KeyboardEvent): boolean;
    abstract render(...params: string[]): void;

}