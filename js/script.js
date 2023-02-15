const animals = [
	['🐭','mouse','Jerry'],
	['🐹','hamster','Biscuit'],
	['🐰','rabbit','Bugs'],
	['🦊','fox','Mrs. Fox'],
	['🐻','bear','Paddington']
];

const food = [
	['🍎','apple',10],
	['🍐','pear',12],
	['🍊','tangerine',15],
	['🍋','lemon',5],
	['🍌','banana',7]
];

const universes = [
	['🖤', 'DC', ['Superman', 'Batman', 'Wonder Woman']],
	['❤️', 'Marvel', ['Iron Man', 'the Hulk', 'Black Widow']]
]

function getInfo(arrName, arrayValue){
    console.log(arrName, arrayValue)
    document.write(`
    <h1>${arrName}</h1>
    `)
    for(let i = 0; i < arrayValue.length; i++){
        for(let j = 0; j < arrayValue[i].length; j++){
            document.write(`
        <table>
            <tr>
                <td>${arrayValue[i][j++]}</td>
                <td>${arrayValue[i][j++]}</td>
                <td>${arrayValue[i][j]}</td>
            </tr>
        </table>
        `)
        }    
    } 
}
getInfo(`It's animals array`, animals)
getInfo(`It's food array`, food)
getInfo(`It's universe array`, universes) 

/* let uniNew  = universes[0][2].join('; ');
console.log(uniNew) */