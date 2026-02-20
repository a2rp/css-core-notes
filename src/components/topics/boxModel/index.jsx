// boxModel/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiBox,
    FiLayers,
    FiMaximize2,
    FiSquare,
    FiMinusSquare,
    FiCrop,
    FiAlertCircle,
    FiEye,
} from "react-icons/fi";

const BoxModel = () => {
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
                    <FiBox />
                </span>

                <span className="title">The Box Model</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <div className="pill">
                        <span className="pillIcon">
                            <FiLayers />
                        </span>
                        Everything is a box
                    </div>

                    <p className="p">
                        In CSS, every element is a rectangle made of layers:
                        content, padding, border, and margin. Understanding this
                        makes layout bugs much easier to fix.
                    </p>

                    <div className="diagram">
                        <div className="dMargin">
                            <div className="dLabel">Margin</div>
                            <div className="dBorder">
                                <div className="dLabel">Border</div>
                                <div className="dPadding">
                                    <div className="dLabel">Padding</div>
                                    <div className="dContent">
                                        <div className="dLabel">Content</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="diagramNote">
                            Outer to inner: margin → border → padding → content
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Content box</h3>
                    <p className="p">
                        The content box is the actual space where text, images,
                        and child elements sit. Width and height usually apply
                        to the content box by default.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">Padding</h3>
                    <p className="p">
                        Padding is the inner space between the content and the
                        border. It increases the clickable and readable area of
                        an element.
                    </p>

                    <div className="miniRow">
                        <div className="mini">
                            <span className="miniIcon">
                                <FiMaximize2 />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">padding</div>
                                <div className="miniSub">adds space inside</div>
                            </div>
                        </div>
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">Example</div>
                        <pre className="code">{`button { padding: 10px 12px; }`}</pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Border</h3>
                    <p className="p">
                        Border wraps around the padding and content. Borders can
                        take space and affect layout because they add to the
                        element size (unless using border-box sizing).
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">Example</div>
                        <pre className="code">{`.card { border: 1px solid #2d333b; }`}</pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Margin</h3>
                    <p className="p">
                        Margin is the outer space around an element, used to
                        create gaps between elements. Margin is always outside
                        the border.
                    </p>

                    <div className="miniRow">
                        <div className="mini">
                            <span className="miniIcon">
                                <FiMinusSquare />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">margin</div>
                                <div className="miniSub">
                                    creates space outside
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">Example</div>
                        <pre className="code">{`.section { margin-bottom: 16px; }`}</pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">box-sizing</h3>
                    <p className="p">
                        box-sizing controls how width and height are calculated.
                        With content-box (default), width applies only to the
                        content. With border-box, width includes padding and
                        border too.
                    </p>

                    <div className="callout">
                        <div className="calloutTitle">
                            <span className="calloutIcon">
                                <FiSquare />
                            </span>
                            Best practice
                        </div>
                        <div className="calloutText">
                            Most projects use border-box to make sizing easier
                            and predictable.
                        </div>
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">Example</div>
                        <pre className="code">
                            {`* { box-sizing: border-box; }`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Margin collapse</h3>
                    <p className="p">
                        Vertical margins between block elements can collapse
                        into a single margin. That means margins do not always
                        add up the way you expect.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            Happens mostly with vertical margins (top and
                            bottom)
                        </li>
                        <li>
                            <span className="dot" />
                            Largest margin usually wins
                        </li>
                        <li>
                            <span className="dot" />
                            Does not happen in flex and grid layouts
                        </li>
                    </ul>

                    <div className="callout warn">
                        <div className="calloutTitle">
                            <span className="calloutIcon">
                                <FiAlertCircle />
                            </span>
                            Debug tip
                        </div>
                        <div className="calloutText">
                            If spacing looks "wrong", check margin collapse.
                            Adding padding or a border to the parent can stop
                            it.
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">overflow</h3>
                    <p className="p">
                        overflow controls what happens when content is larger
                        than the box. It can show, clip, scroll, or hide extra
                        content.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            overflow: visible (default)
                        </li>
                        <li>
                            <span className="dot" />
                            overflow: hidden (clips)
                        </li>
                        <li>
                            <span className="dot" />
                            overflow: auto (scroll if needed)
                        </li>
                        <li>
                            <span className="dot" />
                            overflow: scroll (always scroll)
                        </li>
                    </ul>

                    <div className="codeBlock">
                        <div className="codeTop">Example</div>
                        <pre className="code">{`.panel { overflow: auto; }`}</pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">Outline</h3>
                    <p className="p">
                        outline is similar to border but it does not take space
                        in layout. It is commonly used for focus indicators.
                    </p>

                    <div className="callout ok">
                        <div className="calloutTitle">
                            <span className="calloutIcon">
                                <FiEye />
                            </span>
                            Accessibility
                        </div>
                        <div className="calloutText">
                            Keep visible focus styles. outline is a simple and
                            solid way to show keyboard focus.
                        </div>
                    </div>

                    <div className="codeBlock">
                        <div className="codeTop">Example</div>
                        <pre className="code">
                            {`button:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 3px;
}`}
                        </pre>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default BoxModel;
