const form = document.getElementById("form");
const output = document.getElementById("output");
const container = document.getElementById("container");
const input = document.getElementById("input");
const submitBtn = document.getElementById("submitBtn");

const arr = {
    help: `
                    <div class="row flex scale-up-ver-top"><h2>who-are-you</h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>About Kafle?</span></div>
                    <div class="row flex scale-up-ver-top"><h2>who-am-i</h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Who are you?</span></div>
                    <div class="row flex scale-up-ver-top"><h2>social</h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Social Networks</span></div>
                    <div class="row flex scale-up-ver-top"><h2>projects</h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>View Projects</span></div>
                    <div class="row flex scale-up-ver-top"><h2>help</h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>I'm not helping you again</span></div>
                    <div class="row flex scale-up-ver-top"><h2>clear</h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Clears the terminal</span></div>
                    `,
    "who-are-you": `<h2>I am Kundan Kafle, a front-end web developer.   </h2>
                    <p>
                        I design and build digital products. <br/>
                        I don't like to define myself by the work I've done.I define
                        myself by the work I want to do. Skills can be taught,
                        personality is inherent.I prefer to keep learning,continue
                        challenging myself,and do interesting things that matter.
                    </p>`,
    "who-am-i":     `<p>You are a visitor to my website who is keen and desperate to be successful</p>`,
    projects : `<p>You can check some of my projects in github. <br/>
    https://github.com/KafleKundan/
    <p/>`
};

let query = "";
let outputText = `Microsoft Windows [Version 10.0.19044.1706] <br />
(c) Microsoft Corporation. All rights reserved. <br />
Type 'help' to get commands available`;
const outputRenderer = () => {
    output.innerHTML = outputText;
    input.value = "";
};
outputRenderer();
input.addEventListener("input", (e) => {
    query = e.target.value;
    console.log(query);
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkCommands(query);
});

const checkCommands = (inputText) => {
    if (inputText === "clear") {
        outputText = "";
        outputRenderer();
    } else if (inputText in arr) {
        outputText =
            outputText +
            ` <div class="row flex"><span>C:&bsol;users&bsol;pc> ${inputText} </span></div>` +
            arr[inputText];
        outputRenderer();
    }
};
