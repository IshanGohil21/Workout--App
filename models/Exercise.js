class Exercise{
    constructor(
        id, 
        categoryIds, 
        title, 
        imageUrl, 
        sets,
        reps,
        instructions, 
        rest,
        type,
        weights,
        isPush,
        isPull,
        isLegs,
        isCardio
    ) {
        this.id = id;
        this.categoryIds = categoryIds;
        this.title = title;
        this.imageUrl = imageUrl;
        this.sets = sets;
        this.reps = reps;
        this.instructions = instructions;
        this.rest = rest;
        this.type = type;
        this.weights = weights;
        this.isPush = isPush;
        this.isPull = isPull;
        this.isLegs = isLegs;
        this.isCardio = isCardio;
    }
}

export default Exercise;