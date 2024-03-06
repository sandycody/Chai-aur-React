/* Meaning of Rendering */
// Rendering is a process used in web development that turns website code into the interactive pages users see when they visit a website.

// Task is to render <a> tag on browser

// This is custom reactElement which react does it behind the scenes
const reactElement = {
    type: 'a', //element kis type ka ha jase div, p, a, etc..
    props: {  //props means properties and it is an object
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click me to visit google'
} // Ye saare key-value pairs end of the day hume react ke through milte hain but we are writing it customarily


const mainContainer = document.querySelector('#root');

// Ab hum ek method create karenge jo reactElement upar banaya ha usko mainContainer mein add karde

function customRender(reactElement, container) {
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);

    container.appendChild(domElement); */

    // Now we make above code more modular and general

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children; 
    
    for (let prop in reactElement.props) {
        if (prop === 'children') continue;

        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);
}

customRender(reactElement, mainContainer) //First parameter kya inject karna hai and second parameter hota ha ki kisme inject karna ha