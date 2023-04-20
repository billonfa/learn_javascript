const app = (function() {
    const cars = []
    return {
        get(index) {
            return cars[index]
        },
        add(car) {
            cars.push(car)
        },
        edit(index, car) {
            cars[index] = car
        },
        delete(index) {
            cars.splice(index,1)
        }
    }
})()
// console.log(111)
// app.add('BMW')
// app.add('Mazda')
// console.log(app.get(0))