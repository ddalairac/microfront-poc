# Module Federation

 [**Back to main README**](../README.md)

> Aims to solve the sharing of modules in a distributed system, by shipping those critical shared pieces as macro or as micro as you would like. It does this by pulling them out of the build pipeline and out of your apps.

- Webpack Documentation [here](https://webpack.js.org/concepts/module-federation/)
- Implementation notes [here](https://docs.google.com/document/d/1-i24DLTuEUFkmN1ZK6MjIxQ4wx4ZW_2geA9NpOyXlBQ/edit?usp=sharing)


PROS
- Possibility of sharing dependencies (Decrease the total size of the application).
- Different modules can use routing navigation

CONS
- Complex implementation (default vue compilation needs to be modified)
- Sharing dependencies: creates a high level of coupling. This can bring inconveniences in version changes, since the module deploys are independent.
- Routing navigation: relies on host application to control routes, highly coupled
- Does not offer default encapsulation. Different modules can overwrite code or dependencies on each other.

<br>

## Demo 
- Setup:
```
cd mf-modfed
yarn install
yarn start
```

```
cd host-modfed
yarn install
yarn start
```

- Open: 
  - Host App:  http://localhost:8076/ 
  - Microfront App:  http://localhost:8075/