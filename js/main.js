hljs.initHighlightingOnLoad();

raw_code.innerHTML = hljs.highlightAuto(raw_code.textContent).value;

setTimeout(() => alert("Ребят, работа не доделана т.к. слег с хворью, надеюсь успеть доделать, поэтому пожалуйста проверьте работу попозже. Спасибо за понимание."), 1000);
