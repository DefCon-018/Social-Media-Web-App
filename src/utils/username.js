const Adjective = [
    'lawyer', 'galaxy', 'kidney', 'progress', 'poem', 'week'
]

const Things = [
    'perfume', 'vase', 'fork', 'towel', 'canvas', 'chair' 
]

function getRandomUsername(){
    const adj = Adjective[Math.floor(Math.random() * 6)];
    const thng = Things[Math.floor(Math.random() * 6)];
    return `${adj}-${thng}`
}

// console.log(getRandomUsername())
// console.log(getRandomUsername())
// console.log(getRandomUsername())

module.exports = {getRandomUsername}