document.addEventListener('mousemove', parallax)

function parallax(e) {
    this.querySelectorAll('.parallax').forEach(item => {
        const speed = item.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/100
        const y = (window.innerHeight - e.pageY*speed)/100

        item.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}