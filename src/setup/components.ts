import { App } from "vue";
import Button from '/@/components/Common/buttons/Button.vue';

// import { Button, Card, Col, Form, Layout, Row, Space } from "ant-design-vue";
// import 'ant-design-vue/dist/antd.less'
// TODO: バンドルサイズが爆上がりなので、なんとかして babel-plugin-import のようなことが出来ないか考える(ちなみに Manually import は型定義が無い都合上無理)
// NOTE: vite.config.js/rollupInputOptions.plugins で Rollup Plugin が読めそう、Rollup 用 Babel Plugin はある https://github.com/rollup/plugins/tree/master/packages/babel

export function installComponent<T>(app: App<T>): void {
  // app.use(Button);
  // app.use(Layout);
  // app.use(Card);
  // app.use(Row);
  // app.use(Col);
  // app.use(Form);
  // app.use(Space);

  app.component('w-button', Button);
}