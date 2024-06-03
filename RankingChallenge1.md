
# Code Challenge - MinimizeJS - ¿Es una copia válida?

Se trata de un 'code challenge' para obtener un algoritmo que compruebe si un texto es una copia válida de otro texto original, utilizando el mínimo número de caracteres posibles.

El enunciado entero está en la siguiente [url](https://ccsw-csd.github.io/code-challenge_minimizejs/)

## Ranking

A continuación mostramos el ranking general

| #  | Size (chars) |    Author                        |        Date       |
|----|--------------|----------------------------------|-------------------|
| 1  | 127          | Raul Antonio Obagi Yaghmour      |   01/06/24 15:31  |
| 2  | 130          | Jose Antonio Blanco Riera        |   30/05/24 10:27  |
| 3  | 141          | Sergio Eloy Seixas Dominguez     |   23/05/24 15:15  |
| 4  | 142          | Jose Luis Sanchez Fernandez      |   19/05/24 22:26  |
| 5  | 161          | Pablo Mir Gomez                  |   14/05/24 14:37  |
| 6  | 177          | Therry Efrain Miranda Leota      |   14/05/24 09:15  |
| 7  | 190          | Cristo Suarez Garcia             |   10/05/24 13:36  |
| 8  | 202          | Miguel Ignacio Hernandez Sanchez |   10/05/24 13:29  |
| 9  | 229          | Manuel Gonzalo Recuero           |   09/05/24 15:59  |
| 10 | 288          | Ivan Cidudad Espinar             |   07/05/24 17:08  |
| 11 | 303          | Raul Gomez Beteta                |   10/05/24 13:18  |
| 12 | 810          | Pablo Jiménez Martínez           |   06/05/24 14:00  |


## Soluciones descalificadas (en orden de presentación)

En este punto queremos hacer mención especial a las soluciones descalificadas más originales.

### Raúl Antonio Obagi Yaghmour (01/06/24 15:31) - 7 chars

Trampeando el sistema de evaluación del código.

``` javascript

let a=`/*`
executeTest = a =>  1
a=`*/`

```


### Raúl Antonio Obagi Yaghmour (18/05/24 07:48) - 16 chars

Trampeando el sistema de evaluación del código.

``` javascript

executeTest = a =>  1

```

### Jose Luis Sanchez Fernandez (19/05/24 22:26) - 8 chars

Trampeando el sistema de conteo de los carácteres.

``` javascript

let a=`/*`, isValidCopy = (a, b, w=0 ) =>
           [...a].every(x =>
            b[w++] == x.toLowerCase(a = y => `${/[a-z]/i.test(x) && x}#+:. `.indexOf(y)) |
            (~a(x) && a(x) <= a(b[w-1]))
        ) && !b[w]  && !(a == `*/`)

```


### Felipe Garcia Fernandez (15/05/24 18:43) - 59 chars

Trampeando el sistema de evaluación del código.

``` javascript

let isValidCopy = (o, c) => new Error().stack.includes('testTrue')

```


## Soluciones presentadas (en orden de presentación)

En este punto iremos añadiendo las soluciones presentadas, por orden de presentación.

### Raúl Antonio Obagi Yaghmour (01/06/24 15:31) - 127 chars

``` javascript

  let isValidCopy = (a, b, i = 0) =>
    [...a].every(
      x =>
        (a = y =>
          (x + x.toLowerCase() + "#+:. " + x).indexOf(
            y,
            -("@"<x&x<"{") | 2
          ))(x) <= a(b[i++])
    ) && !b[i]

```

### Raúl Antonio Obagi Yaghmour (01/06/24 15:31) - 130 chars

``` javascript

let isValidCopy = (a, b, i = 0) =>
  [...a].every(
    x =>
      (a = y =>
        (x + x.toLowerCase() + "#+:. " + x).indexOf(
          y,
          -/[a-z]/i.test(x) | 2
        ))(x) <= a(b[i++])
  ) && !b[i]

```

### Jose Antonio Blanco Riera (30/05/24 10:27) - 130 chars

``` javascript

let isValidCopy = (o, c) =>

    ![...o+0].some(
        (x,i) =>
            (o = c => (/[a-z#+:.]/i.test(x) ? ' .:+#' + x.toLowerCase() + x : x).indexOf(c) ^ 7)(x) > o(c[i])
        ,c+=0
    )

```

### Jose Antonio Blanco Riera (30/05/24 10:27) - 132 chars

``` javascript

let isValidCopy = (o, c) =>
    ![...o+0].some(
        (x,i) =>                    
            (o = c => ~(/[a-z#+:.]/i.test(x) ? ' .:+#' + x.toLowerCase() + x : x).indexOf(c) | -8)(x) > o(c[i])
        ,c+=0
    )

```

### Jose Antonio Blanco Riera (29/05/24 17:24) - 137 chars

``` javascript

let isValidCopy = (o, c) =>
    [...o+0].every((x,i) =>
        c[i] == x.toLowerCase(o = k => ~`${/[a-z]/i.test(x) && x}#+:. `.indexOf(k))
        || o(x) && o(x) >= o(c[i]), c+=0)

```


### Jose Antonio Blanco Riera (29/05/24 17:00) - 139 chars

``` javascript

let isValidCopy = (o, c) =>
    [...o,'0'].every((x,i) =>
        c[i] == x.toLowerCase(o = k => ~`${/[a-z]/i.test(x) && x}#+:. `.indexOf(k))
        || o(x) && o(x) >= o(c[i]), c+=0)

```



### Jose Antonio Blanco Riera (29/05/24 16:47) - 140 chars

``` javascript

let isValidCopy = (o, c) =>
    [...o,'0'].every((x,i) =>
        c[i] == x.toLowerCase(o = k => ~`${/[a-z]/i.test(x) && x}#+:. `.indexOf(k))
        | (o(x) && o(x) >= o(c[i])), c+=0)

```



### Sergio Eloy Seixas Dominguez (23/05/24 15:15) - 141 chars

``` javascript

let isValidCopy = (a, b, w=0 ) =>
   [...a].every(x =>
        b[w++] == x.toLowerCase(a = y => `${/[a-z]/i.test(x) && x}#+:. `.indexOf(y)) ||
        ~a(x) && a(x) <= a(b[w-1])
    ) && !b[w]

```



### Jose Luis Sanchez Fernandez (19/05/24 22:26) - 142 chars

``` javascript

let isValidCopy = (a, b, w=0 ) =>
    [...a].every(x =>
        b[w++] == x.toLowerCase(a = y => `${/[a-z]/i.test(x) && x}#+:. `.indexOf(y)) |
        (~a(x) && a(x) <= a(b[w-1]))
    ) && !b[w]

```


### Raúl Antonio Obagi Yaghmour (18/05/24 10:43) - 143 chars

``` javascript

let isValidCopy = (a, b,z,i=0) =>
    [...a].every(x =>
        (a = b[i++]) == x.toLowerCase(z = y => 
            ~`${/[a-z]/i.test(x) && x}#+:. `.indexOf(y)
        ) |
        (z(x) && z(x) >= z(a))
    ) && !b[i]

```

### Sergio Eloy Seixas Dominguez (17/05/24 12:47) - 145 chars

``` javascript

let isValidCopy = (a, b) =>

    !b[a.length] &&
        [...a].every((x, i) =>
            (a = b[i]) == x.toLowerCase(i = y => `${/[a-z]/i.test(x) && x}#+:. `.indexOf(y)) ||
            ~i(x) && 
            i(x) <= i(a)
        )

```

### Jose Luis Sanchez Fernandez (17/05/24 12:35) - 143 chars

``` javascript

let isValidCopy = (e,i,t=0,a) => 
	[...e].every(o => 
        (e=i[t++]) == o.toLowerCase(a=e => `${/[a-z]/i.test(o) && o}#+:. `.indexOf(e)) | 
        (~a(o) && a(o) <= a(e))
    ) && 
    !i[t]

```


### Jose Luis Sanchez Fernandez (16/05/24 14:07) - 147 chars

``` javascript

let isValidCopy = (e, i, t=e => "#+:. ".indexOf(e), a=0) => 
    [...e].every(o => 
        o == (e=i[a++]) | 
        (/[a-z]/i.test(o) ? o.toLowerCase() == e | ~t(e) : ~t(o) && t(o) < t(e))
    ) && 
    !i[a]

```


### Raúl Antonio Obagi Yaghmour (16/05/24 11:18) - 146 chars

``` javascript

let isValidCopy = (a, b) =>
    !b[a.length] &&
        [...a].every((x, i) =>
            (a = b[i]) == x.toLowerCase(i = y => `${/[a-z]/i.test(x) && x}#+:. `.indexOf(y)) |
            (~i(x) && i(x) <= i(a))
        )

```


### Jose Antonio Blanco Riera (16/05/24 09:04) - 145 chars

``` javascript

let isValidCopy = (o, c, i = 0, x = k => 
    ~'#+:. '.indexOf(k)) =>
        [...o].every(v =>
            v == (o = c[i++])
                | v.toLowerCase() == o
                || x(o) * /[a-z]/i.test(v)
                | x(v) && x(o) < x(v)
        ) && !c[i]

```

### Sergio Eloy Seixas Dominguez (16/05/24 20:21) - 172 chars

``` javascript

let isValidCopy = (e, t, n, l=0,o,i = (p, s= "#+:. ") => 
	s.indexOf(p)) => {

		for (o of e) {
			n= i(t[l])
			t= ~i(t[l++],[o.toLowerCase(), o]) | i(o) < n & 0 <= i(o) || 0 <= n & /[a-z]/i.test(o)?t:0
		}

		return l == t.length
	}

```


### Jose Luis Sanchez Fernandez (15/05/24 20:21) - 149 chars

``` javascript

let isValidCopy=(e,i,t=e => 
    "|#+:. ".indexOf(e),a,o=0) => 
	    [...e].every(e =>
		    e == (a=i[o++]) | 
		    e.toLowerCase() == a | 
		    0 < t(a) & /[a-z]/i.test(e) |
		    0 < t(e) & t(e) < t(a)) && !i[o]

```

### Jose Luis Sanchez Fernandez (15/05/24 19:29) - 154 chars

``` javascript

let isValidCopy = (o, c, x = f => '|#+:. '.indexOf(f)) => 
    [...o].every((v, i, h, r=c[i] ) =>
        v == r                      |
        v.toLowerCase() == r        |
        0 < x(r) & /[a-z]/i.test(v) |
        0 < x(v) & x(v) < x(r)
    ) && !c[o.length]

```


### Jose Antonio Blanco Riera (15/05/24 17:58) - 147 chars

``` javascript

let isValidCopy = (o, c, i=0) =>   
    [...o].every(v =>
        v == (o = c[i++]) | v.toLowerCase() == o
        | x(o) > 0 & /[a-z]/i.test(v)
        | x(v) > 0 & x(o) > x(v)
    ) && !c[i],
    x = c => '_#+:. '.indexOf(c)

```


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
