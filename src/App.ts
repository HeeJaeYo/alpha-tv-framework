
interface IAppInit {
    root: "string",
    store: any
}
interface IApp {
    init: IAppInit
}
export default class App {

    constructor(init: IAppInit) {
        console.log(init);
    }
}