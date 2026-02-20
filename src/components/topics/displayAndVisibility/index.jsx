// displayAndVisibility/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiEye,
    FiLayout,
    FiBox,
    FiHelpCircle,
    FiCode,
} from "react-icons/fi";

const DisplayAndVisibility = () => {
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
                    <FiLayout />
                </span>

                <span className="title">Display and Visibility</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <div className="pill">
                        <span className="pillIcon">
                            <FiEye />
                        </span>
                        Layout presence vs visual presence
                    </div>

                    <p className="p">
                        These properties decide whether an element participates
                        in layout, and whether it is visible to the user.
                        Understanding this saves a lot of "why is spacing still
                        there" debugging time.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">display values</h3>
                    <p className="p">
                        The <span className="mono">display</span> property
                        controls how an element behaves in the layout. It can
                        act like a block, inline text, a mixed type, or be
                        removed from layout completely.
                    </p>

                    <div className="miniGrid">
                        <div className="mini">
                            <span className="miniIcon">
                                <FiBox />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">Layout</div>
                                <div className="miniSub">Space rules</div>
                            </div>
                        </div>

                        <div className="mini">
                            <span className="miniIcon">
                                <FiEye />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">Visibility</div>
                                <div className="miniSub">Seen or hidden</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">block</h3>
                    <p className="p">
                        A block element starts on a new line and takes the full
                        available width by default. You can set width and
                        height.
                    </p>

                    <div className="rules">
                        <div className="rule">
                            <span className="dot" />
                            New line (stacked vertically)
                        </div>
                        <div className="rule">
                            <span className="dot" />
                            Can set width and height
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">inline</h3>
                    <p className="p">
                        Inline elements stay within a line of text. They do not
                        start a new line. Width and height generally do not
                        apply (they size to content).
                    </p>

                    <div className="rules">
                        <div className="rule">
                            <span className="dot" />
                            Same line (flows like text)
                        </div>
                        <div className="rule">
                            <span className="dot" />
                            Width and height usually ignored
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">inline-block</h3>
                    <p className="p">
                        Inline-block behaves like inline (stays in the same
                        line), but you can set width and height like a block.
                        Useful for buttons, badges, small UI parts.
                    </p>

                    <div className="rules">
                        <div className="rule">
                            <span className="dot" />
                            Stays inline
                        </div>
                        <div className="rule">
                            <span className="dot" />
                            Supports width and height
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">none</h3>
                    <p className="p">
                        <span className="mono">display: none</span> removes the
                        element from the layout completely. It does not take
                        space and is not visible.
                    </p>

                    <div className="callout">
                        <div className="calloutTitle">
                            <span className="calloutIcon">
                                <FiHelpCircle />
                            </span>
                            Remember
                        </div>
                        <div className="calloutText">
                            If you need to hide something and remove its space,
                            use display: none.
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">contents</h3>
                    <p className="p">
                        <span className="mono">display: contents</span> makes
                        the element's box disappear, but its children stay and
                        behave as if they were direct children of the parent.
                        Useful in some layouts, but be careful with
                        accessibility and styling expectations.
                    </p>

                    <div className="callout">
                        <div className="calloutTitle">
                            <span className="calloutIcon">
                                <FiHelpCircle />
                            </span>
                            Use carefully
                        </div>
                        <div className="calloutText">
                            The wrapper stops existing as a box. So background,
                            padding, borders on that wrapper will not show.
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">visibility</h3>
                    <p className="p">
                        <span className="mono">visibility</span> controls if an
                        element is visible, but the element still keeps its
                        space in the layout.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            <span className="mono">visibility: visible</span>
                            shows it
                        </li>
                        <li>
                            <span className="dot" />
                            <span className="mono">visibility: hidden</span>
                            hides it but keeps space
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="h3">opacity vs visibility</h3>
                    <p className="p">
                        <span className="mono">opacity: 0</span> makes the
                        element fully transparent, but it still takes space.
                        Unlike visibility hidden, opacity elements can still
                        receive clicks unless you also disable pointer events.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Click-safe hiding
                        </div>
                        <pre className="code">
                            {`.hidden {
  opacity: 0;
  pointer-events: none;
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">display vs visibility</h3>
                    <p className="p">
                        Use <span className="mono">display: none</span> when you
                        want the element gone from layout. Use{" "}
                        <span className="mono">visibility: hidden</span> when
                        you want to hide it but keep its space. Use{" "}
                        <span className="mono">opacity</span> for fade effects,
                        but remember it can still be clickable.
                    </p>

                    <div className="compare">
                        <div className="compareCard">
                            <div className="compareTitle">display: none</div>
                            <div className="compareRow">
                                <span className="k">Visible</span>
                                <span className="v bad">No</span>
                            </div>
                            <div className="compareRow">
                                <span className="k">Takes space</span>
                                <span className="v bad">No</span>
                            </div>
                            <div className="compareRow">
                                <span className="k">Clickable</span>
                                <span className="v bad">No</span>
                            </div>
                        </div>

                        <div className="compareCard">
                            <div className="compareTitle">
                                visibility: hidden
                            </div>
                            <div className="compareRow">
                                <span className="k">Visible</span>
                                <span className="v bad">No</span>
                            </div>
                            <div className="compareRow">
                                <span className="k">Takes space</span>
                                <span className="v ok">Yes</span>
                            </div>
                            <div className="compareRow">
                                <span className="k">Clickable</span>
                                <span className="v bad">No</span>
                            </div>
                        </div>

                        <div className="compareCard">
                            <div className="compareTitle">opacity: 0</div>
                            <div className="compareRow">
                                <span className="k">Visible</span>
                                <span className="v bad">No</span>
                            </div>
                            <div className="compareRow">
                                <span className="k">Takes space</span>
                                <span className="v ok">Yes</span>
                            </div>
                            <div className="compareRow">
                                <span className="k">Clickable</span>
                                <span className="v ok">Yes</span>
                            </div>
                        </div>
                    </div>

                    <div className="footNote">
                        Quick hack: if you use opacity for animation, pair it
                        with <span className="mono">pointer-events: none</span>{" "}
                        when hidden.
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default DisplayAndVisibility;
