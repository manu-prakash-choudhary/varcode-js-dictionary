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
"https://varcode.in/_next/image?url=%2F_next%2Fstatic%2Fmedia
%2Flogo.bab09975.png&w=1920&q=75" alt="varcode image" />
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
    <title>Welcome to varcode</title>
</head>
<!-- Body tag -->

<body>
    <h2>varcode</h2>
    <p>
        A Computer Science Portal 
    </p>
    <p>
        Please change the code and click the
        Run the button to see the changes.
    </p>
</body>
</html>
`,
};

export const htmlAttributeReference = {
    language: "html",
    theme: "a11y-light",
    text: `<html>
<body>
	<h1>HTML Attributes Example</h1>
	<img src="https://www.varcode.in/wp-content/uploads/20241230152400887784/Salesforce-Governance-Model.webp" 
	alt="Example image" width="500">
</body>
</html>
`,
};

export const htmlGlobalAccesskey = {
    language: "html",
    theme: "a11y-light",
    text: `<html>
<body>
    <button accesskey="s">Save</button>
</body>
</html>
`,
};

export const htmlGlobalAutoFocus = {
    language: "html",
    theme: "a11y-light",
    text: `<html>
<body>
    <input type="text" placeholder="Type here..." autofocus />
</body>
</html>
`,
};

export const htmlGlobalLang = {
    language: "html",
    theme: "a11y-light",
    text: `<html>
<body>
    <p lang="es">¡Hola, Mundo!</p>
</body>
</html>
`,
};

export const htmlGlobalClass = {
    language: "html",
    theme: "a11y-light",
    text: `<html>
<head>
    <style>
        .highlight {
            color: red;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <p class="highlight">This is a highlighted text.</p>
</body>
</html>
`,
};

export const htmlCompleteRerence = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTML5 Example - 2025</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
        h1 {
            color: #2c3e50;
        }
        p {
            color: #34495e;
        }
    </style>
</head>
<body>
    <h1>Welcome to HTML5!</h1>
    <p>The current year is 2025.</p>
</body>
</html>
`,
};

export const singleLineComment = {
  language: "html",
  theme: "a11y-light",
  text: `<!DOCTYPE html>
<html>
<body>
  <!--This is heading Tag-->
  <h1>varCODE eduTECH</h1>
  <!--This is single line comment-->
  <h2>This is <!--given for--> single line comment</h2>
</body>
</html>
`,
};

export const multiLineComment = {
  language: "html",
  theme: "a11y-light",
  text: `<!DOCTYPE html>
<html>
<body>
    <!-- This is
         heading tag -->
    <h1>varCODE eduTECH</h1>
    <!-- This is
    multi-line
         comment -->
    <h2>This is multi-line comment</h2>
    <!-- <button style="font-family: Sans-serif;">
           Click Me
         </button> -->

</body>
</html>
`,
};

export const HTMLDocument ={
  language: "html",
  theme: "a11y-light",
  text: `<!DOCTYPE html>
 
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" 
          content="width=device-width, initial-scale=1.0">
    <title>HTML</title>
</head>
<body>
    <!--Contents of the webpage-->
    <p>varCODE is a online study platform</p>
</body>
</html>`,
};

export const HTMLHeadings={
  language: "html",
  theme: "a11y-light",
  text: `<!DOCTYPE html>
 
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" 
          content="width=device-width, initial-scale=1.0">
    <title>HTML</title>
</head>
<body>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
</body>
</html>`,
}

export const HTMLParagraph={
  language: "html",
  theme: "a11y-light",
  text: `<!DOCTYPE html>
 
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" 
          content="width=device-width, initial-scale=1.0">
    <title>HTML</title>
</head>
<body>
   <p>
            HTML stands for HyperText Markup Language.<br>
            It is used to design web pages using a markup
            language.<br>HTML is a combination of Hypertext
            and Markup language.<br>Hypertext defines the
            link between web pages.<br>A markup language
            is used to define the text document within the
            tag which defines the structure of web pages.
      </p>
</body>
</html>`,
}

export const HTMLHorizontalLine={ 
  language: "html",
  theme: "a11y-light",
  text: `<html>
<body>
    <p>
        A Computer Science portal for geeks<br>
        A Computer Science portal for geeks<br>
        A Computer Science portal for geeks<br>
    </p>
    <hr>
    <p>
        A Computer Science portal for geeks<br>
        A Computer Science portal for geeks<br>
        A Computer Science portal for geeks<br>
    </p>
    <hr>
    <p>
        A Computer Science portal for geeks<br>
        A Computer Science portal for geeks<br>
        A Computer Science portal for geeks<br>
    </p>
    <hr>
</body>
</html>`,}

export const HTMLImage={
  language:"html",
  theme:"a11y-light",
  text:`<html>
<body>
      <img src=
"https://media.geeksforgeeks.org/wp-content/cdn-uploads/Geek_logi_-low_res.png">
</body>
</html>`,
}


export const HTMLElementEx={
  language:"html",
  theme:"a11y-light",
  text:`<!-- HTML code to illustrate HTML elements -->
<!DOCTYPE html>
<html>

<head>
    <title>HTML Elements</title>
</head>

<body>
    <p>Welcome to varCODE !</p>
</body>

</html>`,
}

export const HTMLNested={
  language:"html",
  theme:"a11y-light",
  text:`<!DOCTYPE html>
<html>

<head>
    <title>HTML Elements</title>
</head>

<body style="text-align: center">
    <h1>varCODE</h1>
    <p>Computer science portal</p>

</body>

</html>`,
}

export const HTMLEndtag={
  language:"html",
  theme:"a11y-light",
  text:`<!DOCTYPE html>
<html>

<head>
    <title>HTML Elements</title>
</head>

<body>
    <h2>Welcome To varCODE</h2>
    
    <p>Hi !

</body>

</html>`,
}

export const HTMLEmpty={
  language:"html",
  theme:"a11y-light",
  text:`<!DOCTYPE html>
<html>

<head>
    <title>Empty HTML Elements</title>
</head>

<body>
    <h2>Welcome To varCODE.</h2>
    <br />
    <p>Hello Sir.</p>

</body>

</html>
`,
}

//html attributes

export const HTMLAttributes = {
  language:"html",
  theme:"a11y-light",
  text:`<!DOCTYPE html>
<html>

<head>
    <title>HTML img src Attribute</title>
</head>

<body>
    <img src= "https://media.geeksforgeeks.org/wp-content/cdn-uploads/Geek_logi_-low_res.png">
</body>

</html>`,
}

export const HTMLAltAttribute={
  language:"html",
  theme:"a11y-light",
  text:`<!DOCTYPE html>
<html>

<head>
    <title>HTML img alt Attribute</title>
</head>

<body>

    <!--If the image is not found or the img field 
     is left blank the alt value gets displayed-->

    <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/Geek_logi_-low_res.png" alt="The Logo"><br>
    <img src="" alt="Since the src value is blank,the alt value is displayed">
</body>

</html>
`,
}

export const HTMLHWAttribute={
  language:"html",
  theme:"a11y-light",
  text:`<!DOCTYPE html>
<html lang="en">

<head>
    <title>Width and Height</title>
</head>

<body>
    <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/Geek_logi_-low_res.png" width="300px" height="100px">
</body>

</html>
`,
}

export const HTMLIdAttribute={
  language:"html",
  theme:"a11y-light",
  text:`<!DOCTYPE html>
<html>

<head>
    <style>
        #varCODE {
            color: red;
        }
    </style>
</head>

<body>
    <h1 id="varCODE">Welcome to varCODE eduTECH</h1>
</body>

</html>
`,
}

export const HTMLTitleAttribute={
  language:"html",
  theme:"a11y-light",
  text:`<!DOCTYPE html>
<html>

<head>
    <title>HTML title Attribute</title>
</head>

<body>
    <h3 title="Hello varCODE">
        Hover to see the effect
    </h3>
</body>

</html>
`,
}

export const HTMLHrefAttribute={
  language:"html",
  theme:"a11y-light",
  text:`<!DOCTYPE html>
<html>

<head>
    <title>link Attribute</title>
</head>

<body>
    <a href="https://www.varcode.in/">
        Click to open in the same tab
    </a><br>
    <a href="https://www.varcode.in/" 
       target="_blank">
        Click to open in a different tab
    </a>
</body>

</html>
`,
}

export const HTMLStyleAttribute={
  language:"html",
  theme:"a11y-light",
  text:`<!DOCTYPE html>
<html>

<head>
    <title>style Attribute</title>
</head>

<body>
    <h2 style="font-family:Chaparral Pro Light;">
          Hello varCODE.
      </h2>
    <h3 style="font-size:20px;">
          Hello varCODE.
      </h3>
    <h2 style="color:#8CCEF9;">
          Hello varCODE.
      </h2>
    <h2 style="text-align:center;">
          Hello varCODE.
      </h2>
</body>

</html>
`,
}

export const HTMLLangAttribute={
  language:"html",
  theme:"a11y-light",
  text:`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content=
          	"width=device-width, initial-scale=1.0">
    <title>lang attribute</title>
    <style>
        body {
            text-align: center;
        }

        h1 {
            color: green;
        }

        .lang-info {
            font-style: italic;
        }
    </style>
</head>

<body>
    <h1>varCODE</h1>
    <h2>lang attribute</h2>

    <p lang="en">
        A computer science portal for geeks
    </p>

    <p lang="fr" class="lang-info">
        A computer science portal for geeks
    </p>

    <p lang="es" class="lang-info">
        A computer science portal for geeks
    </p>
</body>

</html>
`,
}


//html heading
export const HTMLHeading={
  language:"html",
  theme:"a11y-light",
  text:`<html>
<body>
    <h1>This is the Main Heading</h1>
	<h2>This is a Subheading</h2>
	<h3>This is a Smaller Subheading</h3>
	<h4>This is a Sub-Subheading</h4>
	<h5>This is a Minor Subheading</h5>
	<h6>This is the Smallest Heading</h6>
</body>
</html>
`,
}

export const HTMLHeading1={
  language:"html",
  theme:"a11y-light",
  text:`<!DOCTYPE html>
<html>

<body>

    <h1>H1 Heading</h1>

    <!-- With the help of Style attribute you can customize
           the size of the heading, As done below-->

    <h1 style="font-size: 50px">H1 with new size.</h1>

    <!-- Here font-size is the property by which  we can 
           modify the heading. Here we kept it 50px i.e. 50 pixels -->

</body>

</html>
`,
}


//html paragraphs
export const HTMLParaP1={
  language:"html",
  theme:"a11y-light",
  text:`<!DOCTYPE html>
<html lang="en">

<head>
    <title>The p tag</title>
</head>

<body>
    <p>A Computer Science portal for var.</p>
    <p>It contains well written, well thought articles.</p>
</body>

</html>
`,

}

export const HTMLParaP2={
  language:"html",
  theme:"a11y-light",
  text:`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" 
          content="width=device-width, initial-scale=1.0">
    <title>HTML p tag</title>
</head>

<body>
    <p>
        This paragraph has multiple lines.
        But HTML reduces them to a single line,
        omitting the carriage return we have used.
    </p>
    <p>
        This paragraph has multiple spaces.
        But HTML reduces them all to a single
        space, omitting the extra spaces and 
          line we have used.
    </p>
</body>

</html>
`,
}

export const HTMLParaP3={
  language:"html",
  theme:"a11y-light",
  text:`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" 
          content="width=device-width, initial-scale=1.0">
    <title>HTML paragraph
    </title>
</head>

<body>
    <p>
        This paragraph has multiple
        <br />lines. But HTML reduces them
        <br />to a single line, omitting
        <br />the carriage return we have used.
    </p>
</body>

</html>
`,
}

export const HTMLParaP4={
  language:"html",
  theme:"a11y-light",
  text:`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" 
          content="width=device-width, initial-scale=1.0">
    <title>HTML Horizontal Rule Example</title>
</head>

<body>
    <h1>
        Welcome to My Website
    </h1>

    <p>
        varCODE is a leading
        platform that provides computer
        science resources and coding challenges
    </p>

    <hr>

    <p>
        varCODE is a leading platform
        that provides computer science resources
        and coding challenges
    </p>
</body>

</html>
`,
}

export const HTMLParaP5={
  language:"html",
  theme:"a11y-light",
  text:`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" 
          content="width=device-width, initial-scale=1.0">
    <title>HTML paragraph
    </title>
</head>

<body>
    <p align="center">
        Welcome varCODE
    </p>
    <p align="left">
        A Computer Science portal for varCODE.
    </p>
    <p align="right">
        It contains well written, well thought articles.
    </p>
</body>


</html>
`,
}

export const HTMLParaP6={
  language:"html",
  theme:"a11y-light",
  text:`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" 
          content="width=device-width, initial-scale=1.0">
    <title>HTML paragraph
    </title>
</head>

<body>
    <pre>
    This paragraph has multiple
    lines. But it is displayed 
    as it is unlike the paragraph 
    tag.
   </pre>

    <pre>
    This     paragraph has multiple
    spaces. But     it is displayed 
    as it is    unlike the paragraph 
         tag.
   </pre>
</body>

</html>
`,
}

//text-formatting

export const tf1={
    language:"html",
    theme:"a11y-light",
    text:`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Text Formatting Example</title>
</head>

<body>
    <p>
        <strong>Strong:</strong> 
        This text is important and bold.
    </p>
    <p>
        <em>Emphasized:</em> 
        This text is emphasized and italic.
    </p>
    <p>
        <b>Bold:</b> 
        This text is bold.
    </p>
    <p>
        <i>Italic:</i> 
        This text is italic.
    </p>
    <p>
        <mark>Marked:</mark> 
        This text is highlighted.
    </p>
</body>

</html>
`,
}

export const tf2={
    language:"html",
    theme:"a11y-light",
    text:`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Advanced Text Formatting</title>
</head>

<body>
    <p>This is a 
        <strong><em>very important</em></strong> message.
    </p>
    <p>The chemical formula of water is H
        <sub>2</sub>O.
    </p>
    <p>
        <del>Deleted text</del> and 
        <ins>inserted text</ins> 
        are shown here.
    </p>
    <p><small>Smaller text</small> 
        can be used for disclaimers.
    </p>
    <p>E = mc<sup>2</sup></p>
</body>

</html>
`,
}

//qotations part
export const HTMLQ1={
    language:"html",
    theme:"a11y-theme",
    text:`<!DOCTYPE html>
<html>

<head>
    <title>HTML Quotations</title>
</head>

<body>
    <h3>varCODE</h3>

    <!--Normal text-->
    <p>
        The quick brown fox jumps over the
        lazy dog<br />
    </p>

    <!--Inside <bdo> tag-->
    <p>
        <bdo dir="rtl">The quick brown fox jumps over
            the lazy dog</bdo>
    </p>

    <p>
        Welcome to
        <abbr title="varCODE">varCODE</abbr>
    </p>

    <address>
        <p>
            Address:<br />
            710-B, Advant Navis Business
            Park,<br />
            Sector-142, Noida Uttar Pradesh –
            201305
        </p>
    </address>
</body>

</html>
`,
}

export const HTMLQ2={
    language:"html",
    theme:"a11y-light",
    text:`<!DOCTYPE html>
<html>

<head>
    <title>HTML Quotations Example</title>
</head>

<body>
    <h3></h3>
    <p>The quick brown fox jumps over the lazy dog<br></p>

    <!-- Inside blockquotes -->
    <blockquote>
        <p>The quick brown fox jumps
            over the lazy dog
        </p>
    </blockquote>

    <!-- Inside quotes -->
    <q>The quick brown fox jumps over the lazy dog</q>

    <!-- Cite with title -->
    <p>
        The <cite>varCODE</cite>
        is the best site to<br>
        search for articles and practice problems.
    </p>
</body>

</html>
`,
}

//colors 
export const HTMLColors1={
    language:"html",
    theme:"a11y-light",
    text:`<!DOCTYPE html>
<html>

<head>
    <title>HTML Text Color</title>
    <style>
        center {
            width: 50%;
            margin: 0 auto;
        }
        h2, div, p, span {
            padding: 10px;
            margin-bottom: 20px;
        }
    </style>
</head>

<body>
    <center>
        <h2 style="background-color: gray;">
            Heading with Gray Background color
        </h2>

        <div style="border: 2px solid skyblue;">
            Div with Skyblue Border color
        </div>
        <span >
            <a href="#" style="color: #ff6347;">
                Link has a tomato color
            </a>
        </span>

        <p style="color: darkgreen;">
            Paragraph with Dark Green Text color
        </p>
        
    </center>

</body>

</html>
`,
}

export const HTMLColors2={
    language:"html",
    theme:"a11y-light",
    text:`<!DOCTYPE html>
<html>

<head>
    <title>RGB Color Value</title>
    <style>
        center {
            width: 50%;
            margin: 0 auto;
        }

        h2,
        div,
        p,
        span {
            padding: 10px;
            margin-bottom: 20px;
        }
    </style>
</head>

<body>
    <center>
        <h2 style="background-color: rgb(109, 102, 197);">
            Heading with blue Background color
        </h2>

        <div style="border: 2px solid rgb(135, 206, 235);">
            <li>
                <a href="#html-color-usage">
                    HTML Color Usage
                </a>
            </li>
            Div with Skyblue Border color
        </div>
        <span>
            <a href="#" style="color: rgb(241, 76, 89);">
                Link has a tomato color
            </a>
        </span>

        <p style="color: rgb(0, 100, 0);">
            Paragraph with Dark Green Text color
        </p>

    </center>

</body>

</html>
`,
}

export const HTMLColors3={
    language:"html",
    theme:"a11y-light",
    text:`<!DOCTYPE html>
<html>

<head>
    <title>RGBA Color Value</title>
    <style>
        center {
            width: 50%;
            margin: 0 auto;
        }
        h2, div, p, span {
            padding: 10px;
            margin-bottom: 20px;
        }
    </style>
</head>

<body>
    <center>
        <h2 style="background-color: rgba(255, 99, 71, 0.5);">
            Heading with semi-transparent Tomato Background color
        </h2>

        <div style="border: 2px solid rgba(255, 165, 0, 0.7);">
            Div with semi-transparent Orange Border color
        </div>
        <span>
            <a href="#" 
               style="color: rgba(0, 191, 255, 0.8);">
                Link has a semi-transparent Deep Sky Blue color
            </a>
        </span>
    
        <p style="color: rgba(128, 0, 128, 0.6);">
            Paragraph with semi-transparent Purple Text color
        </p>
        
    </center>

</body>

</html>
`,
}

export const HTMLColors4={
    language:"html",
    theme:"a11y-light",
    text:`<!DOCTYPE html>
<html>

<head>
    <title>Hex Color Value</title>
    <style>
        center {
            width: 50%;
            margin: 0 auto;
        }
        h2, div, p, span {
            padding: 10px;
            margin-bottom: 20px;
        }
    </style>
</head>

<body>
    <center>
        <h2 style="background-color: #FF6347;">
            Heading with semi-transparent 
            Tomato Background color (Hex: #FF6347)
        </h2>

        <div style="border: 2px solid #FFA500;">
            Div with semi-transparent 
            Orange Border color (Hex: #FFA500)
        </div>
        <span>
            <a href="#" style="color: #00BFFF;">
                Link has a semi-transparent 
                Deep Sky Blue color (Hex: #00BFFF)
            </a>
        </span>
    
        <p style="color: #800080;">
            Paragraph with semi-transparent 
            Purple Text color (Hex: #800080)
        </p>
    </center>

</body>

</html>
`,
}

export const HTMLColors5={
    language:"html",
    theme:"a11y-light",
    text:`<!DOCTYPE html>
<html>

<head>
    <title>HSL Color Value</title>
    <style>
        center {
            width: 50%;
            margin: 0 auto;
        }
        h2, div, p, span {
            padding: 10px;
            margin-bottom: 20px;
        }
    </style>
</head>

<body>
    <center>
        <h2 style="background-color: hsla(120, 100%, 50%, 0.5);">
            Heading with semi-transparent 
            Green Background color 
            (HSL: hsla(120, 100%, 50%, 0.5))
        </h2>

        <div style="border: 2px solid hsla(240, 100%, 50%, 0.7);">
            Div with semi-transparent 
            Blue Border color 
            (HSL: hsla(240, 100%, 50%, 0.7))
        </div>
        <span>
            <a href="#" style="color: hsla(30, 100%, 50%, 0.8);">
                Link has a semi-transparent 
                Orange color 
                (HSL: hsla(30, 100%, 50%, 0.8))
            </a>
        </span>
    
        <p style="color: hsla(0, 100%, 25%, 0.6);">
            Paragraph with semi-transparent 
            Red Text color 
            (HSL: hsla(0, 100%, 25%, 0.6))
        </p>
    </center>

</body>

</html>
`,
}


//html tutorial reference

export const HTMLtr1={
    language:"html",
    theme:"a11y-light",
    text:`<!DOCTYPE html> 
<html> 

<head> 
	<title>HTML5 MathML</title> 
</head> 

<body style="text-align:center;"> 

	<h1 style="color:red"> 
		varCODE 
	</h1> 

	<h3>HTML5 MathML</h3> 

	<!--start tag of the whole representation-->
	<math> 

		<!-- Creating Matrix -->
		<mrow> 
			<mi>A</mi> 
			<mo>=</mo> 

			<mfenced open="[" close="]"> 

				<mtable> 
					<mtr> 
						<mtd> 
							<mi>a</mi> 
						</mtd> 
						<mtd> 
							<mi>b</mi> 
						</mtd> 
					</mtr> 

					<mtr> 
						<mtd> 
							<mi>x</mi> 
						</mtd> 
						<mtd> 
							<mi>y</mi> 
						</mtd> 
					</mtr> 

				</mtable> 

			</mfenced> 
		</mrow> 

		<!-- Creating equation -->
		<br><br> 
		<msub> 
			<mi>varCODE</mi> 
			<mn>4</mn> 
		</msub> 
		<mo>+</mo> 
		<mn>varCODE</mn> 
		<mo>=</mo> 
		<msub> 
			<mi>V</mi> 
		</msub> 
		<mo>→</mo> 
		<msub> 
			<mi>e</mi> 
			<mn>2</mn> 
		</msub> 
		<mo>→</mo> 
		<mi>k</mi> 
		<mi>s</mi> 
		<mn>4 
		</mn> 
		<msub> 
			<mi>V</mi> 
		</msub> 
		<mo>→</mo> 
		<msub> 
			<mi>e</mi> 
			<mn>2</mn> 
		</msub> 
		<mo>→</mo> 
		<mi>k</mi> 
		<mi>s</mi> 
	</math> 
</body> 

</html>
`,
}


export const HTMLtr2={
    language:"html",
    theme:"a11y-light",
    text:`<html>
<head>
	<script>
		function changeText() {
			document.getElementById("demo").textContent = "Hello, World!";
		}
	</script>
</head>
<body>
	<p id="demo">Original Text</p>
	<button onclick="changeText()">Change Text</button>
</body>
</html>
`,
}

export const HTMLtr3={
    language:"html",
    theme:"a11y-light",
    text:`<html>
<body>
	<audio controls>
		<source src="audiofile.mp3" type="audio/mpeg">
		audio element.
	</audio>
	<br><br>
	<video width="320" height="240" controls>
		<source src="videofile.mp4" type="video/mp4">
		video Element.
	</video>
</body>
</html>

`,
}


export const HTMLtr4={
    language:"html",
    theme:"a11y-theme",
    text:`<!DOCTYPE html> 
<html> 
<body> 
<center> 
<h1 style="color:red;"> 
	varCODE
</h1> 
<b>SVG Polygon</b> 
<center> 
	
	
  <svg width="200px"
		height="200px"> 
		<!-- try different pairs and make different shapes-->
		<polygon points="100, 100 15, 205 150, 7 20, 0"
				fill="red"
				stroke="yellow"/> 
	</svg> 
</center> 
</body> 
</html>
`,

}

export const htmlEntities = {
  language: "html",
  theme: "a11y-light",
  text: `<!DOCTYPE html>
<html lang="en">
<head>
    <title>Currency Symbols</title>
</head>
<body>
    <h2>Currency Symbols Using HTML Entities</h2>
    <ul>
        <li>Dollar: &#36;</li>
        <li>Euro: &#8364;</li>
        <li>Pound: &#163;</li>
        <li>Yen: &#165;</li>
        <li>Rupee: &#8377;</li>
        <li>Won: &#8361;</li>
        <li>Franco: &#8355;</li>
        <li>Bitcoin: &#8383;</li>
    </ul>
</body>
</html>
`,
};

export const htmlEntitiesNew = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>HTML Entities</title>
</head>

<body>
    <p>Showing euro &euro;</p>
    <p>Showing cent &cent;</p>
    <p>Showing Copyright &copy;</p>
    <p>Showing BLACK DIAMOND SUIT &diams;</p>
    <p>Showing TRADEMARK &trade;</p>
</body>
</html>
  `,
  };


  export const htmlSymbolsCopy = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &copy;</p>
  `,
  };

  export const htmlSymbolsReg = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &reg;</p>
  `,
  };

  export const htmlSymbolsTrade = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &trade;</p>
  `,
  };

  export const htmlSymbolsCommat = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &commat;</p>
  `,
  };

  export const htmlSymbolsParagraph = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &para;</p>
  `,
  };

  export const htmlSymbolsSection = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &sect;</p>
  `,
  };

  export const htmlSymbolsCopf = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &copf;</p>
  `,
  };

  export const htmlSymbolsIncare = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &incare; </p>
  `,
  };

  export const htmlSymbolsGscr = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &gscr; </p>
  `,
  };

  export const htmlSymbolsHamilt = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &hamilt; </p>
  `,
  };

  export const htmlSymbolsHfr = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &hfr; </p>
  `,
  };

  export const htmlSymbolsHopf = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &hopf; </p>
  `,
  };

  export const htmlSymbolsPlanckh = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &planckh; </p>
  `,
  };

  export const htmlSymbolsPlanck = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &planck; </p>
  `,
  };

  export const htmlSymbolsIscr = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &iscr; </p>
  `,
  };

  export const htmlSymbolsImage = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &image; </p>
  `,
  };

  export const htmlSymbolsLscr = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &lscr; </p>
  `,
  };

  export const htmlSymbolsEll = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &ell; </p>
  `,
  };

  export const htmlSymbolsNopf = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &nopf; </p>
  `,
  };

  export const htmlSymbolsNumero = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &numero; </p>
  `,
  };

  export const htmlSymbolsCopysr = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &copysr; </p>
  `,
  };

  export const htmlSymbolsWeierp = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &weierp; </p>
  `,
  };

  export const htmlSymbolsQopf = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &qopf;  </p>
  `,
  };

  export const htmlSymbolsSign = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of :  </p>
  `,
  };

  export const htmlSymbolsRscr = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &rscr;  </p>
  `,
  };

  export const htmlSymbolsReal = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &real;  </p>
  `,
  };

  export const htmlSymbolsRopf = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &ropf;  </p>
  `,
  };

  export const htmlSymbolsRx = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &rx;  </p>
  `,
  };

  export const htmlSymbolsZopf = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &zopf;  </p>
  `,
  };

  export const htmlSymbolsMho = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &mho;  </p>
  `,
  };

  export const htmlSymbolsZfr = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &zfr;  </p>
  `,
  };

  export const htmlSymbolsIiota = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &iiota;  </p>
  `,
  };

  export const htmlSymbolsBernou = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &bernou;  </p>
  `,
  };

  export const htmlSymbolsCfr = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &cfr;  </p>
  `,
  };

  export const htmlSymbolsEscr = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &escr;  </p>
  `,
  };

  export const htmlSymbolsEScr = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &escr;  </p>
  `,
  };

  export const htmlSymbolsFscr = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &fscr;  </p>
  `,
  };

  export const htmlSymbolsMscr = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &mscr;  </p>
  `,
  };

  export const htmlSymbolsOscr = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &oscr;  </p>
  `,
  };

  export const htmlSymbolsAlefsym = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &alefsym;  </p>
  `,
  };

  export const htmlSymbolsBeth = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &beth;  </p>
  `,
  };

  export const htmlSymbolsGimel = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &gimel;  </p>
  `,
  };

  export const htmlSymbolsDaleth = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &daleth;  </p>
  `,
  };

  export const htmlSymbolsDd = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &dd;  </p>
  `,
  };

  export const htmlSymbolsEe = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &ee;  </p>
  `,
  };

  export const htmlSymbolsIi = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &ii;  </p>
  `,
  };

  export const htmlSymbolsStarf = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &Starf;  </p>
  `,
  };

  export const htmlSymbolsStar = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &star;  </p>
  `,
  };

  export const htmlSymbolsPhone = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &phone;  </p>
  `,
  };

  export const htmlSymbolsFemale = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &female;  </p>
  `,
  };

  export const htmlSymbolsMale = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &male;  </p>
  `,
  };

  export const htmlSymbolsSpades = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &Spades;  </p>
  `,
  };

  export const htmlSymbolsClubs = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &clubs;  </p>
  `,
  };

  export const htmlSymbolsHearts = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &hearts;  </p>
  `,
  };

  export const htmlSymbolsDiams = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &diams;  </p>
  `,
  };


  export const htmlSymbolsSung = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &sung;  </p>
  `,
  };

  export const htmlSymbolsFlat = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &flat;  </p>
  `,
  };

  export const htmlSymbolsNatural = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &natural;  </p>
  `,
  };

  export const htmlSymbolsSharp = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &sharp;  </p>
  `,
  };

  export const htmlSymbolsCheck = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &check;  </p>
  `,
  };

  export const htmlSymbolsCross = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &&cross;  </p>
  `,
  };

  export const htmlSymbolsMalt = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &malt;  </p>
  `,
  };

  export const htmlSymbolsSext = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &sext;  </p>
  `,
  };

  export const htmlSymbolsVertical = {
    language: "html",
    theme: "a11y-light",
    text: `
    <p>these is the sign of : &verticalseparator;  </p>
  `,
  };

  export const htmlEmojis = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html lang="en">

<head>
    <title>UTF-8 Character Example</title>
</head>

<body>
    <!-- Direct Putting Emoji as a character -->
    <p>Here is a smiley face: 😊</p>
  
    <!-- Using unicode Escape -->
	<p>Here is a smiley face: &#128522;</p>
</body>

</html>
  `,
  };

  export const htmlEmojisExample1 = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>HTML Emojis Example</title>
</head>

<body>
    <h1>HTML Emojis Example</h1>
    <p>
        &#128516; This is a smiling face with open mouth
        and smiling eyes emoji
    </p>
    <p>&#9996; This is a victory hand emoji</p>
    <p>&#8986; This is a watch emoji</p>
</body>

</html>
  `,
  };

  export const htmlEmojisExample2 = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>HTML Emojis Example</title>
</head>

<body>
    <h1>HTML Emojis Example using Unicode hexadecimal </h1>
    <p>
        &#x1F604; This is a smiling face with open mouth
        and smiling eyes emoji
    </p>
    <p>&#x270C; This is a victory hand emoji</p>
    <p>&#x231A; This is a watch emoji</p>
</body>

</html>
  `,
  };

  export const htmlEmojisExample3 = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>HTML Emojis Example</title>
    <style>
        .large {
            font-size: 2em;
            /* Increase font size */
        }
    </style>
</head>

<body>
    <h1>HTML Emojis Example</h1>
    <h3>Transport symbols</h3>
    <p>
        &#x1F682; Train &nbsp;&nbsp;
        <span class="large">&#x1F6E5;</span> Tram
    </p>
    <h3>Office emojis</h3>
    <p>
        &#x1F3E2; Office Building &nbsp;&nbsp;
        <span class="large">&#x1F4BC;</span> Laptop
    </p>
    <h3>People emojis</h3>
    <p>
        &#x1F468; Man &nbsp;&nbsp;
        <span class="large">&#x1F469;</span> Woman
    </p>
    <h3>People emojis</h3>
    <p>
        &#x1F436; Dog &nbsp;&nbsp;
        <span class="large">&#x1F981;</span> Lion
    </p>
</body>

</html>
  `,
  };

  export const htmlFormsExample1 = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html lang="en">

<head>
    <title>Html Forms</title>
</head>

<body>
    <h2>HTML Forms</h2>
    <form>
        <label for="username">Username:</label><br>
        <input type="text" id="username" name="username"><br><br>

        <label for="password">Password:</label><br>
        <input type="password" id="password" name="password"><br><br>

        <input type="submit" value="Submit">
    </form>
</body>

</html>
  `,
  };

  export const htmlFormsExample2 = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Form</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }

        form {
            width: 400px;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        fieldset {
            border: 1px solid black;
            padding: 10px;
            margin: 0;
        }

        legend {
            font-weight: bold;
            margin-bottom: 10px;
        }

        label {
            display: block;
            margin-bottom: 5px;
        }

        input[type="text"],
        input[type="email"],
        input[type="password"],
        textarea,
        input[type="date"] {
            width: calc(100% - 20px);
            padding: 8px;
            margin-bottom: 10px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        .gender-group {
            margin-bottom: 10px;
        }

        .gender-group label {
            display: inline-block;
            margin-left: 10px;
        }

        input[type="radio"] {
            margin-left: 10px;
            vertical-align: middle;
        }

        input[type="submit"] {
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
        }
    </style>
</head>

<body>
    <form>
        <fieldset>
            <legend>User Personal Information</legend>
            <label for="name">Enter your full name:</label>
            <input type="text" id="name" name="name" required />
            <label for="email">Enter your email:</label>
            <input type="email" id="email" name="email" required />
            <label for="password">Enter your password:</label>
            <input type="password" id="password" name="pass" required />
            <label for="confirmPassword">Confirm your password:</label>
            <input type="password" id="confirmPassword" name="confirmPass" required />
            <label>Enter your gender:</label>
            <div class="gender-group">
                <input type="radio" name="gender" value="male" id="male" required />
                <label for="male">Male</label>
                <input type="radio" name="gender" value="female" id="female" />
                <label for="female">Female</label>
                <input type="radio" name="gender" value="others" id="others" />
                <label for="others">Others</label>
            </div>
            <label for="dob">Enter your Date of Birth:</label>
            <input type="date" id="dob" name="dob" required />
            <label for="address">Enter your Address:</label>
            <textarea id="address" name="address" required></textarea>
            <input type="submit" value="Submit" />
        </fieldset>
    </form>
</body>

</html>
  `,
  };

  export const htmlWebExample1 = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>GeeksforGeeks</title>
    <meta charset="utf-8"
          name="viewport"
          content="width=device-width,
                   initial-scale=1.0" />
    <style>
        .gfg {
            font-size: 40px;
            font-weight: bold;
            color: green;
            text-align: center;
        }

        .geeks {
            font-size: 17px;
            text-align: center;
        }

        p {
            text-align: justify;
        }
    </style>
</head>

<body>
    <div class="gfg">GeeksforGeeks</div>
    <div class="geeks">HTML Introduction</div>

    <p>
        HTML stands for HyperText Markup Language. It is
        used to design web pages using a markup
        language. HTML is a combination of Hypertext and
        Markup language. Hypertext defines the link
        between web pages. A markup language is used to
        define the text document within the tag which
        defines the structure of web pages. This
        language is used to annotate (make notes for the
        computer) text so that a machine can understand
        it and manipulate text accordingly. Most markup
        languages (e.g. HTML) are human-readable. The
        language uses tags to define what manipulation
        has to be done on the text.
    </p>
</body>

</html>

  `,
  };

  export const htmlWebExample2 = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <meta name="viewport" content=
        "width=device-width, initial-scale=1.0" />
</head>

<body>
    <img class=".img-fluid" src=
"https://media.geeksforgeeks.org/wp-content/uploads/20220201191443/logo-200x32.png"
         style="width: 100%" />

    <h2>Responsive Images</h2>
  
    <p>
        Responsive images are just a part of Responsive
        websites. Images that can change their
        dimensions, scaling them up or down, according
        to the browser width are responsive images. The
        above image is responsive as it is adjusting
        itself according to the width of the browser.
    </p>
</body>

</html>
  `,
  };

  export const htmlWebExample22 = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <meta name="viewport" 
          content="width=device-width,
                   initial-scale=1.0" />
</head>

<body>
    <img class=".img-fluid"
         src=
"https://media.geeksforgeeks.org/wp-content/uploads/20220201191443/logo-200x32.png"
         style="max-width:100%;
                height:auto;" />
    <h2>Responsive Images</h2>
    <p>
        Responsive images are just a part of Responsive
        websites. Images that can change their
        dimensions, scaling them up or down, according
        to the browser width are responsive images. The
        above image is responsive as it is adjusting
        itself according to the width of the browser.
    </p>
</body>

</html>
  `,
  };

  export const htmlWebExample23 = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>HTML Responsive Web Design</title>
</head>

<body style="text-align: center;">
    <h1 style="color: green;">GeeksforGeeks</h1>

    <h2>HTML picture Tag</h2>

    <picture>
        <source media="(min-width: 700px)"
                srcset=
"https://media.geeksforgeeks.org/wp-content/uploads/20190825000042/geeks-221.png">

        <source media="(min-width: 450px)"
                srcset=
"https://media.geeksforgeeks.org/wp-content/uploads/20190802021607/geeks14.png">

        <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20190808102629/geeks15.png"
             alt="GFG">
    </picture>
</body>

</html>
  `,
  };

  export const htmlWebExample3 = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <style>
        body {
            max-width: 100%;
        }

        .gfg {
            font-size: 7vw;
            font-weight: bold;
            color: green;
            text-align: center;
        }

        .geeks {
            font-size: 5vw;
            text-align: center;
        }

        p {
            font-size: 3vw;
            text-align: justify;
        }
    </style>
</head>

<body>
    <div class="gfg">GeeksforGeeks</div>
    <div class="geeks">HTML Introduction</div>

    <p>
        HTML stands for HyperText Markup Language. It is
        used to design web pages using a markup
        language. HTML is a combination of Hypertext and
        Markup language. Hypertext defines the link
        between web pages. A markup language is used to
        define the text document within the tag which
        defines the structure of web pages. This
        language is used to annotate (make notes for the
        computer) text so that a machine can understand
        it and manipulate text accordingly. Most markup
        languages (e.g. HTML) are human-readable. The
        language uses tags to define what manipulation
        has to be done on the text.
    </p>
</body>

</html>
  `,
  };

  export const htmlWebExample4 = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>GeeksforGeeks</title>
    <style>
        .gfg {
            font-size: 100px;
            font-weight: bold;
            color: green;
            text-align: center;
        }
        
        .geeks {
            font-size: 50px;
            text-align: center;
        }
        
        p {
            font-size: 25px;
            text-align: justify;
        }
        
        /* styling for screen width less than 800 */
        @media screen and (max-width: 800px) {
            body {
                background-color: aqua;
            }
        
            .gfg {
                font-size: 50px;
            }
        
            .geeks {
                font-size: 25px;
            }
        
            p {
                font-size: 12px;
            }
        }
    </style>
</head>

<body>
    <div class="gfg">GeeksforGeeks</div>
    <div class="geeks">HTML Introduction</div>

    <p>
        HTML stands for HyperText Markup Language. It is
        used to design web pages using a markup
        language. HTML is a combination of Hypertext and
        Markup language. Hypertext defines the link
        between web pages. A markup language is used to
        define the text document within the tag which
        defines the structure of web pages. This
        language is used to annotate (make notes for the
        computer) text so that a machine can understand
        it and manipulate text accordingly. Most markup
        languages (e.g. HTML) are human-readable. The
        language uses tags to define what manipulation
        has to be done on the text.
    </p>
</body>

</html>
  `,
  };

  export const htmlWebExample5 = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>GeeksforGeeks</title>
    <style>
        body {
            background-color: aqua;
        }
        .gfg {
            font-size: 5vw;
            font-weight: bold;
            color: green;
            text-align: center;
        }
        button {
            width: 300px;
            font-size: larger;
        }
        .container {
            display: flexbox;
        }
    </style>
</head>

<body>
    <div class="gfg">GeeksforGeeks</div>
    <div class="container">
        <button>HTML</button>
        <button>CSS</button>
        <button>JavaScript</button>
    </div>
</body>

</html>
  `,
  };

  export const htmlWebExample52 = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>GeeksforGeeks</title>
    <style>
        body {
            background-color: aqua;
        }
        .gfg {
            font-size: 5vw;
            font-weight: bold;
            color: green;
            text-align: center;
        }
        
        .container {
            font-size: x-large;
            text-align: center;
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
        .grid-item {
            background-color: rgb(220, 208, 232);
            border: 2px solid rgb(70, 54, 84);
        }
    </style>
</head>

<body>
    <div class="gfg">GeeksforGeeks</div>
    <div class="container">
        <div class="grid-item">HTML</div>
        <div class="grid-item">CSS</div>
        <div class="grid-item">JavaScript</div>
        <div class="grid-item">Bootstrap</div>
    </div>
</body>

</html>
  `,
  };

  export const htmlWebExample53 = {
    language: "html",
    theme: "a11y-light",
    text: `<!DOCTYPE html>
<html>

<head>
    <title>GeeksforGeeks</title>
    <style>
        body {
            background-color: aqua;
        }
        .gfg {
            font-size: 5vw;
            font-weight: bold;
            color: green;
            text-align: center;
        }
        
        .container {
            font-size: x-large;
            text-align: left;
            column-count: 3;
            column-gap: 5%;
        }
    </style>
</head>

<body>
    <div class="gfg">GeeksforGeeks</div>
    <div class="container">
        <div>
            HTML stands for HyperText Markup Language.
            It is used to design web pages using a
            markup language. HTML is a combination of
            Hypertext and Markup language. Hypertext
            defines the link between web pages. A markup
            language is used to define the text document
            within the tag which defines the structure
            of web pages. This language is used to
            annotate (make notes for the computer) text
            so that a machine can understand it and
            manipulate text accordingly. Most markup
            languages (e.g. HTML) are human-readable.
            The language uses tags to define what
            manipulation has to be done on the text.
        </div>
    </div>
</body>

</html>

  `,
  };

  export const htmlVideoExample1 = {
    language: "html",
    theme: "a11y-light",
    text: `
<html >
<body>
	<video width="320" height="240" controls>
		<source src=
"https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4"
			type="video/mp4">
		Sample Video
	</video>
</body>
</html>
  `,
  };

  export const htmlVideoExample2 = {
    language: "html",
    theme: "a11y-light",
    text: `
<html>
<head>
	<style>
		video {
			max-width: 100%;
			height: auto;
			display: block;
			margin: 0 auto;
		}
	</style>
</head>
<body>
	<video controls poster="https://via.placeholder.com/640x360.png?text=Video+Loading">
		<source src="https://media.geeksforgeeks.org/wp-content/uploads/20190616234019/Canvas.move_.mp4"
			type="video/mp4">
	</video>
</body>
</html>

  `,
  };

  export const htmlVideoExample3 = {
    language: "html",
    theme: "a11y-light",
    text: `
<html>
<head>
	<style>
		video {
			width: 640px;
			height: 360px;
			border: 2px solid #4CAF50;
			border-radius: 8px;
			background-color: #000;
		}
	</style>
</head>
<body>
	<video controls autoplay loop muted>
		<source src=
"https://media.geeksforgeeks.org/wp-content/uploads/20241202174008478068/sample-vedio.mp4"
			type="video/mp4">
	</video>
</body>
</html>


  `,
  };