// SVGAttributeCompleteReference.jsx
import React from "react";
import { CopyBlock } from "react-code-blocks";
import { FaAngleRight } from 'react-icons/fa';
import { SVGProperty } from "../../utils/CodeBlocks";


const SVGPropertyCompleteReference = () => {
  return (
    <div className="content-container overflow-y-auto h-screen pl-6">
      <div className="pl-0 flex flex-col gap-3 ">
        <h1 className="text-4xl font-semibold text-red-600">SVG Property Complete Reference</h1>
        <p className="text-gray-600">Last Updated : 19 Apr, 2025</p>
      </div>
      <br/>
      <p>SVG stands for Scalable Vector Graphic. It can be used to make graphics and animations like in HTML canvas. It is a type of vector graphic that may be scaled up or down. Properties are used for passing the value to the element, there are lots of properties that can be used in SVG elements.</p>
      <br/>
      <p className="text-red-500"><b>List of SVG Elements :</b></p>

      <div className="flex mt-4">
        <table className="table-auto border-collapse border border-gray-600">
        <thead>
          <tr style={{ backgroundColor: "#f5f5f5", borderBottom: "2px solid #ddd" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>SVG Attributes</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Description</th>
            {/* <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Example</th> */}
          </tr>
        </thead>
          <tbody>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>AElement.href</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns an SVGAnimatedLength object corresponding to the attribute of the given A element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>prefix</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns prefix of the given Attr Element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>namespaceURI</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns namespaceURI of the given Attribute element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>DOMStringList.length</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the length of the given DOMStringList element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ownerElement</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns ownerElement of the given Attr Element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>TextPathElement.startOffset</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns an SVGAnimatedLength object corresponding to the attribute of the given textpath element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>localName</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns localName of the given Attr element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Event.returnValue</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns a string containing the event’s type.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Event.isTrusted</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>This property is a boolean that is true when the event was generated by a user action.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Event.currentTarget</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It identifies the current target for the event, as the event traverses the DOM.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Event.bubbles</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It indicates whether the event bubbles up through the DOM or not.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Event.composed</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It indicates whether the event will propagate across the shadow DOM boundary into the standard DOM.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Event.defaultPrevented</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It indicates whether the event can be canceled.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Element.outerHTML</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns innerHTML of the given element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Document.doctype</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the doctype of the document.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Document.head</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns an object which contains the information about the head of the document.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Document.body</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns an object which contains the information about the body of the document.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Document.image</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the collection of images in the current HTML document.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Document.timeline</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It represents the default timeline of the current document.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Document.scripts</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The SVG Document.scripts property returns the list of script elements in the document.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Document.hidden</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the boolean value for the check if the page is hidden or not.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Document.documentURI</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the document location as a string.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Document.documentElement</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the root element of the document.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>LineElement.x2</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns an SVGAnimatedLength object corresponding to the attribute of the given line element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>LineElement.y2</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns an SVGAnimatedLength object corresponding to the attribute of the given line element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>LineElement.x1</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns an SVGAnimatedLength object corresponding to the attribute of the given line element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>LineElement.y1</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns an SVGAnimatedLength object corresponding to the attribute of the given line element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Element.part</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns a DOMTokenList which represents the part identifiers for the given element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Element.id</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the id of the given element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Element.attributes</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns an object that contains all the attributes of the given element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Element.classList</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the classList of the given element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Element.className</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the className of the given Element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Element.innerHTML</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The SVG Element.innerHTML property returns innerHTML of the given element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>LinearGradientElement.x2</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns an SVGAnimatedLength object corresponding to the attribute of the given LinearGradient element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>LinearGradientElement.y1</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns an SVGAnimatedLength object corresponding to the attribute of the given LinearGradient element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>LinearGradientElement.y2</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns an SVGAnimatedLength object corresponding to the attribute of the given LinearGradient element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>LinearGradientElement.x1</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns an SVGAnimatedLength object corresponding to the attribute of the given LinearGradient element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>EllipseElement.ry</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns an SVGAnimatedLength object corresponding to the attribute of the given ellipse element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>EllipseElement.rx</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns an SVGAnimatedLength object corresponding to the attribute of the given ellipse element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>EllipseElement.cy</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns an SVGAnimatedLength object corresponding to the attribute of the given ellipse element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>EllipseElement.cx</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns an SVGAnimatedLength object corresponding to the attribute of the given ellipse element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>RectElement.y</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns an SVGAnimatedLength object corresponding to the attribute of the given rectangle element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>RectElement.x</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns an SVGAnimatedLength object corresponding to the attribute of the given rectangle element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>RectElement.ry</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns an SVGAnimatedLength object corresponding to the attribute of the given rectangle element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>RectElement.width</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns an SVGAnimatedLength corresponding to the attribute of the given rectangle element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>RectElement.height</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns an SVGAnimatedLength with respect to the rect element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>RectElement.rx</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns an SVGAnimatedLength object corresponding to the attribute of the given rectangle element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>CircleElement.r</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns an SVGAnimatedLength object corresponding to the attribute of the given circle element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>CircleElement.cy</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns an SVGAnimatedLength object corresponding to the attribute of the given circle element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>CircleElement.cx</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns an SVGAnimatedLength object corresponding to the attribute of the given circle element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>stop-opacity</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It indicates the alpha value or opacity to be used at the stop point.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ScriptElement.type</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns an SVGAnimatedLength object corresponding to the attribute of the given script element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Stroke</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It defines the color of a line, text or outline of an element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>SpecularLighting.specularExponent</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the SVGAnimatedNumber object corresponding to the specularExponent component.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>SpecularLighting.kernelUnitLengthY</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the SVGAnimatedNumber object corresponding to the kernelUnitLengthY component.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>UseElement.height</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns an SVGAnimatedLength object corresponding to the attribute of the given use element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>UseElement.width</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns an SVGAnimatedLength object corresponding to the attribute of the given use element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>UseElement.x</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns an SVGAnimatedLength object corresponding to the attribute of the given use element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>UseElement.y</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns an SVGAnimatedLength object corresponding to the attribute of the given use element.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>window.closed</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It indicates whether the referenced window is closed or not.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>window.crypto</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the Crypto object associated to the global object.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>window.history</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns a reference to the History object.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>window.toolbar</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the toolbar object through which we can check the visibility.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>window.isSecureContext</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It indicates whether a context is capable of using features that require Secure Contexts.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>window.statusbar</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the statusbar object through which we can check the visibility.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>window.document</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns a reference to the document contained in the window.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>window.event</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the event which is currently being handled by the site’s code.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>window.performance</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It is used to gather performance information about the current document.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>window.menubar</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the menubar object through which we can check the visibility.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>window.scrollbars</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the scrollbars object through which we can check the visibility.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>FEBlendElement.mode</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the SVGAnimatedEnumeration object corresponding to the mode attribute.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>FEBlendElement.in2</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the SVGAnimatedString object corresponding to the in2 attribute.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>FEBlendElement.in1</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the SVGAnimatedString object corresponding to the in attribute.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>FEDisplacementMap.scale</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the SVGAnimatedNumber object corresponding to the scale component.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>FEDisplacementMap.in2</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the SVGAnimatedString object corresponding to the in2 component.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>FEDisplacementMap.in1</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the SVGAnimatedString object corresponding to the in component.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>FEDisplacementMap.xChannelSelector</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the SVGAnimatedEnumeration object corresponding to the xChannelSelector component.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>FEDisplacementMap.yChannelSelector</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the SVGAnimatedEnumeration object corresponding to the yChannelSelector component.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>FEDropShadow.dx</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the SVGAnimatedNumber object corresponding to the dx component.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>FEDropShadow.dy</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the SVGAnimatedNumber object corresponding to the dy component.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>FEDropShadow.in1</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the SVGAnimatedString object corresponding to the in1 component.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>FEDropShadow.stdDeviationX</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the SVGAnimatedNumber object corresponding to the stdDeviationX component.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>FEDropShadow.stdDeviationY</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the SVGAnimatedNumber object corresponding to the stdDeviationY component.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>FEGaussionBlur.in1</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the SVGAnimatedString object corresponding to the in1 component.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>FEGaussionBlur.stdDeviationX</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the SVGAnimatedNumber object corresponding to the stdDeviationX component.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>FEGaussionBlur.stdDeviationY</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the SVGAnimatedNumber object corresponding to the stdDeviationY component.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>FEMergeNode.in1</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the SVGAnimatedString object corresponding to the in1 component.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>FEOffset.in1</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the SVGAnimatedString object corresponding to the in1 component.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>FEOffset.dx</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the SVGAnimatedNumber object corresponding to the dx component.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>FEOffset.dy</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the SVGAnimatedNumber object corresponding to the dy component.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>FESpotLightElement.z</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the SVGAnimatedNumber object corresponding to the z attribute.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>FESpotLightElement.x</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the SVGAnimatedNumber object corresponding to the x attribute.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>FESpotLightElement.y</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the SVGAnimatedNumber object corresponding to the y attribute.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>FESpotLightElement.pointsAtX</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the SVGAnimatedNumber object corresponding to the pointsAtX attribute.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>FESpotLightElement.limitingConeAngle</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the SVGAnimatedNumber object corresponding to the limitingConeAngle attribute.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>FESpotLightElement.pointsAtY</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the SVGAnimatedNumber object corresponding to the pointsAtY attribute.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>FESpotLightElement.pointsAtZ</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the SVGAnimatedNumber object corresponding to the pointsAtZ attribute.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>FESpecularLighting.in1</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the SVGAnimatedString object corresponding to the in1 component.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>FESpecularLighting.surfaceScale</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the SVGAnimatedNumber object corresponding to the surfaceScale component.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>FESpecularLighting.specularConstant</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the SVGAnimatedNumber object corresponding to the specularConstant component.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>FESpecularLighting.kernelUnitLengthX</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the SVGAnimatedNumber object corresponding to the kernelUnitLengthX component.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>FESpotLightElement.pointsAtY</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the SVGAnimatedNumber object corresponding to the pointsAtY attribute.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>FESpotLightElement.pointsAtZ</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>It returns the SVGAnimatedNumber object corresponding to the pointsAtZ attribute.</td>
            {/* <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Try</td> */}
          </tr>
          </tbody>
        </table> 
      </div>
      <br/>
      <div>
      <p><b className="text-red-500 pd-4">Below example will give you a brief idea that how to use the SVG Property :</b></p>
      <br/>
      <p><b className="text-red-500">Example : </b>In this example, we will see two diagrams one will be an ellipse and another will be a circle.</p>
      <div className="border border-red-400 rounded-2xl w-full min-h-40 bg-[#fafafa] mb-4 ">
        <CopyBlock
          text={SVGProperty.text}
          language={SVGProperty.language}
          theme={SVGProperty.theme}
          wrapLines
        />
      </div>
      <br/>
      <p><b className="text-lg text-red-500">Output :</b></p>
      <img src="../SAGProperty.png" width={"40%"} className="mx-auto item-center" />
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
  );
};

export default SVGPropertyCompleteReference;