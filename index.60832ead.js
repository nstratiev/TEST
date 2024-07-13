// On first page load
// -- Forms
const $15997b637164a62c$export$6ba54d0643c914d9 = document.querySelector("#form-main");
const $15997b637164a62c$export$896c6fda96e1be71 = $15997b637164a62c$var$getFormOutputsArray($15997b637164a62c$export$6ba54d0643c914d9);
const $15997b637164a62c$export$fad195f176559cd1 = $15997b637164a62c$var$getFormOutputsObject($15997b637164a62c$export$6ba54d0643c914d9);
const $15997b637164a62c$export$27455646898a1c8b = document.querySelector(".btns-global");
const $15997b637164a62c$export$f1553a5662cd6555 = document.querySelector("#btn-to-top");
const $15997b637164a62c$export$e24bed9de9d86c6e = document.querySelector("#btn-reset-global ");
const $15997b637164a62c$export$baf89896430e5b33 = document.querySelector("#btn-save-global");
// -- Functions
function $15997b637164a62c$var$getFormOutputsArray(formElem) {
    return Array.from(formElem.elements).filter((el)=>el.tagName === "OUTPUT");
}
function $15997b637164a62c$var$getFormOutputsObject(formElem) {
    const obj = {};
    const arr = Array.from(formElem.elements).filter((el)=>el.tagName === "OUTPUT");
    const x = arr.forEach((el)=>{
        obj[el.name] = el;
    });
    return obj;
}



function $b984cb5c7d2db111$export$dd9a535c344cd1c3(resultsData) {
    const d = resultsData;
    const el = (0, $15997b637164a62c$export$fad195f176559cd1);
    $b984cb5c7d2db111$var$printResult(d.doughWeight, el.doughWeight, 0);
    $b984cb5c7d2db111$var$printResult(d.flourWeight, el.flourWeight, 0);
    $b984cb5c7d2db111$var$printResult(d.saltWeight, el.saltWeight, 0);
    $b984cb5c7d2db111$var$printResult(d.liquidIngredsWeight, el.liquidIngredsWeight, 0, {
        prefix: "",
        postfix: " g"
    });
    $b984cb5c7d2db111$var$printResult(d.waterWeight, el.waterWeight, 0);
    $b984cb5c7d2db111$var$printResult(d.vinegarWeight, el.vinegarWeight, 0);
    $b984cb5c7d2db111$var$printResult(d.oilWeight, el.oilWeight, 0);
}
function $b984cb5c7d2db111$var$printResult(value, resultElem, toFixedIndex, additionalTextObj) {
    // additionalTextObj = {prefix: '', postfix: ''};
    let result;
    if (value) {
        if (additionalTextObj) result = `${additionalTextObj.prefix}${value.toFixed(toFixedIndex)}${additionalTextObj.postfix}`;
        else result = `${value.toFixed(toFixedIndex)}`;
    } else result = "";
    resultElem.style.fontWeight = "bold";
    resultElem.textContent = result;
}




class $887b1922a49a3ba1$export$8eec1a3a911975a4 {
    constructor({ titleText: titleText, msgText: msgText, confirmText: confirmText, cancelText: cancelText, msgText2: msgText2 }){
        this.titleText = titleText;
        this.msgText = msgText;
        this.confirmText = confirmText;
        this.cancelText = cancelText;
        this.msgText2 = msgText2;
    }
    createAndOpen(onConfirm, onCancel) {
        this.modalElem = document.createElement("div");
        this.modalElem.classList.add("modal");
        setTimeout(()=>{
            this.modalElem.classList.add("open");
        }, 400);
        const contentElem = document.createElement("div");
        contentElem.classList.add("content");
        this.modalElem.appendChild(contentElem);
        // Heading
        const titleElem = document.createElement("p");
        titleElem.classList.add("title-text");
        titleElem.textContent = this.titleText;
        contentElem.appendChild(titleElem);
        // Message
        const msgElem = document.createElement("p");
        msgElem.classList.add("msg-text");
        if (this.msgText2 !== undefined) msgElem.innerHTML = this.msgText + "<br/>" + this.msgText2;
        else msgElem.textContent = this.msgText;
        contentElem.appendChild(msgElem);
        // Cancel Button
        if (this.cancelText) {
            const cancelBtnElem = document.createElement("button");
            cancelBtnElem.classList.add("btn-cancel");
            cancelBtnElem.textContent = this.cancelText;
            cancelBtnElem.addEventListener("click", ()=>{
                onCancel("Cancelled");
                this.close();
            });
            contentElem.appendChild(cancelBtnElem);
        // cancelBtnElem.focus();
        }
        // Confirm Button
        if (this.confirmText) {
            const confirmBtnElem = document.createElement("button");
            confirmBtnElem.classList.add("btn-confirm");
            confirmBtnElem.textContent = this.confirmText;
            confirmBtnElem.addEventListener("click", ()=>{
                onConfirm("Confirmed");
                this.close();
            });
            contentElem.appendChild(confirmBtnElem);
        }
        document.body.appendChild(this.modalElem);
        const cancelBtn = document.querySelector(".btn-cancel");
        if (cancelBtn) cancelBtn.focus();
        else document.querySelector(".btn-confirm").focus();
    }
    open() {
        return new Promise((resolve, reject)=>{
            this.createAndOpen(resolve, reject);
        });
    }
    close() {
        this.modalElem.classList.remove("open");
        setTimeout(()=>{
            document.body.removeChild(this.modalElem);
        }, 400);
    }
}


function $ec0d231051d0b4ce$export$ac8f660c554604aa(bool) {
    if (bool) $ec0d231051d0b4ce$var$temporaryOnClickAlert("&check;", 400, "green");
}
function $ec0d231051d0b4ce$var$temporaryOnClickAlert(msg, duration, bgColor) {
    const containerEl = document.createElement("div");
    containerEl.setAttribute("class", "temp-alert");
    containerEl.style.backgroundColor = bgColor;
    containerEl.style.outline = `2px solid ${bgColor}`;
    const spanEl = document.createElement("span");
    spanEl.setAttribute("class", "check-mark");
    spanEl.innerHTML = msg;
    containerEl.appendChild(spanEl);
    setTimeout(function() {
        containerEl.parentNode.removeChild(containerEl);
    }, duration);
    document.body.appendChild(containerEl);
}
const $ec0d231051d0b4ce$export$59f31b448d0bd65f = new (0, $887b1922a49a3ba1$export$8eec1a3a911975a4)({
    titleText: "",
    msgText: "\u0416\u0435\u043B\u0430\u0435\u0442\u0435 \u043B\u0438 \u0432\u0441\u0438\u0447\u043A\u0438 \u0437\u0430\u043F\u0430\u043C\u0435\u0442\u0435\u043D\u0438 \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442\u0438, \u0441\u0432\u044A\u0440\u0437\u0430\u043D\u0438 \u0441 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0430\u0442\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430, \u0434\u0430 \u0431\u044A\u0434\u0430\u0442 \u0438\u0437\u0442\u0440\u0438\u0442\u0438 \u0442\u0440\u0430\u0439\u043D\u043E \u043E\u0442 \u043F\u0430\u043C\u0435\u0442\u0442\u0430?",
    confirmText: "\u0414\u0430",
    cancelText: "\u041D\u0435"
});
const $ec0d231051d0b4ce$export$cc98d24dc04bb105 = new (0, $887b1922a49a3ba1$export$8eec1a3a911975a4)({
    titleText: "",
    msgText: "\u041C\u043E\u043B\u044F, \u043F\u043E\u043F\u044A\u043B\u043D\u0435\u0442\u0435 \u0432\u0441\u0438\u0447\u043A\u0438 \u0437\u0430\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u0438 \u043F\u043E\u043B\u0435\u0442\u0430 ...",
    confirmText: "OK",
    cancelText: "",
    msgText2: ""
});
const $ec0d231051d0b4ce$export$1396f36bfd6137ce = new (0, $887b1922a49a3ba1$export$8eec1a3a911975a4)({
    titleText: "",
    msgText: `\u{41C}\u{43E}\u{43B}\u{44F}, \u{432}\u{44A}\u{432}\u{435}\u{434}\u{435}\u{442}\u{435} \u{441}\u{442}\u{43E}\u{439}\u{43D}\u{43E}\u{441}\u{442} \u{432} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}\u{430}: `,
    confirmText: "OK",
    cancelText: "",
    msgText2: ""
});



function $8c5be27506888ecd$export$6f5f5dcb4e20a0c(formFieldsArr, pageLoadingObj, resetFormResultsFunc) {
    for (const item of formFieldsArr){
        if (item.type !== "number") continue;
        const num = Number(item.value);
        const minLimit = Number(item.min);
        let maxLimit = Number(item.max);
        if (maxLimit === 0) maxLimit = Number.MAX_SAFE_INTEGER;
        if (num < minLimit || num > maxLimit) {
            if (pageLoadingObj.isFirstPageLoad !== true) {
                resetFormResultsFunc();
                const configArr = (0, $2b5c36866ff45806$export$241822f9875d916a)(true, []);
                (0, $ec0d231051d0b4ce$export$1396f36bfd6137ce).msgText2 = `[ ${minLimit} - ${maxLimit} ]`;
                (0, $ec0d231051d0b4ce$export$1396f36bfd6137ce).open().then((msg)=>{}).catch((err)=>console.log(err)).finally(()=>{
                    (0, $2b5c36866ff45806$export$241822f9875d916a)(false, configArr);
                    item.focus();
                });
            }
            return false;
        }
    }
    return true;
}
function $8c5be27506888ecd$export$d302fa9a92fd3196(formFieldsArr, pageLoadingObj, resetFormResultsFunc) {
    for (const item of formFieldsArr){
        if (item.tagName !== "INPUT" || item.required === false) continue;
        if (item.value === "") {
            if (pageLoadingObj.isFirstPageLoad !== true) {
                resetFormResultsFunc();
                const configArr = (0, $2b5c36866ff45806$export$241822f9875d916a)(true, []);
                (0, $ec0d231051d0b4ce$export$cc98d24dc04bb105).open().then((msg)=>{}).catch((err)=>console.log(err)).finally(()=>{
                    (0, $2b5c36866ff45806$export$241822f9875d916a)(false, configArr);
                    item.focus();
                });
            }
            return false;
        }
    }
    return true;
}
function $8c5be27506888ecd$export$a65b13b410117413() {
    document.querySelectorAll('input[step="0.1"]').forEach((el)=>{
        el.addEventListener("focusout", (ev)=>$8c5be27506888ecd$var$validationForDecimalPoint(ev, el));
        el.addEventListener("keydown", (ev)=>{
            if (ev.code === "Enter") $8c5be27506888ecd$var$validationForDecimalPoint(ev, el);
        });
    });
}
function $8c5be27506888ecd$var$validationForDecimalPoint(ev, numField) {
    const numValue = numField.value;
    if (numValue !== "" && numValue.includes(".") === false) numField.value = numValue + ".0";
}


function $2b5c36866ff45806$export$12ab77af4a73570b(formElem) {
    return Object.fromEntries(new FormData(formElem));
}
function $2b5c36866ff45806$export$7a171f172be0782e(formElem, pageLoadingObj, resetFormResultsFunc) {
    if ((0, $8c5be27506888ecd$export$d302fa9a92fd3196)(formElem.elements, pageLoadingObj, resetFormResultsFunc) === false) return false;
    if ((0, $8c5be27506888ecd$export$6f5f5dcb4e20a0c)(formElem.elements, pageLoadingObj, resetFormResultsFunc) === false) return false;
    const dataObj = $2b5c36866ff45806$export$12ab77af4a73570b(formElem);
    return dataObj;
}
function $2b5c36866ff45806$export$241822f9875d916a(bool, [linkElems, inactivateFunc]) {
    const allFieldsets = document.querySelectorAll("fieldset");
    const allLinks = document.querySelectorAll("a");
    const inactivateLink = (ev)=>ev.preventDefault();
    if (bool) {
        (0, $15997b637164a62c$export$27455646898a1c8b).style.pointerEvents = "none";
        allFieldsets.forEach((el)=>el.disabled = true);
        allLinks.forEach((el)=>el.addEventListener("click", inactivateLink));
        return [
            allLinks,
            inactivateLink
        ];
    } else {
        (0, $15997b637164a62c$export$27455646898a1c8b).style.pointerEvents = "initial";
        allFieldsets.forEach((el)=>el.disabled = false);
        linkElems.forEach((el)=>el.removeEventListener("click", inactivateFunc));
    }
}


function $94bee5f962a0a714$export$1f73f60bdb811cb1(obj, formName) {
    const jsonData = JSON.stringify(obj);
    localStorage.setItem(formName, jsonData);
}
function $94bee5f962a0a714$export$d3720feff416e85b(formName) {
    const obj = JSON.parse(localStorage.getItem(formName));
    return obj;
}
function $94bee5f962a0a714$export$830e2a40eb145d56() {
    localStorage.clear();
}
function $94bee5f962a0a714$export$ac5aec18c53295c4(formsArr) {
    for (const formElem of formsArr){
        const localStorageObj = $94bee5f962a0a714$export$d3720feff416e85b(formElem.name);
        if (localStorageObj === null) {
            console.info("No localStorage for this form ...");
            return null;
        }
        for(const key in localStorageObj){
            const target = formElem[key];
            // const target = formElem.querySelector(`input[name=${key}]`);
            target.value = localStorageObj[key];
        }
    }
}






function $017acf0a5c2ae071$export$bfa882462f094926(hasCheckmark) {
    $017acf0a5c2ae071$var$onReset(null, (0, $15997b637164a62c$export$6ba54d0643c914d9), $017acf0a5c2ae071$export$2ba0d299dfefa33, hasCheckmark);
}
function $017acf0a5c2ae071$export$2ba0d299dfefa33() {
    $017acf0a5c2ae071$var$resetResults((0, $15997b637164a62c$export$896c6fda96e1be71));
}
function $017acf0a5c2ae071$export$22399b0f8acc017b() {
    $017acf0a5c2ae071$var$resetAllForms();
    const configArr = (0, $2b5c36866ff45806$export$241822f9875d916a)(true, []);
    (0, $ec0d231051d0b4ce$export$59f31b448d0bd65f).open().then((msg)=>{
        (0, $94bee5f962a0a714$export$830e2a40eb145d56)();
        (0, $15997b637164a62c$export$6ba54d0643c914d9).reset();
        (0, $ec0d231051d0b4ce$export$ac8f660c554604aa)(true);
        location.reload();
    }).catch((msg)=>{}).finally(()=>(0, $2b5c36866ff45806$export$241822f9875d916a)(false, configArr));
}
function $017acf0a5c2ae071$var$resetAllForms() {
    $017acf0a5c2ae071$export$bfa882462f094926(false);
}
function $017acf0a5c2ae071$var$resetResults(resultElementsCollection) {
    resultElementsCollection.forEach((el)=>{
        el.style.fontWeight = "initial";
        if (el.className.includes("-secondary") === false) el.textContent = "####";
        else el.textContent = "###";
    });
}
function $017acf0a5c2ae071$var$onReset(ev, formElem, resetResultHandler, hasCheckmark) {
    formElem.reset();
    $017acf0a5c2ae071$var$resetFieldsOutline(formElem);
    resetResultHandler();
    (0, $ec0d231051d0b4ce$export$ac8f660c554604aa)(hasCheckmark);
}
function $017acf0a5c2ae071$var$resetFieldsOutline(formElem) {
    const formInputsCollection = formElem.querySelectorAll("input");
    for (const field of formInputsCollection)field.style.outline = "none";
}



function $29e5a3e5a5fd8ee6$export$f8b96e8c63895cb0(data) {
    const doughWeight = $29e5a3e5a5fd8ee6$var$getTotalDoughWeight(data.crustsCount, data.crustWeight);
    const flourWeight = $29e5a3e5a5fd8ee6$var$getTotalFlour(doughWeight, data.hydrationPercent, data.saltPercent);
    const saltWeight = $29e5a3e5a5fd8ee6$var$getTotalIngredientWeight(flourWeight, data.saltPercent);
    const liquidIngredsWeight = $29e5a3e5a5fd8ee6$var$getTotalIngredientWeight(flourWeight, data.hydrationPercent);
    const vinegarWeight = $29e5a3e5a5fd8ee6$var$getTotalIngredientWeight(flourWeight, data.vinegarPercent);
    const oilWeight = $29e5a3e5a5fd8ee6$var$getTotalIngredientWeight(flourWeight, data.oilPercent);
    const waterWeight = $29e5a3e5a5fd8ee6$var$getTotalWaterWeight(liquidIngredsWeight, vinegarWeight, oilWeight);
    return {
        doughWeight: doughWeight,
        flourWeight: flourWeight,
        saltWeight: saltWeight,
        liquidIngredsWeight: liquidIngredsWeight,
        vinegarWeight: vinegarWeight,
        oilWeight: oilWeight,
        waterWeight: waterWeight
    };
}
function $29e5a3e5a5fd8ee6$var$getTotalDoughWeight(crustsCount, crustWeight) {
    return Number(crustsCount) * Number(crustWeight);
}
function $29e5a3e5a5fd8ee6$var$getTotalFlour(totalDoughWeight, hydrationPercentValue, saltPercent) {
    return totalDoughWeight / (1 + Number(hydrationPercentValue / 100) + Number(saltPercent / 100));
}
function $29e5a3e5a5fd8ee6$var$getTotalWaterWeight(liquidIngredientsWeight, vinegarWeight, oilWeight) {
    return liquidIngredientsWeight - (vinegarWeight + oilWeight);
}
function $29e5a3e5a5fd8ee6$var$getTotalIngredientWeight(totalFlour, ingredientPercentValue) {
    return totalFlour * (Number(ingredientPercentValue) / 100);
}


function $04c7c13b4e3cd1de$export$a15830086971dc82(ev) {
    $04c7c13b4e3cd1de$var$onSubmit(ev, (0, $15997b637164a62c$export$6ba54d0643c914d9), {
        isFirstPageLoad: true
    }, (0, $b984cb5c7d2db111$export$dd9a535c344cd1c3));
}
function $04c7c13b4e3cd1de$export$e745b6be1bf48409(ev) {
    $04c7c13b4e3cd1de$var$onSubmit(ev, (0, $15997b637164a62c$export$6ba54d0643c914d9), {
        isFirstPageLoad: false
    }, (0, $b984cb5c7d2db111$export$dd9a535c344cd1c3), (0, $017acf0a5c2ae071$export$2ba0d299dfefa33), "#results-fMain");
}
function $04c7c13b4e3cd1de$export$21d3061459962f2d(ev) {
    $04c7c13b4e3cd1de$var$onSave(ev, (0, $15997b637164a62c$export$6ba54d0643c914d9), true);
}
function $04c7c13b4e3cd1de$export$e2d90e671ee5587d(ev) {
    const allForms = document.querySelectorAll("form");
    for (const form of allForms)$04c7c13b4e3cd1de$var$onSave(ev, form, false);
    (0, $ec0d231051d0b4ce$export$ac8f660c554604aa)(true);
}
function $04c7c13b4e3cd1de$var$onSave(ev, formElem, hasCheckmark) {
    const currFormData = (0, $2b5c36866ff45806$export$12ab77af4a73570b)(formElem);
    const currFormName = formElem.name;
    (0, $94bee5f962a0a714$export$1f73f60bdb811cb1)(currFormData, currFormName);
    (0, $ec0d231051d0b4ce$export$ac8f660c554604aa)(hasCheckmark);
}
function $04c7c13b4e3cd1de$var$onSubmit(ev, formElem, loadingConfig, printFunc, resetFormResultsFunc, href) {
    if (loadingConfig.isFirstPageLoad !== true) ev.preventDefault();
    const data = (0, $2b5c36866ff45806$export$7a171f172be0782e)(formElem, loadingConfig, resetFormResultsFunc);
    if (data === false) return;
    (0, $94bee5f962a0a714$export$1f73f60bdb811cb1)(data, formElem.name);
    const resultsData = (0, $29e5a3e5a5fd8ee6$export$f8b96e8c63895cb0)(data);
    printFunc(resultsData);
    if (loadingConfig.isFirstPageLoad !== true) {
        (0, $ec0d231051d0b4ce$export$ac8f660c554604aa)(true);
        const screenWidth = window.screen.width;
        const screenAvailWidth = window.screen.availWidth;
        if (href) {
            if (screenWidth <= 680 || screenAvailWidth <= 680) location.href = href;
        }
    }
}


function $4c00ff803077f86e$export$37a462f35da823bc() {
    const formInputsCollection = document.querySelectorAll("input");
    for (const field of formInputsCollection){
        field.addEventListener("focusout", ()=>$4c00ff803077f86e$var$focusoutEmptyFieldValidation(field));
        field.addEventListener("focusout", ()=>$4c00ff803077f86e$var$focusoutOutOfRangeValidation(field));
    }
}
function $4c00ff803077f86e$var$focusoutOutOfRangeValidation(currentField) {
    if (currentField.type === "number" && currentField.value !== "") {
        const num = Number(currentField.value);
        const minLimit = Number(currentField.min);
        let maxLimit = Number(currentField.max);
        if (maxLimit === 0) maxLimit = Number.MAX_SAFE_INTEGER;
        if (num < minLimit || num > maxLimit) {
            currentField.style.outline = "2px solid red";
            return false;
        } else {
            currentField.style.outline = "none";
            return true;
        }
    }
}
function $4c00ff803077f86e$var$focusoutEmptyFieldValidation(currentField) {
    if (currentField.required === false) return;
    if (currentField.value === "") currentField.style.outline = "2px solid green";
    else currentField.style.outline = "none";
}





function $88c1bc78d227d87d$export$aab9776c29f92022() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) (0, $15997b637164a62c$export$f1553a5662cd6555).style.display = "block";
    else (0, $15997b637164a62c$export$f1553a5662cd6555).style.display = "none";
}
function $88c1bc78d227d87d$export$b0814932efa7a0aa() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    const path = `${window.location.pathname}` || "";
    const newURL = window.location.protocol + "//" + window.location.host + path;
    history.replaceState(null, "", newURL);
}



document.addEventListener("DOMContentLoaded", (ev)=>{
    (0, $94bee5f962a0a714$export$ac5aec18c53295c4)([
        (0, $15997b637164a62c$export$6ba54d0643c914d9)
    ]);
    (0, $04c7c13b4e3cd1de$export$a15830086971dc82)(ev);
});
// -- Button-to-top listeners
window.addEventListener("scroll", (0, $88c1bc78d227d87d$export$aab9776c29f92022));
(0, $15997b637164a62c$export$f1553a5662cd6555).addEventListener("click", (0, $88c1bc78d227d87d$export$b0814932efa7a0aa));
// -- Buttons - global
(0, $15997b637164a62c$export$e24bed9de9d86c6e).addEventListener("click", (0, $017acf0a5c2ae071$export$22399b0f8acc017b));
(0, $15997b637164a62c$export$baf89896430e5b33).addEventListener("click", (0, $04c7c13b4e3cd1de$export$e2d90e671ee5587d));
// Listeners
(0, $4c00ff803077f86e$export$37a462f35da823bc)();
(0, $8c5be27506888ecd$export$a65b13b410117413)();
// -- Buttons listeners
document.addEventListener("click", (ev)=>{
    if (ev.target.tagName !== "BUTTON") return;
    const btnsGroupClassName = ev.target.parentElement.className;
    const btnClassName = ev.target.className;
    if (btnsGroupClassName.includes("-main")) {
        // console.log('MAIN');
        if (btnClassName === "btn-submit") (0, $04c7c13b4e3cd1de$export$e745b6be1bf48409)(ev);
        else if (btnClassName === "btn-reset") (0, $017acf0a5c2ae071$export$bfa882462f094926)(true);
        else if (btnClassName === "btn-save") (0, $04c7c13b4e3cd1de$export$21d3061459962f2d)(ev);
    }
});


//# sourceMappingURL=index.60832ead.js.map
