import React from 'react'
import { htmlTutorialReference } from "../../../utils/CodeBlocks";
import { CopyBlock } from "react-code-blocks";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const HTMLA_Z_List = () => {
  const tagsData = [
    {
      tag: 'DOCTYPE html',
      description: 'According to the HTML specification or standards, every HTML document requires a document type declaration.',
      syntax: '<!DOCTYPE html>',
    },
    {
      tag: 'abbreviation',
      description: 'The abbreviation tag in HTML is used to define the abbreviation or short form of an element.',
      syntax: '<abbr title="..."> ... </abbr>',
    },
    {
      tag: 'acronym',
      description: 'The acronym tag in HTML is used to define the acronym that gives useful information to browsers, translation systems, and search engines.',
      syntax: '<acronym title="..."> ... </acronym>',
    },
    {
      tag: 'address',
      description: 'The address tag in HTML indicates the contact information of a person or an organization.',
      syntax: '<address> ... </address>',
    },
    {
      tag: 'anchor',
      description: 'The anchor tag in HTML is used to create a hyperlink on the webpage.',
      syntax: '<a href=” “> …</a>',
    },
    {
      tag: 'applet',
      description: 'The applet tag in HTML was used to embed Java applets into any HTML document, discontinued starting from HTML 5.',
      syntax: '<applet>….</applet>',
    },
    {
      tag: 'area',
      description: 'This area tag is used in an HTML document to map a portion of an image to make it clickable by the end-user.',
      syntax: '<area>',
    },
    {
      tag: 'article',
      description: 'The <article> tag is one of the new sectioning elements in HTML5. The tag is used to represent an article.',
      syntax: '<article>..</article>',
    },
    {
      tag: 'aside',
      description: 'The <aside> tag is used to describe the main object of the web page in a shorter way like a highlighter.',
      syntax: '<aside>..</aside>',
    },
    {
      tag: 'audio',
      description: 'It is a useful tag if you want to add audio such as songs, interviews, etc. on your webpage.',
      syntax: '<audio>..</audio>',
    },
    {
      tag: 'base',
      description: 'The HTML base tag is used to specify a base URI, or URL, for relative links. This URL will be the base URL for every link on the page.',
      syntax: '<base href = ” “>',
    },
    {
      tag: 'basefont',
      description: 'This tag is used to set the default text-color, font-size, & font-family of all the text in the browser. Not supported in HTML5.',
      syntax: '<basefont>',
    },
    {
      tag: 'bdi',
      description: 'The bdi tag refers to Bi-Directional Isolation. It differentiates a text from other text that may be formatted in a different direction.',
      syntax: '<bdi> … </bdi>',
    },
    {
      tag: 'bdo',
      description: 'The bdo stands for Bi-Directional Override. This tag is used to specify the text direction or used to change the current direction.',
      syntax: '<bdo dir> Contents… </bdo>',
    },
    {
      tag: 'bgsound',
      description: 'The bgsound tag is used to play the soundtrack in the background.',
      syntax: '<bgsound src=””>',
    },
    {
      tag: 'big',
      description: 'The big tag in HTML is used to increase the selected text size by one larger than the surrounding text. In HTML 5.',
      syntax: '<big> Contents… </big>',
    },
    {
      tag: 'blockquote',
      description: 'The blockquote tag in HTML is used to display the long quotations (a section that is quoted from another source).',
      syntax: '<blockquote> Contents… </blockquote>',
    },
    {
      tag: 'body',
      description: 'The body tag in HTML is used to define the main content present inside an HTML page.',
      syntax: '<body> Contents… </body>',
    },
    {
      tag: 'bold',
      description: 'The bold tag in HTML is used to specify the bold text without any extra importance.',
      syntax: '<b>… </b>',
    },
    {
      tag: 'break',
      description: 'The break tag inserts a single carriage return or breaks in the document. This element has no end tag.',
      syntax: '<br>',
    },
    {
      tag: 'button',
      description: 'The button tag in HTML is used to define the clickable button. <button> tag is used to submit the content.',
      syntax: '<button type = “button”>',
    },
    {
      tag: 'caption',
      description: 'The caption tag is used to specify the caption of a table. Only one caption can be specified for one table.',
      syntax: '<caption align = “value”></caption>',
    },
    {
      tag: 'canvas',
      description: 'It can be used to draw paths, boxes, texts, gradients, and add images.',
      syntax: '<canvas id = “script”> Contents</canvas>',
    },
    {
      tag: 'center',
      description: 'The center tag in HTML is used to set the alignment of text in the center. Not supported in HTML5.',
      syntax: '<center> Contents.</center>',
    },
    {
      tag: 'cite',
      description: 'The cite tag in HTML is used to define the title of a work. It displays the text in italic format.',
      syntax: '<cite>Content</cite>',
    },
    {
      tag: 'code',
      description: 'The code tag in HTML is used to define the piece of computer code.',
      syntax: '<code>Contents</code>',
    },
    {
      tag: 'colgroup',
      description: 'It is useful for applying styles to entire columns, instead of repeating the styles for each column, and for each row',
      syntax: '<colgroup> Column lists </colgroup>',
    },
    {
      tag: 'column',
      description: 'The col tag in HTML is used to set the column properties for each column within a colgroup tag.',
      syntax: '<col attribute = “value”>',
    },
    {
      tag: 'comment',
      description: 'The comment tag is used to insert comments in the HTML code.',
      syntax: '<!–…–>',
    },
    {
      tag: 'data',
      description: 'The data element gives an address to a given content with a machine-readable translator.',
      syntax: '<data value=””> Contents </data>',
    },
    {
      tag: 'datalist',
      description: 'The datalist tag is used to provide an autocomplete feature & used with an input tag so that users can easily fill the data in the forms using select the data.',
      syntax: '<datalist>Contents</datalist>',
    },
    {
      tag: 'dd',
      description: 'The dd tag is used to denote the description or definition of an item in a description list.',
      syntax: '<dd>Contents</dd>',
    },
    {
      tag: 'define',
      description: 'The define tag in HTML represents the definition element and is used to represent a defining instance in HTML.',
      syntax: '<dfn>Contents</dfn>',
    },
    {
      tag: 'delete',
      description: 'Delete tag is used to mark a portion of text which has been deleted from the document.',
      syntax: '<del>Contents</del>',
    },
    {
      tag: 'details',
      description: 'This tag is used to create an interactive widget that the user can open or close.',
      syntax: '<details>Contents</details>',
    },
    {
      tag: 'dialog',
      description: 'This tag is used to create a popup dialog and models on a web page. This tag is new in HTML5.',
      syntax: '<dialog open> Contents… </dialog>',
    },
    {
      tag: 'dir',
      description: 'The dir tag is used to make a list of directory titles. It is not supported in HTML 5 <ul> or CSS are used instead of <dir> tag.',
      syntax: '<dir> Lists… </dir>',
    },
    {
      tag: 'div',
      description: 'The div tag is used in HTML to make divisions of content in the web page (text, images, header, footer, navigation bar, etc).',
      syntax: '<div>Content</div>',
    },
    {
      tag: 'dl',
      description: 'The dl tag in HTML is used to represent the description list. In HTML4.1, it defines definition list and in HTML5, it defines description list.',
      syntax: '<dl> Contents… </dl>',
    },
    {
      tag: 'dt',
      description: 'The dt tag in HTML is used to specify the description list. It is used inside the <dl> element. It is usually followed by a <dd> tag.',
      syntax: '<dt> Content… </dt>',
    },
    {
      tag: 'embed',
      description: 'It is used as a container for embedding plug-ins such as flash animations.',
      syntax: '<embed attributes>',
    },
    {
      tag: 'fieldset',
      description: 'The fieldset tag in HTML5 is used to make a group of related elements in the form, and it creates the box over the elements.',
      syntax: '<fieldset>Contents</fieldset>',
    },
    {
      tag: 'figcaption',
      description: 'The figurecaption tag in HTML is used to set a caption to the figure element in a document. This tag is new in HTML5.',
      syntax: '<figcaption> Figure caption </figcaption>',
    },
    {
      tag: 'figure',
      description: 'The figure tag in HTML is used to add self-contained content like illustrations, diagrams, photos, or codes listed in a document.',
      syntax: '<figure> Image content… </figure>',
    },
    {
      tag: 'font',
      description: 'The font tag in HTML plays an important role in the web page to create an attractive and readable web page.',
      syntax: '<font attribute = “value”> Content </font>',
    },
    {
      tag: 'footer',
      description: 'The footer tag in HTML is used to define a footer of HTML document. This section contains the footer information.',
      syntax: '<footer> … </footer>',
    },
    {
      tag: 'form',
      description: 'This form is used basically for the registration process, logging into your profile on a website or creating your profile on a website, etc …',
      syntax: '<form> Form Content… </form>',
    },
    {
      tag: 'frame',
      description: 'HTML Frames are used to divide the web browser window into multiple sections. Not supported in HTML5.',
      syntax: '<frame/>',
    },
    {
      tag: 'frameset',
      description: 'The frameset element contains one or more frame elements. It is used to specify the number of rows and columns in a frameset with their pixel of spaces.',
      syntax: '<frameset cols = “pixels|%|*”>',
    },
    {
      tag: 'head',
      description: 'The head tag in HTML is used to define the head portion of the document which contains information related to the document.',
      syntax: '<head>…</head>',
    },
    {
      tag: 'header',
      description: 'The header tag is used to contain the information related to the title and heading of the related content.',
      syntax: '<header> …</header>',
    },
    {
      tag: 'heading',
      description: 'An HTML heading tag is used to define the headings of a page. These 6 heading elements are h1, h2, h3, h4, h5, and h6; with h1 being the highest level and h6 being the least.',
      syntax: '<h1>Heading1</h1><h2>Heading2</h2>',
    },
    {
      tag: 'hgroup',
      description: 'The hgroup tag in HTML is used to wrap one or more heading elements from <h1> to <h6>, such as the headings and sub-headings.',
      syntax: '<hgroup> … </hgroup>',
    },
    {
      tag: 'hr',
      description: 'The hr tag in HTML stands for horizontal rule and is used to insert a horizontal rule.',
      syntax: '<hr>',
    },
    {
      tag: 'html',
      description: 'The html tag in HTML is used to define the root of HTML and XHTML documents.',
      syntax: '<html> Contents </html>',
    },
    {
      tag: 'Iframes',
      description: 'The iframe tag defines a rectangular region within the document in which the browser can display a separate document.',
      syntax: '<iframe src=”URL” title=”description”></iframe>',
    },
    {
      tag: 'image',
      description: 'HTML Image, how to add the image in HTML. In earlier times, the web pages only contains textual content, which made them appear quite boring and uninteresting.',
      syntax: '<img src=”url” alt=”some_text” width=”” height=””>',
    },
    {
      tag: 'input',
      description: 'The input tag is used within < form> element to declare input controls that allow users to input data.',
      syntax: '<input type = “value” …. />',
    },
    {
      tag: 'ins',
      description: 'The ins tag is typically used to mark a range of text that has been added to the document.',
      syntax: '<ins> Contents… </ins>',
    },
    {
      tag: 'isindex',
      description: 'The index tag is used to query any document through a text field.',
      syntax: '<isindex prompt=”search”>',
    },
    {
      tag: 'italic',
      description: 'This tag is generally used to display a technical term, phrase, the important word in a different language.',
      syntax: '<i> Contents</i>',
    },
    {
      tag: 'kbd',
      description: 'The text enclosed within kbd tag is typically displayed in the browser’s default monospace font.',
      syntax: '<kbd> text content … </kbd>',
    },
    {
      tag: 'keygen',
      description: 'The keygen tag in HTML is used to specify a key-pair generator field in a form. When a form is submitted then two keys are generated, the private key and a public key.',
      syntax: '<keygen name = “name”>',
    },
    {
      tag: 'label',
      description: 'The label tag in HTML is used to provide a usability improvement for mouse users.',
      syntax: '<label> form content… </label>',
    },
    {
      tag: 'legend',
      description: 'The legend tag is used to define the title for the child contents. The legend elements are the parent element.',
      syntax: '<legend> Text </legend>',
    },
    {
      tag: 'list',
      description: 'The list tag in HTML is used to define the list item in an HTML document. It is used within an Ordered List <ol> or Unordered List <ul>.',
      syntax: '<li> List Items </li>',
    },
    {
      tag: 'main',
      description: 'The main tag is used to give the main information of a document. The content inside the <main> element should be unique for the document.',
      syntax: '<main>Coontents</main>',
    },
    {
      tag: 'mark',
      description: 'The mark tag in HTML is used to define the marked text. It is used to highlight the part of the text in a paragraph.',
      syntax: '<mark> Contents… </mark>',
    },
    {
      tag: 'marquee',
      description: 'The marquee tag in HTML is used to create scrolling text or images on a webpage. It scrolls either horizontally or vertically.',
      syntax: '<marquee>Contents</marquee>',
    },
    {
      tag: 'menuitem',
      description: 'The menuitem tag is used to define a command or menu that the user can utilize from the popup item. Not supported in HTML5.',
      syntax: '<menuitem label=”” icon=”” type> </menuitem>',
    },
    {
      tag: 'meta',
      description: 'The meta tag is regularly used to give watchwords, portrayals, author data, and other metadata that might be utilized by the program to deliver the document accurately or in simple words, it provides important information about a document.',
      syntax: '<meta attribute-name=”value”>',
    },
    {
      tag: 'meter',
      description: 'It is used to define the scale for measurement in a well-defined range and also supports a fractional value.',
      syntax: '<meter attributes…> </meter>',
    },
    {
      tag: 'nav',
      description: 'The nav tag is used for declaring the navigational section in HTML documents. Websites typically have sections dedicated to navigational links, which enables users to navigate the site.',
      syntax: '<nav> Links… </nav>',
    },
    {
      tag: 'nobreak',
      description: 'The no break tag is used to create a single line text, that does not matter how long the statement is, this tag is used with <wbr> tag.',
      syntax: '<nobr> Statement </nobr>',
    },
    {
      tag: 'noembed',
      description: 'The noembed tag is used to show that the browser is not supported by <embed> tag.',
      syntax: '<noembed> Element </noembed>',
    },
    {
      tag: 'noscript',
      description: 'The noscript tag in HTML is used to display the text for those browsers which does not support the script tag or the browsers disable the script by the user.',
      syntax: '<noscript> Contents… </noscript>',
    },
    {
      tag: 'object',
      description: 'The object tag is an HTML tag used to display multimedia like audio, videos, images, PDFs, and Flash on web pages.',
      syntax: '<object>…</object>',
    },
    {
      tag: 'optgroup',
      description: 'This tag is used to create a group of the same category options in a drop-down list.',
      syntax: '<optgroup>…</optgroup>',
    },
    {
      tag: 'option',
      description: 'The option tag in HTML is used to choose an option from a Drop-Down menu.',
      syntax: '<option> Contents… </option>',
    },
    {
      tag: 'output',
      description: 'The output tag in HTML is used to represent the result of a calculation performed by the client-side script such as JavaScript.',
      syntax: '<output> Results… </output>',
    },
    {
      tag: 'paragraphs',
      description: 'The <p> tag in HTML defines a paragraph. These have both opening and closing tags.',
      syntax: '<p> Content </p>',
    },
    {
      tag: 'param',
      description: 'The param tag in HTML is used to define a parameter for plug-ins which is associated with <object> element.',
      syntax: '<param name=”” value=””>',
    },
    {
      tag: 'phrase',
      description: 'In HTML, phrase tag is used to indicate the structural meaning of a block of text.',
      syntax: '<em> Text Content </em>',
    },
    {
      tag: 'pre',
      description: 'The pre tag in HTML is used to define the block of preformatted text which preserves the text spaces.',
      syntax: '<pre> Contents… </pre>',
    },
    {
      tag: 'progress',
      description: 'It is used to represent the progress of a task. It is also defined how much work is done and how much is left to download a thing.',
      syntax: '<progress attributes…> </progress>',
    },
    {
      tag: 'q',
      description: 'The q tag is a standard quotation tag and is used for short quotations.',
      syntax: '<q> Contents… </q>',
    },
    {
      tag: 'rp',
      description: 'The rp tag in HTML is used to provide parentheses around a ruby main text which defines the information.',
      syntax: '<rp>[</rp> Explaination… <rp>]</rp>',
    },
    {
      tag: 'rt',
      description: 'The rt tag in HTML is used to define the explanation of the ruby annotation which is a small text, attached to the main text.',
      syntax: '<rt> Explanation… </rt>',
    },
    {
      tag: 'ruby',
      description: 'The ruby tag in HTML is used to specify the ruby annotation which is a small text, attached with the main text to specify the meaning of the main text.',
      syntax: '<ruby attributes> Contents… </ruby>',
    },
    {
      tag: 's',
      description: 'This tag is used to specify that the text content is no longer correct or accurate. This tag is similar but slightly different from <del> tag.',
      syntax: '<s> Contents… </s>',
    },
    {
      tag: 'samp',
      description: 'It is a phrase tag used to define the sample output text from a computer program.',
      syntax: '<samp> Contents… </samp>',
    },
    {
      tag: 'script',
      description: 'The script tag in HTML is used to define the client-side script.',
      syntax: '<script> Script Contents… </script>',
    },
    {
      tag: 'section',
      description: 'Section tag defines the section of documents such as chapters, headers, footers, or any other sections.',
      syntax: '<section> Section Contents </section>',
    },
    {
      tag: 'small',
      description: 'The small tag in HTML is used to set small font sizes. It decreases the font size by one size (from medium to small, from x-large to large).',
      syntax: '<small> Contents… </small>',
    },
    {
      tag: 'source',
      description: 'The source tag in HTML is used to attach multimedia files like audio, video, and pictures.',
      syntax: '<source src=”” type=””> </source>',
    },
    {
      tag: 'spacer',
      description: 'The spacer tag is used to create some white space. Not-supporte in HTML5 .',
      syntax: '<spacer type=”” size=””>',
    },
    {
      tag: 'span',
      description: 'The HTML span element is a generic inline container for inline elements and content.',
      syntax: '<span class=””>Some Text</span>',
    },
    {
      tag: 'strike',
      description: 'HTML strike tag, along with understanding its implementation through the example. The <strike> tag defines a strike or line through Text.',
      syntax: '<strike> Contents </strike>',
    },
    {
      tag: 'strong',
      description: 'The strong tag in HTML is the parsed tag and is used to show the importance of the text. Make that text bold.',
      syntax: '<strong> Contents… </strong>',
    },
    {
      tag: 'style',
      description: 'The style tag in HTML helps us to design the web page.',
      syntax: '<tagname style=”property:value;”>',
    },
    {
      tag: 'sub and sup Tags',
      description: 'The sub-tag is used to add a subscript text to the HTML document. The <sup> tag is used to add superscript text to the HTML document.',
      syntax: '<sub>subscript text</sub><sup>superscript text</sup>',
    },
    {
      tag: 'summary',
      description: 'The <summary> tag in HTML is used to define a summary for the <details> element.',
      syntax: '<summary> Content </summary>',
    },
    {
      tag: 'svg',
      description: 'HTML SVG Basics, & their implementation through the examples. SVG stands for Scalable Vector Graphics.',
      syntax: '<svg height=”” width=””>',
    },
    {
      tag: 'table',
      description: 'HTML Table, various ways to implement it, & will also understand its usage through the examples. HTML Table is an arrangement of data in rows and columns, or possibly in a more complex structure.',
      syntax: '<table>… </table>',
    },
    {
      tag: 'tbody',
      description: 'The tbody tag in HTML is used to make a group of the same type of content of the body element.',
      syntax: '<tbody> // Table contents </tbody>',
    },
    {
      tag: 'td',
      description: 'The table data tag is used to define a standard cell in an HTML table.',
      syntax: '<td>……..</td>',
    },
    {
      tag: 'template',
      description: 'The template tag in HTML is used to store the HTML code fragments, which can be cloned and inserted in an HTML document.',
      syntax: '<template> Contents </template>',
    },
    {
      tag: 'tfoot',
      description: 'This tag is used in HTML table with header and body which is known as “thead” and “tbody”.',
      syntax: '<tfoot> // Table footer contents… </tfoot>',
    },
    {
      tag: 'th',
      description: 'The table header tag in HTML is used to set the header cell of a table. Two types of cells in the HTML table Header & Standard.',
      syntax: '<th> Contents… </th>',
    },
    {
      tag: 'thead',
      description: 'This tag is used in HTML tables as head and body which are known as thead and tbody.',
      syntax: '<thead>Table head Contents…</thead>',
    },
    {
      tag: 'time',
      description: 'The time tag is used to display the human-readable date/time. It can also be used to encode dates and times in a machine-readable form.',
      syntax: '<time attribute> Time… </time>',
    },
    {
      tag: 'title',
      description: 'The title tag in HTML is used to define the title of HTML document. It sets the title in the browser toolbar.',
      syntax: '<title> Title name </title>',
    },
    {
      tag: 'tr',
      description: 'The table row tag is used to define a row in an HTML table. The <tr> element contains multiple <th> or <td> elements.',
      syntax: '<tr>…..</tr>',
    },
    {
      tag: 'track',
      description: 'The tracking tag specifies text tracks for media components audio and video.',
      syntax: '<track attribute>',
    },
    {
      tag: 'tt',
      description: 'The tt tag is the abbreviation of teletype text. This tag is depreciated from HTML 5. It was used for marking Keyboard input.',
      syntax: '<tt> Contents… </tt>',
    },
    {
      tag: 'underline',
      description: 'The underline tag in HTML stands for underline, and it’s used to underline the text enclosed within the <u> tag.',
      syntax: '<u> Contents… </u>',
    },
    {
      tag: 'var',
      description: 'It is a phrase tag used to specify the variable in a mathematical equation or in a computer program.',
      syntax: '<var> Contents… </var>',
    },
    {
      tag: 'video',
      description: 'HTML5 Video, along with knowing the different ways to add the videos to the HTML page.',
      syntax: '<video src=”” controls> </video>',
    },
    {
      tag: 'wbr',
      description: 'The wbr tag is used to define the position within the text which is treated as a line break by the browser.',
      syntax: '<wbr>',
    },
    {
      tag: 'xmp',
      description: 'The XMP tag is used to create any content in letter format.',
      syntax: '<xmp> statement </xmp>',
    },
  ]
  return (
    <div className='content-container overflow-y-auto min-h-screen pl-6 pr-6 text-lg tracking-wide'>
      <div className='border-b pb-3 border-gray-200 '>
        <h1 className="text-3xl text-red-600 font-semibold">HTML Tags – A to Z List</h1>
        <p className="text-gray-500 text-sm mt-3">Last Updated : 25 March, 2025</p>
      </div>
      <p className="mb-4 mt-5">
        <span className='font-semibold'>HTML Tags</span> are fundamental elements used to structure and format content on web pages. They provide instructions to web browsers on how to render text, images, links, and other media.
      </p>

      <p className="mb-4">
        <span className='font-semibold'>HTML tags are enclosed in angle brackets <strong>&lt; &gt;</strong> and usually come in pairs: an opening tag and a closing tag. </span>The closing tag has the same text as the opening tag, but with an additional forward-slash <strong>/</strong>. The opening tag marks the beginning of an element, while the closing tag marks the end.
      </p>

      <p className="mb-4 text-2xl font-semibold text-red-600">
        <span >For example:</span>
      </p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>&lt;p&gt;</strong> is an opening tag for a paragraph.</li>
        <li><strong>&lt;/p&gt;</strong> is the closing tag.</li>
      </ul>

      <p className="mb-4">
        Some tags are self-closing, meaning they don't require a closing tag, such as <span className='font-semibold'>&lt;img&gt;</span> and <span className='font-semibold'>&lt;br&gt;</span>.
      </p>

      <p className="mb-4">
        Essential tags for defining an HTML document structure include <span className='font-semibold'>&lt;!DOCTYPE html&gt;</span>, <span className='font-semibold'>&lt;html&gt;</span>, <span className='font-semibold'>&lt;head&gt;</span>, and <span className='font-semibold'>&lt;body&gt;</span>.
      </p>

      <h2 className="text-2xl text-red-600 font-semibold mt-6 mb-2">Basic HTML Tag Example</h2>
      <p className="mb-4">Let's see a basic example using the HTML tags.</p>
      <div className="border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
        <CopyBlock
          text={htmlTutorialReference.text}
          language={htmlTutorialReference.language}
          theme={htmlTutorialReference.theme}
          wrapLines
        />
      </div>

      <div className="text-2xl text-red-600 font-semibold mt-6 mb-4">A to Z HTML Tags</div>
      <div className="mb-4">
        Let us see the extensive list of HTML tags, from A to Z. Whether you are just starting out or need a quick reference, this list has you covered.
      </div>
      <table className="w-[80%]">
        <thead>
          <tr>
            <th className="px-2 py-5 bg-gray-200 text-left border border-gray-400 font-medium text-gray-900 uppercase tracking-wider w-[15%]">Tags</th>
            <th className="px-2 py-5 bg-gray-200 text-left border border-gray-400 font-medium text-gray-900 uppercase tracking-wider w-[60%]">Description</th>
            <th className="px-2 py-5 bg-gray-200 text-left border border-gray-400 font-medium text-gray-900 uppercase tracking-wider w-[15%]">Syntax</th>
            <th className="px-2 py-5 bg-gray-200 text-left border border-gray-400 font-medium text-gray-900 uppercase tracking-wider w-[15%]">Example</th>
          </tr>
        </thead>
        <tbody className="w-full">
          {tagsData.map((tag, index) => (
            <tr key={index}>
              <td className="px-5 border border-gray-400 py-4 whitespace-nowrap">
                <div className="text-red-500 font-medium hover:underline">
                  <Link to={`/tag/${tag.tag}`}>{tag.tag}</Link>
                </div>
              </td>
              <td className="px-2 border border-gray-400 py-4">
                <div className="text-gray-500">{tag.description}</div>
              </td>
              <td className="px-2 border border-gray-400 py-4 break-words">  {/* Added break-words here */}
                <div className="text-gray-500">{tag.syntax}</div>
              </td>
              <td className="px-4 border border-gray-400 py-4 whitespace-nowrap">
                <button className="bg-gray-200 hover:bg-red-400 underline text-gray-800 font-bold py-2 px-4 rounded">
                  <Link to={'/'}>Try</Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="text-2xl text-red-600 mt-4 font-semibold mb-3">Conclusion</div>
      <p className="mb-6">
        This A to Z guide of HTML tags serves as a comprehensive resource, whether you're a beginner just starting your web development journey or an experienced developer looking for a quick reference. Remember, the power of HTML lies in its simplicity and versatility. By mastering these tags, you can create engaging, accessible, and SEO-friendly websites that not only look good but also function seamlessly.
      </p>

      <div className="bg-red-100 p-4 rounded-lg mb-6">
        <p>
          If you need a quick reference list of most commonly used HTML tags, you can also refer to this article – <a href="YOUR_LINK_HERE" className="text-red-500 underline">Most commonly used tags in HTML</a>.
        </p>
      </div>

      <p>
        HTML is the foundation of webpages, is used for webpage development by structuring websites and web apps. You can learn HTML from the ground up by following this <a href="YOUR_LINK_HERE" className="text-red-500 underline">HTML Tutorial</a> and <a href="YOUR_LINK_HERE" className="text-red-500 underline">HTML Examples</a>.
      </p>
      <div className="min-h-20 mt-5  w-full">
        <div className="flex justify-between items-center p-20 pb-0 pt-0">
          <div></div>
          <div>
            <button className="text-lg border border-red-400 flex items-center rounded-2xl p-4 font-semibold hover:scale-95 duration-200 hover:text-gray-800 cursor-pointer">
              Next Article
              <FaAngleRight />
            </button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default HTMLA_Z_List