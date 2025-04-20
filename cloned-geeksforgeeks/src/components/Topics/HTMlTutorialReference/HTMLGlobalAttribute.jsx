import React from 'react'
import { htmlGlobalAccesskey, htmlGlobalAutoFocus, htmlGlobalLang, htmlGlobalClass } from "../../../utils/CodeBlocks";
import { CopyBlock } from "react-code-blocks";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const HTMLGlobalAttribute = () => {
    const tagsData = [
        { tag: 'accesskey', description: 'It is the keyboard shortcuts to activate/focus specific elements.' },
        { tag: 'autocapitalize', description: 'Automatically capitalizes text entered by the user.' },
        { tag: 'autofocus', description: 'Specifies that an element should get focus when the page loads.' },
        { tag: 'class', description: 'It specifies one or more class names for an HTML element.' },
        { tag: 'contenteditable', description: 'Indicates whether the content of an element can be edited.' },
        { tag: 'contextmenu', description: 'Specifies a custom context menu for an element.' },
        { tag: 'data-*', description: 'It can be used to define our own custom data attributes.' },
        { tag: 'dir', description: 'It is used to specify the text direction of the element content.' },
        { tag: 'draggable', description: 'It is used to specify whether an element is draggable or not. Links and images are by default draggable.' },
        { tag: 'enterkeyhint', description: 'It provides a hint on what label or icon to present on a virtual keyword while pressing keys.' },
        { tag: 'hidden', description: 'It is used to define the visibility of elements. It contains a boolean value. If this attribute is used then browsers will not display elements that have the hidden attribute specified.' },
        { tag: 'id', description: 'Provides a unique identifier for an element.' },
        { tag: 'inputmode', description: 'It is used mainly to provide a hint to browsers on which virtual keyboard configuration to use when editing this element or its contents.' },
        { tag: 'is', description: 'Specifies a custom built-in element.' },
        { tag: 'itemid', description: 'Provides a unique global identifier for an item.' },
        { tag: 'itemprop', description: 'Adds properties to an item.' },
        { tag: 'itemscope', description: 'It works with item types to ensure that the HTML contained in a block is about a particular item.' },
        { tag: 'itemtype', description: 'It specifies the URL vocabulary which is used to define itemprops.' },
        { tag: 'lang', description: 'It is used to specify the language of the element content. Some examples of languages are en for English, es for Spanish, etc.' },
        { tag: 'nonce', description: 'It is a cryptographic nonce (“number used once”)  used by a content security policy to check given fetch allowed to proceed or not.' },
        { tag: 'part', description: 'It is a space-separated list of the part names of the element.' },
        { tag: 'slot', description: 'It is used to assign a slot in a shadow DOM shadow tree to an element.' },
        { tag: 'spellcheck', description: 'The Spell Check feature in HTML is used to detect grammatial or spelling mistakes in the text fields.' },
        { tag: 'style', description: 'Style in HTML are basically rules that describe how a document will be presented in a browser.' },
        { tag: 'tabindex', description: 'It is used to specify the tab order of an element. It is used when the tab button is used for navigating.' },
        { tag: 'title', description: 'It is used to define the title of an HTML document, sets the title in the browser toolbar, and provides the title for the web page when it is added to favorites.' },
        { tag: 'translate', description: 'The translate attribute in HTML is used to specify whether the content of an element is translated or not.' },
        { tag: 'wrap', description: 'The wrap attribute specifies how text should be wrapped in a <textarea> element (either by spaces or by the browser’s default). It determines how text is handled when the form is submitted.' },
    ];
    return (
        <div className="content-container overflow-y-auto min-h-screen px-6 text-lg tracking-wide">
            <div className="border-b pb-3 border-gray-200">
                <h1 className="text-3xl text-red-600 font-semibold">HTML Global Attributes</h1>
                <p className="text-gray-500 text-sm mt-3">Last Updated: 25 March, 2025</p>
            </div>
            <p className="mb-6 mt-5">
                HTML attributes provide additional information about an element and define its properties. Global attributes are special types of attributes that can be used with any HTML element, offering common functionality to enhance behavior and presentation.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-8">
                <li>Global attributes can be applied to any HTML element, such as <span className='text-red-500'> &lt;div&gt;</span>, <span className='text-red-500'> &lt;p&gt;</span> , <span className='text-red-500'>&lt;img&gt;</span>, and more.</li>
                <li>They control various aspects like styling, identification, accessibility, and interaction, improving web page design and functionality.</li>
                <li>Common global attributes include <Link className="underline text-red-500">id</Link>, <Link className="underline text-red-500">class</Link>, <Link className="underline text-red-500">style</Link>, title, and lang.</li>
            </ul>

            <div className="mb-4">
                <p className="font-semibold text-2xl text-red-600">1. accesskey</p>
            </div>
            <div>
                <p>The accesskey attribute defines a keyboard shortcut to activate/focus an element.</p>
            </div>

            <div className="overflow-auto border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa]">
                <CopyBlock
                    text={htmlGlobalAccesskey.text}
                    language={htmlGlobalAccesskey.language}
                    theme={htmlGlobalAccesskey.theme}
                    wrapLines
                />
            </div>

            <ul className="list-disc mt-4 list-inside space-y-2 mb-8">
                <li>The button can be activated by pressing Alt + S on Windows or Option + $ on macOS.</li>
                <li>This provides a quick way for users to interact with the button without using a mouse.</li>
            </ul>

            <div className="mb-4">
                <p className="font-semibold text-2xl text-red-600">2. autofocus</p>
                <p className='mt-3'>The autofocus attribute automatically focuses an element when the page loads.</p>
            </div>
            <div className="overflow-auto border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa]">
                <CopyBlock
                    text={htmlGlobalAutoFocus.text}
                    language={htmlGlobalAutoFocus.language}
                    theme={htmlGlobalAutoFocus.theme}
                    wrapLines
                />
            </div>

            <ul className="list-disc list-inside mt-3 space-y-2 mb-8">
                <li>The input field receives focus automatically when the page is loaded.</li>
                <li>Users can start typing immediately without needing to click on the input field.</li>
            </ul>

            <div className="mb-4">
                <p className="font-semibold text-2xl text-red-600">3. Lang</p>
                <p className='mt-3'>The lang attribute specifies the language of the element’s content.</p>
            </div>
            <div className="overflow-auto border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa]">
                <CopyBlock
                    text={htmlGlobalLang.text}
                    language={htmlGlobalLang.language}
                    theme={htmlGlobalLang.theme}
                    wrapLines
                />
            </div>
            <ul className="list-disc list-inside mt-3 space-y-2 mb-8">
                <li>The paragraph text is in Spanish (es).</li>
                <li>This helps search engines and screen readers recognize the language of the content, improving accessibility and SEO.</li>
            </ul>

            <div className="mb-4">
                <p className="font-semibold text-2xl text-red-600">4. class</p>
                <p className='mt-3'>The class attribute assigns one or more class names to an element, enabling CSS styling or JavaScript manipulation.</p>
            </div>
            <div className="overflow-auto border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa]">
                <CopyBlock
                    text={htmlGlobalClass.text}
                    language={htmlGlobalClass.language}
                    theme={htmlGlobalClass.theme}
                    wrapLines
                />
            </div>
            <ul className="list-disc list-inside mt-3 space-y-2 mb-8">
                <li>The paragraph text is styled with a red color and bold font using the highlight class.</li>
                <li>The class attribute links the HTML element to the CSS rule, making it easy to apply consistent styling.</li>
            </ul>

            <div className="mb-8 mt-5">
                <div className="text-2xl text-red-600 font-semibold mt-6 mb-4">List of Global Attributes:</div>

                <table className="w-full md:w-[80%] mx-auto table-auto">
                    <thead>
                        <tr>
                            <th className="px-2 py-5 bg-gray-200 text-left border border-gray-400 font-medium text-gray-900 uppercase tracking-wider">Global Attributes</th>
                            <th className="px-2 py-5 bg-gray-200 text-left border border-gray-400 font-medium text-gray-900 uppercase tracking-wider">Description</th>
                            {/* <th className="px-2 py-5 bg-gray-200 text-left border border-gray-400 font-medium text-gray-900 uppercase tracking-wider">Example</th> */}
                        </tr>
                    </thead>
                    <tbody>
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


                <div className="text-2xl text-red-600 mt-4 mb-5 font-semibold">Best Practices for HTML Global Attributes</div>

                <ul className="list-disc list-inside space-y-2">
                    <li>
                        Use global attributes like id, class, style, title, etc., consistently to enhance the accessibility, functionality, and styling of your HTML elements.
                    </li>
                    <li>
                        Ensure attributes like id are unique within a page to prevent conflicts.
                    </li>
                    <li>
                        For styling and layout, prefer using external or internal CSS rather than inline styles for maintainability.
                    </li>
                </ul>
            </div>
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


export default HTMLGlobalAttribute