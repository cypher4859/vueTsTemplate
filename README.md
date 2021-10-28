# vueTsTemplate
A template for a quick vue typescript project setup that can be used to quickly scaffold out new projects.

## To get a new project up and running after templating

- Install dependencies
- Fix any linting errors
- Ensure you have the right css frameworks available


### Install Dependencies
After creating the new repo based off of this template you'll need to install your dependencies by doing:
```sh
npm install
```

### Fix any linting errors
It was noticed after templating an electron app from this template that you need to go into certain files and make sure any accidental linting errors are caught. In this case it was in the `background.ts` which is electron specific.

### Ensure you have the right css frameworks
An example of this is making sure you have the right vuetify versions or swap this out for another css framework like Bootstrap.

### Fix basic types
Under the following paths there are generic files that will need to be changed.
- `@/types/INewType.ts`: This is optional and unnecessary. Don't need it but it's a good place for purely global types.
- `@/services/**`: Everything here is optional. Don't need it but useful for global non-component-specific global services/interfaces
- `@/plugins/`: By default vuetify is setup here but that can easily be overridden
- `@/mixins/`: By default this is optional. Useful for global non-component-specific mixins

## TODO
- Set the package.json versions to latest
- 
