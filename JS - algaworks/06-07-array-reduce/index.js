const students = [
    {name: 'River', grade: 8},
    {name: 'Eren', grade: 10},
    {name: 'Summer', grade: 5},
    {name: 'Zion', grade: 6},
    {name: 'Collin', grade: 2}
]

const classroomTotalPoints = students.reduce(
    (prev, current) => {
        console.log(prev)
        console.log(current)
        return prev + current.grade
    },
     0
    ) 
console.log(classroomTotalPoints)