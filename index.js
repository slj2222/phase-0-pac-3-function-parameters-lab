//test #1
function introduction(name) {
    return (`Hi, my name is ${name}.`);
}
introduction("Aki")

//test #2
function introductionWithLanguage(name, language) {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}
//test #3, copy of test #2, but adding default language as "JavaScript".
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}
//test #4
