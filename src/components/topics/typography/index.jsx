// typography/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiType,
    FiFeather,
    FiGrid,
    FiAlignLeft,
    FiZap,
    FiCode,
} from "react-icons/fi";

const Typography = () => {
    const [open, setOpen] = useState(false);

    const toggle = () => setOpen((v) => !v);

    return (
        <Styled.Wrapper className={`topicCard ${open ? "open" : ""}`}>
            <button
                type="button"
                className="topicHeader"
                onClick={toggle}
                aria-expanded={open}
            >
                <span className="chev">
                    {open ? <FiChevronDown /> : <FiChevronRight />}
                </span>

                <span className="icon">
                    <FiType />
                </span>

                <span className="title">Typography</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <div className="pill">
                        <span className="pillIcon">
                            <FiFeather />
                        </span>
                        Text styling essentials
                    </div>

                    <p className="p">
                        Typography in CSS controls how text looks and reads.
                        These properties cover fonts, sizing, spacing,
                        alignment, wrapping, and custom fonts.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">font-family</h3>
                    <p className="p">
                        Sets the font for text. Always include a fallback list,
                        ending with a generic family like sans-serif.
                    </p>
                    <pre className="code">{`font-family: "Inter", system-ui, Arial, sans-serif;`}</pre>
                </div>

                <div className="section">
                    <h3 className="h3">Web safe fonts</h3>
                    <p className="p">
                        Fonts commonly available on most systems. Examples:
                        Arial, Verdana, Georgia, Times New Roman, Courier New.
                        These reduce dependency on downloads.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">font-size</h3>
                    <p className="p">
                        Controls text size. Common units are px, rem, and em.
                        For scalable UI, rem is usually easier to manage.
                    </p>
                    <pre className="code">{`font-size: 16px; /* or 1rem */`}</pre>
                </div>

                <div className="section">
                    <h3 className="h3">font-weight</h3>
                    <p className="p">
                        Controls thickness of characters. Typical values are 400
                        (normal), 600 (semi-bold), 700 (bold). Not every font
                        supports all weights.
                    </p>
                    <pre className="code">{`font-weight: 700;`}</pre>
                </div>

                <div className="section">
                    <h3 className="h3">font-style</h3>
                    <p className="p">
                        Controls italic style. Usually normal or italic.
                    </p>
                    <pre className="code">{`font-style: italic;`}</pre>
                </div>

                <div className="section">
                    <h3 className="h3">line-height</h3>
                    <p className="p">
                        Controls vertical spacing between lines. A unitless
                        value is recommended because it scales with font-size.
                    </p>
                    <pre className="code">{`line-height: 1.6;`}</pre>
                </div>

                <div className="section">
                    <h3 className="h3">letter-spacing</h3>
                    <p className="p">
                        Adds spacing between letters. Useful for headings, but
                        too much can reduce readability.
                    </p>
                    <pre className="code">{`letter-spacing: 0.4px;`}</pre>
                </div>

                <div className="section">
                    <h3 className="h3">word-spacing</h3>
                    <p className="p">
                        Adds spacing between words. Use lightly, mainly for
                        special UI styles.
                    </p>
                    <pre className="code">{`word-spacing: 2px;`}</pre>
                </div>

                <div className="section">
                    <h3 className="h3">text-align</h3>
                    <p className="p">
                        Aligns inline content inside a block. Common values:
                        left, center, right, justify.
                    </p>
                    <pre className="code">{`text-align: center;`}</pre>
                </div>

                <div className="section">
                    <h3 className="h3">text-decoration</h3>
                    <p className="p">
                        Adds decoration like underline. Often used on links. Use
                        underline-offset for nicer look.
                    </p>
                    <pre className="code">{`text-decoration: underline;
text-underline-offset: 3px;`}</pre>
                </div>

                <div className="section">
                    <h3 className="h3">text-transform</h3>
                    <p className="p">
                        Changes letter casing without editing the actual text.
                        Values: uppercase, lowercase, capitalize.
                    </p>
                    <pre className="code">{`text-transform: uppercase;`}</pre>
                </div>

                <div className="section">
                    <h3 className="h3">text-shadow</h3>
                    <p className="p">
                        Adds shadow to text. Use subtle values. Too much looks
                        messy and hurts readability.
                    </p>
                    <pre className="code">{`text-shadow: 0 1px 10px rgba(0, 0, 0, 0.35);`}</pre>
                </div>

                <div className="section">
                    <h3 className="h3">white-space</h3>
                    <p className="p">
                        Controls how spaces and line breaks behave. Common:
                        normal (default), nowrap (single line), pre (respects
                        spaces and new lines).
                    </p>
                    <pre className="code">{`white-space: nowrap;`}</pre>
                </div>

                <div className="section">
                    <h3 className="h3">text-overflow</h3>
                    <p className="p">
                        Controls what happens when text overflows a single line.
                        Usually used with overflow hidden and white-space
                        nowrap.
                    </p>

                    <div className="callout">
                        <div className="calloutTitle">
                            <span className="calloutIcon">
                                <FiZap />
                            </span>
                            Ellipsis combo
                        </div>
                        <pre className="code tight">{`overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;`}</pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">overflow-wrap</h3>
                    <p className="p">
                        Prevents long words or URLs from breaking layout. Use
                        anywhere for safer text wrapping.
                    </p>
                    <pre className="code">{`overflow-wrap: anywhere;`}</pre>
                </div>

                <div className="section">
                    <h3 className="h3">@font-face</h3>
                    <p className="p">
                        Lets you load and use custom fonts by providing font
                        files. Best practice is to use woff2 and define
                        font-display.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`@font-face {
  font-family: "MyFont";
  src: url("/fonts/myfont.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}`}
                        </pre>
                    </div>
                </div>

                <div className="footerNote">
                    <div className="footerTitle">Quick best practices</div>
                    <ul className="checks">
                        <li>
                            <span className="checkDot" />
                            Prefer rem and unitless line-height
                        </li>
                        <li>
                            <span className="checkDot" />
                            Always add fallback fonts
                        </li>
                        <li>
                            <span className="checkDot" />
                            Use overflow-wrap for long content
                        </li>
                        <li>
                            <span className="checkDot" />
                            Use font-display: swap for custom fonts
                        </li>
                    </ul>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Typography;
