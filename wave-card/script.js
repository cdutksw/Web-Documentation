const labels = document.querySelectorAll('.form-control label')


// HTML文件里若不适用span则可以再js里使用以下语句形成文字动态浮动效果
// labels.forEach(label => {
//     label.innerHTML = label.innerText
//         .split('')
//         .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
//         .join('')
// })