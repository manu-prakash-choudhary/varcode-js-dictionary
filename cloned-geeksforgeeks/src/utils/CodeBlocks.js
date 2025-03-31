export const htmlTutorial = {
  language: "html",
  theme: "a11y-light",
  text: `<!DOCTYPE html>
  <html>
  <head>
      <title>HTML Tutorial</title>
  </head>
  <body>
      <p>Hello World!</p>
  </body>
  </html>`,
};

export const htmlTutorialNew = {
  language: "html",
  theme: "a11y-light",
  text: `<!DOCTYPE html>
<html>
<head>
    <title>My First Webpage</title>
</head>
<body>
    <h1>Welcome to My Webpage</h1>
    <p>This is my first paragraph of text!</p>
</body>
</html>
`,
};
/////////////// html hyperlinks //////////////
export const htmlLink1 = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>HTML Links</title>
</head>

<body>
    <p>Click on the following link</p>
    <a href="https://www.varcode.in/">
        varcode
    </a>
</body>

</html>
`,
};
export const htmlLink2 = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>Target Attribute Example</title>
</head>

<body>
    <h3>
        Various options available in the
        Target Attribute
    </h3>

    <p>
        If you set the target attribute to
        "_blank", the link will open in a new
        browser window or tab.
    </p>
    <a href="https://www.varcode.in/" 
       target="_blank">
        varcode
    </a>

    <p>
        If you set the target attribute to
        "_self", the link will open in the
        same window or tab.
    </p>
    <a href="https://www.varcode.in/" 
       target="_self">
        varcode
    </a>

    <p>
        If you set the target attribute to
        "_top", the link will open in the full
        body of the window.
    </p>
    <a href="https://www.varcode.in/" 
       target="_top">
        varcode
    </a>

    <p>
        If you set the target attribute to
        "_parent", the link will open in the
        parent frame.
    </p>
    <a href="https://www.varcode.in/" 
       target="_parent">
        varcode
    </a>
</body>

</html>
`,
};

  ///////////////// html images ////////////
export const htmlImage = {
  language: "html",
  theme: "a11y-light",
  text: `<!DOCTYPE html>
<html>

<body>
    <img src=
"https://varcode.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.bab09975.png&w=1920&q=75" 
         alt="varcode image" />
</body>

</html>
`,
};

export const htmlImagetag = {
  language: "html",
  theme: "a11y-light",
  text: `<!DOCTYPE html>
<html>

<body>
    <img src=
"https://varcode.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.bab09975.png&w=1920&q=75"
        alt="This is varcode logo" />
</body>

</html>
`,
};

export const htmlImageSetSize = {
  language: "html",
  theme: "a11y-light",
  text: `<!DOCTYPE html>
<html>

<body>
    <img src=
"https://varcode.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.bab09975.png&w=1920&q=75"
        alt="varcode logo" 
        width="300" 
        height="300" />
</body>

</html>
`,
};


export const htmlImageAddTitle = {
  language: "html",
  theme: "a11y-light",
  text: `<!DOCTYPE html>
<html>

<body>
    <img src=
"https://varcode.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.bab09975.png&w=1920&q=75"
        alt="varcode logo" 
        width="200" 
        height="200" 
        title="Logo of varcode" />
</body>

</html>
`,
};


export const htmlStyleImage = {
  language: "html",
  theme: "a11y-light",
  text: `<!DOCTYPE html>
<html>

<body>
    <img src=
"https://varcode.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.bab09975.png&w=1920&q=75"
        alt="varcode logo" 
        width="200" 
        height="200" 
        border="5" />
</body>

</html>
`,
};

export const htmlImageAlignment = {
  language: "html",
  theme: "a11y-light",
  text: `<!DOCTYPE html>
<html>

<body>
    <img 
src="https://varcode.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.bab09975.png&w=1920&q=75"
        alt="varcode logo" 
        align="right" />
</body>

</html>
`,
};

export const htmlAddImageLink = {
  language: "html",
  theme: "a11y-light",
  text: `<!DOCTYPE html>
<html>

<body>
    <a href="https://ide.geeksforgeeks.org/tryit.php">
        <img src=
"https://varcode.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.bab09975.png&w=1920&q=75"
            alt="varcode logo" />
    </a>
</body>

</html>
`,
};
export const htmlAddingAnimatedImage = {
  language: "html",
  theme: "a11y-light",
  text: `<!DOCTYPE html>
<html>

<body>
    <img src="smiley.gif" 
         alt="smiley" 
         style="width: 200px; height: 200px" /> 
</body>
  
</html>
`,
};

export const htmlFavicon = {
  language: "html",
  theme: "a11y-light",
  text: `<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title>varCode</title>

    <!-- Add icon link -->
    <link rel="icon" href="https://varcode.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo
    .bab09975.png&w=1920&q=75"
    type="image/x-icon">
</head>

<body>
    <h3 style="color:green;">
        varCode Edutech
    </h3>
    <p>Welcome to my website</p>
</body>

</html>
`,
};

// Html tables ///////////

export const htmlTables = {
  language: "html",
  theme: "a11y-light",
  text: `<!-- index.html -->
<!DOCTYPE html>
<html>

<body>
    <table>
        <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
        </tr>
        <tr>
            <td>Priya</td>
            <td>Sharma</td>
            <td>24</td>
        </tr>
        <tr>
            <td>Arun</td>
            <td>Singh</td>
            <td>32</td>
        </tr>
        <tr>
            <td>Sam</td>
            <td>Watson</td>
            <td>41</td>
        </tr>
    </table>
</body>

</html>
`,
};


export const htmlAnotherTables = {
  language: "html",
  theme: "a11y-light",
  text: `<!-- index.html -->
<!DOCTYPE html>
<html>

<body>
    <table>
        <tr>
            <th>Book Name</th>
            <th>Author Name</th>
            <th>Genre</th>
        </tr>
        <tr>
            <td>The Book Thief</td>
            <td>Markus Zusak</td>
            <td>Historical Fiction</td>
        </tr>
        <tr>
            <td>The Cruel Prince</td>
            <td>Holly Black</td>
            <td>Fantasy</td>
        </tr>
        <tr>
            <td>The Silent Patient</td>
            <td> Alex Michaelides</td>
            <td>Psychological Fiction</td>
        </tr>
    </table>
</body>

</html>
`,
};


export const htmlTableBorder = {
  language: "html",
  theme: "a11y-light",
  text: `<!-- index.html -->
<!DOCTYPE html>
<html>

<head>
    <style>
        table,
        th,
        td {
            border: 1px solid black;
        }
    </style>
</head>

<body>
    <table style="width:100%">
        <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
        </tr>
        <tr>
            <td>Priya</td>
            <td>Sharma</td>
            <td>24</td>
        </tr>
        <tr>
            <td>Arun</td>
            <td>Singh</td>
            <td>32</td>
        </tr>
        <tr>
            <td>Sam</td>
            <td>Watson</td>
            <td>41</td>
        </tr>
    </table>
</body>

</html>
`,
};

export const htmlTableCollapseBorder = {
  language: "html",
  theme: "a11y-light",
  text: `<!-- index.html -->
<!DOCTYPE html>
<html>

<head>
    <style>
    table,
    th,
    td {
        border: 1px solid black;
        border-collapse: collapse;
    }
    </style>
</head>

<body>
    <table style="width:100%">
        <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
        </tr>
        <tr>
            <td>Priya</td>
            <td>Sharma</td>
            <td>24</td>
        </tr>
        <tr>
            <td>Arun</td>
            <td>Singh</td>
            <td>32</td>
        </tr>
        <tr>
            <td>Sam</td>
            <td>Watson</td>
            <td>41</td>
        </tr>
    </table>
</body>

</html>
`,
};

export const htmlTableCellPadding = {
  language: "html",
  theme: "a11y-light",
  text: `<!-- index.html -->
<!DOCTYPE html>
<html>

<head>
    <style>
    table,
    th,
    td {
        border: 1px solid black;
        border-collapse: collapse;
    }
    
    th,
    td {
        padding: 20px;
    }
    </style>
</head>

<body>
    <table style="width:100%">
        <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
        </tr>
        <tr>
            <td>Priya</td>
            <td>Sharma</td>
            <td>24</td>
        </tr>
        <tr>
            <td>Arun</td>
            <td>Singh</td>
            <td>32</td>
        </tr>
        <tr>
            <td>Sam</td>
            <td>Watson</td>
            <td>41</td>
        </tr>
    </table>
</body>

</html>
`,
};


export const htmlTableLeftAlign = {
  language: "html",
  theme: "a11y-light",
  text: `<!-- index.html -->
<!DOCTYPE html>
<html>

<head>
    <style>
        table,
        th,
        td {
            border: 1px solid black;
            border-collapse: collapse;
        }

        th,
        td {
            padding: 20px;
        }

        th {
            text-align: left;
        }
    </style>
</head>

<body>
    <table style="width:100%">
        <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
        </tr>
        <tr>
            <td>Priya</td>
            <td>Sharma</td>
            <td>24</td>
        </tr>
        <tr>
            <td>Arun</td>
            <td>Singh</td>
            <td>32</td>
        </tr>
        <tr>
            <td>Sam</td>
            <td>Watson</td>
            <td>41</td>
        </tr>
    </table>
</body>

</html>
`,
};


export const htmlTableBorderSpacing = {
  language: "html",
  theme: "a11y-light",
  text: `<!-- index.html -->
<!DOCTYPE html>
<html>

<head>
    <style>
        table,
        th,
        td {
            border: 1px solid black;
        }

        table {
            border-spacing: 5px;
        }
    </style>
</head>

<body>
    <table style="width:100%">
        <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
        </tr>
        <tr>
            <td>Priya</td>
            <td>Sharma</td>
            <td>24</td>
        </tr>
        <tr>
            <td>Arun</td>
            <td>Singh</td>
            <td>32</td>
        </tr>
        <tr>
            <td>Sam</td>
            <td>Watson</td>
            <td>41</td>
        </tr>
    </table>
</body>

</html>
`,
};

export const htmlTableCellCol = {
  language: "html",
  theme: "a11y-light",
  text: `<!-- index.html -->
<!DOCTYPE html>
<html>

<head>
    <style>
        table,
        th,
        td {
            border: 1px solid black;
            border-collapse: collapse;
        }

        th,
        td {
            padding: 5px;
            text-align: left;
        }
    </style>
</head>

<body>
    <h2>Cell that spans two columns:</h2>
    <table style="width:100%">
        <tr>
            <th>Name</th>
            <th colspan="2">Telephone</th>
        </tr>
        <tr>
            <td>Vikas Rawat</td>
            <td>9125577854</td>
            <td>8565557785</td>
        </tr>
    </table>
</body>

</html>
`,
};

export const htmlTableCellrow = {
  language: "html",
  theme: "a11y-light",
  text: `<!-- index.html -->
<!DOCTYPE html>
<html>

<head>
    <style>
        table,
        th,
        td {
            border: 1px solid black;
            border-collapse: collapse;
        }

        th,
        td {
            padding: 5px;
            text-align: left;
        }
    </style>
</head>

<body>
    <h2>Cell that spans two rows:</h2>
    <table style="width:100%">
        <tr>
            <th>Name:</th>
            <td>Vikas Rawat</td>
        </tr>
        <tr>
            <th rowspan="2">Telephone:</th>
            <td>9125577854</td>
        </tr>
        <tr>
            <td>8565557785</td>
        </tr>
    </table>
</body>

</html>
`,
};


export const htmlTableCaption = {
  language: "html",
  theme: "a11y-light",
  text: `<!-- index.html -->
<!DOCTYPE html>
<html>

<head>
    <style>
        table,
        th,
        td {
            border: 1px solid black;
            border-collapse: collapse;
        }

        th,
        td {
            padding: 20px;
        }

        th {
            text-align: left;
        }
    </style>
</head>

<body>
    <table style="width:100%">
        <caption>DETAILS</caption>
        <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
        </tr>
        <tr>
            <td>Priya</td>
            <td>Sharma</td>
            <td>24</td>
        </tr>
        <tr>
            <td>Arun</td>
            <td>Singh</td>
            <td>32</td>
        </tr>
        <tr>
            <td>Sam</td>
            <td>Watson</td>
            <td>41</td>
        </tr>
    </table>
</body>

</html>
`,
};


export const htmlTableBackgroundColour = {
  language: "html",
  theme: "a11y-light",
  text: `<!-- index.html -->
<!DOCTYPE html>
<html>

<head>
    <style>
        table,
        th,
        td {
            border: 1px solid black;
            border-collapse: collapse;
        }

        th,
        td {
            padding: 5px;
            text-align: left;
        }

        table#t01 {
            width: 100%;
            background-color: #f2f2d1;
        }
    </style>
</head>

<body>
    <table style="width:100%">
        <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
        </tr>
        <tr>
            <td>Priya</td>
            <td>Sharma</td>
            <td>24</td>
        </tr>
        <tr>
            <td>Arun</td>
            <td>Singh</td>
            <td>32</td>
        </tr>
        <tr>
            <td>Sam</td>
            <td>Watson</td>
            <td>41</td>
        </tr>
    </table>
    <br />
    <br />
    <table id="t01">
        <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
        </tr>
        <tr>
            <td>Priya</td>
            <td>Sharma</td>
            <td>24</td>
        </tr>
        <tr>
            <td>Arun</td>
            <td>Singh</td>
            <td>32</td>
        </tr>
        <tr>
            <td>Sam</td>
            <td>Watson</td>
            <td>41</td>
        </tr>
    </table>
</body>

</html>
`,
};


export const htmlNestedTable = {
  language: "html",
  theme: "a11y-light",
  text: `<!-- index.html -->
<!DOCTYPE html>
<html>

<body>
    <table border=5 bordercolor=black>
        <tr>
            <td> First Column of Outer Table </td>
            <td>
                <table border=5 bordercolor=grey>
                    <tr>
                        <td> First row of Inner Table </td>
                    </tr>
                    <tr>
                        <td> Second row of Inner Table </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>
`,
};

/////// html Lists /////////////

export const htmlLists = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>
  
<body>
    <h2>Welcome To GeeksforGeeks Learning</h2>
    <h5>List of available courses</h5>
    <ul>
        <li>Data Structures & Algorithm</li>
        <li>Web Technology</li>
        <li>Aptitude & Logical Reasoning</li>
        <li>Programming Languages</li>
    </ul>
  
    <h5>Data Structures topics</h5>
    <ol>
        <li>Array</li>
        <li>Linked List</li>
        <li>Stacks</li>
        <li>Queues</li>
        <li>Trees</li>
        <li>Graphs</li>
    </ol>
  
</body>

</html>
  `,
};


export const htmlUnorderedLists = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<body>
    <h2>Grocery list</h2>
    <ul>
        <li>Bread</li>
        <li>Eggs</li>
        <li>Milk</li>
        <li>Coffee</li>
    </ul>
</body>

</html>
  `,
};


export const htmlOrderedLists = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>HTML ol tag</title>
</head>

<body>
    <h1 style="color: green">GeeksforGeeks</h1>
    <h3>HTML ol tag</h3>
    
<p>reversed attribute</p>



    <ol reversed>
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
    </ol>
    
<p>start attribute</p>


    <ol start="5">
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
    </ol>
    
<p>type attribute</p>


    <ol type="i">
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
    </ol>
</body>

</html>
  `,
};

export const htmlDescriptionLists = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<body>
    <h2>A Description List</h2>
    <dl> 
        <dt>Coffee</dt>
        <dd>- 500 gms</dd>
        <dt>Milk</dt>
        <dd>- 1 ltr Tetra Pack</dd>
    </dl>
</body>

</html>
`,};

export const htmlBasicOrderedList = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>
<head>
    <title>Simple Ordered List</title>
</head>
<body>
    <h2>My To-Do List</h2>
    <ol>
        <li>Go grocery shopping</li>
        <li>Pay utility bills</li>
        <li>Prepare dinner</li>
    </ol>
</body>
</html>
`,
};


export const htmlNumberOrderedList = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>Numbered List Example</title>
</head>

<body>
    <h2>Ordered List with Numbers</h2>
    <ol>
        <li>JavaScript</li>
        <li>Python</li>
        <li>Java</li>
        <li>C++</li>
        <li>C#</li>
    </ol>
</body>

</html>
`,
};


export const htmlUpperLetterOrderedList = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>
        Uppercase Letters Ordered List
    </title>
</head>

<body>
    <h2>Uppercase Letters Ordered List</h2>
    <ol type="A">
        <li>Apple</li>
        <li>Banana</li>
        <li>Cherry</li>
        <li>Date</li>
    </ol>
</body>

</html>
`,
};


export const htmlLowerLetterOrderedList = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>
        Lowercase Letters Ordered List
    </title>
</head>

<body>
    <h2>Lowercase Letters Ordered List</h2>
    <ol type="a">
        <li>CSK</li>
        <li>MI</li>
        <li>KKR</li>
        <li>DC</li>
    </ol>
</body>

</html>
`,
};


export const htmlUpperRomanOrderedList = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>
        Uppercase Roman Numbers Ordered List
    </title>
</head>

<body>
    <h2>
        Uppercase Roman Numbers Ordered List
    </h2>
    <ol type="I">
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
        <li>Fourth item</li>
    </ol>
</body>

</html>
`,
};


export const htmlLowerRomanOrderedList = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>
        Lowercase Roman Numbers Ordered List
    </title>
</head>

<body>
    <h2>
        Lowercase Roman Numbers Ordered List
    </h2>
    <ol type="i">
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
        <li>Fourth item</li>
    </ol>
</body>

</html>
`,
};


export const htmlReverseOrderedList = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>
<head>
    <title>Reverse Ordered List</title>
</head>
<body>
    <h1>Top 5 Movies to Watch</h1>
    <ol reversed>
        <li>The Shawshank Redemption</li>
        <li>The Godfather</li>
        <li>Inception</li>
        <li>Interstellar</li>
        <li>Pulp Fiction</li>
    </ol>
</body>
</html>
`,
};


export const htmlControlList = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>Control List Counting</title>
</head>

<body>
    <h2>Control List Counting</h2>
    <ol start="5">
        <li>Item 5</li>
        <li>Item 6</li>
        <li>Item 7</li>
        <li>Item 8</li>
    </ol>
</body>

</html>
`,
};


export const htmlNestedOrderedList = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>Nested Ordered List</title>
</head>

<body>
    <h2>Nested Ordered List</h2>
    <ol>
        <li>
            JavaScript
            <ol>
                <li>React</li>
                <li>Angular</li>
                <li>Vue.js</li>
            </ol>
        </li>
        <li>
            Python
            <ol>
                <li>Django</li>
                <li>Flask</li>
                <li>Pyramid</li>
            </ol>
        </li>
    </ol>
</body>

</html>
`,
};


export const htmlUnorderedListEx1 = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>
        HTML Unordered Lists
    </title>
</head>

<body>
    <h2>HTML Unordered Lists</h2>

    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>React</li>
    </ul>
</body>

</html>
`,
};


export const htmlUnorderedListEx2 = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>
        Square type unordered list
    </title>
</head>

<body>
    <h2>Square type unordered list</h2>

    <ul style="list-style-type: square">
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>React</li>
    </ul>
</body>

</html>
`,
};

export const htmlUnorderedListEx3 = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>
        Circle type unordered list
    </title>
</head>

<body>
    <h2> Circle type unordered list</h2>

    <ul style="list-style-type:circle;">
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>React</li>
    </ul>
</body>

</html>
`,
};

export const htmlUnorderedListEx4 = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>
        None type unordered list
    </title>
</head>

<body>
    <h2>None type unordered list</h2>

    <ul style="list-style-type:none;">
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>React</li>
    </ul>
</body>

</html>
`,
};

export const htmlNestedUnorderedList = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>Nested unordered list</title>
</head>

<body>
    <h2>Nested unordered list</h2>

    <ul>
        <li>Geeks</li>
        <li>
            Web Development
            <ul>
                <li>HTML</li>
                <li>CSS</li>
            </ul>
        </li>
        <li>Javascript</li>
    </ul>

    <ul type="square">
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
    </ul>
</body>

</html>
`,
};

export const htmlHorizontalUnorderedList = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>HTML Horizontal Unordered List</title>
    <style>
        body {
            text-align: center;
        }

        ul {
            overflow: hidden;
            background-color: #1d6b0d;
            list-style-type: none;
        }

        li {
            float: left;
        }

        li a {
            text-decoration: none;
            color: white;
            padding: 0.5rem;
        }
    </style>
</head>

<body>
    <h3>HTML Horizontal Unordered List</h3>

    <ul>
        <li><a href="#course">Course</a></li>
        <li><a href="#Blog">Blogs</a></li>
        <li>
            <a href="#Content">Content</a>
        </li>
    </ul>
</body>

</html>
`,
};

export const htmlDescriptionListEx1 = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>Description Lists Example</title>
</head>

<body>
    <h2>HTML Description Lists</h2>
    <dl>
        <dt>HTML</dt>
        <dd>
            HyperText Markup Language
        </dd>

        <dt>CSS</dt>
        <dd>
            Cascading Style Sheets
        </dd>

        <dt>JavaScript</dt>
        <dd>
           Scripting language for Web pages
        </dd>
    </dl>
</body>

</html>
`,
};

export const htmlDescriptionListEx2 = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>
<head>
    <title>Nested Description List</title>
</head>
<body>
    <h3>Technology Overview</h3>
    <dl>
        <dt>Hardware</dt>
        <dd>Physical devices</dd>
        <dd>
            <dl> <!-- Nested Description List for Hardware Types -->
                <dt>CPUs</dt>
                <dd>Processors</dd>
                <dt>GPUs</dt>
                <dd>Graphics</dd>
            </dl>
        </dd>
        <dt>Software</dt>
        <dd>Programs/Apps</dd>
        <dd>
            <dl> <!-- Nested Description List for Software Types -->
                <dt>System</dt>
                <dd>OS</dd>
                <dt>Application</dt>
                <dd>Tools</dd>
            </dl>
        </dd>
    </dl>
</body>
</html>
`,
};

////////////////  html Inline and block //////////////////
export const htmlInlineEx1 = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>
    <body>
        <div>
   varcode
        </div>
  Checkout the varcode
        <a alt="varcode" href="https://www.varcode.in/">
   official
        </a>
  website for the articles on various courses.
    </body>
</html>
`,
};


export const htmlInlineEx2 = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>Block-level Element</title>
</head>

<body>
    <div>
        <h1>varcode</h1>
        <h3>varcode is a Educational portal.</h3>
        <h3>
            You can give reviews as well as
            contribute posts on this portal.
        </h3>
    </div>
</body>

</html>
`,
};


export const htmlInlineEx3 = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>HTML span element</title>
    <style>
        body {
            text-align: center;
        }

        h1 {
            color: green;
        }

        span {
            color: red;
        }
    </style>
</head>

<body>
    <h1>varcode
        <span> Edtech</span>
    </h1>
</body>

</html>
`,
};

//////////////  html Iframe ////////////

export const htmlIframeEx1 = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>HTML iframe Tag</title>
</head>

<body style="text-align: center">
    <h2>HTML iframe Tag</h2>
    <iframe src=
"https://www.varcode.in//wp-content/uploads/20240206111438/uni2.html"
            height="370"
            width="400">
    </iframe>
</body>

</html>
`,
};


export const htmlIframeEx2 = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<body>
    <h2>HTML iframe Tag</h2>

    <p>
        Content goes here
    </p>

    <iframe src=
"https://www.varcode.in/wp-content/uploads/20240206111438/uni2.html"
            height="395" 
            width="400">
    </iframe>
</body>

</html>
`,
};


export const htmlIframeEx3 = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<body>
    <h2>HTML iframe Tag</h2>
    <p>Content goes here</p>

    <iframe src=
"https://www.varcode.in/wp-content/uploads/20231227155729/jsonPrac3.html" 
            height="300" 
            width="400" 
            style="border: none"> 
    </iframe>
</body>

</html>
`,
};

export const htmlIframeEx4 = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<body>
        
    <p>Content goes here</p>
    <iframe src=
"https://www.varcode.in/wp-content/uploads/20240206111438/uni2.html" 
            height="400" 
            width="400" 
            style="border: 4px solid orange"> 
    </iframe>
</body>

</html>
`,
};


export const htmlIframeEx5 = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<body>
 
    <h2>HTML iframe Tag</h2>

    <p>
        Click the link text
    </p>

    <iframe src=
"https://www.varcode.in/wp-content/uploads/20210910170539/gfg-221x300.png"
            height="400"
            width="350" 
            name="iframe_a">
    </iframe>

    <p>
        <a href=
"https://www.varcode.in/wp-content/uploads/20240206111438/uni2.html"
           target="iframe_a">
            Converter
        </a>
    </p>
</body>

</html>
`,
};

/////////////  html File path   ///////////////////

export const htmlFilePath1 = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>Absolute file path</title>
</head>

<body>
    <img src=
"https://www.varcode.in/wp-content/uploads/varcode.png" 
         alt="My Image" 
         style="width: 400px" />
</body>

</html>
`,
};


export const htmlFilePath2 = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>Relative file path</title>
</head>

<body>
    <h2>File present in the same folder</h2>
    <img src="images/varcode.jpg" 
         alt="My Image" 
         style="width:400px">
</body>

</html>
`,
};

/////////// layout  ///////////////

export const htmlLayout1 = {
    language: "html",
    theme: "a11y-light",
    text: `<html>
<body>
	<header>
		<h1>My Website</h1>
	</header>
	<main>
		<p>Welcome to my website!</p>
	</main>
	<footer>
		<p> 2024 My Website</p>
	</footer>
</body>
</html>
`,
};


export const htmlLayout2 = {
    language: "html",
    theme: "a11y-light",
    text: `<html>
<body>
	<header>
		<h1>My Blog</h1>
	</header>
	<nav>
		<a href="#">Home</a> | <a href="#">About</a> | <a href="#">Contact</a>
	</nav>
	<section>
		<h2>Latest Posts</h2>
		<article>
			<h3>Post Title</h3>
			<p>This is a brief introduction to the blog post.</p>
		</article>
	</section>
	<aside>
		<h2>About Me</h2>
		<p>Short bio or profile information.</p>
	</aside>
	<footer>
		<p>&copy; 2024 My Blog</p>
	</footer>
</body>
</html>
`,
};


export const htmlLayout3 = {
    language: "html",
    theme: "a11y-light",
    text: `<html >
<head>
	<style>
		header {
			background-color: #4caf50;
			color: white;
			text-align: center;
			padding: 1em;
		}
		nav {
			background-color: #333;
			overflow: hidden;
		}
		main {
			padding: 20px;
		}
		footer {
			background-color: #4caf50;
			color: white;
			text-align: center;
			padding: 1em;
		}
	</style>
</head>
<body>
	<header>
		<h1>Styled Page</h1>
	</header>
	<nav>
		<a href="#">Home</a>
		<a href="#">Services</a>
		<a href="#">Contact</a>
	</nav>
	<main>
		<h2>Welcome!</h2>
		<p>This is a simple page.</p>
	</main>
	<footer>
		<p>&copy; 2024 Styled Page</p>
	</footer>
</body>

</html>
`,
};

//////////////  html code elements //////////////

export const htmlCode1 = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<body>
    <pre>
        <code> 
            #include <stdio.h> 
            int main() { 
                printf("Hello Geeks"); 
            } 
        </code> 
    </pre>
</body>

</html>
`,
};

export const htmlCode2 = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>The kbd tag</title>
    <style>
        body {
            text-align: center;
        }
    </style>
</head>

<body>
    <kbd>Alt </kbd>
    <kbd>+</kbd>
    <kbd>Tab</kbd>
    <span>
        is used to switch between open apps
    </span>
</body>

</html>
`,
};

export const htmlCode3 = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>pre tag with CSS</title>
    <style>
        pre {
            font-family: Arial;
            color: #009900;
            margin: 25px;
        }
    </style>
</head>

<body>
    <pre>
        Varcode 
        A Computer  Science Portal  For Everyone 
    </pre>
</body>

</html>
`,
};

export const htmlCode4 = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>samp tag</title>
    <style>
        body {
            text-align: center;
        }

        .codes {
            font-size: 25px;
            font-weight: bold;
        }
    </style>
</head>

<body>
    <div class="codes"><samp> Tag</div>
    <samp>A computer science portal for Everyone</samp>
</body>

</html>
`,
};

export const htmlCode5 = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>var tag</title>
    <style>
        body {
            text-align: center;
        }

        .codes {
            font-size: 25px;
            font-weight: bold;
        }
    </style>
</head>

<body>
    <div class="codes"><var> Tag</div>
    <var>Varcode Variable</var>
</body>

</html>
`,
};


///////////  html semantics ////////////

export const htmlSemanticArticle = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>Article Tag</title>
    <style>
        h1 {
            color: #006400;
            font-size: 50px;
            text-align: left;
        }
        p {
            font-size: 25px;
            text-align: left;
            margin-top: 0;
        }
    </style>
</head>

<body>
    <article>
        <h1>Varcode</h1>
        <p>A Computer Science portal for everyone. It contains well written,
         well thought, and well explained computer science and programming 
         articles, quizzes, and practice/competitive programming/
         company interview questions.</p>
    </article>
</body>

</html>
`,
};


export const htmlSemanticAside = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>Aside Tag</title>
    <style>
        h4 {
        Color:#006400;
        font-size:50px;
        Text-align:none;
        margin-bottom:0px;
        }
        p {
        font-size:25px;
        text-align:none;
        margin-top:0px;
        }
    </style>
</head>

<body>
    <p>varcode is a Computer Science Portal</p>
    <aside>
        <h4>Varcode</h4>
        <p>varcode is a computer Science platform
            where you can learn good programming.
        </p>
    </aside>
</body>

</html>
`,
};


export const htmlSemanticDetails = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>Detail and summary Tag</title>
    <style>
        .var {
        Color:#006400;
        font-size:50px;
        Text-align:none;
        margin-bottom:0px;
        }
        p {
        font-size:25px;
        text-align:none;
        margin-top:0px;
        }
    </style>
</head>

<body>
    <details>
        <summary class="var">
            varcode
        </summary>
        <p>Varcode is a Computer Science portal
            where you can learn good programming.
        </p>
    </details>
</body>

</html>
`,
};

export const htmlSemanticFigure = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>Figcaption Tag</title>
    <style>
        h2 {
        Color:#006400;
        font-size:50px;
        Text-align:none;
        margin-bottom:0px;
        }
        p {
        font-size:25px;
        text-align:none;
        margin-top:0px;
        }
    </style>
</head>

<body>
    <h2>Varcode</h2>
    <figure>
        <img src="4.jpg" 
             alt="var" 
             style="width:20%">
        <figcaption>
          varcode Logo
          </figcaption>
    </figure>
</body>

</html>
`,
};

export const htmlSemanticHeader = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>Header Tag</title>
    <style>
        h1, h3 {
        Color:#006400;
        Text-align:left;
        margin-bottom:0px;
        }
        p {
        font-size:25px;
        text-align:left;
        margin-top:0px;
        }
    </style>
</head>

<body>
    <article>
        <header>
            <h1>Varcode</h1>
            <h3>Varcode</h3>
            <p>A computer Science portal</p>
        </header>
    </article>
</body>

</html>
`,
};

export const htmlSemanticFooter = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>footer Tag</title>
    <style>
        p {
        font-size:25px;
        text-align:left;
        margin-top:0px;
        }
    </style>
</head>

<body>
    <footer>
        <p>
            Posted by: varcode
        </p>

        <p>
            Contact: 
            <a href=
"https://www.varcode.in/">
                varcode.in
            </a>.
        </p>
    </footer>
</body>

</html>
`,
};

export const htmlSemanticMain = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>main Tag</title>
    <style>
        h1 {
        color:#006400;
        }
        p {
        font-size:25px;
        text-align:none;
        margin-top:0px;
        }
    </style>
</head>

<body>
    <main>
        <h1>Important Residences</h1>
        <p>
            A few of them are 
            Rashtrapati Bhavan, 
            White House etc
        </p>

        <article>
            <h1>Rashtrapati Bhavan</h1>
            <p>
                It is the home of 
                the President of India.
            </p>
        </article>
        
        <article>
            <h1>The White House</h1>
            <p>
                It is the home of the 
                President of United
                States of America.
            </p>
        </article>
    </main>
</body>

</html>
`,
};

export const htmlSemanticSection = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>section Tag</title>
    <style>
        h1 {
        color:#006400;
        }
        p {
        font-size:25px;
        text-align:none;
        margin-top:0px;
        }
    </style>
</head>

<body>
    <section>
        <h1>Data Structure</h1>
        <p>
            Data Structure is a data
            organization and storage
            format that enables efficient
            access and modification.
        </p>
    </section>
    <section>
        <h1>Algorithm</h1>
        <p>
            A process or set of rules to
            be followed in calculations
            or other problem-solving
            operations, especially by
            a computer.
        </p>
    </section>
</body>

</html>
`,
};

export const htmlSemanticNav = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>nav Tag</title>
    <style>
        h1 {
        color:#006400;
        }
    </style>
</head>

<body>
    <h1>Navigation Bar</h1>
    <nav>
        <a href="/home/">
            Home
        </a> |
        <a href="/about-us/">
            About Us
        </a> |
        <a href="/data-structure/">
            Data Structure
        </a> |
        <a href="/operating-system/">
            Operating System
        </a>
    </nav>
</body>

</html>
`,
};

export const htmlSemanticMark = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>mark Tag</title>
    <style>
        h1 {
        color:#006400;
        }
    </style>
</head>

<body>
    <h1>mark tag</h1>
    <p>
        varcode is a
        <mark>Computer Science</mark>
        portal
    </p>
</body>

</html>
`,
};

///////////////  html graphics SVG Example  ////////////////

export const htmlSvg = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
        />
        <title>Inline SVG Example</title>
    </head>
    <body>
        <h2> SVG Image Example</h2>
        <svg width="100" height="100">
            <circle
                cx="50"
                cy="50"
                r="40"
                fill="red"
            />
        </svg>
    </body>
</html>
`,
};

//////////////// html tutorial reference ///////////

export const htmlTutorialReference = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>
<!-- head tag -->

<head>
    <title>Welcome to Geeksforgeeks</title>
</head>
<!-- Body tag -->

<body>
    <h2>Geeksforgeeks</h2>
    <p>
        A Computer Science Portal for Geeks
    </p>
    <p>
        Please change the code and click the
        Run the button to see the changes.
    </p>
</body>
</html>
`,
};
