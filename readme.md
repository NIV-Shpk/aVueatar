
# aVuetar

Vue 3 implementation of [Avvvatars](https://avvvatars.com).
Demo [here](https://niv-shpk.github.io/avuetar-demo/)
## Installation

Using NPM or Yarn.
```bash
  npm i @nival/avuetar
  yarn add @nival/avuetar
```

## Usage

Register the component globally.
```javascript
import aVuetar from '@nival/avuetar'

ceateApp(App).use(aVuetar)
```

The you can use it in your template
```javascript
<Avuetar value="42" />
```

Props:

```javascript
value: string
displayValue?: string 
size?: number
shadow?: boolean
style?: 'character | shape'
border?: boolean
borderSize?: number
borderColor?: string
radius?: number
```
**value:** The value you wish to initialize the seeder.

**displayValue:** Optional parameter which lets you define a different display value different from value. It makes sense only when using style="character".

**size:** The number of pixels you wish your avatar to have.

**shadow:** Applies box-shadow if it is set to true.

**style:** Use 'shape' to use one of the shapes, character or empty if you want to display two letters.

**border:** Applies a border if it is set to true.

**borderSize:** Size in pixels of the border

**borderColor:** Hex color code of the border.

**radius:** Size in pixel of the border radius.

