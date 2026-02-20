// advancedLayoutVisualEffects/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiAperture,
    FiImage,
    FiCrop,
    FiSliders,
    FiLayers,
    FiGrid,
    FiMove,
} from "react-icons/fi";

const AdvancedLayoutVisualEffects = () => {
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
                    <FiAperture />
                </span>

                <span className="title">
                    Advanced Layout and Visual Effects
                </span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <div className="pill">
                        <span className="pillIcon">
                            <FiLayers />
                        </span>
                        Practical modern CSS effects
                    </div>

                    <p className="p">
                        These properties help you control how media fits inside
                        boxes, apply visual effects, shape elements, and create
                        smooth scrolling experiences.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">object-fit</h3>
                    <p className="p">
                        Controls how an image or video fits inside its box when
                        you set fixed width and height. Most common values are
                        <span className="mono"> cover </span> (fills, may crop)
                        and <span className="mono"> contain </span> (fits fully,
                        may leave empty space).
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiImage />
                            </span>
                            Common usage
                        </div>
                        <pre className="code">
                            {`.thumb img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">object-position</h3>
                    <p className="p">
                        Works with <span className="mono">object-fit</span>.
                        When the media is cropped (like cover), this decides
                        which part stays visible. Example: keep the top of a
                        portrait visible.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiMove />
                            </span>
                            Focus area
                        </div>
                        <pre className="code">
                            {`.thumb img {
  object-fit: cover;
  object-position: top;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">filter</h3>
                    <p className="p">
                        Adds visual effects to an element like blur, brightness,
                        contrast, grayscale, and drop shadow. Useful for image
                        tweaks and hover effects.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiSliders />
                            </span>
                            Example
                        </div>
                        <pre className="code">
                            {`.img {
  filter: grayscale(100%);
}
.img:hover {
  filter: grayscale(0%);
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">backdrop-filter</h3>
                    <p className="p">
                        Applies effects to what is behind an element. Common for
                        glassmorphism. It works best with a semi-transparent
                        background. Note: performance heavy on low-end devices,
                        so use carefully.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiLayers />
                            </span>
                            Glass style
                        </div>
                        <pre className="code">
                            {`.glass {
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
  border: 1px solid var(--color-border);
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">mix-blend-mode</h3>
                    <p className="p">
                        Controls how an element blends with the background, like
                        Photoshop layer blending. Useful for creative overlays,
                        but can reduce readability if overused.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiLayers />
                            </span>
                            Overlay effect
                        </div>
                        <pre className="code">
                            {`.overlay {
  mix-blend-mode: screen;
  opacity: 0.6;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">clip-path</h3>
                    <p className="p">
                        Crops an element into a shape. Common shapes are
                        <span className="mono"> circle </span>,
                        <span className="mono"> ellipse </span>, and
                        <span className="mono"> polygon </span>. Great for
                        badges and angled sections.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCrop />
                            </span>
                            Polygon cut
                        </div>
                        <pre className="code">
                            {`.tag {
  clip-path: polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%);
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">mask</h3>
                    <p className="p">
                        Masks hide parts of an element using an image or
                        gradient. Similar to clip-path but more flexible for
                        soft edges and fades. Support can vary, so test in your
                        target browsers.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiAperture />
                            </span>
                            Gradient mask
                        </div>
                        <pre className="code">
                            {`.fade {
  -webkit-mask-image: linear-gradient(to bottom, #000 60%, transparent);
  mask-image: linear-gradient(to bottom, #000 60%, transparent);
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">aspect-ratio</h3>
                    <p className="p">
                        Forces a box to keep a width:height ratio. Great for
                        cards, video embeds, and image placeholders. Helps avoid
                        layout shift while media loads.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiGrid />
                            </span>
                            Card ratio
                        </div>
                        <pre className="code">
                            {`.videoBox {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: var(--color-surface-2);
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">scroll-behavior</h3>
                    <p className="p">
                        Controls smooth scrolling for anchor links and
                        programmatic scrolls. Usually set on
                        <span className="mono"> html </span>. Respect
                        reduced-motion settings for accessibility.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiMove />
                            </span>
                            Smooth scroll
                        </div>
                        <pre className="code">
                            {`html {
  scroll-behavior: smooth;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">scroll-snap</h3>
                    <p className="p">
                        Makes scrolling "snap" to items, like carousels or full
                        page sections. Use it on the scroll container and on
                        child items.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiGrid />
                            </span>
                            Snap list
                        </div>
                        <pre className="code">
                            {`.snapRow {
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}
.snapItem {
  scroll-snap-align: start;
}`}
                        </pre>
                    </div>
                </div>

                <div className="footerNote">
                    <div className="footerTitle">Quick tip</div>
                    <p className="p">
                        Use visual effects carefully. Filters, blend modes, and
                        backdrop filters can be expensive on low-end devices.
                        Prefer subtle usage and test performance.
                    </p>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default AdvancedLayoutVisualEffects;
