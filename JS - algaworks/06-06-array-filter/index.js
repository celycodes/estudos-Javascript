const students = [
    {name: 'River', grade: 8},
    {name: 'Eren', grade: 10},
    {name: 'Summer', grade: 5},
    {name: 'Zion', grade: 6},
    {name: 'Collin', grade: 2}
]

const failed = students.filter(pupil => {
    return pupil.grade < 6
})

console.log(failed)