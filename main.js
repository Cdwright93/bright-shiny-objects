// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘
function createUser(firstName, lastName){
    let user = {
        firstName: firstName,
        lastName: lastName
    }
    return user
}

function setAge(user, age){
    user.age = age
    return user
}

function incrementAge(user){
    user.age = user.age + 1
    return user
}


function fixCar(car){
    car.needsMaintenance = false
    return car
}

function addGrades(user, grades){
    grades.forEach(grades => {
        user.grades.push(grades)
    })
    return user
}
function getDataType(object,prop){
    return typeof object[prop]
}
function addTodo(items, item){
    items.push(item)
    return items
}
function addSong (playlist,song){
    playlist.songs.push(song)
    playlist.duration = playlist.duration + song.duration
    return playlist
}
function updateReportCard (reportCard,newGrade){
    reportCard.grades.push(newGrade)
    reportCard.averageGrade = 0
    reportCard.grades.forEach(grade => {
        reportCard.averageGrade = reportCard.averageGrade+grade
    })
    reportCard.averageGrade = reportCard.averageGrade/reportCard.grades.length
    if (newGrade < reportCard.lowestGrade){
        reportCard.lowestGrade = newGrade
    }
    if (newGrade > reportCard.highestGrade){
        reportCard.highestGrade = newGrade
    }
    return reportCard
}
// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
