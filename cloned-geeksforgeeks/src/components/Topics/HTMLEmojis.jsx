import React from "react";
import { CopyBlock } from "react-code-blocks";
import { htmlEmojis, htmlEmojisExample1, htmlEmojisExample2, htmlEmojisExample3 } from "../../utils/CodeBlocks";



const HTMLEmojis = () => {
  return (
    <div className="content-container overflow-y-auto h-screen p-6">
      <div className="pl-0 flex flex-col gap-3">
        <h1 className="text-4xl font-semibold text-red-600">HTML Emojis</h1>
        <p className="text-gray-600">Last Updated : 30 Mar, 2025</p>
      </div>
      <br />
      <p className="text-gray-800 text-justify mb-4">
      As we know, Unicode is a system that assigns a unique number (code point) to every character, symbol, or emoji, making it possible for different devices and platforms to display the same character consistently.
      </p>
        <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4">
          <p><b className="text-lg text-red-500">Emojis</b> are just special Unicode characters displayed as images.</p>
        </div>
      <p>In HTML, emojis are typically included using their Unicode escape sequences or directly as characters. Emojis are usually rendered as images by browsers, but in the backend, they are just text characters with unique Unicode code points.</p>
      <p style={{ fontWeight: "bold", color: "red", paddingBottom: "10px", paddingTop: "10px" }}>Adding Emojis in HTML Code</p>
      <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
        <CopyBlock
          text={htmlEmojis.text}
          language={htmlEmojis.language}
          theme={htmlEmojis.theme}
          wrapLines
        />
      </div>
      <p><b className="text-lg font-bold text-red-500">HTML Emojis Examples</b></p>
      <br/>
      <p className="text-lg font-bold text-red-500 pb-2">1. HTML Emojis using Unicode Decimal reference</p>
      <p>HTML Emojis are represented using Unicode decimal references like <span>&amp;#x1F604;</span> to display emojis, enabling the rendering of various symbols and icons in web content.</p>
      <p><b className="text-lg text-red-500 ">Example 1 : </b>Represent the following emoji in a webpage.</p>
      <p style={{ fontWeight: "bold", color: "red", paddingBottom: "10px" }}>Adding Emojis in HTML Code</p>
      <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
        <CopyBlock
          text={htmlEmojisExample1.text}
          language={htmlEmojisExample1.language}
          theme={htmlEmojisExample1.theme}
          wrapLines
        />
      </div>
      <div>
      <p><b className="text-lg text-red-500">Output :</b></p>
      <img src="../HTMLEmojisEx1.png" width={"40%"} className="mx-auto item-center" />
      </div>
      <div>
        <p><b className="text-lg font-bold text-red-500">Explanation :</b></p>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
          <li>
            In the above example, we define the document type with{" "}
            <code>&lt;!DOCTYPE html&gt;</code>. Set charset with{" "}
            <code>&lt;meta charset="UTF-8"&gt;</code>.
          </li>
          <li>
            Ensure proper display across devices with{" "}
            <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code>.
          </li>
          <li>😄 : Smiling face with open mouth and smiling eyes.</li>
          <li>✌️: Victory hand emoji.</li>
          <li>⌚: Watch emoji.</li>
          <li>Emojis represented using Unicode values in HTML.</li>
        </ul>
     </div>
     <div className="flex mt-4">
        <table className="table-auto border-collapse border border-gray-600">
        <thead>
          <tr style={{ backgroundColor: "#f5f5f5", borderBottom: "2px solid #ddd" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Emoji</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Decimal</th>
            <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>HexaDecimal</th>
          </tr>
        </thead>
          <tbody>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>😄</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>128516</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>1F604</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>✌</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>9996</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>270C</td>
            </tr>
            <tr>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>⌚</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>128350</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>1F55E</td>
            </tr>
          </tbody>
          </table>
      </div>
      <br/>
      <div>
      <p className="text-lg font-bold text-red-500 pb-2">2. HTML Emojis using Unicode hexadecimal reference</p>
      <p >
        "HTML Emojis are displayed using Unicode hexadecimal references like <span>&amp;#x1F604;</span>, allowing the inclusion of diverse symbols and icons in web content."
      </p>
      <p><b className="text-lg text-red-500">Syntax :</b></p>
      <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4 ">
        <pre><code>&lt;p&gt;&amp;#xhexaDecimal;&lt;/p&gt;</code></pre>
      </div>
      <p><b className="text-lg text-red-500">Example 2 : </b>In this example, we will represent &#128516, &#9996and &#128350 emoji in a webpage with hexadecimal(hex) reference.</p>
      <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4 ">
        <CopyBlock
          text={htmlEmojisExample2.text}
          language={htmlEmojisExample2.language}
          theme={htmlEmojisExample2.theme}
          wrapLines
        />
      </div>
      <div>
      <p><b className="text-lg text-red-500">Output :</b></p>
      <img src="../HTMLEmojisEx2.png" width={"60%"} className="mx-auto item-center" />
      </div>
      <div>
        <p><b className="text-lg text-red-500">Explanation :</b></p>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
          <li>
            In the above example, we define the document type with{" "}
            <code>&lt;!DOCTYPE html&gt;</code> and{" "}
            <code>&lt;html lang="en"&gt;</code>.
          </li>
          <li>
          Unicode hexadecimal references used for emojis, like &amp;#x1F604;, &amp;#x270C;, and &amp;#x231A;.
          </li>
          <li>Emojis represented by Unicode code points, enclosed in &#x and ;.</li>
          <li>Each emoji has a unique hexadecimal Unicode value.</li>
          <li>Emojis render according to their Unicode representations in modern web browsers.</li>
        </ul>
        </div>
      </div>
        <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4">
        {/* style={{
        backgroundColor: "#f5f5f5", 
        border: "1px solid #ccc", 
        borderRadius: "5px", 
        padding: "10px",
  

        whiteSpace: "pre-wrap", // Preserve spacing and line breaks
      }} */}
       <p><b className="text-lg text-red-500">Note :</b> Since Emojis are characters, they can be copied, displayed and sized just like any other character in HTML.</p>
    </div>
    <p><b className="text-lg font-bold text-red-500">Change Size of Emoji Using CSS</b></p>

    <div>
    <p><b className="text-lg text-red-500">Example 3 : </b>In this example, we will change the font size of the following emojis.</p>
      <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4 ">
        <CopyBlock
          text={htmlEmojisExample3.text}
          language={htmlEmojisExample3.language}
          theme={htmlEmojisExample3.theme}
          wrapLines
        />
      </div>
      <div className="flex justify-center flex-col mt-4">
        <p><b className="text-lg text-red-500">Output :</b> The output contains the different sizes of emojis.</p>
        <img src="../HTMLEmojisEx3.png" width="30%" className="mx-auto item-center" />
      </div>
      <div>
        <p><b className="text-lg text-red-500">Explanation :</b></p>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
          <li>In the above example we defines various emojis using Unicode hexadecimal references.</li>
          <li>Emojis are categorised into transport symbols, office emojis, people emojis, and animal emojis.</li>
          <li>Each category includes two emojis, with every second emoji being larger in size.</li>
          <li>CSS is used to increase the font size of the larger emojis.</li>
          <li>The emojis are displayed alongside descriptive text to indicate their meaning or representation.</li>
        </ul>
      </div>
        <p><b className="text-lg text-red-500">HTML Emojis Examples</b></p>
      <div>
        <div className="flex mt-4">
          <table className="table-auto border-collapse border border-gray-600">
          <thead>
            <tr style={{ backgroundColor: "#f5f5f5", borderBottom: "2px solid #ddd" }}>
              <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Emoji</th>
              <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Decimal</th>
            </tr>
          </thead>
            <tbody>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>HTML Emoji Food Symbols</td>
                <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>🍕 🍔 🌮 🍩 🍎</td>
              </tr>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>HTML Emoji Transport Symbols</td>
                <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>🚗 ✈️ 🚂 🚲 🚢</td>
              </tr>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>HTML Emoji Plant Symbols</td>
                <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>🌵 🌻 🌲 🌼 🌱</td>
              </tr>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>HTML Emoji Office Symbols</td>
                <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>🖥️ 📠 🖋️ 📅 📋</td>
              </tr>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>HTML Emoji People Symbols</td>
                <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>👨‍💻 👩‍⚕️ 🧑‍🎓 👨‍🏫 👩‍🚀</td>
              </tr>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>HTML Emoji Animals Symbols</td>
                <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>🐱 🐶 🦁 🐘 🐸</td>
              </tr>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>HTML Emoji Places Symbols</td>
                <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>🏙️ 🏖️ 🏞️ 🏰 🗽</td>
              </tr>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>HTML Emoji Face Symbols</td>
                <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>🐱 🐶 🦁 🐘 🐸</td>
              </tr>
              </tbody>
            </table>
        </div>
        </div>
    </div>
    </div>
  );
};

export default HTMLEmojis;
