# Microfrontend Research Notes

Condensed notes from the research that led to the implementations in this repository.

They reflect the scope of the original POC rather than an exhaustive guide to modern microfrontend architecture.

## What is a microfrontend?

A microfrontend splits a larger frontend application into smaller units, each responsible for a specific part of the product.

A unit may own:

- part of a screen
- a complete screen
- a feature
- a group of screens in a flow

## Why split a frontend?

The main benefits considered in the POC were:

- smaller applications are easier to understand and modify
- smaller units are easier to test and debug
- CI/CD pipelines can become more focused
- teams can work with greater independence

The main cost is additional system-level complexity: the boundaries between applications need to be designed and maintained.

---

# Integration stages

The research grouped microfrontend integration into three broad categories.

## Build-time integration

The modules are combined before the final application is built.

Examples:

- packages
- libraries
- source/module dependencies

### Advantages

- relatively simple integration
- normal package versioning
- one final application runtime

### Trade-offs

- consumers must rebuild/redeploy to receive an update
- deployment is not truly independent
- the final application can still become a large monolithic build

## Runtime integration

Applications are built independently and composed in the browser.

This was the primary focus of the POC.

The implementations explored:

1. Iframes
2. Module Federation
3. Web Components

## Server-side integration

Independent applications can also be composed or routed before the browser receives the final experience.

This was considered conceptually but was **not implemented in this POC**.

---

# Runtime approaches

## 1. Iframes

An iframe embeds another HTML document in the current application.

### What made it interesting

- minimal integration setup
- independent application lifecycle
- strong isolation
- broad browser support

### Main concerns

The embedded application lives in a separate browsing context.

For cross-origin integrations, direct DOM access is restricted by the same-origin policy. Communication can be implemented with `window.postMessage()`.

```js
iframe.contentWindow.postMessage(
  { type: 'cart-updated', items: 3 },
  'https://expected-origin.example'
)
```

The receiver should verify `event.origin`.

Another practical issue identified in the POC was layout coordination. The iframe does not automatically size itself to the height of its internal document, which can produce nested scrolling or require host/iframe communication.

---

## 2. Module Federation

Module Federation allows multiple separate builds to form one application by exposing and consuming modules at runtime.

Conceptually:

```text
Remote application
    │
    └── exposes module
             │
             ▼
         remoteEntry
             │
             ▼
       Host application
```

### What made it interesting

- remote code is loaded at runtime
- independent builds and deployment are possible
- modules integrate directly into the host
- dependencies can be shared

### Shared dependencies

The POC experimented with Vue as a shared singleton dependency.

Simplified example:

```js
new ModuleFederationPlugin({
  name: 'remote',
  filename: 'remoteEntry.js',

  exposes: {
    './AppMF': './src/AppMF.vue'
  },

  shared: {
    vue: {
      singleton: true
    }
  }
})
```

Sharing dependencies can reduce duplicated framework code, but it also creates a compatibility contract between independently deployed applications.

This was one of the main trade-offs identified in the experiment.

### Routing and state

Module Federation allows remote modules to participate directly in the host runtime, so shared routing or state is possible.

That flexibility can also increase coupling. The POC treated routing and shared state as architectural boundaries that need to be decided explicitly rather than assumed to be shared.

---

## 3. Web Components

Web Components expose reusable functionality as Custom Elements:

```html
<my-microfrontend></my-microfrontend>
```

### What made it interesting

The consuming application does not need to use the same framework as the component implementation.

A component can expose a browser-native contract through:

- attributes / properties
- Custom Events
- slots
- Shadow DOM
- CSS custom properties

This makes Web Components useful when framework independence is more important than deep framework integration.

### Original Vue implementation

The POC used Vue CLI build targets such as:

```bash
vue-cli-service build --target wc
```

and:

```bash
vue-cli-service build --target wc-async
```

These were useful for experimenting with Vue components distributed as Custom Elements and asynchronously loaded bundles.

### Current Vue note

Those commands belong to the Vue CLI generation used by the original POC.

Vue CLI is now in maintenance mode. Modern Vue supports Custom Elements through `defineCustomElement()` and Vite-based tooling.

The architectural result of the experiment still applies, but the current implementation path is different.

---

# Key takeaway

The central question was not simply whether microfrontends work.

The useful question was:

> What kind of independence do we need, and what integration cost are we willing to accept?

The three runtime approaches explored different answers:

- **Iframe** → prioritize isolation
- **Module Federation** → prioritize deep runtime integration
- **Web Components** → prioritize a framework-neutral contract
