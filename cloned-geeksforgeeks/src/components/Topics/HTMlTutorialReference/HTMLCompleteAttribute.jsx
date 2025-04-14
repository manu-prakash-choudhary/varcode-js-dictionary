import React from 'react'
import { htmlAttributeReference } from "../../../utils/CodeBlocks";
import { CopyBlock } from "react-code-blocks";
import { Link } from 'react-router-dom';

const HTMLCompleteAttribute = () => {
    const tagsData = [
        { tag: 'accept', description: 'This attribute can be used with <input> element only.' },
        { tag: 'accept-charset', description: 'Define character encoding and is used for form submission.' },
        { tag: 'accesskey', description: 'The keyboard shortcuts to activate/focus specific elements.' },
        { tag: 'action', description: 'Specify where the form data is to be sent to the server after submission of the form.' },
        { tag: 'align', description: 'Specify the alignment of text content of The Element.' },
        { tag: 'alt', description: 'Show or display something if the primary attribute.' },
        { tag: 'async', description: 'Only works for external scripts (and used only in when src attribute is present ).' },
        { tag: 'autocomplete', description: 'Specify whether the input field has autocompleted would be on or off.' },
        { tag: 'autoplay', description: 'The audio/video should automatically start playing when web page is loaded.' },
        { tag: 'autofocus', description: 'The element should get focused when the page loads. It is a boolean attribute.' },
        { tag: 'bgcolor', description: 'Set the background color of an HTML element.' },
        { tag: 'border', description: 'Set visible border width to most HTML elements within the body.' },
        { tag: 'charset', description: 'Define character encoding.' },
        { tag: 'checked', description: 'Indicate whether an element should be checked when the page loads up. It is a Boolean attribute.' },
        { tag: 'cite', description: 'Specify the URL of the document that explains the quotes, message or text which describes why the text was inserted.' },
        { tag: 'Class', description: 'Specifies one or more class names for an HTML element.' },
        { tag: 'cols', description: 'The number of columns a cell should span.' },
        { tag: 'colspan', description: 'HTML specifies the number of columns a cell should span.' },
        { tag: 'content', description: 'The values that are related to the http-equiv or name attribute.' },
        { tag: 'contenteditable', description: 'Specify whether the content present in the element is editable or not.' },
        { tag: 'controls', description: 'It is a Boolean attribute and also new in HTML5.' },
        { tag: 'coords', description: 'Specify the coordinate of an area in an image-map.' },
        { tag: 'data', description: 'Specify the URL of the Embedded file of the Object.' },
        { tag: 'data-*', description: 'Specific to HTML5 and you can use the data-* attribute on all HTML elements.' },
        { tag: 'datetime', description: 'Specify the date and time of the inserted and the deleted text.' },
        { tag: 'default', description: 'Specify that the track will be enabled if the user’s preferences do not indicate that another track would be more appropriate.' },
        { tag: 'defer', description: 'Executed when the page has finished parsing.' },
        { tag: 'dir', description: 'The text direction of the element content.' },
        { tag: 'dirname', description: 'Enable the text direction of the input and the Textarea Field after submitting the form.' },
        { tag: 'disabled', description: 'The disabled attribute in HTML indicates whether the element is disabled or not.' },
        { tag: 'download', description: 'Download the element when the user clicks on the hyperlink.' },
        { tag: 'draggable', description: 'Specify whether an element is draggable or not.' },
        { tag: 'dropzone', description: 'Specify whether the dragged data is copied, moved, or linked when it is dropped on any element.' },
        { tag: 'enctype', description: 'That data will be present in the form and should be encoded when submitted to the server.' },
        { tag: 'for', description: 'For Attribute is used in both the <label> and the <output> element.' },
        { tag: 'form', description: 'That the element can contain one or more forms.' },
        { tag: 'formaction', description: 'Specify where to send the data of the form. After submission of the form, the formaction attribute is called.' },
        { tag: 'headers', description: 'The HTML headers attribute specifies one or additional header cells a table cell is expounded to.' },
        { tag: 'height', description: 'height attribute is used to specify the height of the Element.' },
        { tag: 'hidden', description: 'The hidden attribute in HTML is used to define the visibility of elements.' },
        { tag: 'high', description: 'The range where the value of gauge is considered to be of high value.' },
        { tag: 'href', description: 'It is used to specify the URL of the document.' },
        { tag: 'hreflang', description: 'The language for a linked document. It is used only when the href attribute is set.' },
        { tag: 'http-equiv', description: 'Provide header information or value of the content Attribute.' },
        { tag: 'Id', description: 'It is used by CSS and JavaScript to perform a certain task for a unique element.' },
        { tag: 'ismap', description: 'The HTML ismap attribute is a boolean attribute.' },
        { tag: 'kind', description: 'The kind of track. This attribute is only used in <Track> element.' },
        { tag: 'label', description: 'The title of the Text Track is used by the browser when listing available text tracks.' },
        { tag: 'lang', description: 'Specify the language of the element content.' },
        { tag: 'list', description: 'List of pre-defined options for an <input> element to suggest the user.' },
        { tag: 'loop', description: 'Restart the audio and video again and again after finishing it. It contains the Boolean value.' },
        { tag: 'low', description: 'The range where the value of gauge is considered to be low.' },
        { tag: 'max', description: 'Specifies the maximum value of an element.' },
        { tag: 'maxlength', description: 'The maximum number of characters in the <input> element. Its default value is 524288.' },
        { tag: 'media', description: 'The media attribute is used with the <link> and <style> elements to specify the type of media (screen, print, etc.) the document is optimized for.' },
        { tag: 'method', description: 'The HTTP method is used to send data while submitting the form.' },
        { tag: 'min', description: 'Specify the lower bound of the gauge.' },
        { tag: 'multiple', description: 'Allowed to select more than one value that is present in an element.' },
        { tag: 'muted', description: 'The audio output of the video is muted, it is a Boolean attribute.' },
        { tag: 'name', description: 'Specify a name for the element.' },
        { tag: 'novalidate', description: 'That the form-data should not be validated when submitting the form.' },
        { tag: 'onblur', description: 'That moment when the element loses focus.' },
        { tag: 'oncopy', description: 'The user copied the content present in an element.' },
        { tag: 'oncut', description: 'The user cut or delete the content that has been present in the element.' },
        { tag: 'onkeypress', description: 'when a user presses a key on the Keyboard.' },
        { tag: 'onmousedown', description: 'Order of events occurs related to the onmousedown event.' },
        { tag: 'onscroll', description: 'This onscroll attribute works when an element scrollbar is being scrolled.' },
        { tag: 'optimum', description: 'The optimum attribute in HTML indicates the optimal numeric value for the gauge.' },
        { tag: 'pattern', description: 'Specifies a regular expression pattern that the input value must match to be valid.' },
        { tag: 'placeholder', description: 'Specifies a short hint that describes the expected value of an input field/text area.' },
        { tag: 'readonly', description: 'Specify that the text written in input or text area Element is read-only.' },
        { tag: 'required', description: 'Specify that the input element must be filled out before submitting the Form.' },
        { tag: 'reversed', description: 'Ordered the list in Descending Order(9, 8, 7, 6 …..) instead of ascending order(1, 2, 3 ….)' },
        { tag: 'rows', description: 'The number of visible text lines for the control i.e the number of rows to display.' },
        { tag: 'rowspan', description: 'The number of rows a cell should span.' },
        { tag: 'selected', description: 'Specify which option should be by default selected when the page loads.' },
        { tag: 'size', description: 'Specify the initial width for the input field and a number of visible rows for the select element.' },
        { tag: 'spellcheck', description: 'Applied to HTML forms using the spellcheck attribute.' },
        { tag: 'srclang', description: 'Specify the language of the track text.' },
        { tag: 'start', description: 'The start value for numbering the individual list item.' },
        { tag: 'step', description: 'Set the discrete step size of the <input> element.' },
        { tag: 'style', description: 'There are 3 ways of implementing style in HTML.' },
        { tag: 'tabindex', description: 'When the tab button is used for navigating.' },
        { tag: 'target', description: 'Specifies where to open the linked document (e.g., in a new window/tab, in the same window/tab, etc.).' },
        { tag: 'title', description: 'Specify extra information about the element.' },
        { tag: 'translate', description: 'Specify whether the content of an element is translated or not.' },
        { tag: 'value', description: 'Specify the value of the element with which it is used.' },
        { tag: 'wrap', description: 'The wrap attribute specifies how text should be wrapped in a <textarea> element (either by spaces or by the browser’s default). It determines how text is handled when the form is submitted.' },
    ];
    return (
        <div className='content-container overflow-y-auto min-h-screen pl-6 pr-6 text-lg tracking-wide'>
            <div className='border-b pb-3 border-gray-200 '>
                <h1 className="text-3xl text-red-600 font-semibold">HTML Attributes Complete Reference</h1>
                <p className="text-gray-500 text-sm mt-3">Last Updated : 25 March, 2025</p>
            </div>
            <p className="mb-6 mt-5">
                HTML attributes are special words placed inside the opening tag of an HTML element to define its characteristics. Each attribute has two parts:
            </p>
            <ul className="list-disc font-semibold list-inside mb-4">
                <li>Attribute name</li>
                <li>Attribute value (separated by an equal sign = and enclosed in double quotes ” “).</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-700 mt-4">Syntax :</h3>
            <pre className="bg-red-100 p-4 rounded-md mt-2 mb-6">
                <code>
                    {`<tag_name attribute_name="value"> Contents... </tag_name>`}
                </code>
            </pre>
            <div className="border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                <CopyBlock
                    text={htmlAttributeReference.text}
                    language={htmlAttributeReference.language}
                    theme={htmlAttributeReference.theme}
                    wrapLines
                />
            </div>

            <div className="mb-8 mt-5">
                <ul className="list-disc list-inside space-y-2">
                    <li><span className="text-xl text-red-600 font-semibold">src Attribute:</span> Specifies the URL of the image to be displayed. In this example, the image is loaded from "https://www.example.com/image.jpg".</li>
                    <li><span className="text-xl text-red-600 font-semibold">alt attributes:</span> Provides alternative text for the image, which is displayed if the image cannot be loaded. It also improves accessibility and SEO.</li>
                    <li><span className="text-xl text-red-600 font-semibold">width Attributes:</span> Sets the width of the image in pixels, making it responsive and visually appealing.</li>
                </ul>

                <div className="mb-8 mt-5">
                    <p className="font-bold text-2xl text-red-600 mb-4">Types of HTML Attributes</p>
                    <p className="text-gray-700 mb-4">HTML attributes can be categorized into different types based on their functionality. Some common types of attributes include:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li><span className="font-semibold">Style attributes:</span> Used to define the visual styling of elements, such as color, background, and font.</li>
                        <li><span className="font-semibold">Event attributes:</span> Used to specify actions that occur in response to user interactions, such as mouse clicks or key presses.</li>
                        <li><span className="font-semibold">Attribute-element Attributes:</span> Used to define the relationship between elements, such as the src attribute of the img element.</li>
                        <li><span className="font-semibold">Form Attributes:</span> Used to define the behavior of form elements, such as the action attribute of the form element.</li>
                    </ul>
                </div>

                <div className="text-2xl text-red-600 font-semibold mt-6 mb-4">HTML Attributes Complete References</div>
                <div className="mb-4">
                    The complete list of HTML attributes are given below.
                </div>
                <table className="w-[80%]">
                    <thead>
                        <tr>
                            <th className="px-2 py-5 bg-gray-200 text-left border border-gray-400 font-medium text-gray-900 uppercase tracking-wider w-[15%]">Attributes</th>
                            <th className="px-2 py-5 bg-gray-200 text-left border border-gray-400 font-medium text-gray-900 uppercase tracking-wider w-[60%]">Description</th>
                            <th className="px-2 py-5 bg-gray-200 text-left border border-gray-400 font-medium text-gray-900 uppercase tracking-wider w-[15%]">Example</th>
                        </tr>
                    </thead>
                    <tbody className="w-full">
                        {tagsData.map((tag, index) => (
                            <tr key={index}>
                                <td className="px-5 border border-gray-400 py-4 whitespace-nowrap">
                                    <div className="text-red-500 font-medium underline">
                                        <Link to={`/tag/${tag.tag}`}>{tag.tag}</Link>
                                    </div>
                                </td>
                                <td className="px-2 border border-gray-400 py-4">
                                    <div className="text-gray-500">{tag.description}</div>
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

                <div className="text-2xl text-red-600 mt-4 font-semibold mb-3">Best Practices for Using HTML Attributes</div>

                <ul className="list-disc list-inside space-y-2">
                    <li>
                        <span className="font-semibold">Implementing HTML attributes </span> correctly enhances the functionality, accessibility, and maintainability of your web pages. Here are some best practices to consider:

                    </li>
                    <li>
                        <span className="font-semibold">Use Lowercase Attribute Names:</span> While HTML is case-insensitive, it's recommended to use lowercase for attribute names to maintain consistency and readability.
                    </li>
                    <li>
                        <span className="font-semibold">Avoid Inline Styles:</span> Instead of using the style attribute for inline CSS, apply external or internal stylesheets. This approach promotes separation of content and presentation, enhancing maintainability.
                    </li>
                </ul>
            </div >
        </div>
    )
}


export default HTMLCompleteAttribute