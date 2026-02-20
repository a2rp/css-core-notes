// transitions/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiZap,
    FiClock,
    FiSliders,
    FiFastForward,
    FiTrendingUp,
    FiActivity,
    FiCode,
} from "react-icons/fi";

const Transitions = () => {
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
                    <FiZap />
                </span>

                <span className="title">Transitions</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <div className="pill">
                        <span className="pillIcon">
                            <FiActivity />
                        </span>
                        Smooth state changes
                    </div>

                    <p className="p">
                        CSS transitions animate the change from one value to
                        another. Most commonly used for hover, focus, active,
                        and class toggles.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">transition-property</h3>
                    <p className="p">
                        Decides which CSS property should animate. You can
                        animate one property, multiple properties, or use
                        <span className="mono"> all</span> (not always
                        recommended).
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Animate one:
                            <span className="mono"> opacity</span>
                        </li>
                        <li>
                            <span className="dot" />
                            Animate many:
                            <span className="mono"> opacity, transform</span>
                        </li>
                        <li>
                            <span className="dot" />
                            Animate everything:
                            <span className="mono"> all</span>
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="h3">transition-duration</h3>
                    <p className="p">
                        How long the transition takes. Common values are
                        <span className="mono"> 150ms</span>,
                        <span className="mono"> 200ms</span>,
                        <span className="mono"> 300ms</span>.
                    </p>

                    <div className="mini">
                        <span className="miniIcon">
                            <FiClock />
                        </span>
                        <div className="miniText">
                            <div className="miniTitle">Duration</div>
                            <div className="miniSub">Example: 200ms</div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">transition-timing-function</h3>
                    <p className="p">
                        Controls the speed curve of the animation. It decides
                        whether it starts slow, ends slow, or stays linear.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            <span className="mono">linear</span> - constant
                            speed
                        </li>
                        <li>
                            <span className="dot" />
                            <span className="mono">ease</span> - default, smooth
                        </li>
                        <li>
                            <span className="dot" />
                            <span className="mono">ease-in</span> - starts slow
                        </li>
                        <li>
                            <span className="dot" />
                            <span className="mono">ease-out</span> - ends slow
                        </li>
                        <li>
                            <span className="dot" />
                            <span className="mono">ease-in-out</span> - slow
                            start and end
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="h3">transition-delay</h3>
                    <p className="p">
                        Wait time before the transition starts. Useful when you
                        want a small pause, or to stagger interactions.
                    </p>

                    <div className="mini">
                        <span className="miniIcon">
                            <FiFastForward />
                        </span>
                        <div className="miniText">
                            <div className="miniTitle">Delay</div>
                            <div className="miniSub">Example: 80ms</div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">cubic-bezier</h3>
                    <p className="p">
                        A custom timing curve. You can fine-tune how the
                        transition accelerates and decelerates. It uses 4
                        numbers that define a curve.
                    </p>

                    <div className="callout">
                        <div className="calloutTitle">
                            <span className="calloutIcon">
                                <FiTrendingUp />
                            </span>
                            Quick idea
                        </div>
                        <div className="calloutText">
                            First two numbers control the curve near the start.
                            Last two numbers control the curve near the end.
                        </div>
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Custom curve example
                        </div>
                        <pre className="code">
                            {`transition-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Easing functions</h3>
                    <p className="p">
                        Easing means the motion feels natural instead of
                        robotic. Most UI transitions look better when they
                        accelerate a bit and slow down at the end.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Recommended UI transition
                        </div>
                        <pre className="code">
                            {`transition: transform 200ms ease, opacity 200ms ease;`}
                        </pre>
                    </div>

                    <div className="footerNote">
                        <div className="footerTitle">Quick tip</div>
                        <p className="p muted">
                            Prefer animating
                            <span className="mono"> transform</span> and
                            <span className="mono"> opacity</span>. They are
                            smoother and usually cheaper for the browser than
                            layout properties like width or top.
                        </p>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Transitions;
