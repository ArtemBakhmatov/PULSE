window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    let textNodes = [];
    function recursy(element) {
        element.childNodes.forEach(node => {
            //console.log(node);
            //////////// условие на количество нод внутри родителя //////
            /* if (element.childNodes.length > 1) { // если внутри больше одного элемента
                recursy(node);
            } */

            //////////// ищем только текстовые ноды, но выводим теги без текст-х нод //////
            /* if (node.nodeName === '#text') {
                return;  // функция останавливается 
            } else {
                console.log(node); // будут только одни тэги без текстовых нод
                recursy(node);
            } */

             //////////// выводим подзоголовки с 1 и по 6 порядка (H1-H6) //////
            if (node.nodeName.match(/^H\d/)) {
                const obj = {
                    header: node.nodeName,
                    content: node.textContent
                };
                textNodes.push(obj);
            } else {
                recursy(node);
            } 
            // match(/^H\d/) -> Ищем начало строки с буквой H, а после H идет число
        });
    }

    recursy(body); 
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(textNodes)  // преобразует в JSON 
    })
    .then(response => response.json())
    .then(json => console.log(json)); 
    
});