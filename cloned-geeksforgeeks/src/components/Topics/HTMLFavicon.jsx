import React, { useState } from 'react'
import { htmlFavicon } from '../../utils/CodeBlocks'
import { CopyBlock } from "react-code-blocks";
import { Link } from 'react-router-dom';

const HTMLFavicon = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  const data = [
    {
      format: "ICO",
      browsers: ["Edge", "Chrome", "Firefox", "Opera", "Safari"],
      advantages: "Supports multiple sizes in a single file; widely supported",
      disadvantages: "Larger file size compared to others",
    },
    {
      format: "PNG",
      browsers: ["All Five"],
      advantages: "High-quality image, supports transparency, smaller file size",
      disadvantages: "Does not support multiple sizes in one file",
    },
    {
      format: "GIF",
      browsers: ["All Five"],
      advantages: "Supports animation",
      disadvantages: "Limited color palette (256 colors), less ideal for favicons",
    },
    {
      format: "JPEG",
      browsers: ["All Five"],
      advantages: "Good for high-quality images",
      disadvantages: "Does not support transparency, larger file size",
    },
    {
      format: "SVG",
      browsers: ["All Five"],
      advantages: "Scalable, small file size, sharp quality at any resolution",
      disadvantages: "Not supported by all browsers (especially older ones)",
    },
    {
      format: "webP",
      browsers: ["All Five"],
      advantages: "Smaller file size with high quality",
      disadvantages: "Limited browser support, not widely used for favicons",
    },
  ];
  return (
    <div className='content-container overflow-y-auto h-screen pl-6 text-lg tracking-wide'>
      <div className='border-b border-gray-200'>
        <h1 className="text-3xl font-semibold mb-2 text-red-600">HTML Favicon</h1>
        <p className="text-gray-500 text-md  mb-3">Last Updated &#58; 22 March&#44; 2025</p>
      </div>
      <p className="mt-2 text-gray-800 leading-relaxed ">
        An <span className=' font-semibold'>HTML favicon</span> (or favorite icon) is a small image or icon that represents a website,
        typically shown in the browser tab, bookmarks, and shortcuts. It is used for:
      </p>

      <ul className="mt-3 space-y-2 list-disc list-inside text-gray-800">
        <li className=''>
          <strong className=' font-semibold'>Brand Recognition:</strong> Favicons are a visual marker for your brand online,
          helping to increase and reinforce brand awareness.
        </li>
        <li className=''>
          <strong className=' font-semibold'>Professionalism:</strong> A well-designed favicon makes your site look professional and credible.
        </li>
        <li className=''>
          <strong className=' font-semibold'>Usability:</strong> It improves the user’s navigation experience by allowing them to
          easily identify and switch to your tab when multiple tabs are open.
        </li>
      </ul>

      <h3 className="mt-5 text-2xl font-semibold text-red-600">How to Implement a Favicon in HTML</h3>
      <p className="mt-2 text-gray-800">
        To add a favicon to your HTML document, you’ll need to reference it in the
        <code> &lt;head&gt; </code> section of your HTML code.
        Here’s how you can do it:
      </p>
      <div className="border border-red-400 rounded-2xl p-2 mt-3 w-full min-h-40 bg-[#fafafa] ">
        <CopyBlock
          text={htmlFavicon.text}
          language={htmlFavicon.language}
          theme={htmlFavicon.theme}
          wrapLines
        />
      </div>

      {/* html image */}

      <p className="text-2xl font-semibold mt-5">Output:</p>
      <div className="relative mt-3 w-full flex justify-center">
        <img
          src="./htmlFaviconPage.jpg"
          alt="Favicon Output"
          className="border border-gray-300 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
          onClick={() => setIsZoomed(true)}
        />
      </div>

      {/* Zoomed Image Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={() => setIsZoomed(false)}
        >
          <img
            src="./htmlFaviconPage.jpg"
            alt="Zoomed Favicon Output"
            className="max-w-4xl max-h-[90vh] rounded-lg shadow-lg border border-gray-300"
          />
        </div>
      )}

      <p className=" mt-7 text-2xl font-semibold text-red-600">In this example:</p>

      <ul className="mt-3 space-y-2  text-gray-800 list-disc list-inside">
        <li>
          <code className="font-semibold">rel="icon"</code>: Indicates that the linked resource is an icon for the document.
          This relationship is essential for browsers to understand that the specified file is meant to be used as the website’s favicon.
        </li>
        <li>
          <code className="font-semibold">href="https://varcode.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.bab09975.png&w=1920&q=75"</code>:
          Specifies the path to the favicon image. This can be a URL (as used here) pointing to an image that serves as the icon.
        </li>
        <li>
          <code className="font-semibold">type="image/x-icon"</code>: Specifies the MIME type of the favicon file.
          While commonly image/x-icon is used for <code>.ico</code> files, modern browsers support PNG and other formats as well.
        </li>
      </ul>

      <div className="mt-4 p-4 bg-red-100 text-gray-700 italic rounded border border-gray-300">
        <strong>Note:</strong> Major browsers are not supported by the sizing property of the favicon.
      </div>

      <h2 className="text-2xl mt-7 font-semibold text-red-600">List of Favicon Sizes</h2>
      <p className="mt-2  text-gray-800">
        Different devices and browsers may require favicons of various sizes. Here’s a list of common favicon sizes:
      </p>

      <div className="overflow-x-auto mt-7 ml-5 w-[70%]">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-100  ">
            <tr className='text-center'>
              <th className="border border-gray-300 px-4 py-3 font-semibold text-xl">Name</th>
              <th className="border border-gray-300 px-4 py-3 font-semibold text-xl">Size</th>
              <th className="border border-gray-300 px-4 py-3 font-semibold text-xl">Description</th>
            </tr>
          </thead>
          <tbody>
            {[
               { name: "favicon-32.png", size: "32×32", desc: "Standard for most desktop browsers." },
               { name: "favicon-57.png", size: "57×57", desc: "Standard iOS home screen." },
               { name: "favicon-76.png", size: "76×76", desc: "iPad home screen icon." },
               { name: "favicon-96.png", size: "96×96", desc: "GoogleTV icon." },
               { name: "favicon-120.png", size: "120×120", desc: "iPhone retina touch icon." },
               { name: "favicon-128.png", size: "128×128", desc: "Chrome Web Store icon & Small Windows 8 Star Screen Icon*." },
               { name: "favicon-144.png", size: "144×144", desc: "Internet Explorer 10 Metro tile for pinned site*." },
               { name: "favicon-152.png", size: "152×152", desc: "iPad touch icon." },
               { name: "favicon-167.png", size: "167×167", desc: "iPad Retina touch icon (change for iOS 10: up from 152×152, not in action. iOS 10 will use 152×152)." },
               { name: "favicon-180.png", size: "180×180", desc: "iPhone 6 plus." },
               { name: "favicon-192.png", size: "192×192", desc: "Google Developer Web App Manifest Recommendation." },
               { name: "favicon-195.png", size: "195×195", desc: "Opera Speed Dial icon (Not working in Opera 15 and later)." },
               { name: "favicon-196.png", size: "196×196", desc: "Chrome for Android home screen icon." },
               { name: "favicon-228.png", size: "228×228", desc: "Opera Coast icon." },
            
            ].map((item, index) => (
              <tr key={index} className="even:bg-gray-50">
                <td className="border border-gray-300 text-gray-700 px-4 py-4 w-[32%]">{item.name}</td>
                <td className="border border-gray-300 text-gray-700 px-4 py-4 w-[22%]">{item.size}</td>
                <td className="border border-gray-300 text-gray-700 px-4 py-4">{item.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-2xl mt-5 font-semibold mb-4 text-red-600">Favicon File Format Support</p>
      <p className="mb-4 ">Here's a table summarizing the common file formats supported for favicons:</p>
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr className='text-md font-semibold'>
            <th className="border border-gray-300 px-4 py-2">File Format</th>
            <th className="border border-gray-300 px-4 py-2">Browser Support</th>
            <th className="border border-gray-300 px-4 py-2">Advantages</th>
            <th className="border border-gray-300 px-4 py-2">Disadvantages</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="border border-gray-300 px-4 py-2 font-semibold underline hover:text-red-500 text-red-400"><Link>{item.format}</Link></td>
              <td className="border border-gray-300 px-4 py-2">
                <ul>
                  {item.browsers.map((browser, idx) => (
                    <li key={idx}>{browser}</li>
                  ))}
                </ul>
              </td>
              <td className="border border-gray-300 px-4 py-2">{item.advantages}</td>
              <td className="border border-gray-300 px-4 py-2">{item.disadvantages}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default HTMLFavicon