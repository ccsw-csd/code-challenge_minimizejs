
# Code Challenge - MinimizeJS - ¿Es una copia válida?

Se trata de un 'code challenge' para obtener un algoritmo que compruebe si un texto es una copia válida de otro texto original, utilizando el mínimo número de caracteres posibles.

El enunciado entero está en la siguiente [url](https://ccsw-csd.github.io/code-challenge_minimizejs/)

## Ranking

A continuación mostramos el ranking general

| #  | Size (chars) |    Author                        |        Date       |
|----|--------------|----------------------------------|-------------------|
| 1  | 152          | Raul Antonio Obagi Yaghmour      |   13/05/24 07:39  |
| 2  | 161          | Pablo Mir Gomez                  |   14/05/24 14:37  |
| 3  | 177          | Therry Efrain Miranda Leota      |   14/05/24 09:15  |
| 4  | 180          | Sergio Eloy Seixas Dominguez     |   14/05/24 11:12  |
| 5  | 183          | Jose Luis Sanchez Fernandez      |   13/05/24 09:41  |
| 6  | 190          | Cristo Suarez Garcia             |   10/05/24 13:36  |
| 7  | 202          | Miguel Ignacio Hernandez Sanchez |   10/05/24 13:29  |
| 8  | 229          | Manuel Gonzalo Recuero           |   09/05/24 15:59  |
| 9  | 288          | Ivan Cidudad Espinar             |   07/05/24 17:08  |
| 10 | 303          | Raul Gomez Beteta                |   10/05/24 13:18  |
| 11 | 810          | Pablo Jiménez Martínez           |   06/05/24 14:00  |



## Soluciones presentadas (en orden de presentación)

En este punto iremos añadiendo las soluciones presentadas, por orden de presentación.

### Pablo Mir Gomez (14/05/24 14:37) - 161 chars

``` javascript

let isValidCopy = (o, c) =>
    !c[o.length] &&
    [...o].every((v, i) =>
        v == c[i] | v.toLowerCase() == c[i]
        | x(c[i]) > -1 & /[a-z]/i.test(v)
        | x(v) > -1 & x(c[i]) >= x(v)
    ),
    x = (c) => '#+:. '.indexOf(c)

``` 


### Sergio Eloy Seixas Dominguez (14/05/24 11:12) - 180 chars

``` javascript

let isValidCopy = (e,n,f, t=0,i="#+:. ")=> {
	for(f of e){
		let l=n[t++],
			o=i.indexOf(f),
			a=i.indexOf(l)

		n=~[f.toLowerCase(),f].indexOf(l) || o < a && 0 <= o || 0 <= a && /[a-z]/i.test(f)?n:0

	}

	return t==n.length
}

```


### Therry Efrain Miranda Leota (14/05/24 09:15) - 177 chars

``` javascript

let isValidCopy = (e, t) => {
	let n,
		l = 0,
		i = (p, s= "#+:. ") => s.indexOf(p)

	for (let o of e) {
		n = i(t[l])
		t = ~i(t[l++],[o.toLowerCase(), o]) | i(o) < n & 0 <= i(o) || 0 <= n && o.match(/[a-z]/i) ? t : 0
	}

	return l == t.length
}

```

### Therry Efrain Miranda Leota (14/05/24 02:22) - 179 chars

``` javascript

let isValidCopy = (e, t) => {

	let n,
		l = 0,
		i = (p, s="#+:. ") => s.indexOf(p)

	for (let o of e) {
		n = i(t[l])
		t = ~i(t[l++],[o.toLowerCase(), o]) || i(o) < n && 0 <= i(o) || 0 <= n && o.match(/[a-z]/i) ? t : 0
	}

	return l == t.length
}

```


### Sergio Eloy Seixas Dominguez (13/05/24 11:58) - 199 chars

``` javascript

function isValidCopy(e,n){
	for(var t=0;t<e.length;){
		let i="#+:. ",
			f=e[t],
			l=n[t++],
			o=i.indexOf(f),
			a=i.indexOf(l)
			
		n=~[f.toLowerCase(),f].indexOf(l) || o < a && 0 <= o || 0 <= a && f.match(/[a-z]/i)?n:""
	}
	return t==n.length
}

```

### Jose Luis Sanchez Fernandez (13/05/24 09:41) - 183 chars

``` javascript

let isValidCopy = (e, t) => {

    let l = 0,
        i = e => "#+:. ".indexOf(e)

    for (let o of e) {
       let n = i(t[l])
       t = ~[o.toLowerCase(), o].indexOf(t[l++]) || (i(o) < n && 0 <= i(o)) || (0 <= n && /[a-z]/i.test(o)) ? t : 0
    }

    return l == t.length
}

```

### Raul Antonio Obagi Yaghmour (13/05/24 07:39) - 152 chars

``` javascript

let isValidCopy = (a, b, d = y => `#+:. `.indexOf(y)) =>
	!b[a.length] &&
		[...a].every((x, i) => x == (a = b[i]) |
			(/[a-z]/i.test(x) ? x.toLowerCase() == a | ~d(a) : ~d(x) && d(x) < d(a))
		)

```


### Miguel Ignacio Hernandez Sanchez (10/05/24 13:45) - 202 chars

``` javascript

function isValidCopy(e,n){
	let t=0,
        i="#+:. ";
 
	for(;t<e.length;){
		let f=e[t],
			l=n[t++],
			o=i.indexOf(f),
			a=i.indexOf(l);
 
		n=~[f.toLowerCase(),f].indexOf(l) || o <= a && 0 <= o || 0 <= a && f.match(/[a-z]/i)?n:""
	}
 
	return t==n.length
}

```

### Cristo Suarez Garcia (10/05/24 13:36) - 190 chars

``` javascript

function isValidCopy(e,n){
	let t=0,
		i="#+:. ",
		f;

	for(f of e){
		let	l=n[t++],
			o=i.indexOf(f),
			a=i.indexOf(l);
	
		n=~[f.toLowerCase(),f].indexOf(l) || o <= a && 0 <= o || 0 <= a && f.match(/[a-z]/i)?n:""
	}

	return t===n.length
}

``` 


### Sergio Eloy Seixas Dominguez (10/05/24 13:29) - 200 chars

``` javascript

function isValidCopy(e,n){
	for(var t=0;t<e.length;){
		let i="#+:. ",
			f=e[t],
			l=n[t++],
			o=i.indexOf(f),
			a=i.indexOf(l)
			
		n=~[f.toLowerCase(),f].indexOf(l) || o <= a && 0 <= o || 0 <= a && f.match(/[a-z]/i)?n:""
	}
	return t==n.length
}

```

### Raul Gomez Beteta (10/05/24 13:18) - 303 chars

``` javascript

function isValidCopy(o, c) {
    if (o.length !== c.length) {
      return false;
    }
   
    for (let i = 0; i < o.length; i++) {
      if(!f(o[i], c[i]))
        return false;     
    }
    return true;
  }

  function f(o, c){   
    return o == c ? true :
        o.match("[A-Z]") ? f(o.toLowerCase(), c) :
        o.match("[a-z]") ? f("#", c) :
        (o == "#") ? f("+", c) :
        (o == "+") ? f(":", c) :
        (o == ":") ? f(".", c) :
        (o == ".") ? f(" ", c) : false
  }  

```

### Jose Luis Sanchez Fernandez (10/05/24 13:03) - 195 chars

``` javascript

function isValidCopy(e, n) {

    let t = 0,
        i = "#+:. "

    for (let f of e) {

        let l = i.indexOf(f),
            o = i.indexOf(n[t])

        n = (!(~[f.toLowerCase(), f].indexOf(n[t++]) || (l <= o && 0 <= l ) || (0 <= o && f.match(/[a-z]/i)))) ? 0 : n
    }

    return t == n.length
}

```

### Manuel Gonzalo Recuero (09/05/24 15:59) - 229 chars

``` javascript

let isValidCopy = (o, c) => {

  let z, i = 0

  if (o.length != c.length) return !!z

  while (i < o.length) {
    if (!k(o[i], c[i++])) return !!z
  }

  return !z
}

 

let k = (a, b) =>
  a == b ||
  a.toLowerCase() == b ||
  /[a-z]/i.test(a) && i(b) > -1 ||
  i(a) > -1 && i(a) <= i(b)


let i = (l) => '#+:. '.indexOf(l)

```


### Manuel Gonzalo Recuero (09/05/24 15:45) - 258 chars

``` javascript

function isValidCopy(o, c) {
  let z, i = 0;
  if (o.length != c.length) return !!z;
  while (i < o.length) {
    if (!k(o[i], c[i++])) return !!z;
  };
  return !z;
}

function k(a, b) {
  return a == b ||
    a.toLowerCase() == b ||
    /[a-z]/i.test(a) && i(b) > -1 ||
    i(a) > -1 && i(a) <= i(b);
}

function i(l) {
  return '#+:. '.indexOf(l);
}

```

### Manuel Gonzalo Recuero (09/05/24 12:00) - 280 chars

``` javascript

function isValidCopy(o, c) {
    var a;
    if (o.length != c.length) return !!a;
    for (let i = 0; i < o.length; i++) {
      if (!k(o[i], c[i])) return !!a;
    }
    return !a;
}

function k(a, b) { 
  return a == b ||
    (a.toLowerCase() == b) ||
    (/[a-z]/i.test(a) && i(b) > -1) ||
    (i(a) > -1 && i(a) <= i(b));
}

function i(l) {
  return ['#', '+', ':', '.', ' '].indexOf(l);
}

```



### Manuel Gonzalo Recuero (08/05/24 17:20) - 285 chars

``` javascript

function isValidCopy(o, c) {
    if (o.length != c.length) return false;
    for (let i = 0; i < o.length; i++) {
      if (!k(o.charCodeAt(i), c.charCodeAt(i))) return false;
    }
    return true;
}

function k(a, b) { 
  return (a == b ||
    (a > 64 && a < 91 || a == 209) && (a + 32 == b || m(b, -1)) ||
    (a > 96 && a < 123 || a == 241) && (m(b, -1)) ||
    (a == 35 && m(b, 0)) ||
    (a == 43 && m(b, 1)) ||
    (a == 58 && m(b, 2)) ||
    (a == 46 && b == 32)) ? true : false;
}

function m(b, i) {
    return [35, 43, 58, 46, 32].indexOf(b) > i;
}

```


### Jose Luis Sanchez Fernandez (08/05/24 10:08) - 203 chars

``` javascript

function isValidCopy(e,n){
	let t=0,
		i="#+:. ";
		
	for(;t<e.length;){
		let f=e[t],
			l=n[t++],
			o=i.indexOf(f),
			a=i.indexOf(l);
			
		n=~[f.toLowerCase(),f].indexOf(l) || o <= a && 0 <= o || 0 <= a && f.match(/[a-z]/i)?n:""
	}
	
	return t===n.length
}

```


### Ivan Cidudad Espinar (07/05/24 16:42) - 288 chars

``` javascript

function isValidCopy(x, y) {

  let l = ['a-zA-Z',...'#+:. ']

  let a = l.map(k =>  new RegExp(`[${l[0] += k}]`))

 

  return x.length == y.length && !x.split('').some((o, i) => {

    let c = y[i]

    let j = l.findIndex(p => p == o)+1

 

    return a[5].test(o) && a[5].test(c) 

      ? j

        ?  a[j-2].test(c) 

        : a[0].test(c) && a[0].test(o) && o != c && o.toLowerCase() != c 

      : c != o 

  })

}

```

### Ivan Cidudad Espinar (07/05/24 16:42) - 333 chars

``` javascript

function isValidCopy(x, y) {

  let l = ['a-zA-Z',...'#+:. ']

  let a = l.map(k =>  new RegExp(`[${l[0] += k}]`))

 

  return x.length == y.length && !x.split('').some((o, i) => {

    let c = y[i]

 

    if (a[5].test(o) && a[5].test(c)) {

      let j = l.findIndex(p => p == o)

      if (j == -1) {

        if (a[0].test(c) && a[0].test(o) && o != c && o.toLowerCase() != c) return 1

      } else if (a[j-1].test(c)) return 1

    } else if (c != o) return 1

  })

}

```

### Ivan Cidudad Espinar (07/05/24 11:19) - 348 chars

``` javascript

function isValidCopy(x, y) {

 

  let s = 'a-zA-Z'

  let l = ['',...'#+:. ']

  let a = l.map(k =>  new RegExp(`^[${s += k}]$`))

 

  return x.length == y.length && !x.split('').some((o, i) => {

    let c = y[i]

 

    if (a[5].test(o) && a[5].test(c)) {

      let j = l.findIndex(p => p == o)

      if (j == -1) {

        if (a[0].test(c) && a[0].test(o) && o != c && o.toLowerCase() != c) return true

      } else if (a[j-1].test(c)) return true

    } else if (c != o) return true

  })

}

```

### Jose Luis Sanchez Fernandez (06/05/24 19:28) - 217 chars

``` javascript

function isValidCopy(e,n){
	let t=0,
		i="#+:. ";
	
	for(;t<e.length;){
		let f=e[t],
			r=n[t++],
			l=i.indexOf(f),
			o=i.indexOf(r);
		
		if(!(~[f.toLowerCase(),f].indexOf(r) || l<=o && 0<=l && 0<=o || 0 <=o && f.match(/[a-z]/i)))
			return !1
	}
	
	return t===n.length
}

``` 


### Pablo Jimenez Martinez (06/05/24 14:00) - 810 chars

``` javascript

function isValidCopy(orig, copy) {

    if (orig.length != copy.length) return false;
  
    for (let i = 0; i < orig.length; i++) {

      let degradeOrig = orig[i];
      
        if (degradeOrig !== copy[i]) {
          
          while(degradeOrig !== copy[i]) {
            
            degradeOrig = generateDegradation(degradeOrig); 
            
            if (!degradeOrig) return false;            
          }
        }
    }

    // Si todos los caracteres en orig coinciden con los de copy según las reglas de degradación, orig es un posible ancestro
    return true;
}

function generateDegradation(origChar) {
    // Definimos las reglas de degradación
    const degradationRules = {
        'A': 'a',
        'B': 'b',
        'C': 'c',
        'D': 'd',
        'E': 'e',
        'F': 'f',
        'G': 'g',
        'H': 'h',
        'I': 'i',
        'J': 'j',
        'K': 'k',
        'L': 'l',
        'M': 'm',
        'N': 'n',
        'O': 'o',
        'P': 'p',
        'Q': 'q',
        'R': 'r',
        'S': 's',
        'T': 't',
        'U': 'u',
        'V': 'v',
        'W': 'w',
        'X': 'x',
        'Y': 'y',
        'Z': 'z',
        'a': '#',
        'b': '#',
        'c': '#',
        'd': '#',
        'e': '#',
        'f': '#',
        'g': '#',
        'h': '#',
        'i': '#',
        'j': '#',
        'k': '#',
        'l': '#',
        'm': '#',
        'n': '#',
        'o': '#',
        'p': '#',
        'q': '#',
        'r': '#',
        's': '#',
        't': '#',
        'u': '#',
        'v': '#',
        'w': '#',
        'x': '#',
        'y': '#',
        'z': '#',
        '#': '+',
        '+': ':',
        ':': '.',
        '.': ' '
    };

    // Comprobamos si la degradación de origChar a copyChar está permitida según las reglas
    return degradationRules[origChar];
}
```
