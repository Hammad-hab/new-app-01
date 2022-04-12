const Collison = (x, x2, y, y2) => {
    var DistX = x - x2
    var DistY = y - y2
    return Math.sqrt(Math.pow(DistX, 2) + Math.pow(DistY, 2))
}

const Helpers = {
    Collison,
    // Events
}

export default Helpers