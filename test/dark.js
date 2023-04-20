(function() {
    let timer = null;
    let cibSerp = document.getElementsByTagName("cib-serp");
    let cibSerpCount = 0;
    const maxCibSerpCount = 2; // bing chat on the chat tab, and right side of search result
    let maxRetryCount = 25;
    function delay(interval = 200) {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(() => {
            maxRetryCount--;
            console.log(cibSerp.length);
            if (cibSerp.length > 0 && cibSerpCount < maxCibSerpCount && cibSerpCount < cibSerp.length) {
                for (let i = cibSerpCount; i < cibSerp.length; i++) {
                    cibSerp[i].design.colorScheme=1;
                    cibSerp[i].alignment="center";
                }
                cibSerpCount = cibSerp.length;
            }
            if (cibSerpCount < maxCibSerpCount && maxRetryCount > 0) delay();
        }, interval);
    }
    delay();
})();
