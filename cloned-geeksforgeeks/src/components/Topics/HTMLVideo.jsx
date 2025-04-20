import React from "react";
import { CopyBlock } from "react-code-blocks";
import {
  htmlVideoExample1,
  htmlVideoExample2,
  htmlVideoExample3,
} from "../../utils/CodeBlocks";
import { FaAngleRight } from 'react-icons/fa';


const HTMLVideo = () => {
  return (
    <div className="content-container overflow-y-auto h-screen p-6">
      <div className="pl-0 flex flex-col gap-3">
        <h1 className="text-4xl font-semibold text-red-600">HTML Video</h1>
        <p className="text-gray-600">Last Updated: 31 Mar, 2025</p>
      </div>
      <br />
      <p style={{ paddingTop: "5px" }}>
        <span>
          The &lt;video&gt; element in HTML is used to add video content to web
          pages. It supports various video formats, including MP4, WebM, and
          Ogg. Video and audio tags are introduced in&nbsp;
        </span>
        <a
          href="#html5"
          style={{  color: "#0f3d2f" }}
        >
          <span className="hover:text-red-600 pointer text-blue-700">
            HTML5
          </span>
        </a>
        .
      </p>
      <p className="pt-3 font-bold text-red-500">
        Syntax :
      </p>
      <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4">
        <pre>
          <code>&lt;video src="" controls&gt; &lt;/video&gt;</code>
        </pre>
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
            <p style={{ paddingTop: "5px" }}>
              <span>The </span>
              <a
                href="#src-attribute"
                style={{  color: "red" }}
              >
                src attribute
              </a>
              <span> specifies the URL of the video file.</span>
            </p>
          </li>
          <li>
            <p style={{ paddingTop: "5px" }}>
              <span>The </span>
              <a
                href="#controls-attribute"
                style={{  color: "red" }}
              >
                controls attribute
              </a>
              <span>
                {" "}
                adds default video controls (play, pause, volume, etc.).
              </span>
            </p>
          </li>
        </ul>
      </div>
      <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4 pb-4 ">
        <CopyBlock
          text={htmlVideoExample1.text}
          language={htmlVideoExample1.language}
          theme={htmlVideoExample1.theme}
          wrapLines
        />
      </div>
      <div>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
          <li>
            The &lt;video&gt; tag defines the video player, with width and
            height attributes setting its dimensions.
          </li>
          <li>
            The controls attribute adds playback controls like play, pause, and
            volume.
          </li>
        </ul>
      </div>
      <p className="text-lg font-bold text-red-500 pt-4">HTML Video Tags</p>

      <p className="pb-4">
        Here are the HTML tags used for adding video content :{" "}
      </p>
      <div>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
          <li>
            <b>&lt;video&gt; :</b> Defines a video or movie on a webpage.
          </li>
          <li>
            <b>&lt;source&gt; :</b> Specifies multiple media resources for video
            or audio elements (e.g., different video formats).
          </li>
          <li>
            Adds text tracks (like subtitles or captions) to a video or audio
            element.
          </li>
        </ul>
      </div>
      <div>
        <p className="text-lg font-bold text-red-500 pt-4 pb-3">
          Supported Formats
        </p>
        <p>
          Three different formats are commonly supported by web browsers –{" "}
          <b>mp4</b>, <b>Ogg</b>, and <b>WebM</b>. The table below lists the
          formats supported by different browsers:
        </p>
      </div>
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
                  textAlign: "center",
                  color: "red",
                }}
              >
                Browser
              </th>
              <th
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  textAlign: "center",
                  color: "red",
                }}
              >
                MP4
              </th>
              <th
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  textAlign: "center",
                  color: "red",
                }}
              >
                WebM
              </th>
              <th
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  textAlign: "center",
                  color: "red",
                }}
              >
                OGG
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  textAlign: "center",
                }}
              >
                Google Chrome
              </td>
              <td
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  textAlign: "center",
                }}
              >
                Yes
              </td>
              <td
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  textAlign: "center",
                }}
              >
                Yes
              </td>
              <td
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  textAlign: "center",
                }}
              >
                Yes
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  textAlign: "center",
                }}
              >
                Internet Explorer
              </td>
              <td
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  textAlign: "center",
                }}
              >
                Yes
              </td>
              <td
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  textAlign: "center",
                }}
              >
                No
              </td>
              <td
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  textAlign: "center",
                }}
              >
                No
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  textAlign: "center",
                }}
              >
                Firefox
              </td>
              <td
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  textAlign: "center",
                }}
              >
                Yes
              </td>
              <td
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  textAlign: "center",
                }}
              >
                Yes
              </td>
              <td
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  textAlign: "center",
                }}
              >
                Yes
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  textAlign: "center",
                }}
              >
                Opera
              </td>
              <td
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  textAlign: "center",
                }}
              >
                Yes
              </td>
              <td
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  textAlign: "center",
                }}
              >
                Yes
              </td>
              <td
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  textAlign: "center",
                }}
              >
                Yes
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  textAlign: "center",
                }}
              >
                Safari
              </td>
              <td
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  textAlign: "center",
                }}
              >
                Yes
              </td>
              <td
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  textAlign: "center",
                }}
              >
                Yes
              </td>
              <td
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  textAlign: "center",
                }}
              >
                No
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <p className="text-lg font-bold text-red-500 pt-4 pb-3">
        Additional Attributes
      </p>
      <div className="flex mt-4">
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
                    textAlign: "center",
                    color: "red",
                  }}
                >
                  Attributes
                </th>
                <th
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    textAlign: "center",
                    color: "red",
                  }}
                >
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    textAlign: "center",
                    
                    color: "red",
                  }}
                >
                  Autoplay
                </td>
                <td
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    textAlign: "center",
                  }}
                >
                  Starts playing the video automatically.
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    textAlign: "center",
                    
                    color: "red",
                  }}
                >
                  Preload
                </td>
                <td
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    textAlign: "center",
                  }}
                >
                  Provides a hint to the browser about the best user experience.
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    textAlign: "center",
                    
                    color: "red",
                  }}
                >
                  Loop
                </td>
                <td
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    textAlign: "center",
                  }}
                >
                  Automatically loops the video.
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    textAlign: "center",
                    
                    color: "red",
                  }}
                >
                  height
                </td>
                <td
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    textAlign: "center",
                  }}
                >
                  It sets the height of the video in CSS pixels.
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    textAlign: "center",
                    
                    color: "red",
                  }}
                >
                  width
                </td>
                <td
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    textAlign: "center",
                  }}
                >
                  It determines the width of the video display area on the web
                  page.
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    textAlign: "center",
                    
                    color: "red",
                  }}
                >
                  Controls
                </td>
                <td
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    textAlign: "center",
                  }}
                >
                  It shows the default video controls like play, pause, volume,
                  etc.
                </td>
              </tr>{" "}
              <tr>
                <td
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    textAlign: "center",
                    
                    color: "red",
                  }}
                >
                  Muted
                </td>
                <td
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    textAlign: "center",
                  }}
                >
                  Mutes the audio.
                </td>
              </tr>{" "}
              <tr>
                <td
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    textAlign: "center",
                    
                    color: "red",
                  }}
                >
                  Poster
                </td>
                <td
                  style={{
                    padding: "10px",
                    border: "1px solid #ddd",
                    textAlign: "center",
                  }}
                >
                  Displays an image preview before video loading.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="m-2">
        <h3 className="font-bold text-red-500">More Examples of HTML video</h3>
        <br />
        <h1 className="font-bold mb-5 text-red-500">Responsive Video with Poster Image</h1>
      </div>
      <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4 p-5 pt-0 pb-0 ">
        <CopyBlock
          text={htmlVideoExample2.text}
          language={htmlVideoExample2.language}
          theme={htmlVideoExample2.theme}
          wrapLines
        />
      </div>
      <div className="p-2 ml-5 ">
        <ul className="list-disc text-base">
          <li className="">
            The video is made responsive with CSS, adjusting its width to 100%
            of its container while maintaining the aspect ratio.
          </li>
          <li>
            The{" "}
            <span className="text-blue-500  hover:text-red-500 pointer">
              poster attribute
            </span>
            &nbsp;, displays a placeholder image before the video loads or
            plays, enhancing the user experience.
          </li>
        </ul>
      </div>
      <h1 className="font-bold mb-2 text-red-500 m-3 ml-0 text-xl">
        Customized Video Controls with Autoplay and Loop
      </h1>
      <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4 p-5 pt-0 pb-0 ">
        <CopyBlock
          text={htmlVideoExample3.text}
          language={htmlVideoExample3.language}
          theme={htmlVideoExample3.theme}
          wrapLines
        />
      </div>
      <div className="p-2 ml-5">
        <ul className="list-disc  text-base">
          <li className="">
            The video is styled with a green border, rounded corners, and a
            red background to enhance its appearance.
          </li>
          <li>
            The{" "}
            <span className="text-blue-500  hover:text-red-500">
              autoplay
            </span>
            , loop, and{" "}
            <span className="text-blue-500  hover:text-red-500">
              muted
            </span>{" "}
            attributes ensure the video plays automatically, repeats
            indefinitely, and starts without sound, respectively.
          </li>
        </ul>
      </div>
      <h1 className="text-xl font-bold text-red-500 m-5 mt-1 ml-0">
        {" "}
        Best Practices for &lt;Video&gt; HTML Element
      </h1>
      <div className="p-2 ml-5">
        <ul className="list-disc text-base">
          <li className="">
            <span className="font-bold text-red-500">Provide Multiple Formats:</span>
            &nbsp;Include various video formats (e.g., MP4, WebM) to ensure
            compatibility across different browsers.
          </li>
          <li>
            <span className="font-bold text-red-500">Optimize Video Size:</span>
            &nbsp;Compress videos to reduce loading times, enhancing user experience.
          </li>
          <li>
            <span className="font-bold text-red-500">Use the controls Attribute:</span>
            &nbsp;Add playback controls to allow users to play, pause, and adjust
            volume.
          </li>
          <li>
            <span className="font-bold text-red-500"> Set Appropriate Dimensions:</span>{" "}
            &nbsp;Define width and height to maintain consistent layout and prevent
            layout shifts.
          </li>
        </ul>
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

export default HTMLVideo;
