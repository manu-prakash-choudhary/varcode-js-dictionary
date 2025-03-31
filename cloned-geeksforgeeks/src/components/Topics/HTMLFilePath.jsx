import React from 'react'
import { htmlFilePath1, htmlFilePath2 } from "../../utils/CodeBlocks";
import { CopyBlock } from "react-code-blocks";

const HTMLFilePath = () => {
    return (
        <div className='content-container overflow-y-auto min-h-screen pl-6 pr-6 text-lg tracking-wide'>
            <div className='border-b pb-3 mb-3 border-gray-200 '>
                <h1 className="text-3xl font-semibold">HTML File Paths</h1>
                <p className="text-gray-500 text-sm mt-3">Last Updated : 25 March, 2025</p>
            </div>
            <p className="mb-4">
                <span className="font-semibold">HTML file paths</span> specify the location of files or resources that a webpage needs to access, such as images, videos, scripts, or other HTML documents. These paths tell the web browser where to find the files required to display the content correctly or to execute scripts as intended.
            </p>

            <p className="mb-4">
                To insert a file in a web page, its source must be known. For example, the syntax (&lt;img src=&quot; &quot; alt=&quot; &quot;&gt;) is used to insert an image file, where the path of the file is mentioned in the source (src).
            </p>

            <div className="font-semibold text-2xl mb-2">Types of File Paths</div>

            <p className="mb-4">
                There are two main types of HTML File Paths:
            </p>

            <ol className="list-decimal list-inside mb-4">
                <li>Absolute File Paths</li>
                <li>Relative File Paths</li>
            </ol>

            <div className="font-semibold text-xl mb-2">1. Absolute File Paths</div>

            <ul className="list-disc list-inside mb-4">
                <li>Point directly to a resource&apos;s location on the internet and include the full URL, which consists of the protocol (http:// or https://), domain, and path to the resource.</li>
                <li>Best for resources that are hosted externally. The browser knows exactly where to find them regardless of the current document&apos;s location.</li>
            </ul>

            <div className="font-semibold text-2xl mb-2">Syntax:</div>
            <div className="bg-red-100 p-5 rounded-lg mb-4">
                <code className="text-sm">
                    &lt;img src=&quot;https://www.varcode.in/wp-content/uploads/varcode.png&quot; alt=&quot;My Image&quot;&gt;
                </code>
            </div>

            <div className="font-semibold text-xl mb-2">Example:</div>
            <div className="border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                <CopyBlock
                    text={htmlFilePath1.text}
                    language={htmlFilePath1.language}
                    theme={htmlFilePath1.theme}
                    wrapLines
                />
            </div>

            <div className="font-semibold text-xl mb-2 mt-6 ">2. Relative File Paths</div>

            <ul className="list-disc list-inside mb-4">
                <li>Specify the path to a resource in relation to the location of the HTML file currently being viewed.</li>
                <li>Ideal for resources within the same website. Keeps your HTML portable if the domain changes since the path doesn’t need to be updated.</li>
            </ul>

            <div className="font-semibold text-2xl mb-2">Syntax:</div>
            <div className="bg-red-100 p-5 rounded-lg mb-4">
                <code className="text-sm">
                    &lt;img src=&quot;https://www.varcode.in/wp-content/uploads/varcode.png&quot; alt=&quot;My Image&quot;&gt;
                </code>
            </div>

            <div className="font-semibold text-xl mb-2">Example:</div>
            <div className="border border-red-400 text-[1rem] p-2 mt-3 rounded-2xl w-full min-h-40 bg-[#fafafa] ">
                <CopyBlock
                    text={htmlFilePath2.text}
                    language={htmlFilePath2.language}
                    theme={htmlFilePath2.theme}
                    wrapLines
                />
            </div>

            <div className="font-semibold text-2xl mt-3 mb-2">Relative Path Variants</div>

            <ul className="list-disc list-inside mb-4 mt-4">
                <li>
                    <span className="font-semibold">Document-relative paths:</span> As in the above example, the path starts from the directory of the current HTML document.
                </li>
                <li>
                    <span className="font-semibold ">Root-relative paths:</span> Start with a slash (/), which tells the browser to look for the resource starting from the root directory of the server. Example:
                </li>
            </ul>

            <div className="bg-red-100 p-5 rounded-lg mb-4">
                <code className="text-sm">
                    &lt;img src=&quot;/images/geeks.jpg&quot;&gt;
                </code>
            </div>

            <ul className="list-disc list-inside mb-6" >
                <li >
                    <span className="font-semibold">Directory-relative paths:</span> Use dot notation to navigate the directory structure:
                    <ul className=" list-inside ml-6" style={{ listStyleType: "circle" }}>
                        <li>./ refers to the current directory.</li>
                        <li>../ moves up one directory level.</li>
                    </ul>
                </li>
            </ul>

            <div className="bg-red-100 p-5 rounded-lg">
                <code className="text-sm">
                    &lt;img src=&quot;../images/geeks.jpg&quot;&gt; &lt;!-- Goes up one directory, then into the images folder --&gt;
                </code>
            </div>

            <div className="font-semibold text-2xl mb-3 mt-6">Best Practices for Using HTML File Paths</div>

            <ul className="list-disc list-inside">
                <li>
                    <span className="font-semibold">Keep a Consistent Structure:</span> Organize your files in a logical structure which makes it easier to manage and reference your resources.
                </li>
                <li>
                    <span className="font-semibold">Use Relative Paths for Internal Resources:</span> This makes your website more portable and easier to maintain, especially if you migrate to a different domain.
                </li>
                <li>
                    <span className="font-semibold">Test Paths Locally and on the Server:</span> Paths that work on your local machine may not function the same way on a web server due to different directory structures or permissions.
                </li>
                <li>
                    <span className="font-semibold">Avoid Spaces in Filenames:</span> Spaces can cause issues in URLs and make linking more complex. Use hyphens or underscores instead.
                </li>
            </ul>
        </div>
    )
}

export default HTMLFilePath