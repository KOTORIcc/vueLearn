import XtxSku from "@/components/XtxSku/index.vue";
import imgView from "@/components/imgView.vue";

export const registerGlobalComponents = (app) => {
  app.component('XtxSku' ,XtxSku)
  app.component('imgView' ,imgView)
}
