import React from "react";
import { htmlEntities } from "../../utils/CodeBlocks";
import { htmlEntitiesNew } from "../../utils/CodeBlocks";
import { CopyBlock } from "react-code-blocks";


const HTMLEntities = () => {
  return (
    <div className="content-container overflow-y-auto h-screen pl-6">
      <div className="pl-0 flex flex-col gap-3 ">
        <h1 className="text-4xl font-semibold text-red-600">HTML Entities</h1>
        <p className="text-gray-600">Last Updated : 27 Mar, 2025</p>
      </div>
      <br/>
      <p className="text-gray-800 text-justify mb-4">
        In HTML, there are reserved characters, such as <code>&lt;</code> (less than) and{" "}
        <code>&gt;</code> (greater than), which are used to define tags like{" "}
        <code>&lt;p&gt;</code>. However, if you use these reserved characters within the
        content, browsers may misinterpret them as part of the tags.
      </p>

      <p className="text-gray-800 text-justify mb-4">
        <b>HTML Entities</b> were introduced to avoid this. Reserved characters
        should be replaced with their corresponding entities. For example :
      </p>
      <div>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
        <li>
          <span style={{ marginRight: "5px" }}>&lt;</span> (less than) = <code>&amp;lt;</code>
        </li>
        <li>
          <span style={{ marginRight: "5px" }}>&gt;</span> (greater than) = <code>&amp;gt;</code>
        </li>
      </ul>
    </div>
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      {/* Syntax Section */}
      <p style={{ fontWeight: "bold", color: "red" }}>Syntax :</p>
      <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4">
        <code>&amp;entity_name; or &amp; #entity_number;</code>
      </div>

      {/* Note Section */}
      <p style={{ marginTop: "10px" }}>
        <b style={{ color: "red" }}>Note :</b>{" "}
        <span style={{ fontStyle: "italic", color: "red" }}>
          Entity names are case-sensitive.
        </span>
      </p>


      {/* Commonly Used HTML Entities Section */}
      <h2 style={{ fontWeight: "bold", marginTop: "15px", color: "red" }}>Commonly Used HTML Entities</h2>
      <p>
        Some commonly used symbols with their Entity name and Entity numbers are listed below :
      </p>
    </div>
      <div className="flex mt-4">
        <table className="table-auto border-collapse border border-gray-600">
        <thead>
          <tr style={{ backgroundColor: "#f5f5f5", borderBottom: "2px solid #ddd" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Symbols</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Description</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Entity Name</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Entity Number</th>
          </tr>
        </thead>
          <tbody>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}></td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>non-breaking space</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;nbsp;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;#160;</td>
            </tr> 
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&lt;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Less than</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;lt;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;#60;</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&gt;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Greater than</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;gt;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;#62;</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&reg;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Registered trademark</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;reg;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;#174;</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&euro;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Euro</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;euro;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;#8364;</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&yen;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Yen</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;yen;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;#165;</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&pound;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Pound</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;pound;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;#163;</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&cent;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Cent</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;cent</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;#162;</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&part;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>PARTIAL DIFFERENTIAL</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;part;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;#8706;</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&exist;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>THREE EXISTS</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;exist;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;#8707;</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&empty;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>EMPTY SETS</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;empty;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;#8709;</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&nabla;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>NABLA</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;nabla;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;#8711;</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&isin;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ELEMENT OF</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;isin;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;#8712;</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&notin;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>NOT AN ELEMENT OF</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;notin;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;#8713;</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>+</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>PLUS SIGN</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;plus;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;#43;</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>∏</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>N-ARY PRODUCT</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;prod;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;#8719;</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>∑</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>N-ARY SUMMATION</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;sum;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;#8721;</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Α</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Alpha</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;Alpha;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;#913;</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Β</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Beta</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;Beta;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;#914;</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Γ</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Gamma</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;Gamma;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;#915;</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Δ</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Delta</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;Delta;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;#916;</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ε</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Epsilon</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;Epsilon;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;#917;</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ζ</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Zeta</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;Zeta;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;#918;</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>♥</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>red HEART SUIT</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;hearts;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;#9829;</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ampersand</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;amp;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;#38;</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&quot;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Double quotation mark</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;quot;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;#34;</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&#39;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Single quotation mark</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;#39;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;#39;</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&copy;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Copy</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;copy;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;#169;</td>
            </tr>
          </tbody>
        </table> 
      </div>
      <br/>
      <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "2" }}>
      {/* Title */}
      <h1><b style={{ color: "red" }}>Examples of HTML Entities</b></h1>

      {/* Example Description */}
      <p>
        <div classname="mb=4"></div>
        <b style={{ color: "red" }}>Example :</b> In this example, we display various currency symbols using entity representations :
      </p>
      <div className="border border-red-400 rounded-2xl w-full min-h-40 bg-[#fafafa] mb-4 ">
        <CopyBlock
          text={htmlEntities.text}
          language={htmlEntities.language}
          theme={htmlEntities.theme}
          wrapLines
        />
      </div>
    </div>
    
    {/* <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      {/* Table of Content Header */}
      <h2><b style={{ color: "red" }}>Table of Content</b></h2>

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
              href="#reserved-characters"
              style={{ textDecoration: "underline", color: "red" }}
            >
              Reserved Characters
            </a>
          </li>
          <li>
            <a
              href="#other-characters"
              style={{ textDecoration: "underline", color: "red" }}
            >
              Other Characters
            </a>
          </li>
          <li>
            <a
              href="#non-breakingspaces"
              style={{ textDecoration: "underline", color: "red" }}
            >
              Non-breaking Space
            </a>
            <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}></ul>
          </li>
          <li>
            <a
              href="#combining-diacritical-marks"
              style={{ textDecoration: "underline", color: "red" }}
            >
              Combining Diacritical Marks
            </a>
            <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}></ul>
          </li>
          <li>
            <a
              href="#best-practices-html-entities"
              style={{ textDecoration: "underline", color: "red" }}
            >
              Best Practices for Using HTML Entities
            </a>
            <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}></ul>
          </li>
        </ul>
      </div>
      <div>
      <br/>

      <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6", maxWidth: "auto" }}>
      {/* Title */}
      <h2><b style={{ color: "red" }}>Reserved Characters</b></h2>

      {/* Description */}
      <p>
        These characters are either reserved for HTML or those which are not present in the basic keyboard & can’t use them directly. Some of the reserved characters representations are given below:
      </p>

      {/* Table */}
      <table 
        style={{ 
          width: "100%", 
          borderCollapse: "collapse", 
          textAlign: "left", 
          border: "1px solid #ddd",
          maxWidth: "800px",
          marginTop: "10px"
        }}
      >
        {/* Table Header */}
        <thead>
          <tr style={{ backgroundColor: "#f5f5f5", borderBottom: "2px solid #ddd" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Reserved Character</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Entity Name</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;amp;</td>
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&lt;</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;lt;</td>
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&gt;</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;gt;</td>
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&quot;</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;quot;</td>
          </tr>
        </tbody>
      </table>
    </div>
    <br/>

    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6", maxWidth: "auto" }}>
      {/* Title */}
      <h2><b style={{ color: "red" }}>Other Characters</b></h2>

      {/* Description */}
      <p>
        Some characters that aren’t available directly on our keyboard, therefore such an entity can be used to represent it by using their entity number. These keywords are directly not available to type, we need to specify their entity number. Here #x before the numbers represents the hexadecimal representation.</p>

      {/* Table */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "left",
          border: "1px solid #ddd",
          maxWidth: "800px",
          marginTop: "10px"
        }}
      >
        {/* Table Header */}
        <thead>
          <tr style={{ backgroundColor: "#f5f5f5", borderBottom: "2px solid #ddd" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Character</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Entities</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&ge;</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;GreaterEqual;</td>
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&copy;</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;copy;</td>
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&euro;</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;euro;</td>
          </tr>
          <tr>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&exist;</td>
            <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&amp;exist;</td>
          </tr>
        </tbody>
      </table>

      {/* Example */}
      <p style={{ fontWeight: "bold", marginTop: "20px", marginBottom: "10px" }}>
        <span style={{ color: "red" }}>Example :</span>{" "}
        <span style={{ fontWeight: "normal" }}>
          Illustration of the use of special characters that are directly not available to type from the keyboard.
        </span>
      </p>
    </div>
    <div className="border border-red-400 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
        <CopyBlock
          text={htmlEntitiesNew.text}
          language={htmlEntitiesNew.language}
          theme={htmlEntitiesNew.theme}
          wrapLines
        />
      </div>
      <div style={{ paddingleft: "0px", fontFamily: "Arial, sans-serif", padding:"5px" }}>
      <h2><b style={{ color: "red" }}>Non - Breaking Space</b></h2>
      <p>
        It is used to provide space that will not break into a new line. This
        HTML entity is represented by <code>&amp;nbsp;</code> that will separate
        the 2 words & will stick together without breaking it into a new line.
        We can also use the non-breaking space for preventing the browsers from
        truncating spaces in HTML pages. The non-breaking hyphen (-) is used to
        define a hyphen character (-) that does not break into a new line.
      </p>
      <div style={{ fontFamily: "Arial, sans-serif", padding: "0px" }}>
      <h3 style={{ fontWeight: "bold", color: "red" }}>Example :</h3>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
        <li>12:00 PM</li>
        <li>256 km/h</li>
      </ul>
    </div>
      <p>
        If we use to write 10 spaces in our text, then the browser will remove
        9 of them. In order to add real spaces in our text, we can use the
        character entity.
      </p>
      <br/>

      <h2><b style={{ color: "red" }}>Combining Diacritical Marks</b></h2>
      <p>
        A diacritical mark is a symbol added to a letter. Marks like the grave
        accent (`) and acute accent (´) are examples of diacritical marks. They
        can be placed above, below, or inside a letter, or even between two
        letters. These marks are combined with letters to create new characters
        not found in the basic character set. Here are some common diacritical
        marks.
      </p>

      <p>Here are some examples :</p>
    </div>
    <div className="flex mt-4">
        <table className="table-auto border-collapse border border-gray-600">
        <thead>
          <tr style={{ backgroundColor: "#f5f5f5", borderBottom: "2px solid #ddd" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Mark</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Character</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Construct (HTML Code)</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Final Result</th>
          </tr>
        </thead>
          <tbody>
          <tr>
          <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>`</td>
          <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>a</td>
          <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>a&amp;#768;</td>
          <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>à</td>

            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>́ </td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>a</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>a&amp;#769;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>á</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>̂ </td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>a</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>a&amp;#770;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>â</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>~</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>a</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>a&amp;#771;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ã</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>`</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>O</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>o&amp;#768;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ò</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>́ </td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>O</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>o&amp;#769;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ó</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>̂ </td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>O</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>o&amp;#770;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ô</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>~</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>O</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>o&amp;#771;</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Õ</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div style={{ fontFamily: "Arial, sans-serif", padding: "0px" }}>
      <h2 style={{ fontWeight: "bold", color: "red" }}>Best Practices for Using HTML Entities</h2>
      <ul style={{ listStyleType: "disc", listStylePosition: "inside", paddingRight: "20px" }}>
        <li>
          <b style={{ color: "red" }}>Use Named Entities When Possible :</b> Named entities (<code>&amp;lt;</code> instead of <code>&amp;#60;</code>) are easier to remember and make your code more readable.
        </li>
        <li>
          <b style={{ color: "red" }}>Verify Entity Codes :</b> Always check your entity codes to ensure they display correctly across all browsers and platforms.
        </li>
        <li>
          <b style={{ color: "red" }}>Use Entities for Readability and Compliance :</b> Besides reserved characters, use entities to improve the readability of your code and to comply with HTML standards, especially when dealing with characters that may not be directly supported by your page’s charset.
        </li>
      </ul>
    </div>
    </div>

  </div>
  );
};

export default HTMLEntities;
