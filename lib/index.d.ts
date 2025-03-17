declare module "react-froala-wysiwyg-zen" {
  export interface MyComponentProps {
    tag?: string;
    config?: object;
    model?: string | object | null;
    onModelChange?: object;
    onManualControllerReady?: object;
    skipReset?: boolean | false;
  }

  export default class FroalaEditor extends React.Component<MyComponentProps> {
    destroy(): void;
    getEditor(): any;
    initialize(): object;
  }
}

declare module "react-froala-wysiwyg-zen/FroalaEditorView" {
  export interface MyComponentProps {
    tag?: string;
    config?: object;
    model?: string | object | null;
    onModelChange?: object;
    onManualControllerReady?: object;
    skipReset?: boolean | false;
  }
  export default class FroalaEditorView extends React.Component<MyComponentProps> {}
}

declare module "react-froala-wysiwyg-zen/FroalaEditorImg" {
  export interface MyComponentProps {
    tag?: string;
    config?: object;
    model?: string | object | null;
    onModelChange?: object;
    onManualControllerReady?: object;
    skipReset?: boolean | false;
  }
  export default class FroalaEditorImg extends React.Component<MyComponentProps> {}
}

declare module "react-froala-wysiwyg-zen/FroalaEditorA" {
  export interface MyComponentProps {
    tag?: string;
    config?: object;
    model?: string | object | null;
    onModelChange?: object;
    onManualControllerReady?: object;
    skipReset?: boolean | false;
  }
  export default class FroalaEditorA extends React.Component<MyComponentProps> {}
}
declare module "react-froala-wysiwyg-zen/FroalaEditorButton" {
  export interface MyComponentProps {
    tag?: string;
    config?: object;
    model?: string | object | null;
    onModelChange?: object;
    onManualControllerReady?: object;
    skipReset?: boolean | false;
  }
  export default class FroalaEditorButton extends React.Component<MyComponentProps> {}
}
declare module "react-froala-wysiwyg-zen/FroalaEditorInput" {
  export interface MyComponentProps {
    tag?: string;
    config?: object;
    model?: string | object | null;
    onModelChange?: object;
    onManualControllerReady?: object;
    skipReset?: boolean | false;
  }
  export default class FroalaEditorInput extends React.Component<MyComponentProps> {}
}
