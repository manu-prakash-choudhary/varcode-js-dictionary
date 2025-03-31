import React from "react";
import { CopyBlock } from "react-code-blocks";
import {
  HTMLColors1,
  HTMLColors2,
  HTMLColors3,
  HTMLColors4,
  HTMLColors5,
} from "../../utils/CodeBlocks";
const HTMLColors = () => {
  return (
    <div className="content-container overflow-y-auto h-screen pl-6">
      <div className="pl-0 flex flex-col gap-3 ">
        <h1 className="text-4xl font-semibold text-red-600">HTML Colors</h1>
        <p className="text-gray-600">Last Updated : 30 Mar, 2025</p>
      </div>

      <p className="mb-6 mt-6">
        HTML colors can be applied to text, backgrounds, borders, links, forms,
        tables, etc. This article provides an in-depth look at how colors can be
        applied to various elements such as text, backgrounds, borders, links,
        forms, and tables in HTML. We will explore different color formats
        including hexadecimal, RGB, RGBA, HSL, and named colors, offering you
        precise control over the color presentation on your web pages.
      </p>

      <div className="text-3xl font-bold mb-4 mt-8">HTML Colors Name</div>
      <p className="mb-6">
        HTML color names offer a user-friendly way to specify colors. From
        classic colors like Red, Green, Blue, Pink, Purple, Sky Blue, Gray, and
        Orange, to more exotic shades, HTML provides a wide palette for web
        designers. Whether you're designing a serene theme or a vibrant layout,
        HTML color names have got you covered.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-red-600 text-white p-4 rounded-md text-center font-bold">
          Red
        </div>
        <div className="bg-green-700 text-white p-4 rounded-md text-center font-bold">
          Green
        </div>
        <div className="bg-blue-600 text-white p-4 rounded-md text-center font-bold">
          Blue
        </div>
        <div className="bg-pink-300 text-white p-4 rounded-md text-center font-bold">
          Pink
        </div>
        <div className="bg-purple-800 text-white p-4 rounded-md text-center font-bold">
          Purple
        </div>
        <div className="bg-blue-300 text-white p-4 rounded-md text-center font-bold">
          Sky Blue
        </div>
        <div className="bg-gray-500 text-white p-4 rounded-md text-center font-bold">
          Gray
        </div>
        <div className="bg-orange-500 text-white p-4 rounded-md text-center font-bold">
          Orange
        </div>
      </div>

      <div className="text-3xl font-bold mb-6">HTML Color Usage</div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse mb-8">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-3 text-left">Usage</th>
              <th className="border p-3 text-left">Descriptions</th>
              <th className="border p-3 text-left">Syntax</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-3">
                <a href="#" className="text-red-600">
                  Background Color
                </a>
              </td>
              <td className="border p-3">
                HTML Background Color is the shade that appears behind the
                content on a webpage. The background covers the total size of
                the element with padding and border but excludes the margin. It
                makes the text so easy to read for the user.
              </td>
              <td className="border p-3">
                &lt;div style="background-color: magenta;"&gt;
                <br />
                Div with magenta background
                <br />
                &lt;/div&gt;
              </td>
            </tr>
            <tr>
              <td className="border p-3">Text Color</td>
              <td className="border p-3">
                Text color in HTML specifies the color of the text content,
                similar to font color.
              </td>
              <td className="border p-3">
                &lt;p style="color: pink;"&gt;
                <br />
                Pink color is used
                <br />
                &lt;/p&gt;
              </td>
            </tr>
            <tr>
              <td className="border p-3">
                <a href="#" className="text-red-600">
                  Border Color
                </a>
              </td>
              <td className="border p-3">
                HTML Border Color refers to the color of borders around elements
                like &lt;div&gt;, &lt;img&gt;, etc. It defines the color of the
                border lines.
              </td>
              <td className="border p-3">
                &lt;div style="border: 1px solid black; border-color:
                green;"&gt;
                <br />
                This div has a green border
                <br />
                &lt;/div&gt;
              </td>
            </tr>
            <tr>
              <td className="border p-3">
                <a href="#" className="text-red-600">
                  Link Color
                </a>
              </td>
              <td className="border p-3">
                HTML Link Color specifies the color of the anchor tag within a
                webpage, allowing us to define the color of clickable text, and
                making user navigation more visual.
              </td>
              <td className="border p-3">
                &lt;a href="#" style="color: blue;"&gt;
                <br />
                Link has a blue color
                <br />
                &lt;/a&gt;
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="text-gray-700 mt-5 mb-5">
        <h3 className="text-xl font-semibold text-red-600 mt-5">
          HTML Colors Example:
        </h3>
        <p className="text-lg text-gray-700 mt-5">
          The example illstrates the various HTML Colors to the element.
        </p>
        <div className="border border-red-400 rounded-2xl w-full min-h-40 bg-[#fafafa] mt-5 mb-5">
          <CopyBlock
            text={HTMLColors1.text}
            language={HTMLColors1.language}
            theme={HTMLColors1.theme}
            wrapLines
          />
        </div>
        <p className="text-lg text-red-600 mt-5 font-bold">Output :</p>
        <img src="/colors/c1.png" className="ml-30"></img>
        <h3 className="text-xl font-semibold text-red-600 mt-5">
          HTML Colors Example Explanation:
        </h3>
        <ul className="list-disc ml-6 text-gray-700 mt-5 text-lg">
          <li>
            In this example we create HTML to structure content with elements
            like headings, divs, links, and paragraphs.
          </li>
          <li>Heading displays a gray background for emphasis.</li>
          <li>Div is bordered with skyblue color for visual distinction.</li>
          <li>Link text appears in tomato color for better visibility.</li>
          <li>
            Paragraph text is styled with a dark green color for readability.
          </li>
        </ul>
      </div>
      <h3 className="text-xl font-semibold text-red-600 mt-5">Color Values</h3>
      <p className="text-gray-700 mt-5 mb-5">
        Color values in HTML define the color of elements. They can be specified
        using various formats such as hexadecimal, RGB, RGBA, HSL, HSLA, color
        names, and system color keywords.
      </p>
      <div className="text-gray-700">
        <h3 className="text-xl font-semibold text-red-600 mt-5">
          RGB Color Value
        </h3>
        <p className="text-gray-700 mt-5 mb-5">
          RGB, which stands for Red, Green, and Blue, is a method used in CSS to
          describe colors. It works by mixing different amounts of three primary
          colors, each with values ranging from 0 to 255. By adjusting these
          values, we can produce an extensive range of colors, allowing for the
          creation of diverse and better color palettes across websites.
        </p>
        <h3 className="text-xl font-semibold text-red-600 mt-5">
          RGB Color Value Properties
        </h3>
        <p className="text-gray-700 mt-5 mb-5">Some properties are:</p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>It's representation is as rgb(red, green, blue).</li>
          <li>
            By adjusting these values from 0 to 255, we can produce 16,777,216
            unique colors.
          </li>
          <li>
            For instance, specifying rgb(0, 255, 0) results in green because the
            green value is at its maximum (255), while red and blue are at 0.
            Conversely, using rgb(0, 0, 255) produces blue, with the blue
            channel set to its peak (255), and red and green at 0.
          </li>
          <li>
            To render black, all color parameters are set to 0 (rgb(0, 0, 0)),
            and for white, all parameters are set to their maximum (rgb(255,
            255, 255)).
          </li>
        </ul>

        {/* RGB COLOR */}

        <h3 className="text-xl font-semibold text-red-600 mt-5">
          RGB Color Value Syntax
        </h3>
        <div className="bg-gray-100 p-3  text-gray-700 rounded mt-5">
          <pre>
            // Blue background
            <br></br>
            &lt;p style="background-color: rgb(0, 0, 255);"&gt; Is the sky
            background Blue by using RGB &lt;/p&gt;
          </pre>
        </div>
        <h3 className="text-xl font-semibold text-red-600 mt-5">
          RGB Color Value Example
        </h3>
        <p className="text-lg text-gray-700 mt-5">
          The example we are using the RGB color values to style our html
          elements.
        </p>
        <div className="border border-red-400 rounded-2xl w-full min-h-40 bg-[#fafafa] mt-5 mb-5">
          <CopyBlock
            text={HTMLColors2.text}
            language={HTMLColors2.language}
            theme={HTMLColors2.theme}
            wrapLines
          />
        </div>
        <p className="text-lg text-red-600 mt-5 font-bold">Output :</p>
        <img src="/colors/c2.png" className="ml-30"></img>
        <h3 className="text-xl font-semibold text-red-600 mt-5">
          RGB Color Value Example Explanation
        </h3>
        <ul className="list-disc ml-6 text-gray-700 mt-5 text-lg">
          <li>
            In the above example the Heading exhibits a blue background using
            RGB color value (109, 102, 197).
          </li>
          <li>
            Div border is styled with skyblue using RGB color value (135, 206,
            235).
          </li>
          <li>
            Link text appears in tomato color using RGB value (241, 76, 89) for
            visual distinction.
          </li>
          <li>
            Paragraph text is styled with dark green using RGB value (0, 100, 0)
            for readability.
          </li>
        </ul>
      </div>

      {/* RGBA COLOR */}

      <div className="text-gray-700">
        <h3 className="text-xl font-semibold text-red-600 mt-5">
          RGBA Color Value
        </h3>
        <p className="text-gray-700 mt-5 mb-5">
          RGBA (Red, Green, Blue, Alpha) is a color model similar to RGB, but
          with an added alpha parameter representing transparency. The alpha
          value, which ranges from 0 to 1, adjusts transparency, allowing the
          display of colors with varying levels of opacity. It's representation
          is as rgba(red, green, blue, alpha).
        </p>
        <h3 className="text-xl font-semibold text-red-600 mt-5">
          RGBA Color values Properties
        </h3>
        <p className="text-gray-700 mt-5 mb-5">Some properties are:</p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>
            RGBA Format Represents colors using Red, Green, Blue, and Alpha
            (transparency) values, allowing control over opacity.
          </li>
          <li>
            Alpha value ranges from 0 (fully transparent) to 1 (fully opaque).
          </li>
          <li>RGBA values are expressed as rgba(red, green, blue, alpha).</li>
          <li>
            Ideal for creating semi-transparent elements, providing subtle
            visual effects or layering content.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-red-600 mt-5">
          RGBA Color Value Syntax
        </h3>
        <div className="bg-gray-100 p-3  text-gray-700 rounded mt-5">
          <pre>
            // Semi-transparent text with a purple hue
            <br></br>
            &lt;span style="color: rgba(128, 0, 128, 0.5);"&gt; This text is
            semi-transparent with a purple hue using RGBA &lt;/span&gt;
          </pre>
        </div>
        <h3 className="text-xl font-semibold text-red-600 mt-5">
          RGBA Color Value Example
        </h3>
        <p className="text-lg text-gray-700 mt-5">
          In this example we are using the RGBA color values to style our html
          elements.
        </p>
        <div className="border border-red-400 rounded-2xl w-full min-h-40 bg-[#fafafa] mt-5 mb-5">
          <CopyBlock
            text={HTMLColors3.text}
            language={HTMLColors3.language}
            theme={HTMLColors3.theme}
            wrapLines
          />
        </div>
        <p className="text-lg text-red-600 mt-5 font-bold">Output :</p>
        <img src="/colors/c3.png" className="ml-30"></img>
        <h3 className="text-xl font-semibold text-red-600 mt-5">
          RGBA Color Value Example Explanation:
        </h3>
        <ul className="list-disc ml-6 text-gray-700 mt-5 text-lg">
          <li>
            Here we styled Heading with semi-transparent tomato background color
            using RGBA (255, 99, 71, 0.5).
          </li>
          <li>
            Div Exhibits a semi-transparent orange border with RGBA (255, 165,
            0, 0.7).
          </li>
          <li>Div is bordered with skyblue color for visual distinction.</li>
          <li>
            Link Displays a semi-transparent deep sky blue color using RGBA (0,
            191, 255, 0.8).
          </li>
          <li>
            In Paragraph Text appears semi-transparent purple with RGBA (128, 0,
            128, 0.6).
          </li>
        </ul>
      </div>


      {/* HEX COLOR */}

      <div className="text-gray-700">
        <h3 className="text-xl font-semibold text-red-600 mt-5">
        HEX Color Value
        </h3>
        <p className="text-gray-700 mt-5 mb-5">
        Hexadecimal color values, often referred to as hex values, use a six-digit code made up of pairs of characters.
        </p>
        <h3 className="text-xl font-semibold text-red-600 mt-5">
          HEX Color values Properties
        </h3>
        <p className="text-gray-700 mt-5 mb-5">Some properties are:</p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>
          Hexadecimal values in CSS are represented as #rrggbb, where rr, gg, and bb denote the intensity of red, green, and blue, respectively, ranging from 00 to ff.
          </li>
          <li>
          This encoding allows for 16,777,216 unique color combinations, providing a vast spectrum for web design.
          </li>
          <li>For example, #ff0000 corresponds to red (max red, no green, no blue), while #00ff00 represents green (max green, no red, no blue).</li>
          <li>
          Black is denoted by #000000 (no red, no green, no blue), while white is represented as #ffffff (max red, max green, max blue).
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-red-600 mt-5">
        HEX Color Value Syntax
        </h3>
        <div className="bg-gray-100 p-3  text-gray-700 rounded mt-5">
          <pre>
          // Pinkish Background
            <br></br>
            &lt;div style="background-color: #FF69B4;"&gt;
    div has a pinkish background by using Hex
&lt;/div&gt;
          </pre>
        </div>
        <h3 className="text-xl font-semibold text-red-600 mt-5">
        HEX Color Value Example:
        </h3>
        <p className="text-lg text-gray-700 mt-5">
        In this example we are using the HEX color values to style our html elements.
        </p>
        <div className="border border-red-400 rounded-2xl w-full min-h-40 bg-[#fafafa] mt-5 mb-5">
          <CopyBlock
            text={HTMLColors4.text}
            language={HTMLColors4.language}
            theme={HTMLColors4.theme}
            wrapLines
          />
        </div>
        <p className="text-lg text-red-600 mt-5 font-bold">Output :</p>
        <img src="/colors/c4.png" className="ml-30"></img>
        <h3 className="text-xl font-semibold text-red-600 mt-5">
        HEX Color Value Explanation:
        </h3>
        <ul className="list-disc ml-6 text-gray-700 mt-5 text-lg">
          <li>
          In this example Heading Styled with a tomato background using hex color value #FF6347.
          </li>
          <li>
          Div Features an orange border using hex color value #FFA500.
          </li>
          <li>Link Rendered with a deep sky blue color using hex value #00BFFF.</li>
          <li>
          Paragraph Text is colored purple using hex value #800080.
          </li>
        </ul>
      </div>

      
      {/* HSL COLOR */}

      <div className="text-gray-700">
        <h3 className="text-xl font-semibold text-red-600 mt-5">
        HSL (Hue, Saturation, Lightness) Value
        </h3>
        <p className="text-gray-700 mt-5 mb-5">
        HSL color values in HTML represent colors by defining their hue, saturation, and lightness. The hue signifies the type of color (red, blue, green, etc.), saturation refers to the intensity or purity of the color, and lightness determines the brightness or darkness.
        </p>
        <h3 className="text-xl font-semibold text-red-600 mt-5">
        HSL Color value Properties:
        </h3>
        <p className="text-gray-700 mt-5 mb-5">Some properties are:</p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>
          HSL representation defines colors based on Hue, Saturation, and Lightness components, offering a more intuitive way to specify colors.
          </li>
          <li>
          Hue represents the color type, ranging from 0 to 360 degrees.
          </li>
          <li>Saturation determines the intensity or purity of the color, from 0% (grayscale) to 100% (full color).</li>
          <li>
          Lightness controls the brightness of the color, ranging from 0% (black) to 100% (white), with 50% representing normal.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-red-600 mt-5">
        HSL Color value Syntax
        </h3>
        <div className="bg-gray-100 p-3  text-gray-700 rounded mt-5">
          <pre>
          // Golden Background
            <br></br>
            &lt;div style="background-color: hsl(45, 100%, 50%);"&gt;
    This div has a golden background using HSL
&lt;/div&gt;
          </pre>
        </div>
        <h3 className="text-xl font-semibold text-red-600 mt-5">
        HSL color value Example:
        </h3>
        <p className="text-lg text-gray-700 mt-5">
        The example shows the HSL color values.
        </p>
        <div className="border border-red-400 rounded-2xl w-full min-h-40 bg-[#fafafa] mt-5 mb-5">
          <CopyBlock
            text={HTMLColors5.text}
            language={HTMLColors5.language}
            theme={HTMLColors5.theme}
            wrapLines
          />
        </div>
        <p className="text-lg text-red-600 mt-5 font-bold">Output :</p>
        <img src="/colors/c5.png" className="ml-30"></img>
        <h3 className="text-xl font-semibold text-red-600 mt-5">
        HSL Color value Explanation:
        </h3>
        <ul className="list-disc ml-6 text-gray-700 mt-5 text-lg">
          <li>
          In this example HSLA(120, 100%, 50%, 0.5) creates a semi-transparent green background for the heading with 50% opacity.
          </li>
          <li>
          HSLA(240, 100%, 50%, 0.7) sets a semi-transparent blue border for the div with 70% opacity.
          </li>
          <li>HSLA(30, 100%, 50%, 0.8) defines a semi-transparent orange color for the link with 80% opacity.</li>
          <li>
          HSLA(270, 100%, 25%, 0.6) specifies semi-transparent purple text for the paragraph with 60% opacity.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HTMLColors;
