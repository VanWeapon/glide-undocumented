const lightGreenSN = "#5fbaa4";
const darkGreenSN = "#1f8476";
const positiveSN = "#48c891";
const warningSN = "#dfd139";
const negativeSN = "#c83c36";


window.addEventListener("load", () => {

    var summaryElements = document.getElementsByClassName("summary");
    console.log(summaryElements);
    // debugger;
    for (let element of summaryElements) {
        console.log(element);
        var realElement = element.nextSibling;
        console.log(realElement);
        var negativeKeywords = ["deprecated", "not working", "unknown"]
        var text = realElement.innerText;
        if (text.toLowerCase().includes("undocumented")) {
            realElement.style.color = warningSN;
        } else if (negativeKeywords.filter(v => text.toLowerCase().includes(v)).length > 0) {
            realElement.style.color = negativeSN;
        } else {
            realElement.style.color = lightGreenSN;
        }
        console.log(realElement);
    };
})