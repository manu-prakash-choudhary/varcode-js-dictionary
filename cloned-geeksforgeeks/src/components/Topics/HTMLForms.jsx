import React from "react";
import { CopyBlock } from "react-code-blocks";
import { htmlFormsExample1, htmlFormsExample2 } from "../../utils/CodeBlocks";
import { FaAngleRight } from 'react-icons/fa';


const HTMLForms = () => {
  return (
    <div className="content-container overflow-y-auto h-screen p-6">
      <div className="pl-0 flex flex-col gap-3">
        <h1 className="text-4xl font-semibold text-red-600">HTML Forms</h1>
        <p className="text-gray-600">Last Updated: 31 Mar, 2025</p>
      </div>
      <br />
      <p>
        HTML Forms use the &lt;form&gt; tag to collect user input through
        various interactive controls. These controls range from text fields,
        numeric inputs, and email fields to password fields, checkboxes, radio
        buttons, and submit buttons.
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
              href="#form-elements"
              style={{ color: "black" }}
            >
              Form Elements
            </a>
          </li>
          <li>
            <a
              href="#input-types"
              style={{ color: "black" }}
            >
              Commonly Used Input Types in HTML Forms
            </a>
          </li>
          <li>
            <a
              href="#html-forms-example"
              style={{ color: "black" }}
            >
              HTML Forms Example
            </a>
            <ul style={{ listStyleType: "circle", paddingLeft: "20px" }}>
              <li>
                <a
                  href="#basic-forms"
                  style={{ color: "black" }}
                >
                  Basic HTML Forms
                </a>
              </li>
              <li>
                <a
                  href="#advanced-forms"
                  style={{ color: "black" }}
                >
                  Advance HTML Forms
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <br />
      <p>
        <b className="text-lg font-bold text-red-500">Syntax :</b>
      </p>
      <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4">
        <pre>
          <code>
            {`<form>
    <!--form elements-->
</form>`}
          </code>
        </pre>
      </div>

      <div>
        <p className="text-lg font-bold text-red-500">Form Elements</p>
        <p>
          The HTML <code>&lt;form&gt;</code> comprises several elements, each
          serving a unique purpose. For instance, the <code>&lt;label&gt;</code>{" "}
          element defines labels for other
          <code>&lt;form&gt;</code> elements. On the other hand, the{" "}
          <code>&lt;input&gt;</code> element is versatile and can be used to
          capture various types of input data such as text, password, email, and
          more simply by altering its <code>type</code> attribute.
        </p>
      </div>
      <div>
        <div className="flex mt-4">
          <table className="table-auto border-collapse border border-gray-600">
            <thead>
              <tr
                style={{
                  backgroundColor: "#f5f5f5",
                  borderBottom: "2px solid #ddd",
                }}
              >
                <th
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    color: "red",
                  }}
                >
                  Elements
                </th>
                <th
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    color: "red",
                  }}
                >
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  <a href="#" className="text-red-500">
                    &lt;label&gt;
                  </a>
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  It defines labels for &lt;form&gt; elements.
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  <a href="#" className="text-red-500">
                    &lt;input&gt;
                  </a>
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  It is used to get input data from the form in various types
                  such as text, password, email, etc by changing its type.
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  <a href="#" className="text-red-500">
                    &lt;button&gt;
                  </a>
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  It defines a clickable button to control other elements or
                  execute a functionality.
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  <a href="#" className="text-red-500">
                    &lt;select&gt;
                  </a>
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  It is used to create a drop-down list.
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  <a href="#" className="text-red-500">
                    &lt;textarea&gt;
                  </a>
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  It is used to get input long text content.
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  <a href="#" className="text-red-500">
                    &lt;fieldset&gt;
                  </a>
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  It is used to draw a box around other form elements and group
                  the related data.
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  <a href="#" className="text-red-500">
                    &lt;legend&gt;
                  </a>
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  It defines a caption for fieldset elements
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  <a href="#" className="text-red-500">
                    &lt;datalist&gt;
                  </a>
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  It is used to specify pre-defined list options for input
                  controls.
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  <a href="#" className="text-red-500">
                    &lt;output&gt;
                  </a>
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  It displays the output of performed calculations.
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  <a href="#" className="text-red-500">
                    &lt;option&gt;
                  </a>
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  It is used to define options in a drop-down list.
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  <a href="#" className="text-red-500">
                    &lt;optgroup&gt;
                  </a>
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  It is used to define group-related options in a drop-down
                  list.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <br />
      <div>
        <p className="text-lg font-bold text-red-500">
          Commonly Used Input Types in HTML Forms
        </p>
        <p>
          In HTML forms, various input types are used to collect different types
          of data from users. Here are some commonly used input types :
        </p>
      </div>
      <div>
        <div className="flex mt-4">
          <table className="table-auto border-collapse border border-gray-600">
            <thead>
              <tr
                style={{
                  backgroundColor: "#f5f5f5",
                  borderBottom: "2px solid #ddd",
                }}
              >
                <th
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    color: "red",
                  }}
                >
                  Input Type
                </th>
                <th
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    color: "red",
                  }}
                >
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  <a href="#" className="text-red-500">
                    &lt;input type=”text”&gt;
                  </a>
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  Defines a one-line text input field.
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  <a href="#" className="text-red-500">
                    &lt;input type=”password”&gt;
                  </a>
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  Defines a password field.
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  <a href="#" className="text-red-500">
                    &lt;input type=”submit”&gt;
                  </a>
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  Defines a submit button.
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  <a href="#" className="text-red-500">
                    &lt;input type=”reset”&gt;
                  </a>
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  Defines a reset button.
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  <a href="#" className="text-red-500">
                    &lt;input type=”radio”&gt;
                  </a>
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  Defines a radio button.
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  <a href="#" className="text-red-500">
                    &lt;input type=”email”&gt;
                  </a>
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  Validates that the input is a valid email address.
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  <a href="#" className="text-red-500">
                    &lt;input type=”number”&gt;
                  </a>
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  Allows the user to enter a number. You can specify min, max,
                  and step attributes for range.
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  <a href="#" className="text-red-500">
                    &lt;input type=”checkbox”&gt;
                  </a>
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  Used for checkboxes where the user can select multiple
                  options.
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  <a href="#" className="text-red-500">
                    &lt;input type=”date”&gt;
                  </a>
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  Allows the user to select a date from a calendar.
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  <a href="#" className="text-red-500">
                    &lt;input type=”time”&gt;
                  </a>
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  Allows the user to select a time.
                </td>
              </tr>
              <tr>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  <a href="#" className="text-red-500">
                    &lt;input type=”file”&gt;
                  </a>
                </td>
                <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                  Allows the user to select a file to upload.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <br/>
      <div>
        <p className="text-lg font-bold text-red-500 pt-4 pb-2">HTML Forms Example</p>
        <p style={{paddingBottom: "10px"}}><b className="text-lg font-bold text-red-500">Example 1 : Basic HTML Forms</b></p>
        <p><b className="text-lg font-bold text-red-500">Example : </b>This HTML form collects user personal information such as username and password with a button to submit the form.</p>
      </div>
      <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4 pb-4 ">
        <CopyBlock
          text={htmlFormsExample1.text}
          language={htmlFormsExample1.language}
          theme={htmlFormsExample1.theme}
          wrapLines
        />
      </div>
      <div>
        <p><b className="text-lg font-bold text-red-500">Output :</b></p>
        <img src="../HTMLFormsEX1.png" width="455" height="604" className="mx-auto item-center" />
      </div>
      <br/>
      <div>
        <p style={{paddingBottom: "10px"}}><b className="text-lg font-bold text-red-500">Example 2 : Advance HTML Forms</b></p>
        <p>This HTML form collects user personal information, including name, email, password, gender, date of birth, and address. It features proper styling for input fields and submission buttons.</p>
      </div>
      <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4 pb-4 ">
        <CopyBlock
          text={htmlFormsExample2.text}
          language={htmlFormsExample2.language}
          theme={htmlFormsExample2.theme}
          wrapLines
        />
        </div>
        <div>
        <p><b className="text-lg font-bold text-red-500">Output :</b></p>
        <img src="../HTMLFormsEX2.gif" alt="HTMLForm3" width="455" height="604" loading="lazy" className="mx-auto item-center" />
      </div>
      <br/>
      <div>
        <p>Here are some of the key attributes that can be used with the &lt;form&gt; element :</p>
        <p style={{ paddingTop: "5px" }}>1. <b className="text-lg font-bold text-red-500">action :</b>This attribute specifies where to send the form-data when a form is submitted. The value of this attribute is typically a URL.</p>
        <p style={{ paddingTop: "5px" }}>2. <b className="text-lg font-bold text-red-500">method :</b>This attribute specifies which HTTP method used to send the form-data. The values can be GET or POST.</p>
        <p style={{ paddingTop: "5px" }}>3. <b className="text-lg font-bold text-red-500">target :</b>This attribute specifies where to display the response received after submitting the form. The values can be <b className="text-lg font-bold text-500">“_blank”, “_self”, “_parent”, “_top”,</b> or the name of an iframe.</p>
        <p style={{ paddingTop: "5px" }}>4. <b className="text-lg font-bold text-red-500">enctype :</b>This attribute is used when method=“post”. It specifies how the form-data should be encoded when submitting it to the server. The values can be <b className="text-lg font-bold text-500">“application/x-www-form-urlencoded”, “multipart/form-data”, or “text/plain”</b>.</p>
        <p style={{ paddingTop: "5px" }}>5. <b className="text-lg font-bold text-red-500">autocomplete :</b>This attribute specifies whether a form should have autocomplete on or off. When autocomplete is on, the browser automatically completes values based on values that the user has entered before.</p>
        <p style={{ paddingTop: "5px" }}>6. <b className="text-lg font-bold text-red-500">novalidate :</b>This Boolean attribute specifies that the form-data should not be validated on submission.</p>
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

export default HTMLForms;
