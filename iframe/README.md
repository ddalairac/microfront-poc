# Iframe

 [**Back to main README**](../README.md)

> Iframes are the HTML documents that can be embedded inside another HTML document. In essence, an iframe is another browser window set inside your web page.
You can place whatever source you want in the iframe tag and it is rendered based on the width and height of the frame in the parent document.


PRO
- Simplest implementation of all
- Support in all browsers
- The app does not need to be previously declared, the application loads when the iframe is rendered

CONS
- Content does not define height, so it will have its own scroll. Usually not a desired behavior ( workaround: communicate the size to the parent, not ideal)
- Communication with the container is limited to postmessage events

<br>


## Demo
- Setup:
```
cd mf-router-and-store
yarn install
yarn serve
```

- Open: ./demo-iframe.html
