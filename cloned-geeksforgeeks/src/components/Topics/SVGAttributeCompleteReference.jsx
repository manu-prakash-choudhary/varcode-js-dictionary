import React from "react";
import { CopyBlock } from "react-code-blocks";
import { FaAngleRight } from 'react-icons/fa';
import { SVGAttribute } from "../../utils/CodeBlocks";


const SVGAttributeCompleteReference = () => {
  return (
    <div className="content-container overflow-y-auto h-screen pl-6">
      <div className="pl-0 flex flex-col gap-3 ">
        <h1 className="text-4xl font-semibold text-red-600">SVG Attribute Complete Reference</h1>
        <p className="text-gray-600">Last Updated : 19 Apr, 2025</p>
      </div>
      <br/>
      <p>SVG stands for Scalable Vector Graphic. It can be used to make graphics and animations like in HTML canvas. It is a type of vector graphic that may be scaled up or down. Attributes are the things that give the SVG shape, color, etc it will make the SVGs as attractive as you need.</p>
      <br/>
      <p className="text-red-500"><b>List of SVG Elements :</b></p>

      <div className="flex mt-4">
        <table className="table-auto border-collapse border border-gray-600">
        <thead>
          <tr style={{ backgroundColor: "#f5f5f5", borderBottom: "2px solid #ddd" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>SVG Attributes</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Description</th>
          </tr>
        </thead>
          <tbody>
            <tr>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>by</td>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The by attribute specifies a relative offset value for an attribute that will be modified during an animation.</td>
            </tr> 
            <tr>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>cx</td>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The cx attribute define the x-axis coordinate of a center point.</td>
            </tr>
            <tr>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>cy</td>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The cy attribute defines the y-axis coordinate of a center point.</td>
            </tr>
            <tr>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>fill</td>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The fill attribute can be used in two things.</td>
            </tr>
            <tr>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>fill-opacity</td>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The fill-opacity attribute is a presentation attribute defining the opacity of the paint applied to a shape.</td>
            </tr>
            <tr>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>filter</td>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The filter attribute is used to specify the filter effects that are defined by the &gt;filter&lt; element which are to be applied to its elements.</td>
            </tr>
            <tr>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>flood-color</td>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The flood-color attribute indicates what color is used to flood the current filter primitive subregion.</td>
            </tr>
            <tr>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>flood-opacity</td>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The flood-opacity attribute indicates the opacity value to use across the current filter primitive subregion.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>font-size</td>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The font-size attribute refers to the size of the font from baseline when multiple lines of text are set solid in a multiline layout environment.</td>
            </tr>
            <tr>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>font-size-adjust</td>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The font-size-adjust attribute allows you to set the aspect value for an element that will set the x-height of the first choice font in the given substitute font.</td>
            </tr>
            <tr>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>font-style</td>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The font-style attribute is used to specify whether the text is to be rendered using a normal, italic, or oblique face style.</td>
            </tr>
            <tr>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>visibility</td>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The visibility attribute allows you to control the visibility of graphical elements.</td>
            </tr>
            <tr>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>from</td>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The from attribute indicates the initial value of an attribute, it is used with to attribute.</td>
            </tr>
            <tr>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>fr</td>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The fr attribute defines the radius of the focal point for the linear gradient.</td>
            </tr>
            <tr>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>height</td>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The height attribute defines the vertical length of an element.</td>
            </tr>
            <tr>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>keyPoints</td>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The keyPoints attribute specifies the duration of an animation.</td>
            </tr>
            <tr>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>keyTimes</td>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The keyTimes attribute is used to specify a list of floating point numbers (Time values) between 0 and 1 (inclusive) which is used to control the pacing of the animation.</td>
            </tr>
            <tr>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>lengthAdjust</td>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The lengthAdjust attribute is used to decide the stretching of the text within the length defined by the textLength attribute.</td>
            </tr>
            <tr>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>letter-spacing</td>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The letter-spacing attribute controls spacing between text characters.</td>
            </tr>
            <tr>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>lighting-color</td>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The lighting-color attribute represents the color of the light source for lighting filter primitives.</td>
            </tr>
            <tr>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>markerHeight</td>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The markerHeight attribute indicates the height of the viewport into which the &lt;marker&gt; element's content is to be fitted when it is displayed according to the preserveAspectRatio and viewBox attributes.</td>
            </tr>
            <tr>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>markerWidth</td>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The markerWidth attribute indicates the width of the viewport within which the &lt;marker&gt; is to be adjusted when it is displayed according to the preserveAspectRatio and viewBox attributes</td>
            </tr>
            <tr>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>mask</td>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The SVG mask attribute is used to bind an element in which this attribute is defined to with the given &lt;mask&gt; element.</td>
            </tr>
            <tr>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>media</td>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The media attribute shows a media query that must be matched for a style sheet to apply.</td>
            </tr>
            <tr>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>numOctaves</td>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The numOctaves attribute defines the number of octaves for the noise function of the &lt;feTurbulence&gt; primitive.</td>
            </tr>
            <tr>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>opacity</td>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The opacity attribute specifies the transparency of an object or of a group of objects.</td>
            </tr>
            <tr>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>operator</td>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The operator attribute either defines the compositing operation or morphing operation to be performed.</td>
            </tr>
            <tr>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>orient</td>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The orient attribute shows, how a marker is rotated when it is placed at its position on the shape.</td>
            </tr>
            <tr>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>path</td>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The path attribute defines a text path or the motion path along with the characters of a text are displayed or a referenced element is animated respectively.</td>
            </tr>
            <tr>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>pathLength</td>
               <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The pathLength attribute defines the total length for the path, in user units.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>patternContentUnits</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The patternContentUnits attribute is used to indicate which coordinate system must be used for the contents of the &lt;pattern&gt; element.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>patternTransform</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The patternTransform attribute describes a list of transform functions that are applied to a pattern.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>patternUnits</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The patternUnits attribute specifies that which coordinate system must be used for the geometry properties of the element.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>pointer-events</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The pointer-events attribute allows us to define whether or when an element may be the target of a mouse event.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>points</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The points attribute describes a list of points for the polygon or polyline element.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>pointsAtX</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The pointsAtX attribute denotes the x position in the coordinate system established by primitiveUnits attribute on the &lt;filter&gt; element of the point at which the light source is pointing.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>pointsAtY</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The pointsAtY attribute denotes the y position in the coordinate system established by attribute primitiveUnits on the &lt;filter&gt; element of the point at which the light source is pointing.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>pointsAtZ</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The pointsAtZ attribute denotes the y position in the coordinate system established by primitiveUnits attribute on the &lt;filter&gt; element of the point at which the light source is pointing.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>r</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The r attribute defines the radius of the circle.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>radius</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The radius attribute is the radius for the operation on &lt;feMorphology&gt; filter primitive.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>repeatCount</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The repeatCount attribute specifies the time duration of an animation.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>repeatDur</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The repeatDur attribute specifies the total duration to repeat the animation.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>restart</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The restart attribute is used to decide whether an animation will restart or not.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>rotate</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The rotate attribute shows the rotation of an animated element as it travels along a specified path in an &lt;animateMotion&gt; element.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>rx</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The rx attribute defines a radius on the x-axis.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ry</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The ry attribute defines a radius on the y-axis.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>scale</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The scale attribute decides the displacement scale factor that must be used on a &lt;feDisplacementMap&gt; filter primitive.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>seed</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The seed attribute denotes the starting number for the pseudo-random number generator of the &lt;feTurbulence&gt; filter primitive.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>shape-rendering</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The shape-rendering attribute hints the renderer about the tradeoff’s to be made while rendering shapes like paths, circles, or rectangles.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>startOffset</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The startOffset attribute decides the start of the path for the initial text position.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>stdDeviation</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The stdDeviation attribute explains the standard deviation for the blur operation.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>stitchTiles</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The stitchTiles attribute indicates the behavior of the Perlin Noise tiles at the border.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>stop-color</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The stop-color attribute is used to indicate the color to be used at the stop point of a gradient.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>stop-opacity</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The stop-opacity attribute indicates the alpha value or opacity to be used at the stop point.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>stroke</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The stroke attribute is an attribute defining the color used to paint the outline of the shape.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>stroke-dasharray</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The stroke-dasharray attribute is a presentation attribute defining the pattern of dashes used to paint the outline of the shape.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>stroke-linecap</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The stroke-linecap attribute defines the shape of the stroke that is to be used at the end of the open subpath.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>stroke-opacity</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The stroke-opacity attribute specifies the transparency of an object or of a group of objects.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>stroke-width</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The stroke-width attribute is an attribute defining the width of the stroke applied to the shape.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>style</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The style attribute helps us to style an element using CSS declarations.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>surfaceScale</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The surfaceScale attribute serves as the height of the surface.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>systemLanguage</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The systemLanguage attribute expresses a list of many supported language tags.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>tabindex</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The tabindex attribute allows one to control whether an element is focusable or not.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>tableValues</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The tableValues attribute declares a list of numbers defining a lookup table of values for a color component transfer function.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>text-anchor</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The text-anchor attribute is used to align text that is auto-wrapped or pre-formatted.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>text-decoration</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The text-decoration attribute defines whether text is written with a strike-through, overline, and/or underline.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>text-rendering</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The text-rendering attribute gives a hint about what tradeoffs should be made while rendering text.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>textLength</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The textLength attribute allows you to enumerate the width of the space taken by the text.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>to</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The SVG to attribute indicates the initial value of an attribute.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>transform</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The transform attribute states the list of transform definitions that are applied to an element and its children.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>type</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The type attribute is a non-specific attribute that has a different meaning according to the context in which it is used.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>vector-effect</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The vector-effect attribute defines the vector effect to use when drawing an object.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>visibility</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The visibility attribute allows you to control the visibility of graphical elements.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>width</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The width attribute defines the horizontal length of an element.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>word-spacing</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The word-spacing attribute in SVG is used to indicate the spacing between words.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>x</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The x attribute defines an x-axis coordinate in the user coordinate system.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>x1</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The x1 attribute is used to specify the first x-coordinate for drawing an SVG element that requires more than one coordinate.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>x2</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The x2 attribute is used to specify the first x-coordinate for drawing an SVG element that requires more than one coordinate.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>xChannelSelector</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The xChannelSelector attribute in SVG is used to indicate the color channel from in2 that is used to displace the pixels in in along the x-axis.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>xml:lang</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The xml:lang attribute in SVG is used to indicate the primary language that is used in the contents and attributes containing text content on the website.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>y</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The y attribute defines the y-axis coordinate in the user coordinate system.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>y1</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The y1 attribute is used to specify the first y-coordinate for drawing an SVG element that requires more than one coordinate.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>y2</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The y2 attribute is used to specify the first y-coordinate for drawing an SVG element that requires more than one coordinate.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>yChannelSelector</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The yChannelSelector attribute in SVG is used to indicate the channel from in2 that is used to displace the pixels in in along the y-axis.</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>z</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>The z attribute in SVG is used to define the location along the z-axis in the coordinate system for a light source established by the primitiveUnits attribute on the &lt;filter&gt; element.</td>
            </tr>
          </tbody>
        </table> 
      </div>
      <br/>
      <div>
      <p><b className="text-red-500 pd-4">Below example will give you a brief idea that how to use the SVG Attributes :</b></p>
      <br/>
      <p><b className="text-red-500">Example : </b>In this example, we will create two SVG texts with different attribute effects.</p>
      <div className="border border-red-400 rounded-2xl w-full min-h-40 bg-[#fafafa] mb-4 ">
        <CopyBlock
          text={SVGAttribute.text}
          language={SVGAttribute.language}
          theme={SVGAttribute.theme}
          wrapLines
        />
      </div>
      <br/>
      <p><b className="text-lg text-red-500">Output :</b></p>
      <img src="../SVGAttribute.png" width={"40%"} className="mx-auto item-center" />
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

export default SVGAttributeCompleteReference;



