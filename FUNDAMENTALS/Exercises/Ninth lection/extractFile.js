function extractFile(input) {
    let file = input.split("\\").pop();
    let name = file.split(".");
    name.pop();
    console.log(`File name: ${name.join(".")}`);
    console.log(`File extension: ${file.split(".").pop()}`)
}
extractFile('C:\\Internal\\training-internal\\Template.bkm.pptx');