import React from "react";
import { FaAngleRight } from 'react-icons/fa';


const HTMLCharsets = () => {
  return (
    <div className="content-container overflow-y-auto h-screen p-6">
      <div className="pl-0 flex flex-col gap-3">
        <h1 className="text-4xl font-semibold text-red-600">HTML Charsets</h1>
        <p className="text-gray-600">Last Updated: 30 Mar, 2025</p>
      </div>
      <br />
      <div>
        <p className="text-gray-800 text-justify mb-4">
          <b className="text-lg text-red-500">HTML charsets</b> define how characters are represented in a web document. The character encoding ensures that text appears correctly across different devices and platforms.
        </p>
        <p>
          The <code>&lt;meta&gt;</code> tag’s <code>charset</code> attribute is used to specify which character encoding the HTML document uses. By setting the charset, we ensure proper rendering of special characters, symbols, and text.
        </p>
      </div>
      <br/>
      <h1><b className="text-lg font-bold text-red-500">Common Character Encodings</b></h1>
      <br />
      <div>
        <p><b className="text-lg text-red-500">1. ASCII</b></p>
        <br/>
        <p>The American Standard Code for Information Interchange (ANSII) created this character encoding. This character encoding is used in C/C++ programming.</p>
        <p style={{ paddingTop: "10px" }}>It has 128 alphanumeric characters consisting of alphabets(A-Z) and (a-z) and some special symbols like + – * / ( ) @ etc.</p>
      </div>
      <br/>
      <div>
        <p><b className="text-lg text-red-500">2. ANSI (Windows-1252)</b></p>
        <br/>
        <p>American National Standards Institute (ANSI) created character encoding supported 256 characters. It is used as the default character set in Microsoft Windows. </p>
      </div>
      <br/>
      <div>
        <p><b className="text-lg text-red-500">3. ISO-8859-1</b></p>
        <br/>
        <p>It is used as the default character set of HTML4 and also supports 256 characters. The International Standards Organization (ISO) defines the standard character sets for different alphabets/languages. It contains numbers, upper and lowercase English letters, and some special characters.</p>
      </div>
      <br />
      <div>
        <p><b className="text-lg text-red-500">4. UTF-8</b></p>
        <br/>
        <p>UTF-8 and UTF-16 standards was developed by Unicode Consortium, because the ISO-8859 character-sets are limited, and not compatible a multilingual environment. It consists all the character and punctuation symbols.</p>
        <p style={{ paddingTop: "5px" }}><b className="text-lg text-red-500">Attribute</b></p>
        <p>Web browser must know the character encoding standard used in the html page and this we do as given below.</p>
      </div>
      <br/>
        <p><b className="text-lg text-red-500">Example:</b></p>
        <div>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li><b className="text-lg text-red-500">HTML 4</b></li>
            <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4">
              <code>&lt;meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1"&gt;</code>
            </div>
            <li><b className="text-lg text-red-500">HTML 5</b></li>
            <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4">
              <code>&lt;meta charset="UTF-8"&gt;</code>
            </div>
          </ul>
          <p><b className="text-lg text-red-500">Note :</b></p>
          <div>
            <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <li>The first values from 0 to 127 are consideblack as the <b className="text-lg text-500">“Standard”</b> ASCII character set.</li>
              <li>Characters with values from 128 to 255 are the <b className="text-lg text-500">“Extended”</b> Character set.</li>
            </ul>
          </div>
          <br/>
            <p><b className="text-lg text-red-500">Why Character Encoding is Important?</b></p>
          <div>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
              <li><b className="text-lg text-red-500">Consistency :</b> Encoding defines how text, numbers, and symbols are interpreted, ensuring that content appears correctly regardless of the user’s device or browser.</li>
              <li><b className="text-lg text-red-500">Global Compatibility :</b> Without proper encoding, characters in different languages or special symbols may display as unreadable or incorrect.</li>
              <li><b className="text-lg text-red-500">Web Development :</b> By specifying the charset, you avoid issues with rendering characters and improve your site’s accessibility across diverse languages.</li>
            </ul>
          </div>
          <br/>
          <div>
            <p><b className="text-lg text-red-500">Character set for different Character Encoding Standard</b></p>
            <p>Following list shows different character encoding standards with their characters and their assigned number codes.</p>
          </div>
          <br/>
          <div>
            <p><b className="text-lg text-red-500">Table 1 (ASCII Device Control Characters)</b></p>
            <br/>
            <p>This table contains Characters which are designed to control hardware devices. These are also known as control characters.</p>
          </div>
          <br/>
          <div>
            <div className="flex mt-4">
              <table className="table-auto border-collapse border border-gray-600">
              <thead>
                <tr style={{ backgroundColor: "#f5f5f5", borderBottom: "2px solid #ddd" }}>
                  <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Numbers</th>
                  <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Characters</th>
                  <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Descriptions</th>
                </tr>
              </thead>
                <tbody>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>00</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>NUL</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Null Character</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>01</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>SOH</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Start Of Header</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>02</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>STX</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Start Of Text</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>03</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ETX</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>End Of Text</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>04</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>EOT</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>end of transmission</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>05</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ENQ</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Enquiry</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>06</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ACK</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Acknowledge</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>07</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>BEL</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Bell(Ring)</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>08</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>BS</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Backspace</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>09</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>HT</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Horizontal Tab</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>10</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>LF</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Line Feed</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>11</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>VT</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Vertical Tab</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>12</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>FF</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Form Feed</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>13</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>CR</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Carriage Return</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>14</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>SO</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Shift Out</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>15</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>SI</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Shift In</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>16</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>DLE</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Data Link Escape</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>17</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>DC1</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Device Control 1</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>18</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>DC2</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Device Control 2</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>19</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>DC3</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Device Control 3</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>20</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>DC4</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Device Control 4</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>21</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>NAK</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Negative Acknowledge</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>22</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>SYN</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Synchronize</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>23</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ETB</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>End Transmission Block</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>24</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>CAN</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Cancel</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>25</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>EM</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>End Of Medium</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>26</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>SUB</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Substitute</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>27</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ESC</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Escape</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>28</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>FS</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>File Separator</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>29</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>GS</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Group Separator</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>30</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>RS</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Record Separator</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>31</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>US</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Unit Separator</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>127</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>DEL</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Delete</td>
                  </tr>
                  </tbody>
                </table>
            </div>
          </div>
          <br/>
          <div>
            <p><b className="text-lg text-red-500">Table 2 :</b> This table contains characters having the same numbers assigned in different character encoding.</p>
            <div className="flex mt-4">
              <table className="table-auto border-collapse border border-gray-600">
              <thead>
                <tr style={{ backgroundColor: "#f5f5f5", borderBottom: "2px solid #ddd" }}>
                  <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Numbers</th>
                  <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Characters</th>
                  <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Descriptions</th>
                </tr>
              </thead>
                <tbody>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>32</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}></td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>space</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>33</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>!</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Exclamation Mark</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>34</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>“</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Quotation Mark</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>35</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>#</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Hash Sign</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>36</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>$</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Dollar Sign</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>37</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Percent Sign</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>38</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>&</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Ampersand</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>39</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>'</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Apostrophe Sign</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>40</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>(</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Opening Parenthesis</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>41</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>)</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Closing Parenthesis</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>42</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>*</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Asterisk Sign</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>43</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>+</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Plus Sign</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>44</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>,</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Comma</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>45</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>-</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Hyphen/Minus Sign</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>46</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>.</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Full Stop</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>47</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>/</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Slash/Divide Sign</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>48</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>0</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Number 0</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>49</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>1</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Number 1</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>50</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>2</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Number 2</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>51</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>3</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Number 3</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>52</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>4</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Number 4</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>53</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>5</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Number 5</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>54</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>6</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Number 6</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>55</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>7</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Number 7</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>56</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>8</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Number 8</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>57</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>9</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Number 9</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>58</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>:</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Colon</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>59</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>;</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Semicolon</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>60</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>&lt;</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Lessthan Sign</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>61</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>=</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Equalto Sign</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>62</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>&gt;</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Greaterthan Sign</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>63</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>?</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Question Mark</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>64</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>@</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>At Sign</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>65</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>A</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter A</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>66</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>B</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter B</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>67</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>C</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter C</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>68</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>D</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter D</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>69</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>E</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter E</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>70</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>F</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter F</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>71</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>G</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter G</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>72</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>H</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter H</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>73</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>I</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter I</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>74</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>J</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter J</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>75</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>K</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter K</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>76</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>L</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter L</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>77</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>M</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter M</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>78</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>N</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter N</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>79</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>O</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter O</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>80</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>P</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter P</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>81</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Q</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter Q</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>82</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>R</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter R</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>83</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>S</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter S</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>84</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>T</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter T</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>85</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>U</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter U</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>86</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>V</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter V</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>87</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>W</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter W</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>88</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>X</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter X</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>89</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Y</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter Y</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>90</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Z</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter Z</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>91</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>[</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Opening Square Bracket</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>92</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>\</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Backslash</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>93</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>]</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Closing Square Bracket</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>94</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>^</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Circumflex Accent</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>95</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>_</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Low Line</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>96</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>`</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Grave Accent</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>97</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>a</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter a</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>98</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>b</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter b</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>99</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>c</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter c</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>100</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>d</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter d</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>101</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>e</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter e</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>102</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>f</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter f</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>103</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>g</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter g</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>104</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>h</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter h</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>105</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>i</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter i</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>106</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>j</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter j</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>107</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>k</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter k</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>108</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>l</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter l</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>109</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>m</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter m</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>110</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>n</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter n</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>111</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>o</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter o</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>112</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>p</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter p</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>113</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>q</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter q</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>114</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>r</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter r</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>115</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>s</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter s</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>116</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>t</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter t</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>117</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>u</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter u</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>118</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>v</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter v</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>119</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>w</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter w</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>120</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>x</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter x</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>121</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>y</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter y</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>122</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>z</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Letter z</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>123</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>{"{"}</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Opening Curly Bracket</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>124</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>|</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Vertical Line</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>125</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>{"}"}</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Closing Curly Bracket</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>126</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>~</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Tilde</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>127</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>DEL</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Delete</td>
                  </tr>
                  </tbody>
                </table>
            </div>
          </div>
        </div>
        <br/>
        <div>
            <p><b className="text-lg text-red-500">Table 3 :</b> This table contains character having different character encoding.</p>
            <div className="flex mt-4">
              <table className="table-auto border-collapse border border-gray-600">
              <thead>
                <tr style={{ backgroundColor: "#f5f5f5", borderBottom: "2px solid #ddd" }}>
                  <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Numbers</th>
                  <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Characters</th>
                </tr>
              </thead>
                <tbody>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>128</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>€</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>129</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Not Used</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>130</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>‚</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>131</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ƒ</td>                  
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>132</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>„</td>                  
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>133</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>…</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>134</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>†</td>                  
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>135</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>‡</td>                  
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>136</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ˆ</td>                  
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>137</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>‰</td>                  
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>138</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Š</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>139</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>‹</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>140</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Œ</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>141</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Not Used</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>142</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Ž</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>143</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Not Used</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>144</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Not Used</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>145</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>‘</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>146</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>’</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>147</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>“</td>                  
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>148</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>”</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>149</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>•</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>150</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>–</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>151</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>—</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>152</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>˜</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>153</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>™</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>154</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>š</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>155</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>›</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>156</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>œ</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>157</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Not Used</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>158</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ž</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>159</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Ÿ</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>160</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>no-break Space</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>161</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>¡</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>162</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>¢</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>163</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>£</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>164</td> 
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>¤</td> 
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>165</td> 
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>¥</td> 
                  </tr>
                  <tr>
                       <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>166</td> 
                       <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>¦</td> 
                  </tr>
                  <tr>
                       <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>167</td> 
                       <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>§</td> 
                  </tr>
                  <tr>
                       <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>168</td> 
                       <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>¨</td> 
                  </tr>
                  <tr>
                       <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>169</td> 
                       <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>©</td> 
                  </tr>
                  <tr>
                       <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>170</td> 
                       <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ª</td> 
                  </tr>
                  <tr>
                       <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>171</td> 
                       <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>«</td> 
                  </tr>
                  <tr>
                       <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>172</td> 
                       <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>¬</td> 
                  </tr>
                  <tr>
                       <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>173</td> 
                       <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>­�­</td> 
                  </tr>
                  <tr>
                       <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>174</td> 
                       <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>®</td> 
                  </tr>
                  <tr>
                       <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>175</td> 
                       <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>¯</td> 
                  </tr>
                  <tr>
                       <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>176</td> 
                       <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>°</td> 
                  </tr>
                  <tr>
                       <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>177</td> 
                       <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>±</td> 
                  </tr>
                  <tr>
                       <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>178</td> 
                       <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>²</td> 
                  </tr>
                  <tr>
                       <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>179</td> 
                       <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>³</td> 
                 </tr>
                  <tr>
                       <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>180</td> 
                       <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>´</td> 
                  </tr>
                  <tr>
                       <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>181</td> 
                       <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>µ</td> 
                  </tr>
                  <tr>
                       <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>182</td> 
                       <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>¶</td> 
                  </tr>
                  <tr>
                       <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>183</td> 
                       <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>·</td> 
                  </tr>
                  <tr>
                       <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>184</td> 
                       <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>¸</td> 
                  </tr>
                  <tr>
                       <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>185</td> 
                       <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>¹</td> 
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>186</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>º</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>187</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>»</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>188</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>¼</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>189</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>½</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>190</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>¾</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>191</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>¿</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>192</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>À</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>193</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Á</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>194</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Â</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>195</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Ã</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>196</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Ä</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>197</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Å</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>198</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Æ</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>199</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Ç</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>200</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>È</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>201</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>É</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>202</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Ê</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>203</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Ë</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>204</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Ì</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>205</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Í</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>206</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Î</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>207</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Ï</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>208</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Ð</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>209</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Ñ</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>210</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Ò</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>211</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Ó</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>212</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Ô</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>213</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Õ</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>214</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Ö</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>215</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>×</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>216</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Ø</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>217</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Ù</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>218</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Ú</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>219</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Û</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>220</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Ü</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>221</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Ý</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>222</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Þ</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>223</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ß</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>224</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>à</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>225</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>á</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>226</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>â</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>227</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ã</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>228</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ä</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>229</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>å</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>230</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>æ</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>231</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ç</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>232</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>è</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>233</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>é</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>234</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ê</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>235</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ë</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>236</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ì</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>237</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>í</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>238</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>î</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>239</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ï</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>240</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ð</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>241</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ñ</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>242</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ò</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>243</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ó</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>244</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ô</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>245</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>õ</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>246</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ö</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>247</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>÷</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>248</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ø</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>249</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ù</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>250</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ú</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>251</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>û</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>252</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ü</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>253</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ý</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>254</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>þ</td>
                  </tr>
                  <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>255</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ÿ</td>
                  </tr>





                  </tbody>
                </table>
            </div>
          </div>
        <div>
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

export default HTMLCharsets;
