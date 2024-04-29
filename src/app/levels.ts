import { Level } from "./Level";

let code = '<pre><code>&lt;input label="Name"/><br/>&lt;input label="Email"/><br/>&lt;select label="Location" options="Asturias,Barcelona,Madrid,Murcia,Valencia"/><br/>&lt;radio label="Gender" options="Woman,Man"/><br/>&lt;textarea label="Comments"/><br/>&lt;button type="primary" label="Save"/><br/>&lt;button type="secondary" label="Close"/></code></pre>';

export const LEVELS : Level[] = [{ 
    id: 1,
    description: `<h1>🖨️ ¿Es una copia válida? 🖨️</h1><p>Tenemos un grave problema en nuestra oficina, las fotocopiadoras tienen fallos y las copias que sacamos de ellas, van perdiendo calidad. Además, se trata de un problema incremental, esto quiere decir que cada vez que sacas una copia de una copia, se va acumulando la degradación. Este problema ya apareció hace muchos años con los videos VHS, <a href="https://www.youtube.com/watch?v=G8GOcB6H0uQ" target="_blank" style="text-decoration-color: lightgrey; text-decoration: underline; color:lightgrey;"><span>aquí un documento gráfico que lo atestigua</span></a>.</p>
    <p>Algunas personas se han enterado de este problema y han presentado copias de copias de documentos, que pensamos que no son válidas pero no tenemos una forma sencilla de detectarlo.</p>
    <p>Después de mucho investigar y probar las fotocopiadoras, parece que hemos encontrado el patrón de degradación que se sigue, aunque no siempre ocurre en todas las letras a la vez.</p>
    <p>El objetivo que te proponemos para este reto es doble:
      <ul><li><b>Necesitamos</b> un método en javascript, que reciba dos textos, original y copia, y sea capaz de detectar y devolver si es una copia válida o no.</li>
      <li>Además, necesitamos que el código sea lo <b>más pequeño posible</b> ya que vamos a incrustrarlo en un microchip muy barato. El espacio se mide en letras y no tiene en cuenta espacios ni saltos de línea.</li></ul>
    </p>
    <p>Las reglas de degradación que hemos podido observar son las siguientes:</p>
    <pre><code>Las degradaciones pueden ocurrir o no, son aleatorias.<br/>Las letras A-Z degradan a letras a-z<br/>Las letras a-z degradan a símbolos #<br/>Los símbolos # degradan a símbolos +<br/>Los símbolos + degradan a símbolos :<br/>Los símbolos : degradan a símbolos .<br/>Los símbolos . degradan a  (espacio vacío)<br/>Cualquier otro símbolo nunca se degradan y no sabemos el motivo.<br/>Las mayúsculas que pasan a minúsculas se mantienen: A->a, B->b, etc.</code></pre>
    <br/>
    <div style="display:flex; flex-direction:row; justify-content: space-around; font-size: 12px;">
      <div><div style="text-align:center">Original</div><pre style="border: solid thin white; padding: 5px; border-radius: 5px;"><code>ESTE TEXTO ES CORRECTO.<br/>ESTE TEXTO ES CORRECTO.<br/>ESTE TEXTO ES CORRECTO.<br/>ESTE TEXTO ES CORRECTO.<br/>ESTE TEXTO ES CORRECTO.</code></pre></div>
      <div><div style="text-align:center">...después de 25 copias...</div><pre style="border: solid thin white; padding: 5px; border-radius: 5px;"><code>#s## ##x## ## c:r#e### <br/>##:+ TEXTo +# c+##e+To <br/>Este #E+to es COrre+#o <br/>e##: t#### E: CorrECtO <br/>eST+ t#x#O #s +#R##:t#.</code></pre></div>
      <div><div style="text-align:center">...después de 75 copias.</div><pre style="border: solid thin white; padding: 5px; border-radius: 5px;"><code>::+#  +:.: +. . :++. + <br/>:.:  #:x:+  + .   #  + <br/>## # +..:# +: +++++: # <br/>## :  # .  .  #+.:::+. <br/> st. ::  + +# .:r+     </code></pre></div>
    </div>
    `, 
    templateCode: `   
function isValidCopy(original, copy) {

    // @TODO Implement
    return true;
}`,
    templateTestCode: `
    function testFalse(origen, copia) {
      return isValidCopy(origen, copia) === false;
    }

    function testTrue(origen, copia) {
      return isValidCopy(origen, copia) === true;
    }
    
    `,
    tests: [{
      name: 'Test básico de degradación',
      code: `function executeTest() {
            let orig =
            "THE QUICK BROWN FOX JUMPS OVER A LAZY DOG.\\n"+
            "THE QUICK BROWN FOX JUMPS OVER A LAZY DOG.\\n"+
            "THE QUICK BROWN FOX JUMPS OVER A LAZY DOG.\\n"+
            "THE QUICK BROWN FOX JUMPS OVER A LAZY DOG.\\n"+
            "THE QUICK BROWN FOX JUMPS OVER A LAZY DOG.\\n"+
            "THE QUICK BROWN FOX JUMPS OVER A LAZY DOG.\\n"+
            "THE QUICK BROWN FOX JUMPS OVER A LAZY DOG.\\n"+
            "THE QUICK BROWN FOX JUMPS OVER A LAZY DOG.\\n"+
            "THE QUICK BROWN FOX JUMPS OVER A LAZY DOG.\\n"+
            "THE QUICK BROWN FOX JUMPS OVER A LAZY DOG.\\n"  

            let gen10 =
            "THE QUIcK BRoWN Fo# JUmPs OV#r A LAZY DOG \\n"+
            "THE QUIcK #ROwN FOX JUmpS O#eR + ##ZY DOG.\\n"+
            "THe +uIcK BroWN #Ox jUmPs OVER a LAZ# Dog \\n"+
            "thE qUiCk BR#WN FOX #UMPS OVe# A La#Y dog.\\n"+
            "TH# QUICK brOWn FOX JUMpS OVEr A LaZY dog \\n"+
            "tHe QuICk BR#WN FOX J#M#+ o##r a lAZY DOg \\n"+
            "THe QUiCK bRowN FOX JuMp# OvER A laZY Dog.\\n"+
            "THE QUicK B#OWN FOx JuMPS OVER A LAZy DoG.\\n"+
            "ThE qUIC# bROwN FO# JUMPS OVEr A LAzY dOG \\n"+
            "T#E QuICK bROwN fOX JUmP# oVER A lazy #o#.\\n"

            let gen20 = 
            "tHe qUicK BRoW+ F## #umPs OV#r A lAzY dOG \\n"+
            "THE qu#cK +R#wN fOX jU#ps O#e# + ##zY DOG.\\n"+
            "THe +uic# broW# #Ox jUm#s oVER a LA+# Dog \\n"+
            "t+# qU#Ck bR#WN FO# #uMpS OVe# A ###Y #og.\\n"+
            "tH# Qu#C# bro+: FOX jumpS Over A lazY d## \\n"+
            "#He #uiC+ BR##N fOX J+M#+ #+#r # #aZY DO: \\n"+
            "tHe Qu+CK bRowN fOx #uM## ##eR a lazY D#+ \\n"+
            "tHe QUi+k B#oWN FOx J#mPs O##R A lAz# doG.\\n"+
            "T#E quIC# bRO#n fO# JUMP+ oVer a lA#Y doG \\n"+
            "T#e Q#i#K bR+wN #OX JumP# #Ver A laz# #++.\\n"

            let gen50 =
            "#:e #u:cK #R##: F.: :+mP+ o#++ a #azy #o+ \\n"+
            "T:e :u##k  .#w+ +ox +#+:. +:+# : ++:y d:G \\n"+
            "T+: .+i+: b#++  .ox #U#+# +### # LA.+ #++ \\n"+
            ":+. #u+C+ #r#Wn f++ #uM#s o+e. A :++y :## \\n"+
            "#:. q##+# #++:  +++ #+#p# ov#+ a :a:# ++# \\n"+
            ":h# ++#c. b#++n +oX + :.. #+#+ + #+#y do  \\n"+
            "t#e Q++.k bro## ### +:+#. +:#+ . :### d+: \\n"+
            "#H# q##.# B:#++ F## j++P# o+:# # .#z: #+g.\\n"+
            "t#e :u+c# +:o+n fo+ +umP: ::#r + #++# +og \\n"+
            "T.: q#::+ ++::n +o# jum#+ +V#. # ++## :+  \\n"

            let gen75 =
            ":.+ ++.+K #R+:  f :  +.p  +#:. + #++y ++  \\n"+
            "t.+ .u +    +#+ :++ .+  . + +# . ++.: #.: \\n"+
            "T.. .+#:: ++.+   #x #U+++ +:+. : La + ++: \\n"+
            "  . +:.#: +r#++ #:+ +#m+# #:e. +  .:+ :#+ \\n"+
            ".   q++:# +++   +.: :.+#: :#++ # :a:+ ..+ \\n"+
            ":#+ ::+#  +#+ # ::X + .   #:+. + ::++ d:  \\n"+
            "#.e #+  # ##+:: #++ :.:   .::+ .  :#+ # : \\n"+
            "#H. #.+ : B.:++ F.: j++p# +:.+ +  :z. :.# \\n"+
            "++e  u.:+ :.::+ #o+ .+#p: :.:+   #.:: ::+ \\n"+
            "+   q:. :  :  n :++ ju##  .v#  + :+##  +  \\n"

            let gen99 = 
            "..:  + +K .r+:  f      +  :+.  . +:+# ::  \\n"+
            "# :  #      ::+ .++ ..  . + .+   :: . +   \\n"+
            "#.   .#    . +   :: .U.:: +:+    ## + ::: \\n"+
            "    :. :. :#: : # + +#+.# +.e.      . .#: \\n"+
            "    q::.# +++   +    ...   #++ # :a:    + \\n"+
            "::. :::.  .++ # : X       +... + :.:  d   \\n"+
            "+.+ ::  + +:... ::+ . :     :+ .  :#: : : \\n"+
            ".h  # : : b ::: f . j+.p# ::.:    .z  . # \\n"+
            "..e  u    . ::+ +++ .::#.    :   :  :   : \\n"+
            "    q.. .  :  + .+: ju:#   v#  + .:.+  :  \\n"

        return testTrue(orig, gen10) &&
        testTrue(orig, gen20) &&
        testTrue(orig, gen50) &&
        testTrue(orig, gen75) &&
        testTrue(orig, gen99) &&

        testTrue(gen10, gen20) &&
        testTrue(gen10, gen50) &&
        testTrue(gen10, gen75) &&
        testTrue(gen10, gen99) &&

        testTrue(gen20, gen50) &&
        testTrue(gen20, gen75) &&
        testTrue(gen20, gen99) &&

        testTrue(gen50, gen75) &&
        testTrue(gen50, gen99) &&

        testTrue(gen75, gen99) &&

        testFalse(gen99, gen75) &&
        testFalse(gen99, gen50) &&
        testFalse(gen99, gen20) &&
        testFalse(gen99, gen10) &&
        testFalse(gen99, orig) &&

        testFalse(gen75, gen50) &&
        testFalse(gen75, gen20) &&
        testFalse(gen75, gen10) &&
        testFalse(gen75, orig) &&

        testFalse(gen50, gen20) &&
        testFalse(gen50, gen10) &&
        testFalse(gen50, orig) &&

        testFalse(gen20, gen10) &&
        testFalse(gen20, orig) &&
        
        testFalse(gen10, orig);
      }
      `
    },{
      name: 'Límites',
      code: `
      function executeTest() {
        return testFalse(" ","9") &&
        testFalse("THE QUICK","THE AUIcK") &&
        testFalse("THE QUICK","THE aUIcK");
      }`
    },{
      name: 'Espacios y saltos de línea',
      code: `
      function executeTest() {
        return testTrue("", "") &&
        testTrue(" ", " ") &&
        testTrue("\\n", "\\n") &&
        testFalse("", " ") &&
        testFalse(" ", "  ") &&
        testFalse("\\n", " \\n");
      }`
    },{
      name: 'Tamaño',
      code: `
      function executeTest() {
        return testTrue("A", "A")  &&
        testFalse("A", "A ") &&
        testFalse("AB", "a");
      }`
    },{
      name: 'Iguales',
      code: `
      function executeTest() {
        return testTrue("A", "A") &&
        testTrue("x", "x") &&
        testTrue("#", "#") &&
        testTrue("+", "+") &&
        testTrue(":", ":") &&
        testTrue(".", ".") &&
        testTrue("?", "?") &&
        testTrue("!", "!") &&
        testTrue("123", "123");
      }`
    },{
      name: 'No degradables',
      code: `
      function executeTest() {
        return testTrue("123? ABC!", "123?    !") &&
        testFalse("123? ABC!", "   ? ABC!") &&
        testFalse("123? ABC!", "123  ABC!") &&
        testFalse("123? ABC!", "123? ABC ");
      }`
    },{
      name: 'Degradación ordenada',
      code: `
      function executeTest() {
        return testTrue("A", "A") &&
        testTrue("A", "a") &&
        testTrue("A", "#") &&
        testTrue("A", "+") &&
        testTrue("A", ":") &&
        testTrue("A", ".") &&
        testTrue("A", " ") &&

        testFalse("a", "A") &&
        testTrue("a", "a") &&
        testTrue("a", "#") &&
        testTrue("a", "+") &&
        testTrue("a", ":") &&
        testTrue("a", ".") &&
        testTrue("a", " ") &&

        testFalse("#", "A") &&
        testFalse("#", "a") &&
        testTrue("#", "#") &&
        testTrue("#", "+") &&
        testTrue("#", ":") &&
        testTrue("#", ".") &&
        testTrue("#", " ") &&

        testFalse("+", "A") &&
        testFalse("+", "a") &&
        testFalse("+", "#") &&
        testTrue("+", "+") &&
        testTrue("+", ":") &&
        testTrue("+", ".") &&
        testTrue("+", " ") &&

        testFalse(":", "A") &&
        testFalse(":", "a") &&
        testFalse(":", "#") &&
        testFalse(":", "+") &&
        testTrue(":", ":") &&
        testTrue(":", ".") &&
        testTrue(":", " ") &&

        testFalse(".", "A") &&
        testFalse(".", "a") &&
        testFalse(".", "#") &&
        testFalse(".", "+") &&
        testFalse(".", ":") &&
        testTrue(".", ".") &&
        testTrue(".", " ") &&

        testFalse(" ", "A") &&
        testFalse(" ", "a") &&
        testFalse(" ", "#") &&
        testFalse(" ", "+") &&
        testFalse(" ", ":") &&
        testFalse(" ", ".") &&
        testTrue(" ", " ");
      }`
    }], 
}];


