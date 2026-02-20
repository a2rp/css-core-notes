// index.jsx
import React from "react";
import { Styled } from "./styled";

const AboutCss = () => {
    const buildISO = __APP_BUILD_ISO__;

    const formattedDateTime = new Date(buildISO).toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    });

    return (
        <Styled.Wrapper>
            <Styled.Content>
                <h2 className="heading">About CSS</h2>

                <p>
                    CSS stands for Cascading Style Sheets. It controls how HTML
                    looks and feels on screen. CSS is responsible for layout,
                    spacing, colors, typography, responsive behavior, and visual
                    effects. HTML gives structure and meaning, while CSS gives
                    presentation.
                </p>

                <p>
                    The core power of CSS comes from the cascade. Multiple rules
                    can apply to the same element, and the browser decides the
                    final result using specificity, source order, and
                    inheritance. Once you understand the cascade, layout systems
                    like Flexbox and Grid become much easier and more
                    predictable.
                </p>

                <p>
                    The css-core-notes project is designed as a focused revision
                    system. It keeps everything in one scrollable page with
                    expandable topics, so you can revise quickly before
                    interviews and also build a strong mental model of modern
                    CSS.
                </p>

                <div className="meta">
                    <span className="metaLabel">Last updated:</span>
                    <span className="metaValue">{formattedDateTime}</span>
                </div>
            </Styled.Content>
        </Styled.Wrapper>
    );
};

export default AboutCss;
