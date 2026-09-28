const m=import.meta.glob('./assets/*.jpg',{eager:true,query:'?url',import:'default'});
export const src=k=>!k?'':/^(data:|http)/.test(k)?k:m[`./assets/${k}.jpg`]||k;
