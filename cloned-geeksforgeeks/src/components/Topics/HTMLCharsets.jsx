import React from "react";

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
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>00</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>NUL</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Null Character</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>01</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>SOH</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Start Of Header</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>02</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>STX</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Start Of Text</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>03</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ETX</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>End Of Text</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>04</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>EOT</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>end of transmission</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>05</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ENQ</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Enquiry</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>06</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ACK</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Acknowledge</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>07</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>BEL</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Bell(Ring)</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>08</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>BS</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Backspace</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>09</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>HT</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Horizontal Tab</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>10</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>LF</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Line Feed</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>11</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>VT</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Vertical Tab</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>12</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>FF</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Form Feed</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>13</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>CR</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Carriage Return</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>14</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>SO</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Shift Out</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>15</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>SI</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Shift In</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>16</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>DLE</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Data Link Escape</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>17</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>DC1</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Device Control 1</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>18</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>DC2</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Device Control 2</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>19</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>DC3</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Device Control 3</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>20</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>DC4</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Device Control 4</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>21</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>NAK</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Negative Acknowledge</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>22</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>SYN</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Synchronize</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>23</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ETB</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>End Transmission Block</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>24</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>CAN</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Cancel</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>25</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>EM</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>End Of Medium</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>26</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>SUB</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Substitute</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>27</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ESC</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Escape</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>28</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>FS</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>File Separator</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>29</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>GS</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Group Separator</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>30</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>RS</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Record Separator</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>31</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>US</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Unit Separator</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>127</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>DEL</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Delete</td>
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
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>32</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}></td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>space</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>33</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>!</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Exclamation Mark</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>34</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>“</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Quotation Mark</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>35</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>#</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Hash Sign</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>36</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>$</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Dollar Sign</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>37</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Percent Sign</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>38</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ampersand</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>39</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>'</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Apostrophe Sign</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>40</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>(</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Opening Parenthesis</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>41</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>)</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Closing Parenthesis</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>42</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>*</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Asterisk Sign</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>43</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>+</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Plus Sign</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>44</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>,</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Comma</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>45</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>-</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Hyphen/Minus Sign</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>46</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>.</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Full Stop</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>47</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>/</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Slash/Divide Sign</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>48</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>0</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Number 0</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>49</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>1</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Number 1</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>50</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>2</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Number 2</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>51</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>3</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Number 3</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>52</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>4</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Number 4</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>53</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>5</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Number 5</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>54</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>6</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Number 6</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>55</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>7</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Number 7</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>56</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>8</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Number 8</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>57</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>9</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Number 9</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>58</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>:</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Colon</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>59</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>;</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Semicolon</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>60</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&lt;</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Lessthan Sign</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>61</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>=</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Equalto Sign</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>62</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&gt;</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Greaterthan Sign</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>63</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>?</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Question Mark</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>64</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>@</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>At Sign</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>65</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>A</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter A</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>66</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>B</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter B</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>67</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>C</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter C</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>68</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>D</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter D</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>69</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>E</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter E</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>70</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>F</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter F</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>71</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>G</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter G</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>72</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>H</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter H</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>73</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>I</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter I</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>74</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>J</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter J</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>75</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>K</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter K</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>76</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>L</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter L</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>77</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>M</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter M</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>78</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>N</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter N</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>79</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>O</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter O</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>80</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>P</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter P</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>81</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Q</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter Q</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>82</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>R</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter R</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>83</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>S</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter S</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>84</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>T</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter T</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>85</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>U</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter U</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>86</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>V</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter V</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>87</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>W</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter W</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>88</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>X</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter X</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>89</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Y</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter Y</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>90</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Z</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter Z</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>91</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>[</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Opening Square Bracket</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>92</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>\</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Backslash</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>93</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>]</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Closing Square Bracket</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>94</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>^</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Circumflex Accent</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>95</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>_</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Low Line</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>96</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>`</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Grave Accent</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>97</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>a</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter a</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>98</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>b</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter b</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>99</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>c</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter c</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>100</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>d</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter d</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>101</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>e</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter e</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>102</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>f</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter f</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>103</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>g</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter g</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>104</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>h</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter h</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>105</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>i</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter i</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>106</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>j</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter j</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>107</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>k</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter k</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>108</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>l</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter l</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>109</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>m</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter m</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>110</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>n</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter n</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>111</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>o</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter o</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>112</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>p</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter p</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>113</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>q</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter q</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>114</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>r</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter r</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>115</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>s</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter s</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>116</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>t</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter t</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>117</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>u</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter u</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>118</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>v</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter v</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>119</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>w</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter w</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>120</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>x</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter x</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>121</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>y</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter y</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>122</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>z</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Letter z</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>123</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>{"{"}</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Opening Curly Bracket</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>124</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>|</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Vertical Line</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>125</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>{"}"}</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Closing Curly Bracket</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>126</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>~</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Tilde</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>127</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>DEL</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Delete</td>
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
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>128</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>€</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>129</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Not Used</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>130</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>‚</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>131</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ƒ</td>                  
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>132</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>„</td>                  
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>133</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>…</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>134</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>†</td>                  
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>135</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>‡</td>                  
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>136</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ˆ</td>                  
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>137</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>‰</td>                  
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>138</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Š</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>139</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>‹</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>140</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Œ</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>141</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Not Used</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>142</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ž</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>143</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Not Used</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>144</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Not Used</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>145</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>‘</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>146</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>’</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>147</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>“</td>                  
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>148</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>”</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>149</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>•</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>150</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>–</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>151</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>—</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>152</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>˜</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>153</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>™</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>154</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>š</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>155</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>›</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>156</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>œ</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>157</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Not Used</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>158</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ž</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>159</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ÿ</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>160</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>no-break Space</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>161</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>¡</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>162</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>¢</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>163</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>£</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>164</td> 
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>¤</td> 
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>165</td> 
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>¥</td> 
                  </tr>
                  <tr>
                      <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>166</td> 
                      <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>¦</td> 
                  </tr>
                  <tr>
                      <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>167</td> 
                      <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>§</td> 
                  </tr>
                  <tr>
                      <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>168</td> 
                      <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>¨</td> 
                  </tr>
                  <tr>
                      <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>169</td> 
                      <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>©</td> 
                  </tr>
                  <tr>
                      <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>170</td> 
                      <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ª</td> 
                  </tr>
                  <tr>
                      <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>171</td> 
                      <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>«</td> 
                  </tr>
                  <tr>
                      <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>172</td> 
                      <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>¬</td> 
                  </tr>
                  <tr>
                      <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>173</td> 
                      <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>­�­</td> 
                  </tr>
                  <tr>
                      <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>174</td> 
                      <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>®</td> 
                  </tr>
                  <tr>
                      <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>175</td> 
                      <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>¯</td> 
                  </tr>
                  <tr>
                      <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>176</td> 
                      <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>°</td> 
                  </tr>
                  <tr>
                      <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>177</td> 
                      <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>±</td> 
                  </tr>
                  <tr>
                      <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>178</td> 
                      <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>²</td> 
                  </tr>
                  <tr>
                      <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>179</td> 
                      <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>³</td> 
                 </tr>
                  <tr>
                      <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>180</td> 
                      <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>´</td> 
                  </tr>
                  <tr>
                      <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>181</td> 
                      <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>µ</td> 
                  </tr>
                  <tr>
                      <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>182</td> 
                      <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>¶</td> 
                  </tr>
                  <tr>
                      <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>183</td> 
                      <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>·</td> 
                  </tr>
                  <tr>
                      <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>184</td> 
                      <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>¸</td> 
                  </tr>
                  <tr>
                      <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>185</td> 
                      <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>¹</td> 
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>186</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>º</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>187</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>»</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>188</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>¼</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>189</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>½</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>190</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>¾</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>191</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>¿</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>192</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>À</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>193</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Á</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>194</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Â</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>195</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ã</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>196</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ä</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>197</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Å</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>198</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Æ</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>199</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ç</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>200</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>È</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>201</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>É</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>202</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ê</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>203</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ë</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>204</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ì</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>205</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Í</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>206</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Î</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>207</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ï</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>208</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ð</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>209</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ñ</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>210</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ò</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>211</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ó</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>212</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ô</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>213</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Õ</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>214</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ö</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>215</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>×</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>216</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ø</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>217</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ù</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>218</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ú</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>219</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Û</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>220</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ü</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>221</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ý</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>222</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Þ</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>223</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ß</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>224</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>à</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>225</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>á</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>226</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>â</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>227</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ã</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>228</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ä</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>229</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>å</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>230</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>æ</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>231</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ç</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>232</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>è</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>233</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>é</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>234</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ê</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>235</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ë</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>236</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ì</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>237</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>í</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>238</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>î</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>239</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ï</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>240</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ð</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>241</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ñ</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>242</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ò</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>243</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ó</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>244</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ô</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>245</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>õ</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>246</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ö</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>247</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>÷</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>248</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ø</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>249</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ù</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>250</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ú</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>251</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>û</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>252</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ü</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>253</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ý</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>254</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>þ</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>255</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ÿ</td>
                  </tr>





                  </tbody>
                </table>
            </div>
          </div>
        <div>
      </div>
    </div>
  );
};

export default HTMLCharsets;
