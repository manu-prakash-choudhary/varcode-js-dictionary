import React from "react";

const HTMLEditors = () => {
  // Sample data for the editors comparison table
  const editors = [
    {
      name: "Notepad",
      platform: "Windows",
      features: "Basic text editing",
      idealFor: "Beginners, quick edits",
      pros: "Simple, lightweight, pre-installed",
      cons: "No syntax highlighting, limited features"
    },
    {
      name: "varCODE IDE",
      platform: "Online",
      features: "Live preview, code sharing",
      idealFor: "Web developers, collaboration",
      pros: "No installation needed, shareable links",
      cons: "Requires internet connection"
    },
    {
      name: "Sublime Text",
      platform: "Windows, Mac, Linux",
      features: "Syntax highlighting, plugins",
      idealFor: "Professional developers",
      pros: "Fast, customizable",
      cons: "Not fully free"
    },
    {
      name: "VS Code",
      platform: "Windows, Mac, Linux",
      features: "Extensions, integrated terminal",
      idealFor: "Full-stack development",
      pros: "Powerful, free, open-source",
      cons: "Can be resource-intensive"
    },
    {
      name: "Atom",
      platform: "Windows, Mac, Linux",
      features: "Git integration, customizable UI",
      idealFor: "Collaborative development",
      pros: "Open-source, hackable",
      cons: "Performance issues with large files"
    },
    {
      name: "Brackets",
      platform: "Windows, Mac, Linux",
      features: "Live preview, focused on web",
      idealFor: "Front-end developers",
      pros: "Clean UI, web-focused",
      cons: "Limited for non-web languages"
    }
  ];

  return (
    <div className="content-container overflow-y-auto h-full w-full px-4 md:px-6 lg:px-8 py-6">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl md:text-4xl font-semibold text-red-600">HTML Editors</h1>
        <p className="text-sm text-gray-600">Last Updated: 30 Mar, 2025</p>
      </div>
      
      <div className="mt-4">
        <p className="text-gray-800 text-justify">
          An <b>HTML Editor</b> is a software application designed to help users
          create and modify HTML code. It often includes features like syntax
          highlighting, tag completion, and error detection, which facilitate
          the coding process.
        </p>
        
        <div className="my-4">
          <p className="text-gray-800">
            There are two main types of HTML editors:
          </p>
          
          <div className="mt-3 space-y-4">
            <div>
              <p className="text-gray-800">
                <b>1) Text-Based Editors</b> – Allow direct coding with features like
                syntax highlighting and code completion for full control over the
                webpage structure. Example – Sublime Text, Visual Studio Code, etc.
              </p>
            </div>
            
            <div>
              <p className="text-gray-800">
                <b>2) WYSIWYG (What You See Is What You Get) Editors</b> – Offer a
                graphical interface to design web pages visually, automatically
                generating the corresponding HTML code. Example – Adobe Dreamweaver,
                etc.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 md:mt-10 flex flex-col gap-3">
        <h2 className="text-2xl md:text-4xl font-semibold text-red-600">
          HTML Editors List
        </h2>
        <p className="text-gray-800">
          There are various free and paid HTML editors available in the market,
          but in this article, we will be covering some renowned free HTML
          editors that you can use as a beginner or switch to if you are an
          experienced developer.
        </p>
        
        <div className="mt-4">
          <h3 className="text-xl md:text-2xl font-semibold text-red-600">
            Table Of Content
          </h3>
          <ul className="mt-2 space-y-1">
            <li className="list-disc ml-6">
              <a href="#notepad" className="text-red-600 hover:">1. Notepad</a>
            </li>
            <li className="list-disc ml-6">
              <a href="#varcode" className="text-red-600 hover:">2. varCODE IDE</a>
            </li>
            <li className="list-disc ml-6">
              <a href="#sublime" className="text-red-600 hover:">3. Sublime Text Editor</a>
            </li>
            <li className="list-disc ml-6">
              <a href="#vscode" className="text-red-600 hover:">4. Visual Studio Code</a>
            </li>
            <li className="list-disc ml-6">
              <a href="#atom" className="text-red-600 hover:">5. Atom</a>
            </li>
            <li className="list-disc ml-6">
              <a href="#brackets" className="text-red-600 hover:">6. Brackets</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div id="notepad" className="mt-8 scroll-mt-16">
        <h3 className="text-xl md:text-2xl font-semibold text-red-600">1. Notepad</h3>
        <div className="mt-3">
          <p className="text-gray-800">
            Notepad is a simple text editor that comes pre-installed on Windows
            operating systems. It is a basic tool for writing and editing HTML
            code. Notepad is lightweight and easy to use, making it suitable for
            beginners.
          </p>
          
          <h4 className="font-semibold mt-4 mb-2">Steps to Write HTML Code in Text Editor:</h4>
          
          <div className="space-y-3">
            <p>
              <b>Step 1</b>: Open any of the text editors of your choice. Here we
              are using the <b>Notepad</b> text editor.
            </p>
            
            <p>
              <b>Step 2</b>: Create new file: File→New File or Ctrl+N.
            </p>
            
            <p>
              <b>Step 3</b>: Write HTML code in text editor.
            </p>
            
            <p>
              <b>Step 4</b>: Save the file with a suitable name of your choice and
              a <b>.html</b> extension.
            </p>
            
            <p>
              <b>Step 5</b>: Open the saved HTML file in your favorite browser
              (double-click on the file, or right-click – and choose "Open with").
            </p>
          </div>
        </div>
      </div>
      
      <div id="varcode" className="mt-8 scroll-mt-16">
        <h3 className="text-xl md:text-2xl font-semibold text-red-600">2. varCODE IDE</h3>
        <div className="mt-3">
          <p>
            <b>varCODE IDE</b> is an <b>online HTML editor with preview</b> to test the HTML code. 
            It provides a shareable link to share code with others.
          </p>
        </div>
      </div>
      
      <div id="sublime" className="mt-8 scroll-mt-16">
        <h3 className="text-xl md:text-2xl font-semibold text-red-600">3. Sublime Text Editor</h3>
        <div className="mt-3">
          <p className="text-gray-800">
            Sublime is a cross-platform code editor tool. It supports all markup
            languages and is used as an editor for HTML. Similar to the Notepad
            editor, create a new file and save it with a .html extension to run
            an HTML file.
          </p>
        </div>
      </div>
      
      <div id="vscode" className="mt-8 scroll-mt-16">
        <h3 className="text-xl md:text-2xl font-semibold text-red-600">4. Visual Studio Code</h3>
        <div className="mt-3">
          <p className="text-gray-800">
            It is one of the most popular code editors of today. It is
            free, open source, and cross-platform. It is a code editor for
            writing HTML code. It is a very popular choice for web developers.
            Many companies and software developers prefer this
            online HTML code editor.
          </p>
          
          <h4 className="font-semibold mt-4 mb-2">Steps to Write HTML Code in VS Code:</h4>
          
          <div className="space-y-3">
            <p>
              <b>Step 1</b>: Open the VS code Editor and Install the Live Server.
              By clicking the extension button simply search live server on the
              search bar and download. Live server extension helps to run the code
              and display output.
            </p>
            
            <p>
              <b>Step 2</b>: Create a new File and save it with the .html extension and use the 
              open live server button to click the right button.
            </p>
          </div>
        </div>
      </div>
      
      <div id="atom" className="mt-8 scroll-mt-16">
        <h3 className="text-xl md:text-2xl font-semibold text-red-600">5. Atom</h3>
        <div className="mt-3">
          <p className="text-gray-800">
            Atom is an open-source code editor tool for MAC, Linux, and Windows. 
            We can use Atom to write and edit HTML code. Similar to the Notepad editor, 
            create a new file and save it with a .html extension to run an HTML file.
          </p>
        </div>
      </div>
      
      <div id="brackets" className="mt-8 scroll-mt-16">
        <h3 className="text-xl md:text-2xl font-semibold text-red-600">6. Brackets</h3>
        <div className="mt-3">
          <p className="text-gray-800">
            Brackets is an open-source software primarily used for Web development. 
            It provides live HTML, CSS, and JavaScript editing functionality. 
            Similar to the Notepad editor, create a new file and save it with a .html 
            extension to run the HTML file.
          </p>
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-red-600 mb-4">HTML Editors Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2 md:p-3">Editor</th>
                <th className="border p-2 md:p-3">Platform</th>
                <th className="border p-2 md:p-3">Key Features</th>
                <th className="border p-2 md:p-3">Ideal For</th>
                <th className="border p-2 md:p-3">Pros</th>
                <th className="border p-2 md:p-3">Cons</th>
              </tr>
            </thead>
            <tbody>
              {editors.map((editor, index) => (
                <tr key={index} className="border hover:bg-gray-100">
                  <td className="border p-2 md:p-3">{editor.name}</td>
                  <td className="border p-2 md:p-3">{editor.platform}</td>
                  <td className="border p-2 md:p-3">{editor.features}</td>
                  <td className="border p-2 md:p-3">{editor.idealFor}</td>
                  <td className="border p-2 md:p-3">{editor.pros}</td>
                  <td className="border p-2 md:p-3">{editor.cons}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-red-600">Reason To Use A HTML Editor</h2>
        <p className="mt-3"><b>Editors for HTML</b> offer several advantages to writing and editing HTML codes. Some benefits of using HTML editors are:</p>
        
        <ol className="mt-4 space-y-2 pl-6">
          <li className="list-decimal">
            <b>Syntax Highlighting:</b> HTML editors use color-coding to distinguish tags, attributes, and content, making code more readable.
          </li>
          <li className="list-decimal">
            <b>Autocompletion:</b> These editors suggest tags and correct common errors, improving coding speed.
          </li>
          <li className="list-decimal">
            <b>Code Validation:</b> Built-in validators check for syntax issues and missing tags.
          </li>
          <li className="list-decimal">
            <b>Debugging Tools:</b> Some editors offer debugging features to identify and fix errors.
          </li>
          <li className="list-decimal">
            <b>Customization Options:</b> Customize the interface and settings to enhance your coding experience.
          </li>
        </ol>
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-red-600">How to Choose the Right HTML Editor?</h2>
        <p className="mt-3">When selecting an HTML editor, consider the following factors:</p>
        
        <ol className="mt-4 space-y-2 pl-6">
          <li className="list-decimal">
            <b>Skill level:</b> Beginners might prefer WYSIWYG editors for ease of use, whereas advanced users may opt for text-based editors for better control.
          </li>
          <li className="list-decimal">
            <b>Project needs:</b> Larger projects might benefit from a more robust editor with extensive features and integrations.
          </li>
          <li className="list-decimal">
            <b>Compatibility:</b> Ensure the editor supports other technologies you plan to use like CSS, JavaScript, or various frameworks.
          </li>
        </ol>
      </div>
      
      <div className="mt-12 mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-red-600">Conclusion</h2>
        <p className="mt-3 text-gray-800">
          By choosing the right editor for your needs and skill level, you can greatly enhance the efficiency and quality of your web development projects. Whether you're just starting out or are a seasoned developer, there's an HTML editor out there that's perfect for you.
        </p>
      </div>
    </div>
  );
};

export default HTMLEditors;