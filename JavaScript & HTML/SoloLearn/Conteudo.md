## Estudos JavaScript

Variáveis em JavaScript:
    var x = "BOA TARDE";
    document.write(x);
            
Mensagem de Alerta: 
    alert("This is an alert box!");
    USED TO CREATE MESSAGE BOX!

BACKLASH (\) -> TRANSFORMS SPECIAL CHARACTERS INTO NORMAL ONES
            
INCREMENTAR: ++ 
DECREMENTAR: --
            
            
Comparar valores: 
    VAR NUM = 10
    Console.log(num == 8);
    
    # === <- Idêntico (Igual e do mesmo tipo)

    !== Não Idêntico
            
Ternário ECMASCRIPT:
            
    var age = 16;
    var isAdult = (age < 18) ? "Too young": "Old enough";
    document.write(isAdult);
            
Concatenação de Strings:
    var mystring1 = "Estou aprendendo ";
    var mystring2 = "JavaScript com SoloLearn";
    document.write(mystring1 + mystring2);

JavaScript: Linguagem Case Sensitive (varAux != varaux) 

Estrutura Condicional:
        if(){

        }
        else if(){

        }
        else(condition){

        }
 
Estrutura de Decisão (Switch):
 
    switch (expression) {
        case n1: 
            afirmaçãos
            break;
        case n2: 
            afirmaçãos
            break;
        default: 
            afirmaçãos
    }

    Exemplo Switch: 
        var lalala = 2;
        switch (lalala){
            case 1:
                document.write("ERRO");
                break;
            case 2: 
                document.write("ACERTO");
                break;
        }
    
Estrutura de Repetição:
    FOR, WHILE e DO WHILE

    for (afirmação 1; afirmação 2; afirmação 3) {
        BLOCO A SER EXECUTADO
    }
    
    Exemplo FOR:
        
    for(i=0;i<=5;i++){
        document.write(i, "<h1>Boa tarde</h1>")
    }
            
    while(condicao){

    } 
    
    Exemplo WHILE:
    i=0;        
    while(i<10){
        document.write("<h1>BOA TARDE A TODOS NÓS</h1>")
        i++;
    }

    do {
        code block
    }while (condition);
            
    Exemplo do...while
        var i = 0; 
        do{
            document.write("<h1>Estudando JS</h1>");
            i++;
        }while(i <= 2)

Break (Sai de todo loop) vs continue (Pula apenas uma iteração):
    for(i=0;i<5;i++){
        if (i == 2){
            break;
        }
        document.write("<h1>Estudando</h1>");
    }

    for(i=0;i<5;i++){
        if (i == 2){
            continue;
        }
        document.write("<h1>Estudando</h1>");
    }
        
Função em JavaScript:

    Bloco de código designado para performar uma tarefa em particular.
    Vantagem:
        - Re-uso de código;
        - Resultados diferentes com argumentos (parâmetros) diferentes.
        
        function funcao(Nome){
            alert("Olá " + Nome);
        }
        funcao("Boa tarde! ");

Alert, prompt and confirm.

        Prompt box: Usuário digita um valor antes de entrar em uma página.
        Se o usuário clicar em OK, a caixa retornará o valor do input. Se o usuário clicar em cancelar, a caixa retorna nulo.

        O método prompt() recebe dois parâmetros (Label para dispor na Text Box + String default).

        Exemplo Prompt:
        var nome = prompt("Digite seu nome: ");
        alert("Seu nome é: " + nome);

        A confirm box é usada para verificar ou aceitar algo. O usuário deve clicar em OK (retorna TRUE) ou cancelar para proceder (retorna FALSE).

        Exemplo Confirm:
        var confirmacao = confirm("Tem certeza que deseja continuar?")
        if(confirmacao == true){
            alert("Conseguiu!");
        }
        else{
            alert("Não conseguiu :(");
        }

Objetos - Exemplos
    var course = {name: "SI", periods: 41};
    alert("Curso: " + course.name + "\nPeríodos: " + course.periods);
    
    Object Methods

        Um object method é uma propriedade que contém uma definição de função.
        objectName.methodName()

    Construtor para objeto - Exemplo código
        function person(name, age, color) {
        this.name = name;
        this.age = age;
        this.favColor = color;
            }
            var ola = new person("Thálice", 40, "Amarelo");
            document.write(ola.name + "<br/>");
            document.write(ola.age + "<br/>");
            document.write(ola.favColor);  
            function mudanca(nome, idade){
                this.nome = nome,
                this.idade = idade
                this.changename = function (nome){
                    this.nome = nome;
                }
            }
            var p = new mudanca("Thálice", 10);
            document.write(p.nome);
            p.changename("John");
            document.write(p.nome);
                
    Construtor para objeto - Exemplo código 
        function person(name, age) {
            this.name = name;
            this.age = age;
            this.yearOfBirth = bornYear;
        }
        function bornYear() {
            return 2022 - this.age;
        }
        var people = new person("Thálice Lopes", 19);
        document.write(people.name  + "<br/>");
        document.write(people.age + "<br/>");
        document.write(people.yearOfBirth() + "<br/>");

Declarando Arrays (Vetores)
    var course = new Array();
    var courses = ["HTML", "CSS", "JS"];

    Concatenando vetores:

        var c1 = ["HTML", "CSS"];
        var c2 = ["Js", "C#"];
        var courses = c1.concat(c2);
        var person = [];
        person["Age"] = 19;
        person["Nome"] = "Thálice";
        document.write(person["Nome"]);
        document.write(Math.PI);
        var number = Math.sqrt(144);
            document.write(number);
        
Setar tempo para função: 
    function meuAlerta(){
        document.write("Olá!\n");
    }
    setInterval(meuAlerta, 3000);

    Exemplo - Função para mostrar a hora:
        function TempoMostrar(){
            var d = new Date();
            var hora = d.getHours();
            var minuto = d.getMinutes();
            var segundos = d.getSeconds();
            document.write(hora + ":" + minuto + ":" + segundos + "<br/>");
        }
        setInterval(TempoMostrar, 3000);
Datas:
    new Date(milliseconds)
    new Date(dateString)
    new Date(year, month, day, hours, minutes, seconds, milliseconds)
    var d = new Date();
    document.write(d + "<br/>");
    var e = d.getHours();
    document.write(e);

            
DOM (Document Object Model) - Um modelo orientado a objetos da estrutura lógica do documento. 

    document <- Objeto pré definido no JS, raiz de todos os objetos.

        innerHTML <- Propriedade do Objeto
        var elem = document.getElementById("demo");
        elem.innerHTML = "Hello World!";

        var arr = document.getElementsByTagName("p");
        for (var x = 0; x < arr.length; x++) {
            arr[x].innerHTML = "Hi there";
        }

        - Encontra o elemento pelo ID
        document.getElementById(id)

        - Encontra o elemento pelo nome da classe:
        document.getElementsByClassName(name)

        - Encontra o elemento pelo nome da tag:
        document.getElementsByTagName(name)


        Trabalhando com Document Object Model

        elemento.childNodes retorna uma lista dos filhos de um elemento;
        elemento.firstChild retorna o primeiro filho de um elemento;
        elemento.lastChild retorna o último filho de um elemento;
        elemento.hasChildNodes retorna true se um elemento possui filhos no documento;
        elemento.nextSibling returns the next node at the same tree level.
        elemento.previousSibling returns the previous node at the same tree level.
        elemento.parentNode returns the parent node of an element.

        Exemplo em uso:
            <div id="demo">
            <p>Textinho</p>
            <p>Outro textinho</p>
            </div>
            <button type="button" onclick="Mudanca()">Clica aqui
            </button>
            <script>
                function Mudanca(){
                    var a = document.getElementById("demo");
                    var arr = a.childNodes;
                    for(i=0;i<arr.length;i++){
                        arr[i].innerHTML = "OutroTexto";
                    }
                }
            </script>

Mudar estilo da página através do JavaScript
    <!-- <div id="proibido" style="width: 200px;">
        <p>Hi</p>
    </div>
    <script>
        var p = document.getElementById("proibido");
        p.style.color = "6600FF";
        p.style.width = "10px";
    </script> -->
        
Propriedades CSS NÃO PODEM SER REPRESENTADAS COM TRAÇO. Background-Color vira BackgroundColor.

Criar novos nodes - filhos
        
    element.cloneNode() clones an element and returns the resulting node.
    document.createElement(element) creates a new element node.
    document.createTextNode(text) creates a new text node.

Append Child
    <!-- <div id="Teste">
    </div>
    <script>
        var p = document.createElement("p");
        var node = document.createTextNode("Olá");
        p.appendChild(node);      
        var div = document.getElementById("Teste");
        div.appendChild(p);
    </script> -->


Remove child node - Example
    <!-- <div id="demo">
        <p id="lala">blablabla</p>
    </div>
    <script>
        var parent = document.getElementById("demo");
        var child = document.getElementById("lala");
        parent.removeChild(child);
        Alternative way - parent node
        the parentNode property to get the parent of the element we want to remove:
        var child = document.getElementById("p1");
        child.parentNode.removeChild(child);
    </script> -->

Replacing Elements - Replace Child. Exemplo: 
    <!-- <div id="demo">
        <p id="lala">blablabla</p>
    </div>
    <script>
        var parent = document.getElementById("demo");
        var child = document.getElementById("lala");
        var p = document.createElement("p");
        var node = document.createTextNode("TEXTO MODIFICADO. ");
        p.appendChild(node);
        parent.replaceChild(p, child);
    </script> -->

Creating Animations: 

    <style>
        #div{
            width: 100px;
            height: 100px;
            background-color: blue;
            position: relative;
        }
        #childdiv{
            width: 20px;
            height: 20px;
            background-color:red;
            position: absolute;
        }
    </style>
    <div id="div">
        <div id="childdiv"></div>
    </div>
    <script>
        var t = setInterval(move, 500);
        var pos = 0;
        var box = document.getElementById("div");

        function move(){
            pos += 1;
            box.style.left = pos + "px";
        }

Parar intervalo de função -> clearInterval - Primeira Animação Js!

    <style>
        #div{
            width: 100px;
            height: 100px;
            background-color: blue;
            position: relative;
        }
        #childdiv{
            width: 20px;
            height: 20px;
            background-color:red;
            position: absolute;
        }
    </style>
    <div id="div">
        <div id="childdiv"></div>
    </div>
    <script>
        var pos = 0;
        var t = setInterval(move, 10);
        var box = document.getElementById("div");

        function move() {
            if(pos >= 150) {
                clearInterval(t);
            }
            else {
                pos += 1;
                box.style.left = pos+"px";
            }
        }
    </script>

Event Handler - tipo de função executada quando um evento acontece

    <button type="button" onclick="funcao()">Me clica ae</button>
    <script>
        function funcao(){
            alert("Boa tarde!");
        }
    </script>

    Outro Exemplo:

    <button id="Data">
        LALALA
    </button>
    <script>
        var x = document.getElementById("Data");
        x.onclick = function () {
            document.body.innerHTML = Date();
        }
    </script>

Eventos

    onload (Se carregar) vs. onunload (Se não carregar)

    window.onload = function (){
        alert("não carregou");
    }

    onchange:
        <input type="text" id="name" onchange="mudar()">
        <script>
            function mudar(){
                var x = document.getElementById("name");
                x.value = x.value.toUpperCase();
            }
        </script>

Adição de Eventos
    addEventListener() <- Existing Method 

    element.addEventListener(tipo de evento, função que você precisa chamar, useCapture);

    Exemplo:
    <style>
        #btn{
            background-color: brown;
            padding: 10px;
            border-radius: 20px;
            font-weight: bold;
        }
    </style>
    <button id="btn">
        Oi
    </button>
    <script>   
        var btn = document.getElementById("btn");
        btn.addEventListener("click", alerta);
        function alerta(){
            alert("Oi");
            btn.removeEventListener("click", alerta);
    }

Propagação de Evento: capturing and bubbling (pra cima e pra baixo DOM)
    
    Photo Slider
        
        <div>
            <button onclick="prev()">
                Preview
            </button>
            <img id="slider" src="http://www.sololearn.com/uploads/slider/1.jpg" 
        width="200px" height="100px"/>
            <button onclick="next()">
                Next
            </button>
        </div>
        <script>
            var images = [
                "http://www.sololearn.com/uploads/slider/1.jpg", 
                "http://www.sololearn.com/uploads/slider/2.jpg", 
                "http://www.sololearn.com/uploads/slider/3.jpg"
            ];
            var num = 0;
            function next(){
                var slider = document.getElementById("slider");
                num++;
                if(num >= images.length){
                    num = 0;
                }
                slider.src = images[num];
            }
            function prev(){
                var slider = document.getElementById("slider");
                num--;
                if(num < 0){
                    num = images.length-1;
                }
                slider.src = images[num];
            }

Validação de Formulários:

    <form onsubmit="validate()" method="post">
        Number: <input type="text" name="num1" id="num1" />
        <br />
        Repeat: <input type="text" name="num2" id="num2" />
        <br />
        <input type="submit" value="Submit" />
    </form> 
    function validate(){
        var n1 = document.getElementById("num1");
        var n2 = document.getElementById("num2");
        if(n1.value != "" && n2.value != ""){
            if(n1.value == n2.value){
                return true;
            }
        }
        alert("Digite apropriadamente.");
        return false;
    }

EcmaScript - Scripting language specification created to standardize JavaScript.
        
Variáveis 

    var a = 10;
    const b = 'hello';
    let c = true;

    "Scope is the fundamental concept in all programming languages that defines the visibility ofa variable."

    var - Variável Global
    let - define a variável de maneira limitada no escopo de um bloco.

        exemplo let
        let a = 2;
            if(1+1==2){
                let a = 1;
                document.write(a + "\n");
            }  
            document.write(a);

    let é muito usado em loops.

    Const

    const mesmo escopo do tipo let, porém variáveis desse tipo são imutáveis, não podem ser ressignificadas.

Template Literals em ECMASCRIPT6
        
    Exemplo:

       let nome = "Letícia";
       let msg = "Bem vindo" + nome;
       let msg2 = `Bem vindo ${nome}`;
       document.write(msg + "<br/>");
       document.write(msg2);
       
       let num = 2;
       let num2 = 5;
       let resultado = `${num + num2}`;
       document.write(resultado);

       let arr = {
           a: 1, 
           b: 2, 
           c: 3
        };
        for (let i in arr){
            document.write(arr[i]);
        }

Observação: The for...in loop should NOT be used to iterate over arrays because, depending on the JavaScript engine, it could iterate in an arbitrary order. Also, the iterating variable is a string, not a number, so if you try to do any math with the variable, you'll be performing string concatenation instead of addition.

    for...of for iterable objects

    let arr = ["x", "y", "z"];
    for(let val of arr){
        document.write(val);
    }

Nova maneira de escrever funções:

    var b = 1;
    var c = 2;
    const add = (b, c) => {
        let sum = b + c;
        document.write(sum);
    }
        
ForEach - Código mais sucinto

    var arr = [6, 7, 8];
    arr.forEach(v => {
        document.write(v * 2 + "<br/>");
    });

Parâmetros default in ECS6

    const test = (a, b = 3, c = 42) => {
        return a + b + c;
    }
    document.write(test(5));

Objetos em ECMASCRIPT6:
    let arvore = {
        altura: 16,
        tipo: 'Samambaia',
        crescer() {
            this.altura *= 2;
        }
    };
    arvore.crescer();
    document.write(arvore.altura + "<br/>");
    document.write(arvore.tipo);

Computer Property names:

    var i = 0;
    var a = {
        ['foo' + ++i]: i,
        ['foo' + ++i]: i,
        ['foo' + ++i]: i
    };

"With ES6, you can now use computed property names" Notação: [],
we can use an expression for a property name, including concatenating strings. 

Criação de objetos baseasdo em dados de um usuário.
        
    let prop = 'name';
    let user = {
        [prop]: "Thálice"
    }
    document.write(user.prop);

Object.assign() in ES6 - Dificuldade

    let pessoa = {
        nome: 'Thálice',
        idade: 18,
        sexo: "MASCULINO"
    };
    let estudante = {
        nome: 'João',
        idade: 21,
        Turma: 501
    };
    let NovoEstudante = Object.assign({}, pessoa);
    NovoEstudante.nome = "João"
    document.write(NovoEstudante.nome);

        const obj1 = {
                    a: 0,
                    b: 2,
                    c: 4
                };
                const obj2 = Object.assign({c: 5, d: 6}, obj1);
                document.write(obj2.c, obj2.d);

Desestruturação de vetores: - Bacana
        
    let arr = [1, 2, 3];
    let [One, two, three] = arr;
    document.write(One);
        
Simplificação de tarefas e troca de valores
        
    let a, b, c = 4, d = 8;
    [a, b = 6] = [2];
    [c, d] = [d, c];
    document.write(a + "<br/>");
    document.write(b + "<br/>");
    document.write(c + "<br/>");
    document.write(d + "<br/>");
        
    let obj = {h: 100, s:true};
    let {h, s} = obj;
    document.write(h + "<br/>")
    document.write(s + "<br/>")
    
Rest e Spread - Operadores

    ... <- Spread Operator
    
    Rest Parameters

    function Magic (...nums){
        let sum = 0;
        nums.filter(n => n % 2 == 0).map(el => sum+=el);
        return sum;
    }
    document.write(Magic(1,2,3,4,5,6));

    Spread Operator
        
    const myfunction = (w, x, y, z) => {
        document.write(w + x + y + z);
    }
    let args = [1, 2, 3];
    myfunction(...args, 4);

    var datefields = [1970, 0, 1];
    var date = new Date(...datefields);
    document.write(date);

    Método mais complexo: 

    var arr = ["One", "Two", "Five"];
    arr.splice(2, 0, "Three");
    arr.splice(3, 0, "Four");
    document.write(arr);

    Usando ECMASCRIPT6

    let newArr = ['Three', 'Four'];
    let arr = ['One', 'Two', ...newArr, 'Five'];
    document.write(arr);

Classes ECS6:

    var Ret = class Rectangle {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
    }
    const j = new Rectangle(40, 20)

    Construtores:

    class Rectangle {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
        get area (){ -> getter
            return this.calcArea();
        }
        calcArea(){ -> method
            return this.width * this.height;
        }
    }
    const ret = new Rectangle (5, 5);
    document.write(ret.area);

Métodos estáticos:

    class Point{
        constructor(x, y){
            this.x = x;
            this.y = y;
            }
        static distance(a, b){
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            return math.hypot(dx, dy);
        }
    }
    const p1 = new Point(7,2);
    const p2 = new Point(3,8);
    console.log(Point.distance(p1, p2));

Extensão de classe:

    class animal{
        constructor(name){
            this.name = name;
        }
        speak(){
            document.write(this.name + " Faz barulho. <br/>");
        }
    }
    class Dog extends animal{
        speak(){
            super.speak();
                document.write(this.name + " late.");
        }
    }
    let Rex = "Rex"
    let dog = new Dog(Rex);
    dog.speak();
        
ES6 Map

    Métodos: set, get, has, delete, clear, keys, values, entries

    Promise in ECS6 <- Programação Assíncrona.

    Symbol.iterator <- Iterador

    Iterators & Generators

    * Generator Function.

        Complex Function

        function* idMaker(){
            let index = 4;
            while (index < 5) yield index++;
        }
        var gen = idMaker();
        document.write(gen.next().value); 

        Deu certo!
        const arr = ['0', '1', '4', 'a', '9', 'c', '16', '25'];
         const my_obj = {
             [Symbol.iterator]: function*(){
                for (let index of arr){
                    document.write(`${index}` + "<br/>");
                    yield `${index}`;
                }
             }
         };
         const all = [...my_obj]
            .map(i => parseInt(i, 10))
            .map(Math.sqrt)
            .filter((i) => i < 5)
            .reduce((i, d) => i + d);
        document.write("<br/>");
        document.write(all);

Métodos do ECMASCRIPT
    const arr = [4, 5, 6, 7, 8].findIndex(x => x > 5);
    document.write(arr);

    const arr = [4, 5, 6, 7, 8].find(x => x > 5);
    document.write(arr);
        
    document.write("Thálice ".repeat(5));
        
    document.write("Thálice".startsWith("Thá") + "<br/>");
    document.write("Thálice".includes("Thá") + "<br/>");
    document.write("Thálice".endsWith("lice"));

    class Add {
        constructor(...words) {
            this.words = words;
            var res = "$";
            for (let word of words){
                res = res + word + '$';
            }
            document.write(res);
            document.write("<br/>")
        }

    }

    var x = new Add("hehe", "hoho", "haha", "hihi", "huhu");
    var y = new Add("this", "is", "awesome");
    var z = new Add("lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing","elit";

Desenhando formas utilizando canvas

    <canvas id="canvas" width="600" height="400">
        Não há suporte!
    </canvas>

    context = canvas.getContext("2d"); 

    função stroke() para desenhar uma linha.

        para retangulos, utilizamos rect():
        context.rect(x, y, width, height);

    Arco - Para desenhar círculo.

    context.arc(centerX, centerY, radius, startingAngle, endingAngle, counterclockwise); 

    Radianos - Cálculo de Angulos

            Animations - setInterval()

            var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
            var x = 0;
            var y = 100;

            function draw() {
            context.beginPath();
            context.rect(x, y, 100, 100);
            context.fillStyle="red";
            context.fill();
            }

    <script>
        window.onload = function () {
            canvas = document.getElementById('canvas');
            context = canvas.getContext("2d");
            // context.moveTo(0, 100);
            // context.lineTo(600, 400);
            // context.rect(50, 50, 200, 150);
            // context.arc(300, 200, 150, 0, 2 * Math.PI);
            // context.lineWidth = 10;
            // context.strokeStyle = "grey";
            // context.fillStyle = "black";
            // context.fill();
            // context.stroke();
            // context.beginPath();
            // context.rect(0, 0, 600, 400);
            // context.fillStyle = "#FFFFFF";
            // context.fill();
            // context.stroke();
            // context.beginPath();
            // context.arc(300, 200, 110, 0, 2 * Math.PI);
            // context.fillStyle = "#de4646";
            // context.fill();
            // context.font = '42px Arial';
            // context.strokeStyle = "black";
            // context.strokeText("Hello World!", 175, 75);
            // var img = new Image();
            // img.src = 'https://blob.sololearn.com/avatars/sololearn.jpg';
            // img.onload = function () {
            //     context.drawImage(img, 50, 50, 100, 100);
            // };
            // context.stroke();
            // x = 0;
            // y = 0;
            // function draw() {
            //     context.clearRect(0, 0, 600, 400);
            //     context.beginPath();
            //     context.rect(x, y, 100, 100);
            //     context.fillStyle = "red";
            //     context.fill();
            //     x += 10;
            //     if (x >= 600) {
            //         x = -100
            //     }
            // }
            // draw();
            // setInterval(draw, 50);
            // x = 0;
            // y = 0;
            // size = 0;
            // step = 0;
            function draw() {
                context.clearRect(0, 0, 600, 400);
                context.beginPath();
                context.arc(0, 0, 150, size, 2 * Math.PI);
                context.fillStyle = "#FFFFFF";
                context.fill();
                context.stroke();
                size += step;
                if (size >= 150 || size <= 50) {
                    step *= -1;
                }
                console.log("Hello!");
            }
            setInterval(draw, 500);

        }

         <canvas id="canvas" width="600" height="400">
        Não há suporte!
    </canvas>
    <script>
        var t;
        draw();
        function draw() {
            canvas = document.getElementById('canvas');
            context = canvas.getContext("2d");
            t = Date.now();
            let timePassed = (Date.now() - t) / 1000; 
            let fps = Math.round(1 / timePassed); 
            context.font = '25px Arial';
            context.fillStyle = 'black';
            context.fillText("FPS: " + fps, 20, 30);
            context.fill();
            context.stroke();
        } 
    </head>

    <body>
        <div class="buttons">
            <button id="up">?</button>
            <button id="down">?</button>
            <button id="left">?</button>
            <button id="right">?</button>
        </div>
        <script>
            let right = document.getElementById('right');
            right.onmousedown = function () {
                dir = 1;
            }
            right.onmouseup = function () {
                dir = 0;
            }
            right.ontouchstart = function () { //dispositivos touch
                dir = 1;
            }
            right.ontouchend = function () {
                dir = 0;
            }
            if (dir == 1) {
                x += (speed * timePassed);
            }


    <a href="https://www.sololearn.com" target="_blank">Learn Playing</a>
    Abrir em nova janela ou guia

Métodos para submissão de formulários:

    <form action="url" method="GET"> - Visível na página
    <form action="url" method="POST"> - Maior segurança

        <form action="https://www.youtube.com/watch?v=EujFSEsZslist=PLDgemkIT111AzoS1rB61sgMJbsEA4pyD2&index=4">

        </form>

    Cores são expressas em valores Hexadecimal.

    <iframe width="560" height="315" src="https://www.youtube.com/embed/fEvM-OUbaKtitle="YouTube video player" frameborder="0" allow="accelerometer; autoplaclipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreeniframe>  

Novos Elementos HTML

    <article>, <aside>, <audio>, <canvas>, <datalist>, <details>, <embed>, <footer>, <header>, <nav>, <output>, <progress>, <section>, <video>, and even more!

List of Content Models

    - Metadata
    - Embedded
    - Interactive
    - Heading
    - Phrasing
    - Flow
    - Sectioning

    <article> - Conteúdo de uma página
        <p>Olá!</p>
    </article>
    <aside>
        <section> - Seção dividida
            <p>Olá!</p>
        </section>
        <section>
            <p>Olá!</p>
        </section>
    </aside> - Informação extra
    <footer><p>Olá!</p><p>Olá!</p><p>Olá!</p><p>Olá!</p><p>Olá!</p></footer> - Rodapé

Tag para dispor elementos de áudio em HTML.

    <audio>
        Texto caso tenha erros de compatibilidade.
    </audio> 

Vídeos em html:

    <video>
        <source>
    </video>

Vantagens de utilizar web storage:
- Mais seguro;
- Rápido;
- Guarda grandes números de dados;
- Não há necessidade de um request de um servidor.

Web Storage Objects:
- sessionStorage()
- localStorage()

Local vs. Session
- Session Storage destruído quando o usuário fecha o browser.
- Local Storage guarda dados sem data de expiração.

Inserindo dado no local storage:
localStorage.setItem("key1", "value1");

"GET" local storage:
alert(localStorage.getItem("key1")); 

"DELETE" local storage:
localStorage.removeItem("key1");

Clear no local Storage
localStorage.clear();

HTML Geolocation <- Pesquisar


Barra de Progresso em HTML.
    <!-- <progress min="0" max="100" value="35">
    </progress> -->


<!-- <img src="./desligado.png" draggable="true">
    <svg >
        <circle cx=20 cy=20 r=5 fill="green">
        </circle>
        <rect x=20 y=20 fill="green" width=20 height=20>

        </rect>
        <line>

        </line>
        <polyline></polyline> 
    </svg>

    Shape Animations -->

Animações SVG -> <animate>.

<!-- <svg width=1000 height=500>
    <rect width=150 height=150 fill="orange">
        <animate attributeName="x" from="0" to="300" dur="3s" fill="freeze" repeatCount="2">
        </animate>
    </rect>
</svg> -->

Desenhando uma linha
moveTo(x,y): Defines the starting point of the line.
lineTo(x,y): Defines the ending point of the line.

Desenhando um círculo
beginPath(): 
arc(x,y,r,start,stop): 
stroke(): 

Desenhando gradiente
createLinearGradient(x,y,x1,y1): Creates a linear gradient.
createRadialGradient(x,y,r,x1,y1,r1): Creates a radial/circular gradient.

Texto em canvas
Font: Defines the font properties for the text.
fillText(text,x,y): Draws "filled" text on the canvas.
strokeText(text,x,y): Draws text on the canvas (no fill).

    <canvas id="canvas1" width="400" height="300"></canvas> 

    <script>
        var can = document.getElementById("canvas1"); 
        var ctx = can.getContext("2d");
    </script>

Novos tipos de Input:
- color
- date
- datetime
- datetime-local
- email
- month
- number
- range
- search
- tel
- time
- url
- week

Novos atributos em HTML5:
- autofocus
- form
- formaction
- formenctype
- formmethod
- formnovalidate
- formtarget
- height and width
- list
- min and max
- multiple
- pattern (regexp)
- placeholder
- required
- step


    <!-- <input type="text" list="colors"/>
    <datalist id="colors">
        <option>lalalalala</option>
        <option>lolololo</option>
        <option>lelelele</option>
    </datalist> -->

    HTML CANVAS

    Coordenadas X,Y

    y
    |
    |
    |
    |________x
-->