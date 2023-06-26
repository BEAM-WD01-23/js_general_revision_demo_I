//revision_demo
//i variables
        //var
        //let
        //const 

        //var name = 'Daniel';
        //var name = 'Katrine';
        //console.log(name);
        let myName = 'Dimitro';
        myName = 'Silvia';
        //console.log(myName);//Silvia
        const numb = 10;
        //numb = 20;
        //console.log(numb);
        //let, =, ;
        //
//ii
        //data-types 
            //primitive: number, string, boolean
            string: 'hi', "good moring", '10';
            boolean: true, false
            number: 0, 234, 0.3, -33;
        //non-primitive
            //array, object
        //array: is a container type that holds multiple values. 
            //ex: 
            let arr = ['word', true, 45, "5"];
            //console.log(arr[1]);
        //Object
            //a representation of data that belog to a single entity, a key-value pair.
            let data = {
                name: 'Marko',//property
                age: 40,
                height: 170,
                origin: 'Spain',
                isMarried: true
            }
            //change values inside an object
            let newOrigin = data.origin = 'Mexico';
            let newProperty = data.address = '123 Street, Mexico City';
            //console.log(data);
        //nested values
        let data1 = {
            name: 'Marko',//property
            age: 40,
            height: 170,
            origin: 'Spain',
            isMarried: true,
            hobies:{
                sport: 'football, swimming',
                cuisine: 'cooking, going-out',
                travel: 'visiting, musium, meeting people'
            }
        }
        //looping over arrays and objects
        //for in loop (object)
        for(let i in data1){
            //console.log(data1[i]);
        }

        let array = ['word', true, 45, "5"];
            for(let a=0; a<array.length; a++){
                //console.log(array[a]);
        }
        //type: undefined, null
        let num;
        //console.log(typeof num);//undefined
        //null, intentional deprivation of values
        let x = null;
        //console.log(x);
        //
//iv operators
        //matimatical-operators, logical-operators, comparison-operators, value-assigning
    //matimatical
        1+1;
        2-2;
        10/2;
        3*3;
        4%2 ===0;
        2**2
        typeof
        //parenthesis for grouping
       //console.log((2 ** 3) ** 2);//64
       //console.log(2 ** (3 ** 2));//512
    //logical (&&, ||, ! )
        //and
        true && true //true
        true && false //false
        false && true //fasle
        false && false //false
        //or
        true || true //true
        true || false //true
        false || true //true
        false || false //false
        //ex:
        let isCold = false;
        let notTired = false;
        if(isCold || !notTired){
            //console.log('I will go for a walk');
        }else if(notTired && isCalled){
            //console.log('I will go for a swim');
        }else{
            //console.log('stay at home, play video-game');
        }
        //
    //comparison
        //<, >, <=, <==, >=, >==, ==, ===, !=, !== ....
        // console.log(1 == '1');//true
        // console.log(1 === '1');//false
        // console.log(1 != '1');//false
        // console.log(1 !== '1');//true
        //
        let temperatrue = 20;
        if(temperatrue > 20 && temperatrue <= 29){
            //console.log('warm');
        }else if(temperatrue <= 20 && temperatrue > 10){
            //console.log('fresh')
        }else if(temperatrue <= 10){
            //console.log('cold');
        }else{
            //console.log('hot');
        }
        //
//v string methods
        //split(), join(), reverse(), slice(); charAt(); toUpperCse() ...
        let myWord = 'word';
        let splitIt = myWord.split('');
        let joinIt = splitIt.join('');
        let charIt = myWord.charAt();
        let sliceIt = myWord.slice(1,3);
        //console.log(sliceIt);
    //number methods
        //isNaN(), parseInt(), parseFloat(), toString(), isInteger(), toFixed(), round(), ceil(), floor() ...
        //Math()...
        let myNumber = 23.455657676546;
        let toFloor = Math.floor(myNumber);
        let toCeil = Math.ceil(myNumber);
        let toFix = myNumber.toFixed(2);
        let toRound = Math.round(myNumber);
        let toInt = Number.isInteger(myNumber);//true, false 
        let toParse = Number.parseInt(myNumber);
        //console.log(toParse);
        //
//vi control-flow
    //if ... else 
        let food = 'pizza';
        if(food === 'pizza'){
            //console.log('that is my varorite food');
        }
        //
        let language = "french";
        if(language === 'spanish'){
            //console.log('holla');
        }else if(language === 'german'){
            //console.log('guten tag')
        }else if(language === 'french'){
            //console.log('bonjour')
        }else{
            //console.log('this language is not given!')
        }
        //
    //swithch
        let color = 'green';
        switch(color){
            case "red":
            //console.log('this color is ' + color);
            break;
            case "green"://2 conditions 
            case "silver":
            //console.log('this color is ' + color);
            break;
            case 'blue':
            //console.log('this color is ' + color);
            break;
            default:
            //console.log('this color is not given');
        }
        //
        //ternary-operators 
        let colr1 = 'green';
        const authorization = colr1 === 'green' ? 'you are allowed to enter' : 'you are not allowed';
        //console.log(authorization);
        let age = 15;
        let restriction = age >= 16 ? "you can drive" : "you are a minor";
        //console.log(restriction);
        //
//vii   scope, (block/functional, global-scope)
        //
        let giveName = 'Malik';
        let greeting;
        if(giveName === "Malik"){
            greeting = 'Hi Malik'
            //console.log(greeting);
        }
        if(giveName === 'Brayan'){
            greeting = 'Hello Brayan'
            //console.log(greeting);
        }
        //console.log(greeting);
        //
        //let car = 'volvo';
        //let car1 = 'toyota';
        function carsName(){
            //console.log(car);
            //console.log(car1)
        }
        carsName();
        //
        
        function carsName(){
            let car = 'volvo';
            let car1 = 'toyota';
        }
        //console.log(car);
        //console.log(car1)
        carsName();
        //
//viii
        //array-methods
        //push(); pop(); shift(); unshift(); includes(); join() ...
        let people = ['Katerina', 'Ahmed', 'Daniel'];
        people.push("Silvia");//add at z end
        //let lastPerson = people[people.length-1];
        //people.pop();//dlt last
        people.shift();//dlt first
        people.unshift('Barbara');//add at begenning
        //console.log(people);
        //
//ix loops
        //looping over an array or an object ...
        for(let a=0; a<=10; a++){
            //console.log(a);
        }
        let myArr = [2,'seven', 'one', true];
        for(let a=0; a<myArr.length; a++){
            //console.log(myArr[a]);
        }
        //break, continue ...
    const myList = ['one', 1, 'two', 2, 'three', 3, 'four', 4, 'five', 5, 'six', 6, 'seven', 7, 'eight', 8];
        for(let a=0; a<myList.length; a++){
            if(myList[a] === "six"){
                break;
             }else if(typeof myList[a] === 'number'){
                continue;//ignore
             }
            console.log(myList[a]);
        }
       



