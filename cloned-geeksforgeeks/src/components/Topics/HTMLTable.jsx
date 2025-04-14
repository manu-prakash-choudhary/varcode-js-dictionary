import React from 'react'
import { htmlTables, htmlAnotherTables, htmlTableBorder, htmlTableCollapseBorder, htmlTableCellPadding, htmlTableLeftAlign, htmlTableBorderSpacing, htmlTableCellCol, htmlTableCellrow, htmlTableCaption, htmlTableBackgroundColour, htmlNestedTable } from "../../utils/CodeBlocks";
import { CopyBlock } from "react-code-blocks";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const HTMLTable = () => {
    return (
        <div className='content-container overflow-y-auto min-h-screen pl-6 pr-6 text-lg tracking-wide'>
            <div className='border-b pb-3 border-gray-200 '>
                <h1 className="text-3xl font-semibold text-red-600">HTML Tables</h1>
                <p className="text-gray-500 text-sm mt-3">Last Updated : 05 Feb, 2025</p>
            </div>
            <p className="mt-4 text-md ">
                <strong>HTML Tables</strong> allow you to arrange data into rows and columns on a web
                page, making it easy to display information like schedules, statistics, or other
                structured data in a clear format.
            </p>
            <h2 className="text-2xl font-semibold mt-6 text-red-600">What is an HTML Table?</h2>
            <p className="mt-2 text-md">
                An HTML table is created using the <code >&lt;table&gt;</code> tag. Inside this tag, you use
            </p>
            <ul className="list-disc italic list-inside mt-2 ">
                <li>
                    <code>&lt;tr&gt;</code> to define table rows,
                </li>
                <li>
                    <code>&lt;th&gt;</code> for table headers, and
                </li>
                <li>
                    <code>&lt;td&gt;</code> for table data cells
                </li>
            </ul>
            <p className="mt-4 ">
                Each <code >&lt;tr&gt;</code> represents a row, and within each row,{" "}
                <code >&lt;th&gt;</code> or{" "}
                <code >&lt;td&gt;</code> tags represent the cells in that row,
                which can contain text, images, lists, or even another table.
            </p>
            <img src="./htmlTable.png" alt="htmlTable" style={{ height: "40%", width: "50%", marginLeft: '20%', marginTop: "10px" }} />
            <p className='text-2xl font-semibold mt-4 text-red-600'>HTML Table Code Example</p>

            <div className="border border-red-400 p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                <CopyBlock
                    text={htmlTables.text}
                    language={htmlTables.language}
                    theme={htmlTables.theme}
                    wrapLines
                />
            </div>
            <div className='mt-3 flex justify-center flex-col'>
                <p className='text-2xl font-semibold '>Output :</p>
                <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210910153459/1230.png" alt="output" className='w-50 ml-[42%] hover:cursor-zoom-in' />
                <p className='text-center'>Html Table</p>
            </div>

            <p className="text-2xl font-medium mt-3 text-red-600">In this Example:</p>
            <ul className="list-disc list-inside mt-4 ">
                <li>
                    <code>&lt;table&gt;</code>: This tag starts the table. Everything between the opening{" "}
                    <code>&lt;table&gt;</code> and closing{" "}
                    <code>&lt;/table&gt;</code> tags makes up the table.
                </li>
                <li>
                    <code>&lt;tr&gt;</code>: Stands for “table row”. Each{" "}
                    <code>&lt;tr&gt;</code> tag defines a row in the table.
                </li>
                <li>
                    <code>&lt;th&gt;</code>: Stands for “table header”. It’s used for the headers of the
                    columns. In this case, <strong>“Firstname“</strong>, <strong>“Lastname“</strong>, and{" "}
                    <strong>“Age”</strong> are headers. Text in <code>&lt;th&gt;</code> tags is usually bold and
                    centered by default.
                </li>
                <li>
                    <code>&lt;td&gt;</code>: Stands for “table data”. This tag is used for actual data cells
                    under each column. For instance, <strong>“Priya”</strong> is the data under the <strong>“Firstname”</strong> header,{" "}
                    <strong>“Sharma”</strong> under the <strong>“Lastname”</strong>, and <strong>“24”</strong> under the <strong>“Age”</strong>.
                </li>
                <li>The first <code>&lt;tr&gt;</code> has three <code>&lt;th&gt;</code> elements, setting up the column titles.</li>
                <li>
                    The subsequent <code>&lt;tr&gt;</code> tags each contain three{" "}
                    <code>&lt;td&gt;</code> elements, representing the data for each person listed in the table.
                </li>
            </ul>
            <p className="mt-4 ">
                When this HTML code is rendered in a web browser, it will display a table with four rows (one header row plus three data rows)
                and three columns (Firstname, Lastname, Age), showing the names and ages of Priya, Arun, and Sam.
            </p>

            <p className="text-2xl mt-5 font-semibold mb-4 text-red-600">Tags used in HTML Tables</p>
            <table className="w-[70%] border border-gray-300 text-left">
                <thead>
                    <tr className="bg-gray-100 text-xl font-semibold">
                        <th className="border border-gray-300 px-4 py-4 text-red-600">HTML Tags</th>
                        <th className="border border-gray-300 px-4 py-4 text-red-600">Descriptions</th>
                    </tr>
                </thead>
                <tbody>
                    {[
                        { tag: "<table>", desc: "Defines the structure for organizing data in rows and columns within a web page." },
                        { tag: "<tr>", desc: "Represents a row within an HTML table, containing individual cells." },
                        { tag: "<th>", desc: "Shows a table header cell that typically holds titles or headings." },
                        { tag: "<td>", desc: "Represents a standard data cell, holding content or data." },
                        { tag: "<caption>", desc: "Provides a title or description for the entire table." },
                        { tag: "<thead>", desc: "Defines the header section of a table, often containing column labels." },
                        { tag: "<tbody>", desc: "Represents the main content area of a table, separating it from the header or footer." },
                        { tag: "<tfoot>", desc: "Specifies the footer section of a table, typically holding summaries or totals." },
                        { tag: "<col>", desc: "Defines attributes for table columns that can be applied to multiple columns at once." },
                        { tag: "<colgroup>", desc: "Groups together a set of columns in a table to which you can apply formatting or properties collectively." },
                    ].map((item, index) => (
                        <tr key={index} className="border border-gray-300">
                            <td className="border border-gray-300 px-4 py-4 text-red-500">
                                <a href="#" >{item.tag}</a>
                            </td>
                            <td className="border border-gray-300 px-4 py-4">{item.desc}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className='mt-5 '>
                <p className='text-2xl font-semibold text-red-600'>Another Example of HTML Table:</p>
                <p className='mt-4 text-lg'>Creating a simple table in HTML using a table tag. </p>

                <div className="border border-red-400 p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                    <CopyBlock
                        text={htmlAnotherTables.text}
                        language={htmlAnotherTables.language}
                        theme={htmlAnotherTables.theme}
                        wrapLines
                    />
                </div>
                <p className='text-xl mt-3 font-semibold'>Output :</p>
                <div className='flex justify-center flex-col'>
                    <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210910153420/1157.png" alt="table" className='w-[40%] h-[7rem] ml-[32%] hover:cursor-zoom-in' />
                    <p className='text-center text-gray-500 text-sm italic'>HTML Table</p>
                </div>
            </div>

            <p className="text-3xl font-semibold mt-4 text-red-600">Styling HTML Tables</p>
            <p className="text-gray-600 mt-2">
                Styling an HTML table can significantly improve its appearance and readability. You can use
                <a href="#" className="text-red-500 underline"> CSS (Cascading Style Sheets)</a>
                to add styles such as borders, background colors, text alignments, and much more. Here are some basic styles to make your table look neater and more professional:
            </p>
            <p className="text-2xl font-semibold text-red-600 mt-4">1. Adding a Border to an HTML Table</p>
            <p className="text-gray-600 mt-2">
                A border is set using the CSS border property. If you do not specify a border for the table, it will be displayed without borders.
            </p>
            <h3 className="text-lg font-bold text-gray-700 mt-4">Syntax</h3>
            <pre className="bg-red-100 p-4 rounded-md mt-2">
                <code>
                    {`table, th, td {
  border: 1px solid black;
}`}
                </code>
            </pre>
            <p className="mt-2 font-bold text-gray-700">Example:</p>
            <p className="text-gray-600">Addition of the border to the HTML Table.</p>

            <div className="border border-red-400 p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                <CopyBlock
                    text={htmlTableBorder.text}
                    language={htmlTableBorder.language}
                    theme={htmlTableBorder.theme}
                    wrapLines
                />
            </div>
            <p className='text-xl mt-3 font-semibold'>Output :</p>
            <div className='flex justify-center flex-col'>
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/Screen-Shot-2017-11-15-at-10.45.20-AM.png" alt="table border" className='w-[50%] h-[6rem] ml-[25%] hover:cursor-zoom-in' />
                <p className='text-center text-gray-500 text-sm italic'>HTML Table with border</p>
            </div>

            <p className="text-2xl font-semibold text-red-600 mt-6">2. Adding Collapsed Borders in an HTML Table</p>
            <p className="text-gray-600 mt-2">
                For borders to collapse into one border, add the CSS border-collapse property.
            </p>
            <h3 className="text-lg font-semibold text-gray-700 mt-4">Syntax</h3>
            <pre className="bg-red-100 p-4 rounded-md mt-2">
                <code>
                    {`table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}`}
                </code>
            </pre>
            <p className="mt-2 font-bold text-gray-700">Example: <span className='text-md font-medium'>Addition of Collapsed Borders in HTML.</span></p>

            <div className="border border-red-400 p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                <CopyBlock
                    text={htmlTableCollapseBorder.text}
                    language={htmlTableCollapseBorder.language}
                    theme={htmlTableCollapseBorder.theme}
                    wrapLines
                />
            </div>

            <p className='text-xl mt-3 font-semibold'>Output :</p>
            <div className='flex justify-center flex-col'>
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/Screen-Shot-2017-11-15-at-10.49.53-AM.png" alt="table border" className='w-[50%] h-[6rem] ml-[25%] hover:cursor-zoom-in' />
                <p className='text-center text-gray-500 text-sm italic'>HTML Table with Collapsed Borders</p>
            </div>

            <p className="text-2xl font-semibold text-red-600 mt-6">3. Adding Cell Padding in an HTML Table</p>
            <p className="text-gray-600 mt-2">
                Cell padding specifies the space between the cell content and its borders. If we do not specify a padding, the table cells will be displayed without padding.
            </p>
            <h3 className="text-lg font-semibold text-gray-700 mt-4">Syntax</h3>
            <pre className="bg-red-100 p-4 rounded-md mt-2">
                <code>
                    {`th, td {
  padding: 20px;
}`}
                </code>
            </pre>
            <p className="mt-2 font-bold text-gray-700">Example: <span className='text-md font-medium'>Addition of Table cell padding in HTML.</span></p>
            <div className="border border-red-400 p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                <CopyBlock
                    text={htmlTableCellPadding.text}
                    language={htmlTableCellPadding.language}
                    theme={htmlTableCellPadding.theme}
                    wrapLines
                />
            </div>
            <p className=' text-xl font-semibold mt-3'>Output :</p>
            <div className='flex justify-center flex-col'>
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/Screen-Shot-2017-11-15-at-10.49.53-AM.png" alt="table border" className='w-[50%] h-[6rem] ml-[25%] hover:cursor-zoom-in' />
                <p className='text-center text-gray-500 text-sm italic'>Adding Table cell padding</p>
            </div>

            <p className="text-2xl font-semibold text-red-600 mt-6">4. Adding Left Align Headings in an HTML Table</p>
            <p className="text-gray-600 mt-2">
                By default, the table headings are bold and centered. To left-align the table headings, we must use the CSS text-align property.
            </p>
            <h3 className="text-lg font-bold text-gray-700 mt-4">Syntax</h3>
            <pre className="bg-red-100 p-4 rounded-md mt-2">
                <code>
                    {`th {
  text-align: left;
}`}
                </code>
            </pre>
            <p className="mt-2 font-bold text-gray-700">Example:</p>
            <p className="text-gray-600">Explains the <Link to={'/'} className="text-red-500 underline">text-align property</Link> where the text is aligned to the left.</p>

            <div className="border border-red-400 p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                <CopyBlock
                    text={htmlTableLeftAlign.text}
                    language={htmlTableLeftAlign.language}
                    theme={htmlTableLeftAlign.theme}
                    wrapLines
                />
            </div>
            <p className=' text-xl font-semibold mt-3'>Output :</p>
            <div className='flex justify-center flex-col'>
                <img src="https://media.geeksforgeeks.org/wp-content/uploads/Screen-Shot-2017-11-16-at-3.40.39-PM.png" alt="table border" className='w-[60%] h-[15rem] ml-[15%] hover:cursor-zoom-in' />
                <p className='text-center text-gray-500 text-sm italic'>text-align Property</p>
            </div>

            <div className="mt-4">
                <p className="text-2xl font-semibold text-red-600">5. Adding Border Spacing in an HTML Table</p>
                <p className="mt-2 text-gray-700">
                    Border spacing specifies the space between the cells. To set the border-spacing for a table, we must use the CSS
                    <code className="px-1 bg-gray-200 rounded">border-spacing</code> property.
                </p>
                <p className="mt-4 font-semibold">Syntax :</p>
                <div className="bg-red-100 p-4 rounded-lg mt-2">
                    <pre className=" font-mono">
                        {`table {
    border-spacing: 5px;
}`}
                    </pre>
                </div>
                <p className="mt-4 font-semibold">Example:</p>
                <p className="text-gray-700">
                    Explains the <a href="#" className="text-red-500 ">border space</a> property to make the space between the Table cells.
                </p>
                <div className="border border-red-400 p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                    <CopyBlock
                        text={htmlTableBorderSpacing.text}
                        language={htmlTableBorderSpacing.language}
                        theme={htmlTableBorderSpacing.theme}
                        wrapLines
                    />
                </div>
                <p className=' text-xl font-semibold mt-3'>Output :</p>
                <div className='flex justify-center flex-col'>
                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/Screen-Shot-2017-11-16-at-3.45.40-PM.png" alt="table border" className='w-[50%] h-[6rem] ml-[25%] hover:cursor-zoom-in' />
                    <p className='text-center text-gray-500 text-sm italic'>Border Spacing Property</p>
                </div>
            </div>

            <div className='mt-4'>
                <p className="text-2xl font-semibold mt-6 text-red-600">6. Adding Cells that Span Many Columns in HTML Tables</p>
                <p className="mt-2 text-gray-700">
                    To make a cell span more than one column, we must use the <strong >col-span</strong> attribute.
                </p>
                <p className="mt-2 font-semibold">Example:</p>
                <p className="text-gray-700">
                    Use of <Link to={'/'} className="text-red-500 ">colspan attribute</Link> in HTML.
                </p>
                <div className="border border-red-400 p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                    <CopyBlock
                        text={htmlTableCellCol.text}
                        language={htmlTableCellCol.language}
                        theme={htmlTableCellCol.theme}
                        wrapLines
                    />
                </div>
                <p className=' text-xl font-semibold mt-3'>Output :</p>
                <div className='flex justify-center flex-col'>
                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/Screen-Shot-2017-11-16-at-3.49.33-PM.png" alt="table border" className='w-[50%] h-[6rem] ml-[25%] hover:cursor-zoom-in' />
                    <p className='text-center text-gray-500 text-sm italic'>col-span attribute</p>
                </div>
            </div>

            <div className='mt-4'>
                <p className="text-2xl font-semibold mt-6 text-red-600">7. Adding Cells that span many rows in HTML Tables</p>
                <p className="mt-2 text-gray-700">
                    To make a cell span more than one row, we must use the rowspan attribute.
                </p>
                <p className="mt-2 font-semibold">Example:</p>
                <p className="text-gray-700">
                    Use of <Link to={'/'} className="text-red-500 ">rowspan attribute</Link> in HTML.
                </p>
                <div className="border border-red-400 p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                    <CopyBlock
                        text={htmlTableCellrow.text}
                        language={htmlTableCellrow.language}
                        theme={htmlTableCellrow.theme}
                        wrapLines
                    />
                </div>
                <p className=' text-xl font-semibold mt-3'>Output :</p>
                <div className='flex justify-center flex-col'>
                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/Screen-Shot-2017-11-16-at-3.53.18-PM.png" alt="table border" className='w-[50%] h-[7rem] ml-[25%] hover:cursor-zoom-in' />
                    <p className='text-center text-gray-500 text-sm italic'>Use of rowspan attribute</p>
                </div>
            </div>

            <div className='mt-4'>
                <p className="text-2xl font-semibold mt-6 text-red-600">8. Adding a Caption in an HTML Table</p>
                <p className="mt-2 text-gray-700">
                    To add a <Link to={'/'} className='text-red-500 '> caption</Link> to a table, we must use the “caption” tag.
                </p>
                <p className='mt-2 font-semibold text-2xl'>Syntax :</p>
                <div className="bg-red-100 p-4 rounded-lg mt-2">
                    <pre className=" font-mono">
                        {`<table style="width:100%">
<caption>DETAILS</caption>`}
                    </pre>
                </div>
                <p className="mt-2 text-xl font-semibold">Example: <span className='text-lg font-normal'> HTML Table caption by specifying the CSS properties for setting its width.</span></p>

                <div className="border border-red-400 p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                    <CopyBlock
                        text={htmlTableCaption.text}
                        language={htmlTableCaption.language}
                        theme={htmlTableCaption.theme}
                        wrapLines
                    />
                </div>
                <p className=' text-xl font-semibold mt-3'>Output :</p>
                <div className='flex justify-center flex-col'>
                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/Screen-Shot-2017-11-16-at-4.12.02-PM.png" alt="table border" className='w-[70%] h-[15rem] ml-[15%] hover:cursor-zoom-in' />
                    <p className='text-center text-gray-500 text-sm italic'>Adding the caption using the tag</p>
                </div>
            </div>

            <div className='mt-4'>
                <p className="text-2xl font-semibold mt-6 text-red-600">9. Adding a Background Colour to the Table</p>
                <p className="mt-2 text-gray-700">
                    A color can be added as a background in an HTML table using the “background-color” option.
                </p>
                <p className='mt-4 font-semibold text-2xl'>Syntax :</p>
                <div className="bg-red-100 p-4 rounded-lg mt-2">
                    <pre className=" font-mono">
                        {`table#t01 {
            width: 100%;
            background-color: #f2f2d1;
 }`}
                    </pre>
                </div>
                <p className="mt-2 text-xl font-semibold">Example: <span className='text-lg font-normal'>Addition of the Table background color in HTML.</span></p>

                <div className="border border-red-400 p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                    <CopyBlock
                        text={htmlTableBackgroundColour.text}
                        language={htmlTableBackgroundColour.language}
                        theme={htmlTableBackgroundColour.theme}
                        wrapLines
                    />
                </div>
                <p className=' text-xl font-semibold mt-3'>Output :</p>
                <div className='flex justify-center flex-col'>
                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/Screen-Shot-2017-11-16-at-4.16.23-PM.png" alt="table border" className='w-[70%] h-[18rem] ml-[15%] hover:cursor-zoom-in' />
                    <p className='text-center text-gray-500 italic text-sm'>Adding Table Background color using CSS properties</p>
                </div>
            </div>

            <div className='mt-4'>
                <p className="text-2xl font-semibold mt-6 text-red-600">10. Creating Nested Tables</p>
                <p className="mt-2 text-gray-700">
                    Nesting tables simply means making a Table inside another Table. Nesting tables can lead to complex tables layouts, which are visually interesting and have the potential of introducing errors.
                </p>
                <p className="mt-4 text-xl font-semibold">Example: <span className='text-lg font-normal'>Nesting of HTML Table.</span></p>

                <div className="border border-red-400 p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                    <CopyBlock
                        text={htmlNestedTable.text}
                        language={htmlNestedTable.language}
                        theme={htmlNestedTable.theme}
                        wrapLines
                    />
                </div>
                <p className=' text-xl font-semibold mt-3'>Output :</p>
                <div className='flex justify-center flex-col'>
                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/Screen-Shot-2017-11-16-at-4.29.26-PM.png" alt="table border" className='w-[40%] h-[8rem] ml-[29%] hover:cursor-zoom-in' />
                    <p className='text-center text-gray-500 italic text-sm'>Nested HTML Table</p>
                </div>
            </div>
            <div className="min-h-20 mt-5  w-full">
                <div className="flex justify-between items-center p-20 pb-0 pt-0">
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
    )
}

export default HTMLTable