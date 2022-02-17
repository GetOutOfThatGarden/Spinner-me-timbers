
const straight = document.querySelector('.straight')
// const ninety = document.querySelector('.ninety')
// const oneEighty = document.querySelector('.oneEighty')
// const twoSeventy = document.querySelector('.twoSeventy')


// Add event listener
straight.addEventListener('click', () => {
//     if(straight.classList.contains('on')) {
//         ninety.classList.add('on');
//         straight.classList.remove('on');
//     }
    
     e.currentTarget.classList.toggle('rotate')
  
})

//remove the 'rotate' class when animation finishes
straight.addEventListener('animationend', e => {
        e.currentTarget.classList.remove('rotate')
})

// ninety.addEventListener('click', () => {
//     if(ninety.classList.contains('on')) {
//         oneEighty.classList.add('on');
//         ninety.classList.remove('on');
//     }
// })
// oneEighty.addEventListener('click', () => {
//     if(oneEighty.classList.contains('on')) {
//         twoSeventy.classList.add('on');
//         oneEighty.classList.remove('on');
//     }
// })
// twoSeventy.addEventListener('click', () => {
//     if(twoSeventy.classList.contains('on')) {
//         straight.classList.add('on');
//         twoSeventy.classList.remove('on');
//     }
// })
/*closedFace.addEventListener('click', () => {
    if(clockwise.classList.contains('oneEighty')) {
        clockwise.classList.add('twoSeventy');
        clockwise.classList.remove('oneEighty');
    }
})
closedFace.addEventListener('click', () => {
    if(clockwise.classList.contains('twoSeventy')) {
        clockwise.classList.add('straight');
        clockwise.classList.remove('twoSeventy');
    }
})
 */
