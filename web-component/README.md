# Web Component

 [**Back to main README**](../README.md)

> Web components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps. Custom components and widgets build on the Web Component standards, will work across modern browsers, and can be used with any JavaScript library or framework that works with HTML.

- Vue Documentation [here](https://cli.vuejs.org/guide/build-targets.html#web-component)
- Web Components research [here](https://docs.google.com/document/d/13uY7yN4JPTlsrj02aKQurg-CdEzesFOHMimxCo-PMWE/edit?usp=sharing)

PROS
- VUE Simple set up (option to compile as Web Component, it is included in VUE).
- Can be used with js vanilla container (without SPA framework) or another SPA in a simple way.
- Can be compiled as asynchronous components. The script of each one is loaded on demand.
- It can be implemented in a html page (without framework) in a simple way.

CONS
- Web Component mode does not support IE11 and below.
- Router not seams to work.


<br>

## Demo 
- Setup:
- Vue 2 Host App
```
cd host-app
yarn install
yarn serve
```

- Vue 3 Host App
```
cd host-vue3-app
yarn install
yarn serve
```

- Serve WC
```
I use the VsCode plugin "LiveServer", to serve the compiled WCs from "./dist" folder on http://127.0.0.1:5500 for the Host Apps
```
- Open: 
  - Host App (Vue 2): http://localhost:8090/ 
  - Host App (Vue 3): http://localhost:8091/
  - HTML page (no framework)): ./demo-wc.html
  
