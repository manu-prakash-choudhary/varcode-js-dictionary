import React from "react";
import { CopyBlock } from "react-code-blocks";
import { htmlSymbolsCopy, htmlSymbolsReg, htmlSymbolsTrade, htmlSymbolsCommat, htmlSymbolsParagraph, htmlSymbolsSection, htmlSymbolsCopf,
   htmlSymbolsIncare, htmlSymbolsGscr, htmlSymbolsHamilt, htmlSymbolsHfr, htmlSymbolsHopf, htmlSymbolsPlanckh, htmlSymbolsPlanck, htmlSymbolsIscr, htmlSymbolsImage,
   htmlSymbolsLscr, htmlSymbolsEll, htmlSymbolsNopf, htmlSymbolsNumero, htmlSymbolsCopysr, htmlSymbolsWeierp, htmlSymbolsQopf, htmlSymbolsSign,
   htmlSymbolsRscr, htmlSymbolsReal, htmlSymbolsRopf, htmlSymbolsRx, htmlSymbolsZopf, htmlSymbolsMho, htmlSymbolsZfr, htmlSymbolsIiota, htmlSymbolsBernou, htmlSymbolsCfr,
   htmlSymbolsEscr,  htmlSymbolsEScr, htmlSymbolsFscr, htmlSymbolsMscr, htmlSymbolsOscr, htmlSymbolsAlefsym, htmlSymbolsBeth, htmlSymbolsGimel,
   htmlSymbolsDaleth, htmlSymbolsDd, htmlSymbolsEe, htmlSymbolsIi, htmlSymbolsStarf, htmlSymbolsStar, htmlSymbolsPhone,  htmlSymbolsFemale, htmlSymbolsMale,
   htmlSymbolsSpades, htmlSymbolsClubs, htmlSymbolsHearts, htmlSymbolsDiams, htmlSymbolsSung, htmlSymbolsFlat, htmlSymbolsNatural, htmlSymbolsSharp, htmlSymbolsCheck,
   htmlSymbolsCross, htmlSymbolsMalt, htmlSymbolsSext, htmlSymbolsVertical} from "../../utils/CodeBlocks";

const HTMLSymbols = () => {
  return (
    <div className="content-container overflow-y-auto h-screen p-6">
      <div className="pl-0 flex flex-col gap-3">
        <h1 className="text-4xl font-semibold text-red-600">HTML Symbols</h1>
        <p className="text-gray-600">Last Updated : 29 Mar, 2025</p>
      </div>

      <br />

      <p className="text-gray-800 text-justify mb-4">
        <b>HTML Symbols</b> are special characters used in HTML to display characters that aren’t on the keyboard or might cause issues with HTML code. 
        Like if you used <code>&lt;</code> (less than) and <code>&gt;</code> (greater than) symbols in your HTML document, the browser will treat them differently.
      </p>

      <p>To define HTML symbols, you can use either a named entity or a number entity.</p>

      <br />

      <p style={{ fontWeight: "bold", color: "black" }}>Commonly Used HTML Symbols</p>

      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            1. <span className="text-xl">© :</span> Copyright Sign :
          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;copy;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsCopy.text}
              language={htmlSymbolsCopy.language}
              theme={htmlSymbolsCopy.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            2. <span className="text-xl"> ® :</span> Registered Trade Mark Sign :
          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4  "
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;reg;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsReg.text}
              language={htmlSymbolsReg.language}
              theme={htmlSymbolsReg.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            3. <span className="text-xl"> ™ :</span> Trade Mark Sign :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;trade;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsTrade.text}
              language={htmlSymbolsTrade.language}
              theme={htmlSymbolsTrade.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            4. <span className="text-xl"> @ :</span> At Symbol Sign :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;commat;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsCommat.text}
              language={htmlSymbolsCommat.language}
              theme={htmlSymbolsCommat.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            5. <span className="text-xl"> ¶ :</span> Paragraph Sign :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;para;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsParagraph.text}
              language={htmlSymbolsParagraph.language}
              theme={htmlSymbolsParagraph.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            6. <span className="text-xl"> § :</span> Section Sign :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;sect;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsSection.text}
              language={htmlSymbolsSection.language}
              theme={htmlSymbolsSection.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            7. <span className="text-xl"> ℂ :</span> Double-Struck Capital C :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;copf;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsCopf.text}
              language={htmlSymbolsCopf.language}
              theme={htmlSymbolsCopf.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            8. <span className="text-xl"> ℅ :</span> Care Of :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;incare;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsIncare.text}
              language={htmlSymbolsIncare.language}
              theme={htmlSymbolsIncare.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            9. <span className="text-xl"> ℊ :</span> Script Small g Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;gscr;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsGscr.text}
              language={htmlSymbolsGscr.language}
              theme={htmlSymbolsGscr.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            10. <span className="text-xl"> ℋ :</span> Script Capital h Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;hamilt;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsHamilt.text}
              language={htmlSymbolsHamilt.language}
              theme={htmlSymbolsHamilt.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            11. <span className="text-xl"> ℌ :</span> Black-Letter Capital h Syntax :

          </p>
 
          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;hfr;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsHfr.text}
              language={htmlSymbolsHfr.language}
              theme={htmlSymbolsHfr.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            12. <span className="text-xl"> ℍ :</span> Double-Struck Capital h Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;hopf;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsHopf.text}
              language={htmlSymbolsHopf.language}
              theme={htmlSymbolsHopf.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            13. <span className="text-xl"> ℎ :</span> Planckh Constant Syntax :

          </p>

          <div
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;planckh;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsPlanckh.text}
              language={htmlSymbolsPlanckh.language}
              theme={htmlSymbolsPlanckh.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            14. <span className="text-xl"> ℏ :</span> Planck Constant Over Two pi Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}

          >
            <code>&amp;planck;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsPlanck.text}
              language={htmlSymbolsPlanck.language}
              theme={htmlSymbolsPlanck.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            15. <span className="text-xl"> ℐ :</span> Script Capital i Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;iscr;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsIscr.text}
              language={htmlSymbolsIscr.language}
              theme={htmlSymbolsIscr.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            16. <span className="text-xl"> ℑ :</span>  Black-Letter Capital Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;image;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsImage.text}
              language={htmlSymbolsImage.language}
              theme={htmlSymbolsImage.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            17. <span className="text-xl"> ℒ :</span> Script Capital l Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;lscr; </code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsLscr.text}
              language={htmlSymbolsLscr.language}
              theme={htmlSymbolsLscr.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            18. <span className="text-xl"> ℓ :</span> Script Small l Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;ell;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsEll.text}
              language={htmlSymbolsEll.language}
              theme={htmlSymbolsEll.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            19. <span className="text-xl"> ℕ :</span> &nopf; Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;nopf;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsNopf.text}
              language={htmlSymbolsNopf.language}
              theme={htmlSymbolsNopf.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            20. <span className="text-xl"> № :</span> Numero Sign Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{ 
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;numero;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsNumero.text}
              language={htmlSymbolsNumero.language}
              theme={htmlSymbolsNumero.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            21. <span className="text-xl"> ℗ :</span> Sound Recording Copyright Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;copysr;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsCopysr.text}
              language={htmlSymbolsCopysr.language}
              theme={htmlSymbolsCopysr.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            22. <span className="text-xl"> ℘ :</span> Script Capital p Syntax  :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;weierp;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsWeierp.text}
              language={htmlSymbolsWeierp.language}
              theme={htmlSymbolsWeierp.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            23. <span className="text-xl"> ℚ :</span> Double-Struck Capital q Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;qopf;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsQopf.text}
              language={htmlSymbolsQopf.language}
              theme={htmlSymbolsQopf.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            24. <span className="text-xl"> ” : ”</span> Sign Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsSign.text}
              language={htmlSymbolsSign.language}
              theme={htmlSymbolsSign.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            25. <span className="text-xl"> ℛ :</span> Script Capital r Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;rscr;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsRscr.text}
              language={htmlSymbolsRscr.language}
              theme={htmlSymbolsRscr.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            26. <span className="text-xl"> ℜ :</span> Black-Letter Capital r Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;real;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsReal.text}
              language={htmlSymbolsReal.language}
              theme={htmlSymbolsReal.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            27. <span className="text-xl"> ℝ :</span> Double-Struck Capital r Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;ropf;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsRopf.text}
              language={htmlSymbolsRopf.language}
              theme={htmlSymbolsRopf.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            28. <span className="text-xl"> ℞ :</span> Prescription Take Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;rx;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsRx.text}
              language={htmlSymbolsRx.language}
              theme={htmlSymbolsRx.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            29. <span className="text-xl"> ℤ :</span> Double-Struck Capital z Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;zopf;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsZopf.text}
              language={htmlSymbolsZopf.language}
              theme={htmlSymbolsZopf.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            30. <span className="text-xl"> ℧ :</span> Inverted Ohm Sign :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;mho;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsMho.text}
              language={htmlSymbolsMho.language}
              theme={htmlSymbolsMho.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            31. <span className="text-xl"> ℨ :</span> Black-Letter Capital z Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;zfr;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsZfr.text}
              language={htmlSymbolsZfr.language}
              theme={htmlSymbolsZfr.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            32. <span className="text-xl"> ℩ :</span> Turned Greek Small Letter Iota Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;iiota;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsIiota.text}
              language={htmlSymbolsIiota.language}
              theme={htmlSymbolsIiota.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            33. <span className="text-xl"> ℬ :</span> Script Capital b Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;bernou;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsBernou.text}
              language={htmlSymbolsBernou.language}
              theme={htmlSymbolsBernou.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            34. <span className="text-xl"> ℭ :</span> Black-Letter Capital c Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;cfr;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsCfr.text}
              language={htmlSymbolsCfr.language}
              theme={htmlSymbolsCfr.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            35. <span className="text-xl"> ℯ :</span> Script Small e Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;escr;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsEscr.text}
              language={htmlSymbolsEscr.language}
              theme={htmlSymbolsEscr.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            36. <span className="text-xl"> ℰ :</span> Script Small e Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;escr;script small e syntax</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsEScr.text}
              language={htmlSymbolsEScr.language}
              theme={htmlSymbolsEScr.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            37. <span className="text-xl"> ℱ :</span> Script Capital f Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;fscr;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsFscr.text}
              language={htmlSymbolsFscr.language}
              theme={htmlSymbolsFscr.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            38. <span className="text-xl"> ℳ :</span> Script Capital m Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;mscr;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsMscr.text}
              language={htmlSymbolsMscr.language}
              theme={htmlSymbolsMscr.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            39. <span className="text-xl"> ℴ :</span> Script Capital o Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;oscr;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsOscr.text}
              language={htmlSymbolsOscr.language}
              theme={htmlSymbolsOscr.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            40. <span className="text-xl"> ℵ :</span> Alef Symbol Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;alefsym;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsAlefsym.text}
              language={htmlSymbolsAlefsym.language}
              theme={htmlSymbolsAlefsym.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            41. <span className="text-xl"> ℶ :</span> Bet Symbol Syntax  :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;beth;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsBeth.text}
              language={htmlSymbolsBeth.language}
              theme={htmlSymbolsBeth.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            42. <span className="text-xl"> ℷ :</span>  Gimel Symbol Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;gimel;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsGimel.text}
              language={htmlSymbolsGimel.language}
              theme={htmlSymbolsGimel.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            43. <span className="text-xl"> ℸ :</span> Dalet Symbol Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;daleth;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsDaleth.text}
              language={htmlSymbolsDaleth.language}
              theme={htmlSymbolsDaleth.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            44. <span className="text-xl"> ⅆ :</span> Double-Struck Italic Small d Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;dd;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsDd.text}
              language={htmlSymbolsDd.language}
              theme={htmlSymbolsDd.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            45. <span className="text-xl"> ⅇ :</span> Double-Struck Italic Small e Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;ee;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsEe.text}
              language={htmlSymbolsEe.language}
              theme={htmlSymbolsEe.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            46. <span className="text-xl"> ⅈ :</span> Double-Struck Italic Small i Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;ii;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsIi.text}
              language={htmlSymbolsIi.language}
              theme={htmlSymbolsIi.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            47. <span className="text-xl"> ★ :</span> Black Star Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;starf;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsStarf.text}
              language={htmlSymbolsStarf.language}
              theme={htmlSymbolsStarf.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            48. <span className="text-xl"> ☆ :</span> White Star Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;star;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsStar.text}
              language={htmlSymbolsStar.language}
              theme={htmlSymbolsStar.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            49. <span className="text-xl"> ☎ :</span> Black Telephone Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;phone;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsPhone.text}
              language={htmlSymbolsPhone.language}
              theme={htmlSymbolsPhone.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            50. <span className="text-xl"> ♀ :</span> Female Sign Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;female;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsFemale.text}
              language={htmlSymbolsFemale.language}
              theme={htmlSymbolsFemale.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            51. <span className="text-xl"> ♂ :</span> Male Sign Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;male;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsMale.text}
              language={htmlSymbolsMale.language}
              theme={htmlSymbolsMale.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            52. <span className="text-xl"> ♠ :</span> Black Spade Suit Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;spades;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsSpades.text}
              language={htmlSymbolsSpades.language}
              theme={htmlSymbolsSpades.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            53. <span className="text-xl"> ♣ :</span> Black Club Suit Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;clubs;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsClubs.text}
              language={htmlSymbolsClubs.language}
              theme={htmlSymbolsClubs.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            54. <span className="text-xl"> ♥ :</span> Black heart Suit Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;hearts;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsHearts.text}
              language={htmlSymbolsHearts.language}
              theme={htmlSymbolsHearts.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            55. <span className="text-xl"> ♦ :</span> Black Diamond Suit Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;diams;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsDiams.text}
              language={htmlSymbolsDiams.language}
              theme={htmlSymbolsDiams.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            56. <span className="text-xl"> ♪ :</span> Eighth Note Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;sung;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsSung.text}
              language={htmlSymbolsSung.language}
              theme={htmlSymbolsSung.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            57. <span className="text-xl"> ♭ :</span> Music Flat Sign Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;flat;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsFlat.text}
              language={htmlSymbolsFlat.language}
              theme={htmlSymbolsFlat.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            58. <span className="text-xl"> ♮ :</span> Music Natural Sign Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;natural;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsNatural.text}
              language={htmlSymbolsNatural.language}
              theme={htmlSymbolsNatural.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            59. <span className="text-xl"> ♯ :</span> Music Sharp Sign Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;sharp;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsSharp.text}
              language={htmlSymbolsSharp.language}
              theme={htmlSymbolsSharp.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            60. <span className="text-xl"> ✓ :</span> Check Mark Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;check;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsCheck.text}
              language={htmlSymbolsCheck.language}
              theme={htmlSymbolsCheck.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            61. <span className="text-xl"> ✗ :</span> Ballot x Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;&amp;sect;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsCross.text}
              language={htmlSymbolsCross.language}
              theme={htmlSymbolsCross.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            62. <span className="text-xl"> ✠ :</span> Maltese Cross Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;malt;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsMalt.text}
              language={htmlSymbolsMalt.language}
              theme={htmlSymbolsMalt.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            63. <span className="text-xl"> ✶ :</span> Six pointed Black Star Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;sext;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsSext.text}
              language={htmlSymbolsSext.language}
              theme={htmlSymbolsSext.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
      {/* Wrapper div for symbols section */}
      <div>
        {/* Copyright Sign */}
        <div className="mb-6">
          <p className="text-lg font-bold">
            64. <span className="text-xl"> ❘ :</span> Light Vertical Bar Syntax :

          </p>

          <div className="bg-[#eeeeee] p-4 rounded-2xl mb-4"
            // style={{
            //   backgroundColor: "#eeeeee",
            //   padding: "10px",
            //   borderRadius: "10px",
            //   display: "inline-block",
            //   paddingRight: "1100px",
            //   minHeight: "50px",
            //   marginTop: "10px",
            // }}
          >
            <code>&amp;verticalseparator;</code>
          </div>

          <p>
            <b>Code :</b>
          </p>

          <div className="border border-red-400 rounded-2xl w-full min-h-20 bg-[#fafafa] mb-4">
            <CopyBlock
              text={htmlSymbolsVertical.text}
              language={htmlSymbolsVertical.language}
              theme={htmlSymbolsVertical.theme}
              wrapLines
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HTMLSymbols;
