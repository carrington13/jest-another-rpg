function Potion(name) {
    // arr for potion types
    this.types = ['strength', 'agility', 'health'];
    // if name has value, thats the value, if not then it is randomly selected from this.type
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

    if(this.name === 'health') {
        this.value = Math.floor(Math.random() * 10 + 30);
    } else {
        this.value = Math.floor(Math.random() * 5 + 7);
    }
};


module.exports = Potion;