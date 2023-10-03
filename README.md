# Meowlog Ultility 

Better console.log() with extra feature:
- colored
- expand all objects

 
## Installation

You can install this package using npm:

```bash
npm install @meowapp/meowlog 
```

## Usage
In your Node.js project, you can use the meowLog function as follows:

```javascript
import meowLog from '@meowapp/meowlog';
meowlog({
    exampleObject : {
        willBeLogged : {
            withColor : {
               toTheDeepestLevel : {
                    key: 'value'
               } 
            }
        }
    }
});
```

## License
MIT