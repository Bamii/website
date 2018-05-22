(function() {
    // const array = ['a', 'b', 'a', 'b', 'c', ' ', 'a', 'b', 'a', 'b', 'c'];
    const insertionPoint = document.getElementById("typewriter");

    const words = insertionPoint.innerHTML;
    insertionPoint.innerHTML = "";

    const arr = words.split("");

    function insert(arrays) {
        var time = 0;
        const child = document.createElement('div');
        child.textContent = "";
        insertionPoint.appendChild(child);

        arrays.forEach(function(item) {
            setTimeout(function() {
                child.textContent += item;  
            }, time);
            time += 110;
        });
    }

    insert(arr);
})();