import React from "react";
import { FaAngleRight } from 'react-icons/fa';


const HTMLUrlEncoding = () => {
  return  (
    <div className="content-container overflow-y-auto h-screen p-6">
      <div className="pl-0 flex flex-col gap-3">
        <h1 className="text-4xl font-semibold text-red-600">HTML URL Encoding
        </h1>
        <p className="text-gray-600">Last Updated: 31 Mar, 2025</p>
      </div>
      <br/>
      <div>
        <p>
          <b className="text-lg text-500">A Uniform Resource Locator (URL)</b> is simply the <b className="text-lg text-500">address of a website</b> to access the website content. Web browsers retrieve pages from web servers using a URL (Uniform Resource Locator).
        </p>
      </div>
      <br/>
      <div>
        <p className="text-lg font-bold text-red-500">What is URL Encoding?</p>
        <p style={{ paddingBottom: "5px" }}>
          URL Encoding is the process of converting the URL into a valid format that is accepted by web browsers.
        </p>
        <p style={{ paddingBottom: "5px" }}>
          Only certain characters are allowed to be used in the URL like alphabets A-Z and a-z, numbers 0-9, and a few special characters. They can be used as it is but the rest of the characters that are not in this list are used after encoding them to a suitable form.
        </p>
        <p style={{ paddingBottom: "5px" }}>
          URL Encoding takes place by replacing all the characters that are not allowed by a % sign followed by two hexadecimal digits. These two hexadecimal values represent the numerical values of the character in the ASCII character set.
        </p>
        <p >
          <b className="text-lg text-500">For example,</b> a space is not acceptable in a URL and is replaced by a ‘%20’ or a ‘+’ sign while encoding. Similarly, a $ sign is replaced by ‘%24’.
        </p>
      </div>
      <br/>
      <div>
        <p className="text-lg font-bold text-red-500">URL Syntax</p>
        <p>
          A web address follows these syntax rules :
        </p>
      </div>
      <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4">
        <p>scheme://prefix.domain:port/path/filename</p>
        <p>//Example : https://www.varcode.in/ </p>
      </div>
      <div>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li><b className="text-lg text-red-500">Scheme :</b> It specifies the protocol used for communication, such as “https://” for secure communication or “http://” for unsecublack communication.</li>
            <li><b className="text-lg text-red-500">Prefix :</b> It is an optional subdomain or www indicating the location of the resource within the domain.</li>
            <li><b className="text-lg text-red-500">Domain :</b> Identifies the website’s primary address, like “example.com”, indicating its unique location on the Internet.</li>
            <li><b className="text-lg text-red-500">Port :</b> Optional and signifies a specific endpoint for communication. Common values are 80 for HTTP and 443 for HTTPS.</li>
            <li><b className="text-lg text-red-500">Path :</b> It specifies the location or directory on the server where the resource is located.</li>
            <li><b className="text-lg text-red-500">Filename :</b> It refers to the specific file or resource within the specified path.</li>
          </ul>
      </div>
      <br/>
      <div>
        <p className="text-lg font-bold text-red-500 padding-bottom-5">Reserved Characters</p>
        <p>Certain characters sometimes have special meanings in the URL and it can be used in both ways. For example, the ‘/’ character is a reserved character and it has a special meaning when being used as a delimiter to separate the paths of a URL. Here it is used by encoding it to ‘%2F’. Else when it has no special purpose it can be used normally. There are many reserved characters which are listed below :</p>
      </div>
      <br/>
      <div>
      <div className="flex mt-4">
              <table className="table-auto border-collapse border border-gray-600">
              <thead>
                <tr style={{ backgroundColor: "#f5f5f5", borderBottom: "2px solid #ddd" }}>
                  <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Character</th>
                  <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Encoded Form</th>
                </tr>
              </thead>
                <tbody>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>!</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%21</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>*</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%2A</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>‘</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%27</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>(</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%28</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>)</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%29</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>;</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%3B</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>:</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%3A</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>@</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%40</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>&</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%26</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>=</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%3D</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>+</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%2B</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>$</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%24</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>,</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%2C</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>/</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%2F</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>?</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%3F</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>#</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%23</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>[</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%5B</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>]</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%5D</td>
                </tr>

                </tbody>
              </table>
            </div>
      </div>
      <br/>
      <div>
        <p>Some characters need to be encoded while some don’t need to be. Here is the classification shows the group of characters that need to be encoded.</p>
      </div>
      <div>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
          <li>
            <b className="text-lg text-red-500">Safe Characters :</b> Alphanumeric i.e. 0-9, a-z, and A-Z, special characters $, -, _, ., +, !, *, ‘, (, ), are reserved characters used for their reserved purposes. These characters have no need to be encoded.
          </li>
          <li>
            <b className="text-lg text-red-500">ASCII Control characters :</b> It includes characters ranging from 00-1F in hex (0-31 decimal) and 7F (127 decimal). These characters need to be encoded.
          </li>
          <li>
            <b className="text-lg text-red-500">Non-ASCII Control characters :</b> It includes 80-FF in hex (128-255 decimal). These characters need to be encoded.
          </li>
          <li>
            <b className="text-lg text-red-500">Reserved characters :</b> These characters are used for a special purpose and they require encoding.
          </li>
          <li>
            <b className="text-lg text-red-500">Unsafe characters :</b> This character can be misunderstood within URLs for various reasons. So it requires encoding. The characters <b className="text-lg text-red-500">&lt;</b> and <b className="text-lg text-red-500">&gt;</b> are unsafe because they are used as the delimiters around URLs in free text, the quote mark (” “) is unsafe as it is used to delimit URLs in some systems.
          </li>
        </ul>
      </div>
      <br/>
      <p className="text-lg font-bold text-red-500">Unsafe characters</p>
      <div>
      <div className="flex mt-4">
              <table className="table-auto border-collapse border border-gray-600">
              <thead>
                <tr style={{ backgroundColor: "#f5f5f5", borderBottom: "2px solid #ddd" }}>
                  <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Character</th>
                  <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Encoded Form</th>
                </tr>
              </thead>
                <tbody>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>space</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%20</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>“</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%22</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>&lt;</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%3C</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>&gt;</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%3E</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>#</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%23</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%25</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>{`{`}</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%7B</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>{`}`}</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%7D</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>|</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%7C</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>\</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%5C</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>^</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%5E</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>~</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%7E</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>[</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%5B</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>]</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%5D</td>
                </tr>
                </tbody>
              </table>
            </div>
      </div>
      <br/>
      <div>
        <p className="text-lg font-bold text-red-500">URL Encoded Characters</p>
      </div>
      <div>
      <div className="flex mt-4">
              <table className="table-auto border-collapse border border-gray-600">
              <thead>
                <tr style={{ backgroundColor: "#f5f5f5", borderBottom: "2px solid #ddd" }}>
                  <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Character</th>
                  <th style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", color: "red" }}>Encoded Form</th>
                </tr>
              </thead>
                <tbody>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>backspace</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%08</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>tab</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%09</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>linefeed</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%0A</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>c return</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%0D</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>space</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%20</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>!</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%21</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>“</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%22</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>#</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%23</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>$</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%24</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%25</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>&</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%26</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>‘</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%27</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>(</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%28</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>)</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%29</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>*</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%2A</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>+</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%2B</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>,</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%2C</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>–</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%2D</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>.</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%2E</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>/</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%2F</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>0</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%30</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>1</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%31</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>2</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%32</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>3</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%33</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>4</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%34</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>5</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%35</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>6</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%36</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>7</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%37</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>8</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%38</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>9</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%39</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>:</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%3A</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>;</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%3B</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>&lt;</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%3C</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>=</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%3D</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>&gt;</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%3E</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>?</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%3F</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>@</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%40</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>A</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%41</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>B</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%42</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>C</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%43</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>D</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%44</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>E</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%45</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>F</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%46</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>G</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%47</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>H</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%48</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>I</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%49</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>J</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%4A</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>K</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%4B</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>L</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%4C</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>M</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%4D</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>N</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%4E</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>O</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%4F</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>P</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%50</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Q</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%51</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>R</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%52</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>S</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%53</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>T</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%54</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>U</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%55</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>V</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%56</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>W</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%57</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>X</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%58</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Y</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%59</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Z</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%5A</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>[</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%5B</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>\</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%5C</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>]</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%5D</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>^</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%5E</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>_</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%5F</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>`</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%60</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>a</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%61</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>b</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%62</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>c</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%63</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>d</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%64</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>e</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%65</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>f</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%66</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>g</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%67</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>h</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%68</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>i</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%69</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>j</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%6A</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>k</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%6B</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>l</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%6C</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>m</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%6D</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>n</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%6E</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>o</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%6F</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>p</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%70</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>q</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%71</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>r</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%72</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>s</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%73</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>t</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%74</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>u</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%75</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>v</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%76</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>w</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%77</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>x</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%78</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>y</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%79</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>z</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%7A</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>{'{'}</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%7B</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>|</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%7C</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>{'}'}</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%7D</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>~</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%7E</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}></td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%7F</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>€</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%E2%82%AC</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}></td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%81</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>‚</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%E2%80%9A</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ƒ</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C6%92</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>„</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%E2%80%9E</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>…</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%E2%80%A6</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>†</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%E2%80%A0</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>‡</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%E2%80%A1</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ˆ</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%CB%86</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>‰</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%E2%80%B0</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Š</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C5%A0</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>‹</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%E2%80%B9</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Œ</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C5%92</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}></td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C5%8D</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Ž</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C5%BD</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}></td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%8F</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}></td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C2%90</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>‘</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%E2%80%98</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>’</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%E2%80%99</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>“</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%E2%80%9C</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>”</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%E2%80%9D</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>•</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%E2%80%A2</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>–</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%E2%80%93</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>—</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%E2%80%94</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>˜</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%CB%9C</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>™</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%E2%84</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>š</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C5%A1</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>›</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%E2%80</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>œ</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C5%93</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}></td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%9D</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ž</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C5%BE</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Ÿ</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C5%B8</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}> </td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C2%A0</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>¡</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C2%A1</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>¢</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C2%A2</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>£</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C2%A3</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>¤</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C2%A4</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>¥</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C2%A5</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>¦</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C2%A6</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>§</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C2%A7</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>¨</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C2%A8</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>©</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C2%A9</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ª</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C2%AA</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>«</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C2%AB</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>¬</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C2%AC</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>­</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C2%AD</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>®</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C2%AE</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>¯</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C2%AF</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>°</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C2%B0</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>±</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C2%B1</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>²</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C2%B2</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>³</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C2%B3</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>´</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C2%B4</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>µ</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C2%B5</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>¶</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C2%B6</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>·</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C2%B7</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>¸</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C2%B8</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>¹</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C2%B9</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>º</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C2%BA</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>»</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C2%BB</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>¼</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C2%BC</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>½</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C2%BD</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>¾</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C2%BE</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>¿</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C2%BF</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>À</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%80</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Á</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%81</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Â</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%82</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Ã</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%83</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Ä</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%84</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Å</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%85</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Æ</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%86</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Ç</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%87</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>È</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%88</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>É</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%89</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Ê</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%8A</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Ë</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%8B</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Ì</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%8C</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Í</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%8D</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Î</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%8E</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Ï</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%8F</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Ð</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%90</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Ñ</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%91</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Ò</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%92</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Ó</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%93</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Ô</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%94</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Õ</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%95</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Ö</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%96</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>×</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%97</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Ø</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%98</td>
                </tr>
                <tr>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Ù</td>
                   <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%99</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Ú</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%9A</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Û</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%9B</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Ü</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%9C</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Ý</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%9D</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>Þ</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%9E</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ß</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%9F</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>à</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%A0</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>á</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%A1</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>â</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%A2</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ã</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%A3</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ä</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%A4</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>å</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%A5</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>æ</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%A6</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ç</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%A7</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>è</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%A8</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>é</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%A9</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ê</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%AA</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ë</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%AB</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ì</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%AC</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>í</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%AD</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>î</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%AE</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ï</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%AF</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ð</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%B0</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ñ</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%B1</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ò</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%B2</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ó</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%B3</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ô</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%B4</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>õ</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%B5</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ö</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%B6</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>÷</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%B7</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ø</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%B8</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ù</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%B9</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ú</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%BA</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>û</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%BB</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ü</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%BC</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ý</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%BD</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>þ</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%BE</td>
                </tr>
                <tr>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>ÿ</td>
                     <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center", overflow: "auto" }}>%C3%BF</td>
                </tr>


                </tbody>
              </table>
            </div>
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

export default HTMLUrlEncoding;
