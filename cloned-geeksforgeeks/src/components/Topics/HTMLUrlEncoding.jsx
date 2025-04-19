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
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>!</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%21</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>*</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%2A</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>‘</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%27</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>(</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%28</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>)</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%29</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>;</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%3B</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>:</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%3A</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>@</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%40</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%26</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>=</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%3D</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>+</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%2B</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>$</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%24</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>,</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%2C</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>/</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%2F</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>?</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%3F</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>#</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%23</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>[</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%5B</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>]</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%5D</td>
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
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>space</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%20</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>“</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%22</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&lt;</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%3C</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&gt;</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%3E</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>#</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%23</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%25</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>{`{`}</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%7B</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>{`}`}</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%7D</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>|</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%7C</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>\</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%5C</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>^</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%5E</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>~</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%7E</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>[</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%5B</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>]</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%5D</td>
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
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>backspace</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%08</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>tab</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%09</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>linefeed</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%0A</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>c return</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%0D</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>space</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%20</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>!</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%21</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>“</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%22</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>#</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%23</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>$</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%24</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%25</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%26</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>‘</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%27</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>(</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%28</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>)</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%29</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>*</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%2A</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>+</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%2B</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>,</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%2C</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>–</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%2D</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>.</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%2E</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>/</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%2F</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>0</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%30</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>1</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%31</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>2</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%32</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>3</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%33</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>4</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%34</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>5</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%35</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>6</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%36</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>7</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%37</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>8</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%38</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>9</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%39</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>:</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%3A</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>;</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%3B</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&lt;</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%3C</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>=</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%3D</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>&gt;</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%3E</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>?</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%3F</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>@</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%40</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>A</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%41</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>B</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%42</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>C</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%43</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>D</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%44</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>E</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%45</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>F</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%46</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>G</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%47</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>H</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%48</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>I</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%49</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>J</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%4A</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>K</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%4B</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>L</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%4C</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>M</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%4D</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>N</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%4E</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>O</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%4F</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>P</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%50</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Q</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%51</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>R</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%52</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>S</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%53</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>T</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%54</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>U</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%55</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>V</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%56</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>W</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%57</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>X</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%58</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Y</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%59</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Z</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%5A</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>[</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%5B</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>\</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%5C</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>]</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%5D</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>^</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%5E</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>_</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%5F</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>`</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%60</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>a</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%61</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>b</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%62</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>c</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%63</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>d</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%64</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>e</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%65</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>f</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%66</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>g</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%67</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>h</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%68</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>i</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%69</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>j</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%6A</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>k</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%6B</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>l</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%6C</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>m</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%6D</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>n</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%6E</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>o</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%6F</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>p</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%70</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>q</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%71</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>r</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%72</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>s</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%73</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>t</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%74</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>u</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%75</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>v</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%76</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>w</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%77</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>x</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%78</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>y</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%79</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>z</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%7A</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>{'{'}</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%7B</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>|</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%7C</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>{'}'}</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%7D</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>~</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%7E</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}></td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%7F</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>€</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%E2%82%AC</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}></td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%81</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>‚</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%E2%80%9A</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ƒ</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C6%92</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>„</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%E2%80%9E</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>…</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%E2%80%A6</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>†</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%E2%80%A0</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>‡</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%E2%80%A1</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ˆ</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%CB%86</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>‰</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%E2%80%B0</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Š</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C5%A0</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>‹</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%E2%80%B9</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Œ</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C5%92</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}></td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C5%8D</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ž</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C5%BD</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}></td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%8F</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}></td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C2%90</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>‘</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%E2%80%98</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>’</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%E2%80%99</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>“</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%E2%80%9C</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>”</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%E2%80%9D</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>•</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%E2%80%A2</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>–</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%E2%80%93</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>—</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%E2%80%94</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>˜</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%CB%9C</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>™</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%E2%84</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>š</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C5%A1</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>›</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%E2%80</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>œ</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C5%93</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}></td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%9D</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ž</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C5%BE</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ÿ</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C5%B8</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}> </td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C2%A0</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>¡</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C2%A1</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>¢</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C2%A2</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>£</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C2%A3</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>¤</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C2%A4</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>¥</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C2%A5</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>¦</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C2%A6</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>§</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C2%A7</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>¨</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C2%A8</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>©</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C2%A9</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ª</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C2%AA</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>«</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C2%AB</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>¬</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C2%AC</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>­</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C2%AD</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>®</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C2%AE</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>¯</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C2%AF</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>°</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C2%B0</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>±</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C2%B1</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>²</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C2%B2</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>³</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C2%B3</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>´</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C2%B4</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>µ</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C2%B5</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>¶</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C2%B6</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>·</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C2%B7</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>¸</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C2%B8</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>¹</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C2%B9</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>º</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C2%BA</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>»</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C2%BB</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>¼</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C2%BC</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>½</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C2%BD</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>¾</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C2%BE</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>¿</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C2%BF</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>À</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%80</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Á</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%81</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Â</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%82</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ã</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%83</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ä</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%84</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Å</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%85</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Æ</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%86</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ç</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%87</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>È</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%88</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>É</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%89</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ê</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%8A</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ë</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%8B</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ì</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%8C</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Í</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%8D</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Î</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%8E</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ï</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%8F</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ð</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%90</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ñ</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%91</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ò</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%92</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ó</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%93</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ô</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%94</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Õ</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%95</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ö</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%96</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>×</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%97</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ø</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%98</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ù</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%99</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ú</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%9A</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Û</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%9B</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ü</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%9C</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Ý</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%9D</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>Þ</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%9E</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ß</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%9F</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>à</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%A0</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>á</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%A1</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>â</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%A2</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ã</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%A3</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ä</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%A4</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>å</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%A5</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>æ</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%A6</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ç</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%A7</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>è</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%A8</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>é</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%A9</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ê</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%AA</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ë</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%AB</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ì</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%AC</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>í</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%AD</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>î</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%AE</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ï</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%AF</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ð</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%B0</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ñ</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%B1</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ò</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%B2</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ó</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%B3</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ô</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%B4</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>õ</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%B5</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ö</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%B6</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>÷</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%B7</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ø</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%B8</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ù</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%B9</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ú</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%BA</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>û</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%BB</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ü</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%BC</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ý</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%BD</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>þ</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%BE</td>
                </tr>
                <tr>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>ÿ</td>
                    <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "center" }}>%C3%BF</td>
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
