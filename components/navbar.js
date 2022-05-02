let navbar = () => {
    return `<h1><a href="index.html">News App</a></h1>

    <input id="search_input" type="text" placeholder="Search News" >`;
}

let sidebar = () => {
    return `<h2>Countries</h2>
    <div id="countries">
    <h3 id='in'>India</h3>
    <h3 id='ch'>China</h3>
    <h3 id='us'>USA</h3>
    <h3 id='uk'>UK</h3>
    <h3 id='nz'>New Zealand</h3>
    </div>
    `;
}


export {navbar, sidebar};