# Runtime Integration Comparison

This document summarizes the three runtime integration strategies evaluated in the POC.

The goal was not to identify a universally superior technology, but to understand how each approach changes the boundaries between independently developed frontend applications.

## Summary

| | Iframe | Module Federation | Web Components |
| --- | --- | --- | --- |
| Runtime integration | Yes | Yes | Yes |
| Independent build | Yes | Yes | Yes |
| Independent deployment | Strong | Strong | Strong |
| Isolation | Very high | Low / medium | Medium / high |
| Framework independence | High | Depends on exposed contract | High at consumer boundary |
| Shared dependencies | No | Yes | Usually not |
| Host integration | Low | Very high | High |
| Communication | `postMessage` / browser APIs | Imported module APIs / shared state | Properties + Custom Events |
| Styling isolation | Strong | Shared DOM by default | Shadow DOM available |
| Configuration complexity | Low | High | Medium |
| Main trade-off | Isolation vs integration | Integration vs coupling | Portability vs lower-level API |

## 1. Iframe

An iframe embeds a separate HTML document inside the host application.

```text
Host
 └── iframe
      └── Independent application
```

### Advantages

- simplest isolation model
- styles and runtime are naturally separated
- the embedded application can have its own framework and deployment lifecycle
- no shared build configuration is required

### Trade-offs

The browser isolation boundary also limits integration.

For cross-origin applications, communication should use explicit browser messaging such as:

```js
iframe.contentWindow.postMessage(message, targetOrigin)
```

The receiver must validate the sender's origin.

Layout can also require coordination between the host and iframe, particularly when the embedded application's height changes dynamically.

### Best fit

Useful when **strong isolation matters more than seamless application-level integration**.

---

## 2. Module Federation

Webpack Module Federation allows separately compiled applications to expose and consume modules at runtime.

```text
Host build
   │
   └── loads remoteEntry
             │
             ▼
        Remote module
```

### Advantages

- independently built modules can be loaded at runtime
- remote components integrate directly into the host application
- dependencies such as the frontend framework can be shared
- routing and application state can be integrated more naturally than with an iframe

### Trade-offs

The deeper integration introduces coupling.

Shared dependencies need compatible versions and explicit configuration. Sharing framework instances or state can reduce bundle duplication, but it also means independent deployments are no longer completely independent at the runtime-contract level.

The POC therefore treated dependency sharing as both an advantage and an architectural risk.

### Best fit

Useful when **independent builds/deployments are important but the user experience should still behave like one tightly integrated SPA**.

---

## 3. Web Components

Web Components expose functionality through browser-standard Custom Elements.

```html
<product-list></product-list>
```

The host consumes the element rather than importing a framework-specific component.

### Advantages

- framework-neutral consumer API
- usable from a framework application or plain JavaScript
- Custom Elements provide a stable browser-level integration contract
- Shadow DOM can provide DOM/style encapsulation
- scripts can be distributed and loaded independently

### Trade-offs

The API boundary is more explicit than with a native framework component.

Integration normally needs a clear contract for:

```text
Input      → attributes / DOM properties
Output     → Custom Events
Content    → slots
Styling    → CSS custom properties / component styles
```

The original POC also found routing inside a Web Component less straightforward. This should be treated as an **integration design issue from this experiment**, not as a general browser limitation.

### Best fit

Useful when **framework independence is a primary goal and the team is comfortable defining a browser-level component contract**.

---

## Conclusion

The approaches optimize for different things:

```text
More isolation                                        More integration
     │                                                       │
     ▼                                                       ▼
   Iframe              Web Components              Module Federation
```

This is deliberately simplified, but it captures the main result of the POC:

> Increasing independence generally moves complexity toward communication and composition. Increasing integration generally moves complexity toward dependency and runtime coordination.

That trade-off was more important than the choice of any individual tool.
