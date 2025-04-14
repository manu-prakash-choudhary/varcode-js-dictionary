import React from "react";
import { CopyBlock } from "react-code-blocks";
import { htmlWebExample1, htmlWebExample2, htmlWebExample22, htmlWebExample23, htmlWebExample3, htmlWebExample4, htmlWebExample5, htmlWebExample52, htmlWebExample53 } from "../../utils/CodeBlocks";
import video1 from "../Bhanu/assets/1.mp4"
import video2 from "../Bhanu/assets/2.mp4"
import video3 from "../Bhanu/assets/3.mp4"
import video4 from "../Bhanu/assets/4.mp4"
import video5 from "../Bhanu/assets/5.mp4"
import video6 from "../Bhanu/assets/6.mp4"
import video7 from "../Bhanu/assets/7.mp4"
import video8 from "../Bhanu/assets/8.mp4"
import video9 from "../Bhanu/assets/9.mp4"

const HTMLResponsiveWebDesign = () => {
  return (
    <div className="content-container overflow-y-auto h-screen p-6">
      <div className="pl-0 flex flex-col gap-3">
        <h1 className="text-4xl font-semibold text-red-600">
          HTML Responsive Web Design
        </h1>
        <p className="text-gray-600">Last Updated: 31 Mar, 2025</p>
      </div>
      <br />
      <p style={{ paddingBottom: "5px" }}>
        <b className="text-lg font-bold text-500">HTML Responsive Web Design</b> is a modern approach to web
        development that ensures web pages look great on any device, from phones
        and tablets to desktop computers.
      </p>
      <p>
        It focuses on making HTML elements automatically adjust—resizing,
        hiding, or repositioning based on the screen size. This approach
        guarantees a seamless and visually appealing user experience across
        various devices.
      </p>
      <br />
      <div>
        <img
          src="../ResWebDesign.webp"
          width="455"
          height="604"
          className="mx-auto item-center"
        />
      </div>
      <div>
        <p className="text-lg font-bold text-red-500 pt-4">
          What is Responsive Web Design?
        </p>
        <p style={{ paddingTop: "5px" }}>
          <b className="text-lg font-bold text-red-500">Responsive Web Design</b> is an approach to web development that
          ensures web pages render well on a variety of devices and window or
          screen sizes. It involves using fluid grids, flexible images, and CSS
          media queries to adapt the layout of a website dynamically based on
          the screen size, orientation, and resolution of the device being used.
        </p>
        <p style={{ paddingTop: "5px" }}>
          This technique allows websites to provide an optimal viewing
          experience, easy reading, and navigation with minimal resizing,
          panning, and scrolling across different devices, from desktop monitors
          to mobile phones.
        </p>
      </div>
      <br />
      <p className="text-lg font-bold text-red-500 pt-4">
        Examples of HTML Responsive Web Design
      </p>
      <div>
        <p className="text-lg font-bold text-red-500 pt-4">Table of Content</p>
      </div>
      <div>
        <ul
          style={{
            listStyleType: "disc",
            color: "#0f3d2f",
            paddingLeft: "20px",
          }}
        >
          <li>
            <a
              href="#html-viewport"
              style={{ color: "red" }}
            >
              1. HTML Viewport meta tag for Responsive Web Design
            </a>
          </li>
          <li>
            <a
              href="#responsive-images"
              style={{ color: "red" }}
            >
              2. Responsive Images
            </a>
          </li>
          <li>
            <a
              href="#responsive-texts"
              style={{ color: "red" }}
            >
              3. Responsive Texts
            </a>
            <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}></ul>
          </li>
          <li>
            <a
              href="#responsive-media-queries"
              style={{ color: "red" }}
            >
              4. CSS media Queries
            </a>
            <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}></ul>
          </li>
          <li>
            <a
              href="#responsive-layouts"
              style={{ color: "red" }}
            >
              5. Responsive Layouts
            </a>
            <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}></ul>
          </li>
        </ul>
      </div>
      <div>
        <p className="pt-4 text-lg text-red-500">
          <b className="text-lg font-bold text-red-500">1. HTML Viewport meta tag for Responsive Web Design</b>
        </p>

        <p style={{ paddingTop: "5px" }}>
           <span>
              The&nbsp;
          </span>
          <a
            href="#html-viewport"
            style={{  color: "#0f3d2f" }}
          >
            <span className="hover:text-red-600 pointer text-blue-700">HTML Viewport</span>
          </a>
          <span>
          &nbsp;is the visible area of the screen that users see. It changes
            depending on the device being used. With this approach, we set the
            width of web pages to match the available screen width, making it
            100%. This helps content adapt and look good on any device, ensuring
            a responsive layout.
          </span>
        </p>
        <br/>
      <p><b className="text-lg font-bold text-red-500">Syntax :</b></p>
      </div>
      <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4">
        <pre>
          <code>
            &lt;meta name="viewport" content= "width=device-width, initial-scale=1.0"&gt;
          </code>
        </pre>
      </div>
      <p><b className="text-lg font-bold text-red-500">Example :</b> Use of the HTML viewport meta tag for responsive pages.</p>
      <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4 pb-4 ">
        <CopyBlock
          text={htmlWebExample1.text}
          language={htmlWebExample1.language}
          theme={htmlWebExample1.theme}
          wrapLines
        />
        </div>
        <p><b className="text-lg font-bold text-red-500">Output :</b></p>
        <div>
        <video src="../1.mp4" controls="" preload="none"></video>
        </div>
        <div>
          <p className="text-lg font-bold text-red-500 pb-4">2. Responsive Images</p>
          <p>Responsive images play a key role in responsive websites. These are images that can adjust their size, getting bigger or smaller, based on the width of the browser. By being responsive, images enhance user experience across different devices with varying screen sizes. The following are the techniques to use the responsive images :</p>
          <p className="text-lg font-bold text-red-500 pt-4">2.1 Using width Property</p>
          <p className="text-lg pt-4">The image can be responsive & scale up & down with the help of CSS width property by setting its value as 100%.</p>
        </div>
        <br/>
        <p className="text-lg font-bold text-red-500 ">Syntax :</p>
        <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4">
        <pre>
          <code>
            &lt;img src="..." style="width:100%;"&gt;
          </code>
        </pre>
      </div>
      <p><b className="text-lg font-bold text-red-500">Example :</b>In this example, we will use the image width property to occupy 100% of the screen width.</p>
      <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4 pb-4 ">
        <CopyBlock
          text={htmlWebExample2.text}
          language={htmlWebExample2.language}
          theme={htmlWebExample2.theme}
          wrapLines
        />
        </div>
        <p><b className="text-lg font-bold text-red-500">Output :</b></p>
        <div>
        <video src="../2.mp4" controls="" preload="none"></video>
        </div>
        <div>
          <p className="text-lg font-bold text-red-500 pt-4 pb-4">2.2 Using the max-width Property</p>
          <p>The max-width property sets the maximum width of an element. It restricts the element’s width from exceeding a certain value. If the content is larger than this maximum width, it wraps to the next line. However, if the content is smaller, the property has no impact. Also, if the content is larger than its original size, it won’t scale up beyond the specified max-width.</p>
        </div>
        <br/>
        <p className="text-lg font-bold text-red-500 ">Syntax :</p>
        <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4">
        <pre>
          <code>
            &lt;img src="..." style="max-width:100%; height:auto;"&gt;
          </code>
        </pre>
      </div>
      <p><b className="text-lg font-bold text-red-500 pb-3">Example : Implementation of the max-width Property for making the Responsive Images.</b></p>
      <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4 pb-4 ">
        <CopyBlock
          text={htmlWebExample22.text}
          language={htmlWebExample22.language}
          theme={htmlWebExample22.theme}
          wrapLines
        />
        </div>
        <p><b className="text-lg font-bold text-red-500">Output :</b></p>
        <div>
        <video src={video3.mp4} controls="" preload="none"></video>
        </div>
        <div>
          <p className="text-lg font-bold text-red-500 pt-4 pb-4">2.3 Responsive Image for different Browser Width</p>
          <p className=" pb-2">To make images responsive, HTML provides the <code>&lt;picture&gt;</code> element. It gives web developers the flexibility to specify different image resources depending on the size of the browser window.</p>
        </div>
        <p><b className="text-lg font-bold text-red-500">Example : Implementation of the max-width Property for making the Responsive Images.</b></p>
      <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4 pb-4 ">
        <CopyBlock
          text={htmlWebExample23.text}
          language={htmlWebExample23.language}
          theme={htmlWebExample23.theme}
          wrapLines
        />
        </div>
        <p><b className="text-lg font-bold text-red-500">Output :</b></p>
        <div>
        <video src="../4.mp4" controls="" preload="none"></video>
        </div>
        <div>
          <p className="text-lg font-bold text-red-500 pb-4">3. Responsive Texts</p>
          <p className="pb-4">In this method, we set font sizes using %, vw, vh, etc. This ensures that text sizes are responsive, adjusting automatically until reaching a certain limit. Once the limit is reached, the content is justified to fit within the available width.</p>
          <p><b className="text-lg font-bold text-red-500">Example : This example demonstrates Responsive Web Design by making Responsive Texts.</b></p>
        </div>
        <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4 pb-4 ">
        <CopyBlock
          text={htmlWebExample3.text}
          language={htmlWebExample3.language}
          theme={htmlWebExample3.theme}
          wrapLines
        />
        </div>
        <p><b className="text-lg font-bold text-red-500">Output :</b></p>
        <div>
        <video src="../5.mp4" controls="" preload="none"></video>
        </div>
        <div>
          <p className="text-lg font-bold text-red-500 pb-4">4. CSS Media Queries</p>
          <p>
           <span>
              The&nbsp;
          </span>
          <a
            href="#media-query"
            style={{  color: "#0f3d2f" }}
          >
            <span className="hover:text-red-600 pointer text-blue-700">Media query in CSS</span>
          </a>
          <span>
          &nbsp;is essential for crafting responsive web designs. It ensures that web pages adapt to various screen sizes and device types. Breakpoints are set to define when the content starts to adjust or change layout based on the device’s width.
          </span>
        </p>
        </div>
        <p className="pb-3 pt-3">Media queries can be used to check many things : </p>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
          <li>width and height of the viewport.</li>
          <li>width and height of the device.</li>
          <li>Orientation.</li>
          <li>Resolution.</li>
        </ul>
        <p className="text-lg font-bold text-red-500 pt-4">Syntax :</p>
        <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4">
        <pre>
        <code>
          {`@media not | only mediatype and (expression) {
    // Code content
}`}
        </code>
      </pre>
      </div>
      <div>
      <p><b className="text-lg font-bold text-red-500">Example: In this example, we will use screen size in a media query to make the webpage responsive according to different breakpoints.</b></p>
        </div>
        <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4 pb-4 ">
        <CopyBlock
          text={htmlWebExample4.text}
          language={htmlWebExample4.language}
          theme={htmlWebExample4.theme}
          wrapLines
        />
        </div>
        <p><b className="text-lg font-bold text-red-500">Output : Background color and font size transition for width less than 800px.</b></p>
        <div>
        <video src="../6.mp4" controls="" preload="none"></video>
        </div>
        <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4">
        <p><b className="text-lg font-bold text-red-500">Note : </b>Sometimes, this method doesn’t show the correct output on Google Chrome.</p>
      </div>
      <div>
        <p className="text-lg font-bold text-red-500 pt-4">5. Responsive Layouts</p>
        <p>The responsive layout module of CSS includes the following properties.</p>
      </div>
      <p className="text-lg font-bold text-red-500 pt-4">5.1 Using flexbox property</p>
      <div>
        <p>
          In this approach, we will use&nbsp;
          <a
            href="#CSS-Display-Property"
            style={{  color: "#0f3d2f" }}
          >
            <span className="hover:text-red-600 pointer text-blue-700">CSS display property</span>
          </a>
          &nbsp;to make the page responsive. Display layouts like flexbox, inline, blocks, and grids can be used to make the design responsive. CSS flexbox property auto adjusts the content (no. of columns in a row) according to the screen width as shown in the output gif.
        </p>
      </div>
      <p className="text-lg font-bold text-red-500 pt-4">Syntax :</p>
        <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4">
        <pre>
        <code>
          {`.container {
    display: flexbox;
}`}
        </code>
      </pre>

      </div>
      <div>
      <p><b className="text-lg font-bold text-red-500">Example : In this example, we will use display type flexbox to show adjust items automatically according to the screen size.</b></p>
        </div>
        <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4 pb-4 ">
        <CopyBlock
          text={htmlWebExample5.text}
          language={htmlWebExample5.language}
          theme={htmlWebExample5.theme}
          wrapLines
        />
        </div>
        <p><b className="text-lg font-bold text-red-500">Output :</b></p>
        <div>
        <video src="../7.mp4" controls="" preload="none"></video>
        </div>
        <p><b className="text-lg font-bold text-red-500">Note :</b> Sometimes, this method doesn’t show the correct output on Google Chrome.</p>
        <br/>
        <p className="text-lg font-bold text-red-500 pt-4">5.2 Using CSS Grids</p>
        <div>
        <p>
          This approach uses a &nbsp;
          <a
            href="#CSS-Display-grid"
            style={{  color: "#0f3d2f" }}
          >
            <span className="hover:text-red-600 pointer text-blue-700">CSS display grid</span>
          </a>
          &nbsp;to create a 2D layout along with other grid options. It allows us to decide the number of columns we want to keep and instead of rearranging the columns like Flexbox, it adjusts the content within individual column elements.
        </p>
        </div>
        <p className="text-lg font-bold text-red-500 pt-4">Syntax :</p>
        <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4">
        <pre>
        <code>
          {`.container {
    display: grid;
    /* To define columns */
    grid-template-columns: 1fr 1fr;
}`}
        </code>
      </pre>
      </div>
      <div>
      <p><b className="text-lg font-bold text-red-500">Example : In this example, CSS Grid layout is used to arrange contents in 2D form, i.e., rows and columns.</b></p>
        </div>
        <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4 pb-4 ">
        <CopyBlock
          text={htmlWebExample52.text}
          language={htmlWebExample52.language}
          theme={htmlWebExample52.theme}
          wrapLines
        />
        </div>
        <p><b className="text-lg font-bold text-red-500">Output :</b></p>
        <div>
        <video src="../8.mp4" controls="" preload="none"></video>
        </div>
        <p><b className="text-lg font-bold text-red-500">Note :</b> Sometimes, this method doesn’t show the correct output on Google Chrome.</p>
        <br/>
        <p className="text-lg font-bold text-red-500 pt-4">5.3 Using CSS MultiColumn</p>
        <p className="pt-4">It is similar to grids. CSS MulotiColumn allows developers to choose the properties like no. of columns, width, gap, etc. for each column. These values remain unchanged but the content inside the columns adjusts.</p>
        <p className="text-lg font-bold text-red-500 pt-4">Syntax :</p>
        <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4">
        <pre>
        <code>
          {`.container {
    column-count: 3;          /* Number of columns */
    column-gap: 20px;         /* Gap between columns */
    column-width: 200px;      /* Width of each column */
    /* Other column properties */
}`}
        </code>
      </pre>
      </div>
      <div>
      <p><b className="text-lg font-bold text-red-500">Example : This example uses CSS MultiColumn for content division into a specific number of columns.</b></p>
        </div>
        <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4 pb-4 ">
        <CopyBlock
          text={htmlWebExample53.text}
          language={htmlWebExample53.language}
          theme={htmlWebExample53.theme}
          wrapLines
        />
        </div>
        <p><b className="text-lg font-bold text-red-500">Output :</b></p>
        <div>
        <video src="../9.mp4" controls="" preload="none"></video>
        </div>
        <div>
          <p className="pb-4">HTML Responsive Web Design allows websites to adapt to various screen sizes, ensuring a seamless user experience across devices. By using HTML and responsive techniques, designers and developers can create websites that look great whether viewed on a desktop or a smartphone.</p>
          <p>This flexibility enhances accessibility and usability, making browsing a breeze for all users. In essence, HTML Responsive Web Design is important for ensuring that websites remain functional and visually appealing regardless of the device being used.</p>
        </div>
    </div>
  );
};

export default HTMLResponsiveWebDesign;
