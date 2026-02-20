// colorsAndBackgrounds/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiDroplet,
    FiImage,
    FiLayers,
    FiSliders,
    FiCode,
} from "react-icons/fi";

const ColorsAndBackgrounds = () => {
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
                    <FiDroplet />
                </span>

                <span className="title">Colors and Backgrounds</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <div className="pill">
                        <span className="pillIcon">
                            <FiLayers />
                        </span>
                        The visuals toolkit
                    </div>

                    <p className="p">
                        Colors set the mood. Backgrounds control surfaces. This
                        section covers common color formats, opacity, and
                        background properties including gradients.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">Color formats</h3>
                    <p className="p">
                        CSS supports multiple color notations. Pick one style
                        and stay consistent. Most projects use hex or rgb/rgba.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Named colors: <span className="mono">
                                red
                            </span>, <span className="mono">rebeccapurple</span>
                        </li>
                        <li>
                            <span className="dot" />
                            Hex: <span className="mono">#4ea1ff</span>,{" "}
                            <span className="mono">#0f1117</span>
                        </li>
                        <li>
                            <span className="dot" />
                            RGB: <span className="mono">rgb(78, 161, 255)</span>
                        </li>
                        <li>
                            <span className="dot" />
                            RGBA:{" "}
                            <span className="mono">
                                rgba(78, 161, 255, 0.6)
                            </span>
                        </li>
                        <li>
                            <span className="dot" />
                            HSL:{" "}
                            <span className="mono">hsl(210, 100%, 65%)</span>
                        </li>
                        <li>
                            <span className="dot" />
                            HSLA:{" "}
                            <span className="mono">
                                hsla(210, 100%, 65%, 0.6)
                            </span>
                        </li>
                    </ul>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Common examples
                        </div>
                        <pre className="code">
                            {`/* named */
color: red;

/* hex */
color: #4ea1ff;

/* rgb / rgba */
color: rgb(78, 161, 255);
color: rgba(78, 161, 255, 0.6);

/* hsl / hsla */
color: hsl(210, 100%, 65%);
color: hsla(210, 100%, 65%, 0.6);`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">opacity</h3>
                    <p className="p">
                        opacity affects the whole element including its content
                        (text, icons, children). If you only want the background
                        to be transparent, use rgba/hsla for the background
                        color instead.
                    </p>

                    <div className="callout">
                        <div className="calloutTitle">
                            <span className="calloutIcon">
                                <FiSliders />
                            </span>
                            Quick rule
                        </div>
                        <div className="calloutText">
                            opacity fades everything inside. rgba/hsla fades
                            only that color.
                        </div>
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            opacity vs rgba
                        </div>
                        <pre className="code">
                            {`/* fades whole element (including text) */
.card {
  opacity: 0.6;
}

/* only background becomes transparent */
.card {
  background: rgba(0, 0, 0, 0.6);
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">background basics</h3>
                    <p className="p">
                        Background properties control the element surface.
                        Backgrounds can be a solid color, an image, or a
                        gradient.
                    </p>

                    <div className="miniGrid">
                        <div className="mini">
                            <span className="miniIcon">
                                <FiDroplet />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">Color</div>
                                <div className="miniSub">background-color</div>
                            </div>
                        </div>

                        <div className="mini">
                            <span className="miniIcon">
                                <FiImage />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">Image</div>
                                <div className="miniSub">background-image</div>
                            </div>
                        </div>

                        <div className="mini">
                            <span className="miniIcon">
                                <FiLayers />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">Gradient</div>
                                <div className="miniSub">
                                    linear radial conic
                                </div>
                            </div>
                        </div>
                    </div>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            background-color
                        </li>
                        <li>
                            <span className="dot" />
                            background-image
                        </li>
                        <li>
                            <span className="dot" />
                            background-size
                        </li>
                        <li>
                            <span className="dot" />
                            background-position
                        </li>
                        <li>
                            <span className="dot" />
                            background-repeat
                        </li>
                        <li>
                            <span className="dot" />
                            background-attachment
                        </li>
                        <li>
                            <span className="dot" />
                            background shorthand
                        </li>
                    </ul>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Typical background image setup
                        </div>
                        <pre className="code">
                            {`.hero {
  background-image: url("/images/banner.jpg");
  background-size: cover;        /* cover | contain | 200px 100px */
  background-position: center;   /* left top | center | 20% 40% */
  background-repeat: no-repeat;  /* repeat | repeat-x | repeat-y */
}`}
                        </pre>
                    </div>

                    <div className="callout">
                        <div className="calloutTitle">
                            <span className="calloutIcon">
                                <FiImage />
                            </span>
                            background-attachment
                        </div>
                        <div className="calloutText">
                            background-attachment controls whether the
                            background scrolls with the page. Values: scroll
                            (default), fixed, local. fixed can feel like a
                            parallax effect but is not always mobile friendly.
                        </div>
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Background shorthand
                        </div>
                        <pre className="code">
                            {`/* shorthand (order can vary) */
.card {
  background: #0f1117 url("/images/noise.png") no-repeat center / cover;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Gradients</h3>
                    <p className="p">
                        Gradients are generated images. You set them using
                        background-image. They are great for subtle depth and
                        modern UI surfaces.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            linear-gradient: straight direction
                        </li>
                        <li>
                            <span className="dot" />
                            radial-gradient: circle or ellipse
                        </li>
                        <li>
                            <span className="dot" />
                            conic-gradient: around a center point
                        </li>
                    </ul>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Gradient examples
                        </div>
                        <pre className="code">
                            {`/* linear gradient */
.box1 {
  background-image: linear-gradient(90deg, #4ea1ff, #3fb950);
}

/* radial gradient */
.box2 {
  background-image: radial-gradient(circle at top left, #4ea1ff, transparent 60%);
}

/* conic gradient */
.box3 {
  background-image: conic-gradient(from 180deg, #4ea1ff, #d29922, #f85149, #4ea1ff);
}`}
                        </pre>
                    </div>

                    <div className="callout">
                        <div className="calloutTitle">
                            <span className="calloutIcon">
                                <FiLayers />
                            </span>
                            Tip
                        </div>
                        <div className="calloutText">
                            You can layer multiple backgrounds by separating
                            them with commas. The first one is on top.
                        </div>
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Multiple background layers
                        </div>
                        <pre className="code">
                            {`.card {
  background-image:
    radial-gradient(circle at 20% 20%, rgba(78,161,255,0.35), transparent 45%),
    linear-gradient(180deg, #161b22, #0f1117);
}`}
                        </pre>
                    </div>
                </div>

                <div className="footerNote">
                    <div className="footerTitle">Quick checklist</div>
                    <ul className="checks">
                        <li>
                            <span className="checkDot" />
                            Use rgba/hsla for transparent background only
                        </li>
                        <li>
                            <span className="checkDot" />
                            Use cover + center for hero images
                        </li>
                        <li>
                            <span className="checkDot" />
                            Gradients are background-image
                        </li>
                    </ul>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default ColorsAndBackgrounds;
