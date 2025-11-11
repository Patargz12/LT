function SnakeGame(width, height, food) {
    this.width = width;
    this.height = height;
    this.food = food;
    this.foodIndex = 0;
    this.score = 0;
    this.snake = [[0, 0]];
    this.snakeSet = new Set(['0,0']);
    this.directions = {
        'U': [-1, 0],
        'D': [1, 0],
        'L': [0, -1],
        'R': [0, 1]
    };
}

SnakeGame.prototype.move = function(direction) {
    const [dr, dc] = this.directions[direction];
    const [headR, headC] = this.snake[0];
    const newR = headR + dr;
    const newC = headC + dc;
    
    if (newR < 0 || newR >= this.height || newC < 0 || newC >= this.width) {
        return -1;
    }
    
    const ateFoodNow = this.foodIndex < this.food.length && 
                       newR === this.food[this.foodIndex][0] && 
                       newC === this.food[this.foodIndex][1];
    
    if (ateFoodNow) {
        this.score++;
        this.foodIndex++;
    } else {
        const [tailR, tailC] = this.snake.pop();
        this.snakeSet.delete(`${tailR},${tailC}`);
    }
    
    const newKey = `${newR},${newC}`;
    if (this.snakeSet.has(newKey)) {
        return -1;
    }
    
    this.snake.unshift([newR, newC]);
    this.snakeSet.add(newKey);
    
    return this.score;
};