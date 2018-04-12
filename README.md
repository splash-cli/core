# core
> Check if the current month is equalt to the given month

## Install
```sh
	$ npm install @splash-cli/core --save

	#or

	$ yarn add @splash-cli/core
```

## Usage
```js
	import splash from '@splash-cli/core';

	splash(url, flags)
```

## Api
### splash(url, flags)
Core of splash-cli.

#### url
Type: `String`
Unsplash api url

#### flags
Type: `Object`
splash-cli flags

### isMonth.promise(month, { today })
Returns a promise for a boolean.
#### month
Type: `String`
Month to check

#### today
Type: `Date`
Default: `new Date()`
Date to check

## License
MIT © [Federico Vitale](https://federicovitale.me)