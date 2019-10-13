/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AppRoot {}
  interface MenuTabs {}
  interface ScreenAbout {}
  interface ScreenNews {}
  interface ScreenProjects {}
  interface ScreenStories {}
}

declare global {


  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLMenuTabsElement extends Components.MenuTabs, HTMLStencilElement {}
  var HTMLMenuTabsElement: {
    prototype: HTMLMenuTabsElement;
    new (): HTMLMenuTabsElement;
  };

  interface HTMLScreenAboutElement extends Components.ScreenAbout, HTMLStencilElement {}
  var HTMLScreenAboutElement: {
    prototype: HTMLScreenAboutElement;
    new (): HTMLScreenAboutElement;
  };

  interface HTMLScreenNewsElement extends Components.ScreenNews, HTMLStencilElement {}
  var HTMLScreenNewsElement: {
    prototype: HTMLScreenNewsElement;
    new (): HTMLScreenNewsElement;
  };

  interface HTMLScreenProjectsElement extends Components.ScreenProjects, HTMLStencilElement {}
  var HTMLScreenProjectsElement: {
    prototype: HTMLScreenProjectsElement;
    new (): HTMLScreenProjectsElement;
  };

  interface HTMLScreenStoriesElement extends Components.ScreenStories, HTMLStencilElement {}
  var HTMLScreenStoriesElement: {
    prototype: HTMLScreenStoriesElement;
    new (): HTMLScreenStoriesElement;
  };
  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'menu-tabs': HTMLMenuTabsElement;
    'screen-about': HTMLScreenAboutElement;
    'screen-news': HTMLScreenNewsElement;
    'screen-projects': HTMLScreenProjectsElement;
    'screen-stories': HTMLScreenStoriesElement;
  }
}

declare namespace LocalJSX {
  interface AppRoot extends JSXBase.HTMLAttributes<HTMLAppRootElement> {}
  interface MenuTabs extends JSXBase.HTMLAttributes<HTMLMenuTabsElement> {}
  interface ScreenAbout extends JSXBase.HTMLAttributes<HTMLScreenAboutElement> {}
  interface ScreenNews extends JSXBase.HTMLAttributes<HTMLScreenNewsElement> {}
  interface ScreenProjects extends JSXBase.HTMLAttributes<HTMLScreenProjectsElement> {}
  interface ScreenStories extends JSXBase.HTMLAttributes<HTMLScreenStoriesElement> {}

  interface IntrinsicElements {
    'app-root': AppRoot;
    'menu-tabs': MenuTabs;
    'screen-about': ScreenAbout;
    'screen-news': ScreenNews;
    'screen-projects': ScreenProjects;
    'screen-stories': ScreenStories;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


