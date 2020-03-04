// app.js ----------------------------------------------------------------------
const { Component } = owl;
const { xml } = owl.tags;

export class App extends Component {
  static template = xml`<div>Hello Owl</div>`;
}

// main.js ---------------------------------------------------------------------
import { App } from "./app.js";

function setup() {
  const app = new App();
  app.mount(document.body);
}

owl.utils.whenReady(setup);