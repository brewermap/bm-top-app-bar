
import {LitElement, html} from '@polymer/lit-element';
import {MDCTopAppBar} from '@material/top-app-bar/index';
import {Icon} from "@material/mwc-icon";
import {style} from './bm-top-app-bar-css.js'

export class BMTopAppBar extends LitElement {

  static get is(){
    return 'bm-top-app-bar';
  }

  static get properties() { 
    return { 
      title: {
        type: String
      },
      menu: {
        type: Boolean
      }
    }
  }

  constructor(){
    super();
    this.title = '';
    this.menu = false;
  }

  firstUpdated(changedProperties) {
    const topAppBar = new MDCTopAppBar(this.shadowRoot.querySelector('.mdc-top-app-bar'));
  }

  createRenderRoot() {
    return this.attachShadow({mode: 'open', delegatesFocus: true});
  }

  _renderStyles(){
    return style;
  }

  render() {
    const {title, menu} = this;
    //TODO: Make the 'end section' works
    return html`
      ${this._renderStyles()}
      <header class="mdc-top-app-bar">
        <div class="mdc-top-app-bar__row">
          <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            ${menu ? this._renderMenu() : ''}
            <span class="mdc-top-app-bar__title">${title}</span>
          </section>
          
        </div>
      </header>
    `;
  }

  _renderMenu(){
    return html`<a href="#" class="mdc-top-app-bar__navigation-icon"><mwc-icon>menu</mwc-icon></a>`;
  }

  _renderEndSection(){
    return html`
      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
        <slot></slot>
      </section>`;
  }

}

window.customElements.define(BMTopAppBar.is, BMTopAppBar);
