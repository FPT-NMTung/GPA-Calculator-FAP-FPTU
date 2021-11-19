const array = [...$('.table')[0].children[1].children, ...$('.table')[1].children[1].children]
const resultArray = array.map(e => {
    if (e.children.length === 10) {
        return [e.children[3].textContent, e.children[7].textContent, e.children[8].textContent]
    }
    return [e.children[2].textContent, e.children[4].textContent, e.children[5].textContent]
})
const result = resultArray.filter(e => {
    return !(e[0].includes('LAB') || !e[1].trim() || e[1].trim() === '0' || e[0].includes('OJS') || e[0].includes('VOV1'))
}).map(e => {
    return [Number.parseFloat(e[1]), Number.parseFloat(e[2])]
})
const [credit, grade] = result.reduce((a, b) => {
    return [a[0] + b[0], a[1] + b[1] * b[0]]
}, [0, 0])
const gpa = (grade / credit).toFixed(1)
$('#ctl00_mainContent_lblRollNumber').append(` - <span id="gpa-grade" class="label label-${gpa < 5 ? 'danger' : (gpa < 7 ? 'warning' : 'success')}">GPA : ${gpa} <sup>(10)</sup></span>`)
window.scrollTo(0, 0);
