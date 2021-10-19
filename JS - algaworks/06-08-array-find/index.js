const students = [
    {name: 'River', grade: 8},
    {name: 'Eren', grade: 10},
    {name: 'Summer', grade: 5},
    {name: 'Zion', grade: 6},
    {name: 'Collin', grade: 2}
]

const specificStudent = students.find(pupil => {
    if (pupil.name === 'Summer') {
        return true
    }
})
