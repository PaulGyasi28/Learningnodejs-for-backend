class superHero
{
    constructor(name)
    {
       this.name = name;
    }

    getName()
    {
        return this.name;
    }

    setName(name)
    {
        return this.name;
    }
}

module.exports = new superHero('batman');