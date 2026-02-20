// animations/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronRight,
    FiFilm,
    FiZap,
    FiClock,
    FiRepeat,
    FiShuffle,
    FiLayers,
    FiPauseCircle,
    FiCode,
} from "react-icons/fi";

const Animations = () => {
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
                    <FiFilm />
                </span>

                <span className="title">Animations</span>

                <span className="meta">{open ? "Collapse" : "Expand"}</span>
            </button>

            <div className={`topicBody ${open ? "open" : ""}`}>
                <div className="intro">
                    <div className="pill">
                        <span className="pillIcon">
                            <FiZap />
                        </span>
                        Motion with keyframes
                    </div>

                    <p className="p">
                        CSS animations use{" "}
                        <span className="mono">@keyframes</span> to define
                        stages, and animation properties to control timing,
                        direction, looping, and play state.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">@keyframes</h3>
                    <p className="p">
                        <span className="mono">@keyframes</span> defines the
                        animation steps. You can use{" "}
                        <span className="mono">from/to</span> or percentages.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Keyframes example
                        </div>
                        <pre className="code">
                            {`@keyframes fadeUp {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}`}
                        </pre>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">animation-name</h3>
                    <p className="p">
                        Connects an element to a keyframes definition by name.
                        If the name is missing, nothing animates.
                    </p>

                    <div className="miniRow">
                        <div className="mini">
                            <span className="miniIcon">
                                <FiLayers />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">Name</div>
                                <div className="miniSub">fadeUp</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">animation-duration</h3>
                    <p className="p">
                        How long one animation cycle takes. Example:{" "}
                        <span className="mono">300ms</span>,{" "}
                        <span className="mono">1.2s</span>.
                    </p>

                    <div className="miniRow">
                        <div className="mini">
                            <span className="miniIcon">
                                <FiClock />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">Duration</div>
                                <div className="miniSub">600ms</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">animation-delay</h3>
                    <p className="p">
                        Wait time before the animation starts. It can be{" "}
                        <span className="mono">0s</span> or more.
                    </p>
                </div>

                <div className="section">
                    <h3 className="h3">animation-iteration-count</h3>
                    <p className="p">
                        How many times the animation repeats. Use{" "}
                        <span className="mono">1</span>,{" "}
                        <span className="mono">2</span>, or{" "}
                        <span className="mono">infinite</span>.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            <span className="mono">1</span> plays once
                        </li>
                        <li>
                            <span className="dot" />
                            <span className="mono">infinite</span> loops forever
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="h3">animation-direction</h3>
                    <p className="p">
                        Controls the direction on each cycle. Common values:
                        normal, reverse, alternate, alternate-reverse.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            <span className="mono">normal</span> - from start to
                            end
                        </li>
                        <li>
                            <span className="dot" />
                            <span className="mono">reverse</span> - from end to
                            start
                        </li>
                        <li>
                            <span className="dot" />
                            <span className="mono">alternate</span> - forward
                            then backward
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="h3">animation-fill-mode</h3>
                    <p className="p">
                        Decides what styles apply before start and after end.
                        This is super useful for entrance animations.
                    </p>

                    <ul className="bullets">
                        <li>
                            <span className="dot" />
                            <span className="mono">none</span> - default
                        </li>
                        <li>
                            <span className="dot" />
                            <span className="mono">forwards</span> - keep the
                            last keyframe styles
                        </li>
                        <li>
                            <span className="dot" />
                            <span className="mono">backwards</span> - apply
                            first keyframe during delay
                        </li>
                        <li>
                            <span className="dot" />
                            <span className="mono">both</span> - forwards +
                            backwards
                        </li>
                    </ul>
                </div>

                <div className="section">
                    <h3 className="h3">animation-play-state</h3>
                    <p className="p">
                        Controls whether an animation is running or paused. Good
                        for hover pause effects and user controls.
                    </p>

                    <div className="miniRow">
                        <div className="mini">
                            <span className="miniIcon">
                                <FiPauseCircle />
                            </span>
                            <div className="miniText">
                                <div className="miniTitle">Play state</div>
                                <div className="miniSub">running or paused</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h3 className="h3">animation shorthand</h3>
                    <p className="p">
                        A short way to set multiple animation properties in one
                        line. The order is flexible, but duration and name must
                        be clear.
                    </p>

                    <div className="codeBlock">
                        <div className="codeTop">
                            <span className="codeIcon">
                                <FiCode />
                            </span>
                            Shorthand example
                        </div>
                        <pre className="code">
                            {`.card {
  animation: fadeUp 600ms ease 120ms 1 normal both;
}`}
                        </pre>
                    </div>

                    <div className="callout">
                        <div className="calloutTitle">
                            <span className="calloutIcon">
                                <FiShuffle />
                            </span>
                            Quick tip
                        </div>
                        <div className="calloutText">
                            For most UI animations, you will use: name,
                            duration, easing, delay, and fill-mode.
                        </div>
                    </div>
                </div>

                <div className="footerNote">
                    <div className="footerTitle">Quick checklist</div>
                    <ul className="checks">
                        <li>
                            <span className="checkDot" />
                            Define keyframes first
                        </li>
                        <li>
                            <span className="checkDot" />
                            Set name + duration
                        </li>
                        <li>
                            <span className="checkDot" />
                            Use fill-mode for entrance animations
                        </li>
                    </ul>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default Animations;
