import React from "react";
import { CopyBlock } from "react-code-blocks";
import {
  HTMLAttributes,
  HTMLAltAttribute,
  HTMLHWAttribute,
  HTMLIdAttribute,
  HTMLTitleAttribute,
  HTMLHrefAttribute,
  HTMLStyleAttribute,
  HTMLLangAttribute,
} from "../../utils/CodeBlocks";
import { attributes } from "../../utils/HTMLAttributes";

const HTMLAttributes1 = () => {
  return (
    <div className="content-container overflow-y-auto h-screen px-4 md:px-6 max-w-full">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-red-600">HTML Attributes</h1>
        <p className="text-sm md:text-base text-gray-600">Last Updated : 30 Mar, 2025</p>
      </div>
      
      <p className="mt-4 text-sm md:text-base text-gray-700">
        <span className="font-bold">HTML Attributes</span> are special words{" "}
        <span className="font-bold">
          used within the opening tag of an HTML element.
        </span>{" "}
        They provide additional information about HTML elements. HTML attributes
        are used to configure and adjust the element&#39;s behavior, appearance,
        or functionality in a variety of ways.
      </p>
      
      <p className="mt-4 text-sm md:text-base text-gray-700">
        Each attribute has a name and a value, formatted as{" "}
        <code className="text-xs md:text-sm">name="value"</code>. Attributes tell the browser how to render the
        element or how it should behave during user interactions.
      </p>
      
      <h3 className="text-base md:text-lg font-semibold mt-4 text-red-600">Syntax:</h3>
      <div className="bg-gray-100 p-2 md:p-3 italic text-xs md:text-sm text-gray-700 rounded mt-3 md:mt-5 overflow-x-auto">
        <code>
          &lt;tagname attribute_name = "attribute_value"&gt; content...
          &lt;/tagname&gt;
        </code>
      </div>
      
      <h3 className="text-base md:text-lg font-semibold mt-4 text-red-600">
        Code Example of Using HTML Attributes
      </h3>
      
      <p className="text-sm md:text-base">
        This HTML code demonstrates the use of the <code className="text-xs md:text-sm">src</code> attribute
        within the <code className="text-xs md:text-sm">&lt;img&gt;</code> tag to display an image.
      </p>
      
      <div className="border border-red-400 rounded-lg md:rounded-2xl w-full min-h-40 bg-[#fafafa] mt-3 md:mt-5 mb-3 md:mb-5 overflow-x-auto">
        <CopyBlock
          text={HTMLAttributes.text}
          language={HTMLAttributes.language}
          theme={HTMLAttributes.theme}
          wrapLines
        />
      </div>
      
      <h3 className="text-base md:text-lg font-semibold text-red-600">In this example:</h3>
      <ul className="list-disc pl-4 md:pl-6 space-y-1 text-sm md:text-base text-gray-700 mt-3 md:mt-5">
        <li>
          <span className="font-bold">Tag</span>: <code className="text-xs md:text-sm">&lt;img&gt;</code>
        </li>
        <li>
          <span className="font-bold">Attribute</span>: <code className="text-xs md:text-sm">src</code>
        </li>
        <li>
          <span className="font-bold">Value of Attribute</span>:{" "}
          <code className="text-xs md:text-sm line-clamp-1 md:line-clamp-none">
            "https://media.geeksforgeeks.org/wp-content/cdn-uploads/Geek_logi_-low_res.png"
          </code>
        </li>
        <li>
          <span className="font-bold">Purpose</span>: The{" "}
          <code className="text-xs md:text-sm">&lt;img&gt;</code> tag is used for embedding images in an HTML
          page. The <code className="text-xs md:text-sm">src</code> attribute within the{" "}
          <code className="text-xs md:text-sm">&lt;img&gt;</code> tag specifies the path to the image file you
          wish to display. This attribute is crucial as it directs the browser
          to the image's location on the internet or a local directory.
        </li>
      </ul>
      
      <h3 className="text-base md:text-lg font-semibold text-red-600 mt-5 md:mt-6">
        Components of Attribute
      </h3>
      <p className="text-sm md:text-base text-gray-700 mt-3 md:mt-5">
        An HTML attribute consists of two primary components:
      </p>
      <ul className="list-disc pl-4 md:pl-6 space-y-2 text-sm md:text-base text-gray-700">
        <li>
          <span className="font-bold">1. attribute_name:</span> This is the name
          of the attribute, which specifies what kind of additional information
          or property you are defining for the element. Common attribute names
          include <code className="text-xs md:text-sm">href</code>, <code className="text-xs md:text-sm">src</code>, <code className="text-xs md:text-sm">class</code>,{" "}
          <code className="text-xs md:text-sm">id</code>, etc.
        </li>
        <li>
          <span className="font-bold">2. attribute_value:</span> The value is
          assigned to the attribute to define the specific setting or behavior.
          It is always placed in quotes.
        </li>
      </ul>
      
      <h3 className="text-base md:text-lg font-semibold text-red-600 mt-5 md:mt-6">
        Types of HTML Attributes
      </h3>
      <p className="text-sm md:text-base text-gray-700 mt-3 md:mt-5">
        HTML attributes can be broadly categorized based on their function and
        the type of elements they modify. For example –
      </p>
      
      <h3 className="text-base md:text-lg font-semibold mt-4 text-red-600">Syntax:</h3>
      <p className="text-sm md:text-base text-gray-700 mt-3 md:mt-5">
        These attributes can be used with any HTML element (though their effects
        might vary based on the element):
      </p>
      
      <div className="overflow-x-auto mt-3 md:mt-5 mb-3 md:mb-5">
        <table className="w-full border-collapse border border-gray-300 text-xs md:text-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2 md:p-3">Attributes</th>
              <th className="border p-2 md:p-3">Description</th>
            </tr>
          </thead>
          <tbody>
            {attributes.map((attribute, index) => (
              <tr key={index} className="border hover:bg-gray-100">
                <td className="border p-2 md:p-3 underline">{attribute.name}</td>
                <td className="border p-2 md:p-3">{attribute.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <p className="text-sm md:text-base text-gray-700">
        Some other main types of HTML attributes are:
      </p>
      
      <ul className="list-disc pl-4 md:pl-6 space-y-1 text-sm md:text-base text-gray-700 mt-3 md:mt-5">
        <li>
          <span className="font-bold">Event Attributes</span>: These define the
          actions to be taken on specific browser events.
        </li>
        <li>
          <span className="font-bold">Input Attributes</span>: Specific to input
          elements within &lt;form&gt; tags.
        </li>
        <li>
          <span className="font-bold">Image Attributes</span>: Specific to the
          &lt;img&gt; element for handling images.
        </li>
        <li>
          <span className="font-bold">Link Attributes</span>: Specific to
          linking elements like &lt;a&gt; and &lt;link&gt; .
        </li>
        <li>
          <span className="font-bold">Table Attributes</span>: Used with table
          elements like &lt;table&gt; , &lt;th&gt; , &lt;tr&gt; , and &lt;td&gt;
          .
        </li>
        <li>
          <span className="font-bold">Style Attributes</span>: Define styles
          directly on an element.
        </li>
        <li>
          <span className="font-bold">Media Attributes</span>: Related to media
          elements like &lt;audio&gt; and &lt;video&gt; .
        </li>
        <li>
          <span className="font-bold">Accesibility Attributes</span>: Help
          improve accessibility, such as alt for images and aria-* attributes.
        </li>
        <li>
          <span className="font-bold">Meta Attributes</span>: Used with meta
          elements to specify metadata like charset .
        </li>
      </ul>
      
      <h3 className="text-base md:text-lg font-semibold text-red-600 mt-5 md:mt-6">
        Common HTML Attributes
      </h3>
      <p className="text-sm md:text-base">
        Let&#39;s take look at some of the most commonly used HTML attributes:
      </p>
      
      {/* Alt Attribute Section */}
      <div className="text-sm md:text-base text-gray-700 mt-3">
        <h3 className="text-base md:text-lg font-semibold text-red-600 mt-4 md:mt-6">
          1. HTML alt Attribute
        </h3>
        <p className="text-sm md:text-base text-gray-700 mt-3 md:mt-5">
          The alt attribute in HTML provides alternative text for an image if
          the image cannot be displayed. It improves accessibility and provides
          context for screen readers.
          <br className="hidden md:block"></br>
          <b>Example:</b> This example explains the HTML <b>alt Attributes</b>{" "}
          to specify the name of the file when the image is not loaded properly.
        </p>
        <div className="border border-red-400 rounded-lg md:rounded-2xl w-full min-h-40 bg-[#fafafa] mt-3 md:mt-5 mb-3 md:mb-5 overflow-x-auto">
          <CopyBlock
            text={HTMLAltAttribute.text}
            language={HTMLAltAttribute.language}
            theme={HTMLAltAttribute.theme}
            wrapLines
          />
        </div>
      </div>
      
      {/* Width and Height Attribute Section */}
      <div className="text-sm md:text-base text-gray-700 mt-3">
        <h3 className="text-base md:text-lg font-semibold text-red-600 mt-4 md:mt-6">
          2. HTML width and height Attribute
        </h3>
        <p className="text-sm md:text-base text-gray-700 mt-3 md:mt-5">
          The width and height Attribute is used to adjust the width and height
          of an image(in pixels).
          <br className="hidden md:block"></br>
          <b>Example:</b> This example explains the HTML{" "}
          <b>width and height Attributes</b> to specify the different sizes of
          the images.
        </p>
        <div className="border border-red-400 rounded-lg md:rounded-2xl w-full min-h-40 bg-[#fafafa] mt-3 md:mt-5 mb-3 md:mb-5 overflow-x-auto">
          <CopyBlock
            text={HTMLHWAttribute.text}
            language={HTMLHWAttribute.language}
            theme={HTMLHWAttribute.theme}
            wrapLines
          />
        </div>
      </div>
      
      {/* Similar pattern for remaining attribute sections */}
      {/* ID Attribute Section */}
      <div className="text-sm md:text-base text-gray-700 mt-3">
        <h3 className="text-base md:text-lg font-semibold text-red-600 mt-4 md:mt-6">
          3. HTML id Attribute
        </h3>
        <p className="text-sm md:text-base text-gray-700 mt-3 md:mt-5">
          The id attribute in HTML assigns a unique identifier to an element,
          allowing it to be targeted by CSS and JavaScript for styling and
          manipulation purposes.
          <br className="hidden md:block"></br>
          <b>Example:</b> This example explains the HTML <b>id Attribute</b> to
          specify the unique value for the specific element.
        </p>
        <div className="border border-red-400 rounded-lg md:rounded-2xl w-full min-h-40 bg-[#fafafa] mt-3 md:mt-5 mb-3 md:mb-5 overflow-x-auto">
          <CopyBlock
            text={HTMLIdAttribute.text}
            language={HTMLIdAttribute.language}
            theme={HTMLIdAttribute.theme}
            wrapLines
          />
        </div>
      </div>
      
      {/* Title Attribute Section */}
      <div className="text-sm md:text-base text-gray-700 mt-3">
        <h3 className="text-base md:text-lg font-semibold text-red-600 mt-4 md:mt-6">
          4. HTML title Attribute
        </h3>
        <p className="text-sm md:text-base text-gray-700 mt-3 md:mt-5">
          The title attribute is used to explain an element by hovering the
          mouse over it. The behavior differs with various elements but
          generally, the value is displayed while loading or hovering the mouse
          pointer over it.
          <br className="hidden md:block"></br>
          <b>Example:</b> This example explains the HTML <b>title Attributes</b>{" "}
          to specify the metadata for the element by hovering the mouse over it.
        </p>
        <div className="border border-red-400 rounded-lg md:rounded-2xl w-full min-h-40 bg-[#fafafa] mt-3 md:mt-5 mb-3 md:mb-5 overflow-x-auto">
          <CopyBlock
            text={HTMLTitleAttribute.text}
            language={HTMLTitleAttribute.language}
            theme={HTMLTitleAttribute.theme}
            wrapLines
          />
        </div>
      </div>
      
      {/* Href Attribute Section */}
      <div className="text-sm md:text-base text-gray-700 mt-3">
        <h3 className="text-base md:text-lg font-semibold text-red-600 mt-4 md:mt-6">
          5. HTML href Attribute
        </h3>
        <p className="text-sm md:text-base text-gray-700 mt-3 md:mt-5">
          The href attribute in HTML, used with the &lt;a&gt; tag, specifies a
          link destination. Clicking the linked text navigates to this address.
          Adding `target="_blank"` opens it in a new tab.
          <br className="hidden md:block"></br>
          <b>Example:</b> This example explains the HTML <b>href Attributes</b>{" "}
          to specify the link address of the file.
        </p>
        <div className="border border-red-400 rounded-lg md:rounded-2xl w-full min-h-40 bg-[#fafafa] mt-3 md:mt-5 mb-3 md:mb-5 overflow-x-auto">
          <CopyBlock
            text={HTMLHrefAttribute.text}
            language={HTMLHrefAttribute.language}
            theme={HTMLHrefAttribute.theme}
            wrapLines
          />
        </div>
      </div>
      
      {/* Style Attribute Section */}
      <div className="text-sm md:text-base text-gray-700 mt-3">
        <h3 className="text-base md:text-lg font-semibold text-red-600 mt-4 md:mt-6">
          6. HTML style Attribute
        </h3>
        <p className="text-sm md:text-base text-gray-700 mt-3 md:mt-5">
          The style attribute is used to provide various CSS effects to the HTML
          elements such as increasing font-size, changing font-family, coloring,
          etc.
          <br className="hidden md:block"></br>
          <b>Example:</b>This example explains the HTML <b>style Attributes</b>{" "}
          to specify the style properties for the HTML element.
        </p>
        <div className="border border-red-400 rounded-lg md:rounded-2xl w-full min-h-40 bg-[#fafafa] mt-3 md:mt-5 mb-3 md:mb-5 overflow-x-auto">
          <CopyBlock
            text={HTMLStyleAttribute.text}
            language={HTMLStyleAttribute.language}
            theme={HTMLStyleAttribute.theme}
            wrapLines
          />
        </div>
      </div>
      
      {/* Lang Attribute Section */}
      <div className="text-sm md:text-base text-gray-700 mt-3">
        <h3 className="text-base md:text-lg font-semibold text-red-600 mt-4 md:mt-6">
          7. HTML lang attribute
        </h3>
        <p className="text-sm md:text-base text-gray-700 mt-3 md:mt-5">
          The language is declared with the lang attribute. Declaring a language
          can be important for accessibility applications and search engines.
          <br className="hidden md:block"></br>
          <b>Example:</b>This example explains the HTML <b>lang Attributes</b>{" "}
          that specify the language of the HTML page.
        </p>
        <div className="border border-red-400 rounded-lg md:rounded-2xl w-full min-h-40 bg-[#fafafa] mt-3 md:mt-5 mb-3 md:mb-5 overflow-x-auto">
          <CopyBlock
            text={HTMLLangAttribute.text}
            language={HTMLLangAttribute.language}
            theme={HTMLLangAttribute.theme}
            wrapLines
          />
        </div>
      </div>
      
      <h3 className="text-base md:text-lg font-semibold text-red-600 mt-4 md:mt-6">
        Important Points About HTML Attributes
      </h3>
      <ol className="list-decimal ml-4 md:ml-6 mt-2 text-sm md:text-base">
        <div className="mt-3 mb-3 md:mt-5 md:mb-5">
          <li className="text-red-600 font-bold">
            Always Use Lowercase Attributes:
          </li>
          <p className="mt-2 md:mt-3 text-justify">
            You can use either uppercase or lowercase letters for defining
            attributes. For example, both alt and ALT in an &lt;img&gt; tag are
            valid. However, it is recommended to use lowercase attributes as per
            W3C guidelines for consistency and better readability.
          </p>
        </div>
        
        <div className="mt-3 mb-3 md:mt-5 md:mb-5">
          <li className="text-red-600 font-bold">
            Always Quote Attribute Values:
          </li>
          <p className="mt-2 md:mt-3 text-justify">
            The HTML standard does not require quotes around attribute values in
            certain situations. However, W3C recommends always using quotes for
            attribute values, and quotes are mandatory for stricter document
            types like XHTML. Using quotes helps avoid errors, especially when
            the attribute value contains spaces or special characters.
          </p>
        </div>
        
        <div className="mt-3 mb-3 md:mt-5 md:mb-5">
          <li className="text-red-600 font-bold">
            Declare Quote as an Attribute Value:
          </li>
          <p className="mt-2 md:mt-3 text-justify">
            You can use either single (&#39;) or double (") quotes for attribute
            values in HTML, but it is essential to be consistent throughout your
            document. If the attribute value contains a double quote, then use
            single quotes to enclose it, and vice versa. For simplicity, it is a
            good practice to consistently use double quotes, as it aligns with
            the convention used in many HTML examples and tutorials.
          </p>
          <h4 className="text-red-600 font-semibold mt-3 md:mt-5">Example:</h4>
          <div className="bg-gray-200 p-3 md:p-6 rounded-lg w-full mt-2 md:mt-5 mb-2 md:mb-5 overflow-x-auto">
            <pre className="text-xs md:text-sm text-gray-800 font-mono">
              &lt;input type="text" placeholder='Enter your "username" here'&gt;
            </pre>
          </div>
          <p className="mt-2 md:mt-3 text-justify">
            In this example, the <b>attribute value</b> itself contains double
            quotes ("username"), so the entire value is enclosed within{" "}
            <b>single quotes</b> to avoid confusion.
          </p>
        </div>
        
        <div className="mt-3 mb-3 md:mt-5 md:mb-5">
          <li className="text-red-600 font-bold">
            Boolean Attributes Should Be Written Without Values:
          </li>
          <p className="mt-2 md:mt-3 text-justify">
            Boolean attributes do not require a value. If the attribute is
            present, it is considered true. For example, the checked attribute
            of an &lt;input&gt; element is correctly written as:
          </p>
          <h4 className="text-red-600 font-semibold mt-3 md:mt-5">Example:</h4>
          <div className="bg-gray-200 p-3 md:p-6 rounded-lg w-full mt-2 md:mt-5 mb-2 md:mb-5 overflow-x-auto">
            <pre className="text-xs md:text-sm text-gray-800 font-mono">
              &lt;input type="checkbox" checked&gt;
            </pre>
          </div>
          <p className="mt-2 md:mt-3 text-justify">
            Writing <b>checked="checked" also works</b>, but it is redundant.
            Simply including the attribute is enough to represent a true state.
          </p>
        </div>
        
        <div className="mt-3 mb-3 md:mt-5 md:mb-5">
          <li className="text-red-600 font-bold">
            Proper Attribute Order for Readability:
          </li>
          <p className="mt-2 md:mt-3 text-justify">
            Although HTML does not enforce an order for attributes, following a
            consistent order improves readability and maintainability. It is
            common practice to order attributes like this: id, class, other
            global attributes, specific attributes, and finally, event
            attributes.
          </p>
          <h4 className="text-red-600 font-semibold mt-3 md:mt-5">Example:</h4>
          <div className="bg-gray-200 p-3 md:p-6 rounded-lg w-full mt-2 md:mt-5 mb-2 md:mb-5 overflow-x-auto">
            <pre className="text-xs md:text-sm text-gray-800 font-mono">
              &lt;button id="btn1" class="button-class" type="submit"
              onclick="handleClick()"&gt;Submit&lt;/button&gt;
            </pre>
          </div>
        </div>
        
        <div className="mt-3 mb-3 md:mt-5 md:mb-5">
          <li className="text-red-600 font-bold">
            Avoid Deprecated Attributes:
          </li>
          <p className="mt-2 md:mt-3 text-justify">
            Certain HTML attributes, such as align, bgcolor, and border, are considered deprecated. It is better to use CSS for styling instead of outdated attributes.
          </p>
          <h4 className="text-red-600 font-semibold mt-3 md:mt-5">Example:</h4>
          <div className="bg-gray-200 p-3 md:p-6 rounded-lg w-full mt-2 md:mt-5 mb-2 md:mb-5 overflow-x-auto">
            <pre className="text-xs md:text-sm text-gray-800 font-mono">
              &lt;p style="text-align: center;"&gt;This text is centered.&lt;/p&gt;
            </pre>
          </div>
          <p className="mt-2 md:mt-3 text-justify">
            Instead of using the align attribute, <b>use the style attribute</b> or <b>a CSS class</b> to achieve the same effect
          </p>
        </div>
      </ol>
      
      <h3 className="text-base md:text-lg font-semibold text-red-600 mt-4 md:mt-6">
        Summing Up!
      </h3>
      <p className="mt-2 md:mt-3 text-justify mb-5 text-sm md:text-base">
        Understanding HTML attributes is essential for creating well-structured and accessible web pages. By using these attributes effectively, you can enhance user experience and optimize your content for search engines.
      </p>
    </div>
  );
};

export default HTMLAttributes1;