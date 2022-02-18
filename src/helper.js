const elements = [0,1,2,3,4,5,6,7,8,9,'A', 'B', 'C', 'D', 'E', 'F']

export function getRandomColor() {
    let color = '#'
    for (let i = 0 ; i < 6 ; i++) {
        const index = Math.floor(Math.random() * elements.length)
        color += elements[index]
    }
    return color
}

