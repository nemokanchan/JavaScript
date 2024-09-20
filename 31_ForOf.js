// ["","", ""]
// [{},{},{}]
const arr=[1,2,3,4,5]

for (const val of arr) {
    console.log(val);
    
}

const greeting= "Hello World!"
for (const greet of greeting) {

    // console.log(greet)
    
}

//Maps::::::::::Object that holds key and values(unique)

const map = new Map()

map.set('IN',"INDIA")
map.set('NP',"NEPAL")
map.set('FR',"FRANCE")
map.set('FR',"FRANCE")

console.log(map);

// Output:::::::::::::::::::::::
// Map(3) { 'IN' => 'INDIA', 'NP' => 'NEPAL', 'FR' => 'FRANCE' }

for (const key of map) {
    console.log(key);
    
    
}

// Output:::::::::::
// ["IN", "INDIA"][("NP", "NEPAL")][("FR", "FRANCE")];


for (const [key,value] of map) {
    console.log(key, ':-', value);
    
    
}

// Output::::::::::::::::::
// IN: -INDIA;
// NP: -NEPAL;
// FR: -FRANCE;

const myobj={
    'game1': 'COC',
    'game2': 'CandyCrush'
}

// for (const [Key,value] of myobj) {
//     console.log(Key, ":-", value);
    
    
// }
// Output::::::::     TypeError



