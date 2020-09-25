import React from "react";

import '../IconPage/Icon.css';
import '../IconPage/iconPack.css';

function NucleoIcons() {
    const [open, setOpen] = React.useState(false);
    React.useEffect(() => {
        document.documentElement.classList.add("nucleo-icons-page-styles");
        return function cleanup() {
            document.documentElement.classList.remove("nucleo-icons-page-styles");
        };
    });
    return (
        <div className="nucleo-icons-page-styles-body">
            <div id="cd-nav">
                <a
                    className={"cd-nav-trigger nucleo-icons-page-styles-ul" + (open ? " menu-is-open" : "")}
                    href="#pablo"
                    id="cd-nav-trigger"
                    onClick={e => {
                        e.preventDefault();
                        setOpen(!open);
                    }}
                >
                    Menu <span></span>
                </a>
                <nav>
                    <ul id="cd-main-nav" className={open ? "is-visible" : ""}>
                        <li>
                            <a
                                href="#pablo"
                                onClick={e => {
                                    e.preventDefault();
                                    setOpen(!open);
                                    document.getElementById("arrows").scrollIntoView();
                                }}
                            >
                                Arrows
              </a>
                        </li>
                        <li>
                            <a
                                href="#pablo"
                                onClick={e => {
                                    e.preventDefault();
                                    setOpen(!open);
                                    document.getElementById("business").scrollIntoView();
                                }}
                            >
                                Business &amp; Finance
              </a>
                        </li>
                        <li>
                            <a
                                href="#pablo"
                                onClick={e => {
                                    e.preventDefault();
                                    setOpen(!open);
                                    document.getElementById("clothes").scrollIntoView();
                                }}
                            >
                                Clothes &amp; Accessories
              </a>
                        </li>
                        <li>
                            <a
                                href="#pablo"
                                onClick={e => {
                                    e.preventDefault();
                                    setOpen(!open);
                                    document.getElementById("design").scrollIntoView();
                                }}
                            >
                                Design &amp; Development
              </a>
                        </li>
                        <li>
                            <a
                                href="#pablo"
                                onClick={e => {
                                    e.preventDefault();
                                    setOpen(!open);
                                    document.getElementById("emoticons").scrollIntoView();
                                }}
                            >
                                Emoticons
              </a>
                        </li>
                        <li>
                            <a
                                href="#pablo"
                                onClick={e => {
                                    e.preventDefault();
                                    setOpen(!open);
                                    document.getElementById("files").scrollIntoView();
                                }}
                            >
                                Files &amp; Folders
              </a>
                        </li>
                        <li>
                            <a
                                href="#pablo"
                                onClick={e => {
                                    e.preventDefault();
                                    setOpen(!open);
                                    document.getElementById("medical").scrollIntoView();
                                }}
                            >
                                Healthcare &amp; Medical
              </a>
                        </li>
                        <li>
                            <a
                                href="#pablo"
                                onClick={e => {
                                    e.preventDefault();
                                    setOpen(!open);
                                    document.getElementById("loaders").scrollIntoView();
                                }}
                            >
                                Loaders
              </a>
                        </li>
                        <li>
                            <a
                                href="#pablo"
                                onClick={e => {
                                    e.preventDefault();
                                    setOpen(!open);
                                    document.getElementById("maps").scrollIntoView();
                                }}
                            >
                                Maps &amp; Location
              </a>
                        </li>
                        <li>
                            <a
                                href="#pablo"
                                onClick={e => {
                                    e.preventDefault();
                                    setOpen(!open);
                                    document.getElementById("media").scrollIntoView();
                                }}
                            >
                                Media
              </a>
                        </li>
                        <li>
                            <a
                                href="#pablo"
                                onClick={e => {
                                    e.preventDefault();
                                    setOpen(!open);
                                    document.getElementById("objects").scrollIntoView();
                                }}
                            >
                                Objects
              </a>
                        </li>
                        <li>
                            <a
                                href="#pablo"
                                onClick={e => {
                                    e.preventDefault();
                                    setOpen(!open);
                                    document.getElementById("school").scrollIntoView();
                                }}
                            >
                                School &amp; Education
              </a>
                        </li>
                        <li>
                            <a
                                href="#pablo"
                                onClick={e => {
                                    e.preventDefault();
                                    setOpen(!open);
                                    document.getElementById("shopping").scrollIntoView();
                                }}
                            >
                                Shopping
              </a>
                        </li>
                        <li>
                            <a
                                href="#pablo"
                                onClick={e => {
                                    e.preventDefault();
                                    setOpen(!open);
                                    document.getElementById("sport").scrollIntoView();
                                }}
                            >
                                Sport
              </a>
                        </li>
                        <li>
                            <a
                                href="#pablo"
                                onClick={e => {
                                    e.preventDefault();
                                    setOpen(!open);
                                    document.getElementById("technology").scrollIntoView();
                                }}
                            >
                                Technology
              </a>
                        </li>
                        <li>
                            <a
                                href="#pablo"
                                onClick={e => {
                                    e.preventDefault();
                                    setOpen(!open);
                                    document.getElementById("text").scrollIntoView();
                                }}
                            >
                                Text Editing
              </a>
                        </li>
                        <li>
                            <a
                                href="#pablo"
                                onClick={e => {
                                    e.preventDefault();
                                    setOpen(!open);
                                    document.getElementById("gestures").scrollIntoView();
                                }}
                            >
                                Touch Gestures
              </a>
                        </li>
                        <li>
                            <a
                                href="#pablo"
                                onClick={e => {
                                    e.preventDefault();
                                    setOpen(!open);
                                    document.getElementById("transportation").scrollIntoView();
                                }}
                            >
                                Transportation
              </a>
                        </li>
                        <li>
                            <a
                                href="#pablo"
                                onClick={e => {
                                    e.preventDefault();
                                    setOpen(!open);
                                    document.getElementById("travel").scrollIntoView();
                                }}
                            >
                                Travel
              </a>
                        </li>
                        <li>
                            <a
                                href="#pablo"
                                onClick={e => {
                                    e.preventDefault();
                                    setOpen(!open);
                                    document.getElementById("interface").scrollIntoView();
                                }}
                            >
                                User Interface
              </a>
                        </li>
                        <li>
                            <a
                                href="#pablo"
                                onClick={e => {
                                    e.preventDefault();
                                    setOpen(!open);
                                    document.getElementById("users").scrollIntoView();
                                }}
                            >
                                Users
              </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="icons-wrapper">
                <section id="arrows">
                    <h2>Arrows</h2>
                    <ul className="nucleo-icons-page-styles-ul">
                        <li>
                            <i className="now-ui-icons arrows-1_cloud-download-93"></i>
                            <p>arrows-1_cloud<br />-download-93</p>
                        </li>
                        <li>
                            <i className="now-ui-icons arrows-1_cloud-upload-94"></i>
                            <p>arrows-1_cloud-upload-94</p>
                        </li>
                        <li>
                            <i className="now-ui-icons arrows-1_minimal-down"></i>
                            <p>arrows-1_minimal-down</p>
                        </li>
                        <li>
                            <i className="now-ui-icons arrows-1_minimal-left"></i>
                            <p>arrows-1_minimal-left</p>
                        </li>
                        <li>
                            <i className="now-ui-icons arrows-1_minimal-right"></i>
                            <p>arrows-1_minimal-right</p>
                        </li>
                        <li>
                            <i className="now-ui-icons arrows-1_minimal-up"></i>
                            <p>arrows-1_minimal-up</p>
                        </li>
                        <li>
                            <i className="now-ui-icons arrows-1_refresh-69"></i>
                            <p>arrows-1_refresh-69</p>
                        </li>
                        <li>
                            <i className="now-ui-icons arrows-1_share-66"></i>
                            <p>arrows-1_share-66</p>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
}

export default NucleoIcons;
