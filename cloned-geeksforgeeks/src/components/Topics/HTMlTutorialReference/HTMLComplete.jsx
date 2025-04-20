import React from 'react'
import { htmlCompleteRerence } from "../../../utils/CodeBlocks";
import { CopyBlock } from "react-code-blocks";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const HTMLComplete = () => {
  const tagsData = [
    { tag: 'HTML5 | Introduction', description: 'HTML stands for Hyper Text Markup Language. It is used to design web pages.' },
    { tag: 'HTML5 | Editors', description: 'HTML text editors are used to create and modify web pages.' },
    { tag: 'HTML5 | Basics', description: 'There are various tags that we must consider and include while starting to code in HTML.' },
    { tag: 'HTML5 | Attributes', description: 'All HTML elements have attributes that will provide additional information about that particular element.' },
    { tag: 'HTML5 | <!DOCTYPE>', description: '<!DOCTYPE> is used to define the document type and declare the version of HTML being used (e.g., HTML5).' },
    { tag: 'HTML5 | Paragraph', description: 'The <p> tag in HTML defines a paragraph.' },
    { tag: 'HTML5 | Text Formatting', description: 'HTML facilitates the ability for formatting text just like we do in any text editing software.' },
    { tag: 'HTML5 | Quotations', description: 'The Quotation elements in HTML are used to insert quoted texts in a web page.' },
    { tag: 'HTML5 | Tables', description: 'HTML Table is an arrangement of data in rows and columns, or possibly in a more complex structure.' },
    { tag: 'HTML5 | Lists', description: 'A list is a record of short pieces of related information or used to display the data on web pages in the ordered or unordered form.' },
    { tag: 'HTML5 | Spell Check', description: 'The Spell Check feature in HTML is used to detect grammatical or spelling mistakes in the text fields.' },
    { tag: 'HTML5 | Color Styles and HSL', description: 'Colors are used to make the page more attractive.' },
    { tag: 'HTML5 | Geolocation', description: 'Geo-location is used to share the location with some websites and be aware of the exact location.' },
    { tag: 'HTML5 | Drag and Drop', description: 'Drag and Drop is a very interactive and user-friendly concept that makes it easier to move an object to a different location by grabbing it.' },
    { tag: 'HTML5 | Charsets', description: 'The character set or character encoding has different character encoding standards which assign some numbers to these character set which can be used in the internet.' },
    { tag: 'HTML5 | Images', description: 'By adding images, we can make our websites more attractive.' },
    { tag: 'HTML5 | Doctypes', description: 'A doctype declaration is an instruction that tells the web browser about the markup language in which the current page is written.' },
    { tag: 'HTML5 | Layout', description: 'Page layout is the part of graphic design that deals with the arrangement of visual elements on a page.' },
    { tag: 'HTML5 | File Paths', description: 'A file path specifies the location of a file inside a web folder structure.' },
    { tag: 'HTML5 | Iframes', description: 'The ”iframe” tag defines a rectangular region within the document in which the browser can display a separate document, including scrollbars and borders.' },
    { tag: 'HTML5 | Links', description: 'Link is a connection from one web resource to another.' },
    { tag: 'HTML5 | Deprecated Tags', description: 'The deprecated tags are those attributes which are replaced by some other attributes.' },
    { tag: 'HTML5 | URL Encoding', description: 'URL Encoding takes place by replacing all the characters that are not allowed by a % sign followed by two hexadecimal digits.' },
    { tag: 'HTML5 | SVG-Basics', description: 'SVG defines vector-based graphics in XML format.' },
    { tag: 'HTML5 | Canvas Basics', description: 'The HTML “canvas” element is used to draw graphics via JavaScript.' },
    { tag: 'HTML5 | Computer Code Elements', description: 'The <code> tag in HTML is used to define the piece of computer code.' },
    { tag: 'HTML5 | Entities', description: 'HTML provides some Entity names and Entity numbers to use symbols which are normally not present in basic keyboard.' },
    { tag: 'HTML5 | canvas drawImage() Method', description: 'canvas drawImage() function is used to display an image or video on canvas.' },
    { tag: 'HTML5 | template Tag', description: 'The <template> tag in HTML is used to store the HTML code fragments, which can be cloned and inserted in an HTML document.' },
    { tag: 'HTML5 | dropzone Attribute', description: 'The dropzone attribute in HTML is used to specify whether the dragged data copied, moved, or linked when it is dropped on any element.' },
    { tag: 'HTML5 | rp Tag', description: 'The <rp> tag in HTML is used to provide parentheses around a ruby main text which defines the information.' },
    { tag: 'HTML5 | rt Tag', description: 'The <rt> tag in HTML is used to define the explanation of the ruby annotation which is a small text, attached with the main text.' },
    { tag: 'HTML5 | <ruby> Tag', description: 'The <ruby> tag in HTML is used to specify the ruby annotation which is a small text, attached with the main text to specify the meaning of the main text.' },
    { tag: 'HTML5 | figure Tag', description: 'The <figure> tag in HTML is used to add self-contained content like illustrations, diagrams, photos, or codes listing in a document.' },
    { tag: 'HTML5 | figcaption Tag', description: 'The <figurecaption> tag in HTML is used to set a caption to the figure element in a document.' },
    { tag: 'HTML5 | fieldset Tag', description: 'The <fieldset> tag in HTML5 is used to make a group of related elements in the form, and it creates the box over the elements.' },
    { tag: 'HTML5 | <head> Tag', description: 'The <head> tag in HTML is used to define the head portion of the document which contains information related to the document.' },
    { tag: 'HTML5 | <dialog> Tag', description: 'The <dialog> tag is used to specify the dialog box or window.' },
    { tag: 'HTML5 | <bdi> Tag', description: 'It differentiates a text from other text that may be formatted in a different direction.' },
    { tag: 'HTML5 | <progress> Tag', description: 'It is used to represent the progress of a task.' },
    { tag: 'HTML5 | <meter> Tag', description: 'It is used to define the scale for measurement in a well-defined range and also supports a fractional value.' },
    { tag: 'HTML5 | <wbr> Tag', description: 'It is used to define the position within the text which is treated as a line break by the browser.' },
    { tag: 'HTML5 | mark Tag', description: 'The <mark> tag in HTML is used to define the marked text.' },
    { tag: 'HTML5 | <header> Tag', description: 'The <header> tag in HTML is used to define the header for a document.' },
    { tag: 'HTML5 | <footer> Tag', description: 'The <footer> tag in HTML is used to define a footer of HTML document.' },
    { tag: 'HTML5 | article tag', description: 'The <article> tag is used to represent an article.' },
    { tag: 'HTML5 | <aside> Tag', description: 'The <aside> tag is used to describe the main object of the web page in a shorter way like a highlighter.' },
    { tag: 'HTML5 | <section> Tag', description: 'Section tag defines the section of documents such as chapters, headers, footers or any other sections.' },
    { tag: 'HTML5 | <summary> Tag', description: 'The <summary> tag in HTML is used to define a summary for the <details> element.' },
    { tag: 'HTML5 | <details> tag', description: 'The <details> tag is used for the content/information which is initially hidden but could be displayed if the user wishes to see it.' },
    { tag: 'HTML5 | Semantics', description: 'Semantic elements have meaningful names which tells about type of content.' },
    { tag: 'HTML5 | Mathematical operators', description: 'Mathematical Operators are used for representation of mathematical and technical operators.' },
    { tag: 'HTML5 | Video', description: 'The “video” element specifies a standard way to embed a video on a web page.' },
  ];
  return (
    <div className='content-container overflow-y-auto min-h-screen pl-6 pr-6 text-lg tracking-wide'>
      <div className='border-b pb-3 border-gray-200 '>
        <h1 className="text-3xl text-red-600 font-semibold">HTML5 Complete Reference</h1>
        <p className="text-gray-500 text-sm mt-3">Last Updated : 25 March, 2025</p>
      </div>
      <p className="mb-4 mt-3">
        HTML (HyperText Markup Language) is the standard language used to create and design web pages. It defines the structure and layout of a webpage using a series of elements and tags.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>HTML5 is the latest version of HTML, bringing significant improvements for building modern web applications.</li>
        <li>It introduces new semantic elements like <Link className="text-red-500 underline">&lt;header&gt;</Link>, <Link className="text-red-500 underline">&lt;footer&gt;</Link>, and <Link className="text-red-500 underline">&lt;article&gt;</Link> for better content organization.</li>
        <li>HTML5 supports APIs, improved multimedia handling with <Link className="text-red-500 underline">&lt;audio&gt;</Link> and <Link className="text-red-500 underline">&lt;video&gt;</Link>, and a more robust <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model" className="text-red-500">Document Object Model (DOM)</a> for interactive web experiences.</li>
      </ul>

      <div className="overflow-auto border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
        <CopyBlock
          text={htmlCompleteRerence.text}
          language={htmlCompleteRerence.language}
          theme={htmlCompleteRerence.theme}
          wrapLines
        />
      </div>
      <p className="mb-4 mt-5">
        HTML5 Structure: This example shows a basic HTML5 document structure with a <span className="text-red-500">&lt;!DOCTYPE html&gt;</span> declaration, <span className="text-red-500">&lt;head&gt;</span>, and <span className="text-red-500">&lt;body&gt;</span> sections.
      </p>
      <p className="mb-4">
        Inline CSS Styling: The <span className="text-red-500">&lt;style&gt;</span> block within the <span className="text-red-500">&lt;head&gt;</span> section applies simple styles to the body, heading, and paragraph elements, enhancing the presentation without external CSS files.
      </p>

      <div className="mb-4">
        <p className="font-semibold text-2xl text-red-600">Features:</p>
      </div>

      <ul className="list-disc list-inside space-y-2 mb-8">
        <li>Introduced multimedia support with <Link className="text-red-500">&lt;audio&gt;</Link> and <Link className="text-red-500">&lt;video&gt;</Link> tags for embedding audio and video.</li>
        <li>Added new graphic elements like <Link className="text-red-500">&lt;canvas&gt;</Link> for drawing shapes, and support for vector graphics.</li>
        <li>Improved semantic structure with tags like <Link className="text-red-500">&lt;header&gt;</Link>, <Link className="text-red-500">&lt;footer&gt;</Link>, <Link className="text-red-500">&lt;article&gt;</Link>, <Link className="text-red-500">&lt;section&gt;</Link>, and <Link className="text-red-500">&lt;figure&gt;</Link>.</li>
        <li>Drag-and-drop functionality allows users to move objects within a page.</li>
        <li>Geo-location API enables websites to access the user's geographical location.</li>
        <li>Web Storage API allows storage of data on the client's browser for offline access.</li>
        <li>Supports offline data storage with IndexedDB, a client-side SQL-like database.</li>
        <li>Enables drawing various shapes (like triangles, rectangles, circles) on the canvas.</li>
        <li>Better error handling for incorrect syntax, improving code resilience.</li>
        <li>Simplified DOCTYPE declaration: <Link className="text-red-500">&lt;!DOCTYPE html&gt;</Link> for cleaner document structure.</li>
        <li>Easy character encoding specification with <Link className="text-red-500">&lt;meta charset="UTF-8"&gt;</Link>.</li>
      </ul>

      <div>
        <p className="font-semibold text-red-600 text-2xl">Complete Reference:</p>
      </div>

      <div className="mb-8 mt-5">
        <table className="w-full md:w-[80%] mx-auto table-auto">
          <thead>
            <tr>
              <th className="px-4 py-5 bg-gray-200 text-left border border-gray-400 font-medium text-gray-900 uppercase tracking-wider">Title</th>
              <th className="px-4 py-5 bg-gray-200 text-left border border-gray-400 font-medium text-gray-900 uppercase tracking-wider">Description</th>
              {/* <th className="px-4 py-5 bg-gray-200 text-left border border-gray-400 font-medium text-gray-900 uppercase tracking-wider">Example</th> */}
            </tr>
          </thead>
          <tbody className="w-full">
            {tagsData.map((tag, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-4 border border-gray-400 text-sm text-red-500 font-medium hover:underline">
                  <Link to={`/tag/${tag.tag}`}>{tag.tag}</Link>
                </td>
                <td className="px-4 py-4 border border-gray-400 text-sm text-gray-500">
                  {tag.description}
                </td>
                {/* <td className="px-4 py-4 border border-gray-400 text-sm whitespace-nowrap">
                  <button className="bg-gray-200 hover:bg-red-400 underline text-gray-800 font-bold py-2 px-4 rounded">
                    <Link to={'/'}>Try</Link>
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mb-4 mt-5">
          <p className="font-semibold text-2xl text-red-600">Best Practices for HTML5</p>
        </div>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="font-semibold">Use Semantic Elements:</span> Incorporate HTML5 semantic tags like <Link className="text-red-500">&lt;header&gt;</Link>, <Link className="text-red-500">&lt;footer&gt;</Link>, <Link className="text-red-500">&lt;article&gt;</Link>, and <Link className="text-red-500">&lt;section&gt;</Link> to enhance code readability and improve SEO.
          </li>
          <li>
            <span className="font-semibold">Use Proper Document Structure:</span> Always declare the <Link className="text-red-500">&lt;!DOCTYPE html&gt;</Link> at the beginning of your HTML documents to ensure consistent rendering across browsers.
          </li>
          <li>
            <span className="font-semibold">Optimize Media Elements:</span> Utilize the <Link className="text-red-500">&lt;audio&gt;</Link> and <Link className="text-red-500">&lt;video&gt;</Link> tags for embedding media, and provide multiple formats to ensure compatibility across different browsers.
          </li>
          <li>
            <span className="font-semibold">Implement Responsive Design:</span> Use the <Link className="text-red-500">&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</Link> tag and relative units to ensure your website is mobile-friendly and responsive.
          </li>
        </ul>
      </div >
      <div className="min-h-20 mt-5 w-full  ">
        <div className="flex justify-between items-center ml-5 pb-0 pt-0">
          <div></div>
          <div>
            <button className="text-lg border border-red-400 flex items-center rounded-2xl p-4 font-semibold hover:scale-95 duration-200 hover:text-gray-800 cursor-pointer">
              Next Article
              <FaAngleRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HTMLComplete