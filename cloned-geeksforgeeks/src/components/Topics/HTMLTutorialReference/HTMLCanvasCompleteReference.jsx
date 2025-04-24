// SVGAttributeCompleteReference.jsx

import React from "react";
import { CopyBlock } from "react-code-blocks";
import { FaAngleRight } from 'react-icons/fa';
import { HTMLCanvas, SVGAttribute } from "../../../utils/CodeBlocks";


const HTMLCanvasCompleteReference = () => {
  return (
    <div className="content-container overflow-y-auto h-screen pl-6">
      <div className="pl-0 flex flex-col gap-3 ">
        <h1 className="text-4xl font-semibold text-red-600">HTML Canvas Complete Reference</h1>
        <p className="text-gray-600">Last Updated : 19 Apr, 2025</p>
      </div>
      <br/>
      <p>The HTML “canvas” element is used to draw graphics via JavaScript. The “canvas” element is only a container for graphics. One must use JavaScript to actually draw the graphics. Canvas has several methods for drawing paths, boxes, circles, text, and adding images.</p>
      <br/>
      <div>
      <p><b className="text-red-500">Example : </b>This example shows the basic use of Canvas in HTML.</p>
      <div className="border border-red-400 rounded-2xl w-full min-h-40 bg-[#fafafa] mb-4 ">
        <CopyBlock
          text={HTMLCanvas.text}
          language={HTMLCanvas.language}
          theme={HTMLCanvas.theme}
          wrapLines
        />
      </div>
      <br/>
      <p><b className="text-lg text-red-500">Output :</b></p>
      <img src="../../public/HTMLCanvas.jpg" width={"40%"} className="mx-auto item-center" />
      </div>
      <p>
        <b className="text-lg text-red-500 mb-4">HTML Canvas Reference Complete Reference</b>
      </p>
      <p>
        <b className="text-lg text-red-500 mt-4">Colors, Styles, and Shadows Properties and Methods</b>
      </p>
      <div className="flex mt-4">
        <table className="table-auto border-collapse border border-gray-600">
        <thead>
          <tr style={{ backgroundColor: "#f5f5f5", borderBottom: "2px solid #ddd" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Properties</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Description</th>
            {/* <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Example</th> */}
          </tr>
        </thead>
          <tbody>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>fillStyle</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>	Return the color, gradient, or pattern used to fill the drawing.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>strokeStyle</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Return the stroke of color, gradient, or pattern used in the drawing.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>shadowColor</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Set to a string representing a CSS color value, which we want as shadow color.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>shadowBlur</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Return the blur level for shadows.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ShadowOffsetX</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Return the horizontal distance of the shadow from the shape.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ShadowOffsetY</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Return the vertical distance of the shadow from the shape.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          </tbody>
        </table> 
      </div>
      <br/>
      <div className="flex mt-4">
        <table className="table-auto border-collapse border border-gray-600">
        <thead>
          <tr style={{ backgroundColor: "#f5f5f5", borderBottom: "2px solid #ddd" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Methods</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Description</th>
            {/* <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Example</th> */}
          </tr>
        </thead>
          <tbody>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ateLinearGradient()</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Gradient can be used to fill different colors in rectangles, circles, lines, text, etc.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>createPattern()</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It is used to repeat the specified element in the specified direction.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>addColorStop()</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It is used to specify the color and its position in the gradient object.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          </tbody>
        </table> 
      </div>
      <br/>
      <p><b className="text-red-500">Line Styles Properties</b></p>
      <div className="flex mt-4">
        <table className="table-auto border-collapse border border-gray-600">
        <thead>
          <tr style={{ backgroundColor: "#f5f5f5", borderBottom: "2px solid #ddd" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Properties</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Description</th>
            {/* <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Example</th> */}
          </tr>
        </thead>
          <tbody>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>lineCap</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Set or return the style of end caps of line.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>lineJoin</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Return the type of corner created, when two lines meet, by using the lineJoin property.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>lineWidth</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Return the width of the line (thickness of the line).</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>miterLimit</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It is used to or returns the maximum miter length.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          </tbody>
        </table> 
      </div>
      <br/>
      <p><b className="text-red-500">Rectangles Methods</b></p>
      <div className="flex mt-4">
        <table className="table-auto border-collapse border border-gray-600">
        <thead>
          <tr style={{ backgroundColor: "#f5f5f5", borderBottom: "2px solid #ddd" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Methods</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Description</th>
            {/* <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Example</th> */}
          </tr>
        </thead>
          <tbody>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>rect()</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Create a rectangle in HTML.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>fillRect()</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It is used to fill the rectangle using the given color.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>strokeRect()</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It is used to draw a rectangle in a given color.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>clearRect()</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Clear the specified pixels within a given rectangle.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          </tbody>
        </table> 
      </div>
      <br/>
      <p><b className="text-red-500">Paths Methods</b></p>
      <div className="flex mt-4">
        <table className="table-auto border-collapse border border-gray-600">
        <thead>
          <tr style={{ backgroundColor: "#f5f5f5", borderBottom: "2px solid #ddd" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Methods</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Description</th>
            {/* <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Example</th> */}
          </tr>
        </thead>
          <tbody>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>fill()</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It is used to fill the current drawing path.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>stroke()</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Draw the path you have defined with all those moveTo() and lineTo() methods.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>beginPath()</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It is used to start a path or reset the current path.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>moveTo()</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Move the path to the specified point in the canvas, without creating a line.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>closePath()</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Create a path from the current point back to the starting point.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>lineTo()</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It is used to add a new point to create a line from that point to the last specified point in the canvas.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>clip()</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It is used to clip a region/part of any shape and size from the given/original canvas.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>quadraticCurveTo()</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Create a quadratic curve on the canvas.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>bezierCurveTo()</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Bezier curves on HTML canvas are drawn using a start point, one or more control point/points, and an endpoint.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>arc()</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Create an arc/curve i.e. circles or parts of circles.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>arcTo()</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Create an arc/curve between two tangents on the canvas.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>isPointInPath()</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Check whether or not the specified point is contained in the current path.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          </tbody>
        </table> 
      </div>
      <br/>
      <p><b className="text-red-500">Transformations Methods</b></p>
      <div className="flex mt-4">
        <table className="table-auto border-collapse border border-gray-600">
        <thead>
          <tr style={{ backgroundColor: "#f5f5f5", borderBottom: "2px solid #ddd" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Methods</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Description</th>
            {/* <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Example</th> */}
          </tr>
        </thead>
          <tbody>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>scale()</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It is used to scale the current drawing into a smaller or larger size.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>rotate()</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It is used to rotate the drawing by a given angle.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>translate()</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Specify that the object is translated by the given translation amount.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>transform()</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It is used to replace the current transformation matrix.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>setTransform()</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It is used to replace the current transformation matrix.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          </tbody>
        </table> 
      </div>
      <br/>
      <p><b className="text-red-500">Text Properties and Methods</b></p>
      <div className="flex mt-4">
        <table className="table-auto border-collapse border border-gray-600">
        <thead>
          <tr style={{ backgroundColor: "#f5f5f5", borderBottom: "2px solid #ddd" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Properties</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Description</th>
            {/* <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Example</th> */}
          </tr>
        </thead>
          <tbody>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>font</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Change the present font family of the Text content of the &lt;canvas&gt; element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>textAlign</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Return the current alignment for text content, according to the anchor point.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>textBaseline</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Return the baseline of the current text.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          </tbody>
        </table> 
      </div>
      <br/>
      <div className="flex mt-4">
        <table className="table-auto border-collapse border border-gray-600">
        <thead>
          <tr style={{ backgroundColor: "#f5f5f5", borderBottom: "2px solid #ddd" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Methods</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Description</th>
            {/* <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Example</th> */}
          </tr>
        </thead>
          <tbody>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>fillText()</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It is used to draw filled text on the canvas.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>strokeText()</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Draw text (with no fill) on the canvas, by using strokeText() Method.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>measureText()</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Return an object that represents the width of the specified text in terms of pixels.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          </tbody>
        </table> 
      </div>
      <br/>
      <p><b className="text-red-500">Pixel Manipulation Properties and Methods</b></p>
      <div className="flex mt-4">
        <table className="table-auto border-collapse border border-gray-600">
        <thead>
          <tr style={{ backgroundColor: "#f5f5f5", borderBottom: "2px solid #ddd" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Properties</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Description</th>
            {/* <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Example</th> */}
          </tr>
        </thead>
          <tbody>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>width</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It is used to specify the width of the &lt;canvas&gt; in terms of pixels.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>height</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It is used to specify the height of the &lt;canvas&gt; element in terms of pixels.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          </tbody>
        </table> 
      </div>
      <br/>
      <div className="flex mt-4">
        <table className="table-auto border-collapse border border-gray-600">
        <thead>
          <tr style={{ backgroundColor: "#f5f5f5", borderBottom: "2px solid #ddd" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Methods</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Description</th>
            {/* <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Example</th> */}
          </tr>
        </thead>
          <tbody>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>createImageData()</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It is used to create a new blank ImageData object.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>getImageData()</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It is used to copy the pixel data for the specified rectangle on a canvas.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>putImageData()</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It is used to put the image data back into the canvas from a specified ImageData object.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          </tbody>
        </table> 
      </div>
      <br/>
      <p><b className="text-red-500">Compositing & Image Drawing Properties and Methods</b></p>
      <div className="flex mt-4">
        <table className="table-auto border-collapse border border-gray-600">
        <thead>
          <tr style={{ backgroundColor: "#f5f5f5", borderBottom: "2px solid #ddd" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Properties</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Description</th>
            {/* <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Example</th> */}
          </tr>
        </thead>
          <tbody>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>globalAlpha</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Set or return the current alpha or transparency value of the drawing.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          </tbody>
        </table> 
      </div>
      <br/>
      <div className="flex mt-4">
        <table className="table-auto border-collapse border border-gray-600">
        <thead>
          <tr style={{ backgroundColor: "#f5f5f5", borderBottom: "2px solid #ddd" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Methods</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Description</th>
            {/* <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Example</th> */}
          </tr>
        </thead>
          <tbody>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>drawImage()</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It is used to display an image or video on canvas.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          </tbody>
        </table> 
      </div>
      <br/>
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
  );
};

export default HTMLCanvasCompleteReference;